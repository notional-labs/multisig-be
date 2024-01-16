module.exports = {
    apps: [{
        script: 'api/index.ts',
        watch: '.',
        autorestart: true,
        env_production: {
            NODE_ENV: "production",
            PORT: 4000
        }
    }],

    deploy: {
        production: {
            user: 'root',
            host: '95.216.13.234',
            ref: 'main',
            repo: 'https://github.com/notional-labs/multisig-be',
            path: '/tmp/multisig',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
        }
    }
};