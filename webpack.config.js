const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin	= require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      firebase: 'firebase',
      RC: 'riotcontrol',
      IO: 'evo_lib/IO.js'
    }),
    new CleanWebpackPlugin([__dirname + '/dist/*.*'], {verbose: true}),
    new HtmlWebpackPlugin({template: './client/index.html'}),
		new ExtractTextPlugin({
			filename: 'styles.css',
			disable: false,
			allChunks: true
		})
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tag.html$/,
        loader: 'customize-riotjs-loader',
        query: {type: 'none'}
      },
      { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules\/(?!evo\-lib\/).*/ },
      {
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'url-loader'
			},
      {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
					publicPath: '/dist'
				})
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.html', '.js', '.json', '.tag.html', '.css'],
    alias:{
      client: path.resolve(__dirname, "client"),
			evo_lib: path.resolve(__dirname, "client/system/"),
      lib: path.resolve(__dirname, "node_modules")
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8001
  }
};
/*

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=30000&mimetype=application/font-woff2" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
*/
