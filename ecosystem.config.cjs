module.exports = {
  apps: [
    {
      name: "cidegroup-web",
      cwd: "/var/www/cide-group",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
      max_memory_restart: "500M",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      time: true,
    },
  ],
}
