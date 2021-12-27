const fs = require("fs");
const path = require("path");

const pathToDirs = path.resolve(__dirname, "src", "components");

const dirs = fs.readdirSync(pathToDirs);
const entries = dirs.map((dir) => [
  dir,
  path.resolve(pathToDirs, dir, "component.js"),
]);

module.exports = {
  mode: "development",
  entry: Object.fromEntries(entries),
  module: {
    rules: [
      {
        test: /.html$/i,
        loader: "html-loader",
      },
      {
        test: /.css$/i,
        loader: "css-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true
  },
};