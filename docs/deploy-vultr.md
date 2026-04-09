# CIDE Group Production Deploy (Vultr)

## 1) Server baseline
- Ubuntu 24.04 LTS
- Create non-root deploy user
- Configure firewall: allow `22`, `80`, `443`
- Install Node.js 20 LTS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx
sudo npm install -g pm2
```

## 2) App setup
```bash
git clone <repo-url> /var/www/cide-group
cd /var/www/cide-group
npm ci
npm run build
```

Create `.env.production`:
- `RESEND_API_KEY=...`
- `TURNSTILE_SECRET_KEY=...` (optional)

## 3) Process manager
```bash
cd /var/www/cide-group
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Health check:
```bash
curl http://127.0.0.1:3000/api/health
```

## 4) Nginx and SSL
- Copy `ops/nginx-cidegroup.conf` to `/etc/nginx/sites-available/cidegroup.org`
- Enable site and test config:

```bash
sudo ln -s /etc/nginx/sites-available/cidegroup.org /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

- Issue certificate:

```bash
sudo certbot --nginx -d cidegroup.org -d www.cidegroup.org
```

## 5) Monitoring and logs
- PM2 logs:
```bash
pm2 logs cidegroup-web
```
- Nginx logs:
```bash
sudo tail -f /var/log/nginx/access.log /var/log/nginx/error.log
```
- Add uptime checks for:
  - `https://cidegroup.org/`
  - `https://cidegroup.org/api/health`

## 6) Backup and rollback
- Nightly backup:
  - `.env.production`
  - Nginx config
  - database/storage (if introduced later)
- Keep at least last 7 successful build artifacts/tags for rollback.

## 7) Post-deploy checks
- `https://cidegroup.org` loads over HTTPS
- Contact form submits and email arrives
- `robots.txt` and `sitemap.xml` are reachable
- Lighthouse checks for Performance, SEO, Accessibility
