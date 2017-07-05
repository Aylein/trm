const webpack = require("webpack")
const path = require("path")
const html = require("html-webpack-plugin")

module.exports = {
    devtool: "#inline-source-map",
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "../src"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        port: 800,
        inline: true,
        historyApiFallback: true,
        compress: true,
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("develepment") } }),
        new webpack.HotModuleReplacementPlugin(),
        new html({ template: path.resolve(__dirname, "../src/index.html") })
    ]
}