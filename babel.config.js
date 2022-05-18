const presets = [
  [
    "@babel/preset-env",
    {
      // пресет
      targets: {
        // таргет версии браузера
        edge: "17",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },

      // полифиллы для браузеров core-js
      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };
