const fs = require("fs");
const path = require("path");

const pathToDirs = path.resolve(__dirname, "src", "components");

const dirs = fs.readdirSync(pathToDirs);
const entries = dirs.map((dir) => [
  dir,
  path.resolve(pathToDirs, dir, "component.ts"),
]);

module.exports = {
  mode: process.env.DEVMODE ? "development" : "production",
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
      {
        test: /.ts$/i,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
};
