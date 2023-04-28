module.exports = {
    apps: [
        {
            name: "node-rakendus",
            script: "./app.js",

            watch: true,
            watch_delay: 1000,
            ignore_watch: ["node_modules"],
            watch_options: {
                followSymlinks: false,
            },

            env: {
                NODE_ENV: "development",
                PORT: 3007,
                DEBUG: "api:*",
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 3007,
            },
        },
    ],
};
