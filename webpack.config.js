const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devServer: {
    port: 3000
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { 
          presets: ['es2015', 'react'] 
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "assets/images/[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|eot|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "assets/fonts/[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(json)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "assets/data/[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};