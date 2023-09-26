const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./index.ts", // Entry point of your library
    output: {
        filename: "index.js", // Output file name
        path: path.resolve(__dirname, "dist"), // Output directory
        library: "Galadriel", // Library name accessible in the browser
        libraryTarget: "umd", // Universal Module Definition (UMD)
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /(node_modules|test|watchmanor)/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(
                                    __dirname,
                                    "postcss.config.js"
                                ),
                            },
                        },
                    },
                ],
            },
        ],
    },
    mode: "production", // or 'development' for non-minified output
    devtool: "source-map", // Generate source maps
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true, // Enable gzip compression
        port: 8080, // Port number
        hot: true, // Enable hot module replacement
    },
    watchOptions: {
        ignored: ["node_modules", "dist", "test"],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./index.html",
                    to: "",
                },
                {
                    from: "./galadriel.css",
                    to: "",
                },
            ],
        }),
    ],
};
