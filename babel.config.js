module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@screens": "./screens",
            "@stacks": "./stacks",
            "@assets": "./assets",
            "@navigation": "./navigation",
            "@components": "./components",
            "@scripts": "./src/scripts",
            "@types": "./src/types",
            "@queries": "./src/Queries",
            "@mutations": "./src/Mutations",
            "@src": "./src",
            "@constants": "./constants",
            tailwind: "./tailwind.js",
          },
        },
      ],
    ],
  };
};
