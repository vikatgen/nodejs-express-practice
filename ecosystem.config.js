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
            repo: "GIT_REPOSITORY",
            path: "DESTINATION_PATH",
            "pre-deploy-local": "",
            "post-deploy":
                "npm install && pm2 reload ecosystem.config.js --env production",
            "pre-setup": "",
        },
    },
};