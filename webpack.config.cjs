const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/source.ts",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg)$/i,
                type:'asset/resource'
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                exclude: /node_module/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.svg",
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ['./src/index.html', './src/styles.css', './src/source.ts'],
    }
};
