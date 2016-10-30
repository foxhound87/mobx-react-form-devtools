/* eslint import/no-extraneous-dependencies: 0 */
import { join } from 'path';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}, {
  test: /\.json$/,
  loader: 'json-loader',
}, {
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader',
}, {
  test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
  loader: 'url-loader?mimetype=application/font-woff',
}, {
  test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
  loader: 'file-loader?name=[name].[ext]',
}];

const postcss = $webpack => [
  postcssImport({ addDependencyTo: $webpack }),
  postcssUrl('inline'),
];

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
    mobx: 'mobx',
  },
  module: { loaders },
  postcss,
};
