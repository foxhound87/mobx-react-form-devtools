const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const MINIFY = process.env.MINIFY === "YES";

const rules = [{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: ['ts-loader'],
}, {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
}];

module.exports = {
  mode: MINIFY ? "production" : "development",
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'umd'),
    library: 'MobxReactFormDevTools',
    libraryTarget: 'umd',
    filename: MINIFY ? "MobxReactFormDevTools.umd.min.js" : "MobxReactFormDevTools.umd.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.ts', '.tsx', '.json'],
    alias: {
      mobx: path.resolve(__dirname, 'node_modules/mobx'),
      // 'react-icons': path.resolve(__dirname, 'node_modules/react-icons'),
    },
  },
  externals: {
    'mobx-react-form': 'mobx-react-form',
    'mobx-react': 'mobx-react',
    'react': 'react',
    'mobx': 'mobx',
  },
  optimization: {
    minimize: MINIFY,
    minimizer: [new TerserPlugin()],
  },
  module: { rules },
};
