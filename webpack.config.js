const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: '/',
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.js', '.json', '.wasm'],
        alias: {
            '@': path.join(__dirname, 'src/'),
            '@variables': path.resolve(__dirname, 'src/assets/styles/variables.scss'),
            '@mixins': path.resolve(__dirname, 'src/assets/styles/mixins.scss'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
        aliasFields: ['browser'],
        enforceExtension: false,
    },
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({ template: "./public/index.html" }),
        new WebpackNotifierPlugin({ alwaysNotify: false }),

    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript", "@babel/preset-react"]
                    }
                }
            }
        ],
    }
}