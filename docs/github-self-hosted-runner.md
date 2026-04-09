# GitHub Actions Self-Hosted Runner (Vultr)

## 1) Create runner on GitHub
- Repo: `wawire/cide-group`
- Settings -> Actions -> Runners -> New self-hosted runner
- OS: Linux, Arch: x64
- Use label: `cidegroup`

## 2) Install runner on server
```bash
sudo mkdir -p /opt/actions-runner && cd /opt/actions-runner
sudo useradd -m -s /bin/bash actions || true
sudo chown -R actions:actions /opt/actions-runner
sudo -u actions bash
```

Inside actions user shell:
```bash
cd /opt/actions-runner
curl -o actions-runner.tar.gz -L https://github.com/actions/runner/releases/latest/download/actions-runner-linux-x64.tar.gz
tar xzf actions-runner.tar.gz
./config.sh --url https://github.com/wawire/cide-group --token <RUNNER_TOKEN> --labels cidegroup
exit
```

Install as service:
```bash
cd /opt/actions-runner
sudo ./svc.sh install actions
sudo ./svc.sh start
sudo ./svc.sh status
```

## 3) Ensure runner can deploy app
- Install Node 20, npm, pm2 under runner user.
- Ensure repository checkout path has access permissions.
- Ensure `pm2` is in PATH for runner service user.

## 4) Required workflows
- CI: `.github/workflows/ci.yml`
- Production deploy: `.github/workflows/deploy-self-hosted.yml`
