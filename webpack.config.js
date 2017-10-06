const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin	= require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      RC: 'riotcontrol',
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
    loaders: [
      { test: /\.tag.html$/, loader: 'babel-loader!riot-tag-loader?type=es6&ext=html'},
      { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules\/(?!evo\-lib\/).*/ },
      {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
					publicPath: '/dist'
				})
			},
      { test: /\.(png|jpg)$/, use: 'url-loader?limit=8192'}
    ]
  },
  resolve: {
    extensions: ['.html', '.js', '.json', '.tag.html', '.css'],
    alias:{
      lib: path.resolve(__dirname, "node_modules"),
      client: path.resolve(__dirname, "client")
    }
  },
  devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8001
  }
};
