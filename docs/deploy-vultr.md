# Deploying This Project on Vultr

This repository is already set up for a straightforward Vultr Cloud Compute deployment:

- [ecosystem.config.cjs](/C:/Projects/cide-group/ecosystem.config.cjs) runs the app under PM2.
- [ops/nginx-cidegroup.conf](/C:/Projects/cide-group/ops/nginx-cidegroup.conf) proxies traffic from Nginx to the Next.js server on port `3000`.
- [app/api/health/route.ts](/C:/Projects/cide-group/app/api/health/route.ts) gives you a health endpoint to verify the deployment.

## Recommended path

Use a Vultr Ubuntu VM and run the app as a Node.js server behind Nginx.

This matches the existing repo layout and follows the current Next.js self-hosting guidance to use `next start` behind a reverse proxy.

## Before you start

1. Provision a Vultr Cloud Compute instance running Ubuntu 24.04 LTS.
2. Point your domain DNS at the server IP.
3. Make sure you actually want to serve the site from `https://cidegroup.org`.

Important:

- The canonical site URL is hard-coded in [content/site.ts](/C:/Projects/cide-group/content/site.ts). If you deploy to a different domain, update that file before deploying.
- `TURNSTILE_SECRET_KEY` is not currently wired up on the frontend. Leave it unset unless you also add client-side Turnstile token generation. This is an inference from the current source: the API route accepts a token, but the contact form does not send one.

## 1. Bootstrap the server

SSH into the new server and run:

```bash
sudo bash ops/vultr-bootstrap.sh
```

If you have not copied the repo to the server yet, do that first or run the same steps manually:

- Install `git`, `nginx`, `certbot`, `python3-certbot-nginx`, Node.js 20, and PM2.
- Open ports `22`, `80`, and `443`.
- Create `/var/www/certbot`.

## 2. Clone the project on the server

These commands assume a dedicated deploy user and the target path `/var/www/cide-group`.

```bash
sudo mkdir -p /var/www/cide-group
sudo chown -R $USER:$USER /var/www/cide-group
git clone <your-repo-url> /var/www/cide-group
cd /var/www/cide-group
```

## 3. Configure production environment variables

Create the production env file:

```bash
cp .env.example .env.production.local
nano .env.production.local
```

Set at least:

```env
RESEND_API_KEY=your_resend_api_key
```

Leave `TURNSTILE_SECRET_KEY` unset unless you also implement the browser-side widget/token flow.

## 4. Build and start the app

Run the deployment script:

```bash
bash ops/vultr-deploy.sh
```

This script will:

- install dependencies with `npm ci`
- build the Next.js app with `npm run build`
- start or reload the PM2 process from [ecosystem.config.cjs](/C:/Projects/cide-group/ecosystem.config.cjs)
- save the PM2 process list

## 5. Configure Nginx

Install the site config:

```bash
sudo cp ops/nginx-cidegroup.conf /etc/nginx/sites-available/cidegroup.conf
sudo unlink /etc/nginx/sites-enabled/default || true
sudo ln -s /etc/nginx/sites-available/cidegroup.conf /etc/nginx/sites-enabled/cidegroup.conf
sudo nginx -t
sudo systemctl reload nginx
```

If you are deploying to a domain other than `cidegroup.org`, update the `server_name` and certificate paths inside [ops/nginx-cidegroup.conf](/C:/Projects/cide-group/ops/nginx-cidegroup.conf) before copying it.

## 6. Issue the TLS certificate

Once DNS has propagated and port 80 is reachable:

```bash
sudo certbot --nginx -d cidegroup.org -d www.cidegroup.org
```

## 7. Make PM2 survive reboots

Run:

```bash
pm2 startup systemd -u $USER --hp $HOME
```

PM2 will print a command that must be re-run with `sudo`. After that:

```bash
pm2 save
```

## 8. Verify the deployment

Check the app directly:

```bash
curl http://127.0.0.1:3000/api/health
```

Check the public site:

```bash
curl https://cidegroup.org/api/health
```

You should get a JSON payload with `status: "ok"`.

## Updating the deployment

For each new release:

```bash
cd /var/www/cide-group
git pull
bash ops/vultr-deploy.sh
```

## Notes

- I verified locally that `npm run build` succeeds for the current codebase.
- This project does not need a database for startup.
- The contact form will return `500` if `RESEND_API_KEY` is missing.

