import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const __dirname = path.resolve();

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 4200,
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
};
