module.exports = {
    apps: [
      {
        name: "My App",
        script: "./src/server.ts",
        watch: true,
        ignore_watch: ["node_modules"],
        instances: 1,
        exec_mode: "fork",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };