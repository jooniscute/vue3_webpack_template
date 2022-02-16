const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const Webpack = require("webpack");

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
    port: 8081,
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: true }),
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
          /* js 에서 scss를 로드할 수 있게 해줌
          option의 코드가 모든 scss 앞단에 추가됨 - 전역 스타일 적용 */
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "~/scss/main";',
            },
          },
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
