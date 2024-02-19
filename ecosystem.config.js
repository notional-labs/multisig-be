module.exports = {
    apps: [{
        name   : "multisig-be",
        script: 'api/index.ts',
        watch: '.',
        autorestart: true,
        env_production: {
            NODE_ENV: "staging",
            PORT: 4000
        }
    }],

    deploy: {
        staging: {
            user: 'root',
            host: '95.216.13.234',
            ref: 'origin/staging',
            repo: 'https://github.com/notional-labs/multisig-be',
            path: '/tmp/multisig-be',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env staging -n multisig-be -- --port 4000',
        }
    }
};