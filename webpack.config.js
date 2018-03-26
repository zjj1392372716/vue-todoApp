const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: 'development',
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'js/build.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000,
              name: 'images/[name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"' 
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
if (isDev) {
  config.module.rules.push(
    {
      test: /\.styl$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }
  );
  config.devServer = {
    port: 8000,
    host: 'localhost',
    overlay: {
      error: true
    },
    open: true,
    hot: true
  }
  
  config.plugins.push(
    // 这些插件的作用是，热跟新模式下，如果修改了代码，那么试图会无刷新重新渲染
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.output.filename = 'js/[name].[chunkhash:8].js';
  config.module.rules.push(
    {
      test: /\.styl$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }
  )
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  )
}

module.exports = config; 