#!/usr/bin/env bash
set -euo pipefail

if [[ ${EUID} -ne 0 ]]; then
  echo "Run this script with sudo or as root."
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get install -y ca-certificates curl git gnupg nginx ufw certbot python3-certbot-nginx

install -m 0755 -d /etc/apt/keyrings

if [[ ! -f /etc/apt/keyrings/nodesource.gpg ]]; then
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
fi

cat <<'EOF' >/etc/apt/sources.list.d/nodesource.list
deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main
EOF

apt-get update
apt-get install -y nodejs
npm install -g pm2

ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

mkdir -p /var/www/certbot

systemctl enable nginx
systemctl restart nginx

echo "Bootstrap complete."
echo
echo "Next steps:"
echo "  1. Clone the repo to /var/www/cide-group as your deploy user."
echo "  2. Copy .env.example to .env.production.local and fill in RESEND_API_KEY."
echo "  3. Run bash ops/vultr-deploy.sh as the deploy user."
echo "  4. Copy ops/nginx-cidegroup.conf into /etc/nginx/sites-available/cidegroup.conf."
echo "  5. Enable the Nginx site, reload Nginx, and issue your TLS certificate with certbot."
echo "  6. Run pm2 startup systemd -u <deploy-user> --hp /home/<deploy-user>, then run the command PM2 prints."

