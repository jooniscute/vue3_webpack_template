const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"], // 경로에서 확장자 생략하고 불러오기 가능
    // 경로 별칭
    alias: {
      "~": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "src/assets"),
    },
  },
  entry: "./src/main.js",

  output: {
    // default: dist/entry파일명
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  devServer: {
    host: "localhost",
    port: 8080,
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new VueLoaderPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader", // 로드한 css를 해석하여 vue에 삽입해줌
          "css-loader", // css를 로드할 수 있게 해줌
          "postcss-loader", // scss 해석한 내용에 postcss 적용
          "sass-loader", // js 에서 scss를 로드할 수 있게 해줌
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },
};
