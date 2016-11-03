/* eslint import/no-extraneous-dependencies: 0 */
import { join } from 'path';

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}];

export default {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: join(__dirname, 'umd'),
    library: 'MobxReactFormDevTools',
    libraryTarget: 'umd',
  },
  resolve: {
    root: join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  externals: {
    react: 'react',
    mobx: 'mobx',
  },
  module: { loaders },
};
