const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const nodeExternals = require('webpack-node-externals');
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// Set the environment variable for webpack
// webpack --env.NODE_ENV=local

const webpack = require("webpack");

module.exports = (env = {}) => {
    console.log('webpack');
    console.log(env);
    return {
        entry: "./client/index.js",
        output: {
            path: path.join(__dirname, "dist"),
            filename: "[name].[chunkhash].js",
            chunkFilename: "[name].[chunkhash].js"
        },
        // devtool: "eval-source-map",
        plugins: [
            new CleanWebpackPlugin([__dirname + "/dist/*.*"], {
                verbose: true,
                watch: false
            }),
            new webpack.ProvidePlugin({
                riot: "riot",
								ui: 'client/system/ui/ui.js'
            }),
            new HtmlWebpackPlugin({
                template: "./client/index.html"
            }),
            new ExtractTextPlugin({
                filename: "styles.css",
                disable: false,
                allChunks: true
            }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify({
                    "CLIENT_ENV": true,
                    "NODE_ENV": env.NODE_ENV || "qa",
                    "env": env.NODE_ENV || "qa"
                })
            }),
            // new webpack.SourceMapDevToolPlugin({
            //     filename: "sourcemaps/[file].map",
            //     publicPath: __dirname + '/dist',
            //     fileContext: "public"
            // }),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     },
            //     sourceMap: true
            // }),
            new CopyWebpackPlugin([{
                from: 'client/system',
                to: 'system'
            }])
        ],
        module: {
            rules: [{
                    enforce: "pre",
                    test: /\.tag.html$/,
                    loader: "customize-riotjs-loader",
                    query: {
                        type: "none"
                    }
                },
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules\/(?!evo\-lib\/).*/
                },
                {
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                    loader: "url-loader"
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader",
                        publicPath: "/dist"
                    })
                },
								{
									test: /\.worker\.js$/,
									use: { loader: "worker-loader" }
								}
            ]
        },
        resolve: {
            extensions: [".html", ".js", ".json", ".tag.html", ".css"],
            alias: {
								workers: path.resolve(__dirname, "client/system/workers"),
                lib: path.resolve(__dirname, "node_modules"),
                evo_lib: path.resolve(__dirname, "node_modules/evo-lib/client/system/"),
                client: path.resolve(__dirname, "client")
            }
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 8001
        },
        // externals: [nodeExternals()]
    };
};
/*
      { test: /\.(png|jpg)$/, use: "url-loader?limit=8192"}
*/
