module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    // vue
    // "plugin:vue/vue3-essential", // Lv1
    "plugin:vue/vue3-strongly-recommended", // Lv2
    // "plugin:vue/vue3-essential", // Lv3

    // js
    "eslint:recommended",
    // prettier: eslint-config-prettier
    "prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {},
};
