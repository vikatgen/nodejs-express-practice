module.exports = {
    apps: [
        {
            name: "node-rakendus",
            script: "app.js",
            watch: ".",
            watch_delay: 1000,
            ignore_watches: ["node_modules"],

            env_production: {
                NODE_ENV: "production",
                PORT: 3007,
            },
        },
    ],

    deploy: {
        production: {
            user: "virt115315",
            host: "mookood.ee",
            key: "~/.ssh/id_ed25519",
            ref: "origin/master",
            repo: "git@github.com:vikatgen/nodejs-express-practice.git",
            fetch: "all",
            path: "/data01/virt115315/domeenid/www.mookood.ee/node-api",
            "post-deploy":
                "cp .env.example .env && npm install && pm2 reload ecosystem.config.js --env production",
            "pre-setup": "",
        },
    },
};
