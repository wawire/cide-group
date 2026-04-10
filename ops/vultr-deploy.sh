#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/cide-group}"
APP_NAME="${APP_NAME:-cidegroup-web}"

if [[ ! -d "${APP_DIR}" ]]; then
  echo "APP_DIR does not exist: ${APP_DIR}" >&2
  exit 1
fi

cd "${APP_DIR}"

if [[ ! -f package.json ]]; then
  echo "package.json not found in ${APP_DIR}" >&2
  exit 1
fi

if [[ ! -f .env.production.local && ! -f .env ]]; then
  echo "Missing .env.production.local (or .env) in ${APP_DIR}" >&2
  exit 1
fi

npm ci
npm run build

if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --only "${APP_NAME}" --update-env
else
  pm2 start ecosystem.config.cjs --only "${APP_NAME}"
fi

pm2 save
pm2 status "${APP_NAME}"
