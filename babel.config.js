module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".js", ".ts", ".tsx"],
          alias: {
            navigation: "./app/navigation",
            screens: "./app/screens",
            types: "./app/types",
            components: "./app/components",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
