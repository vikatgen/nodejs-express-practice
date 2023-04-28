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
            ref: "origin/master",
            repo: "git@github.com:vikatgen/nodejs-express-practice.git",
            path: "/var/www/production",
            "pre-deploy-local": "",
            "post-deploy":
                "npm install && pm2 reload ecosystem.config.js --env production",
            "pre-setup": "",
        },
    },
};
