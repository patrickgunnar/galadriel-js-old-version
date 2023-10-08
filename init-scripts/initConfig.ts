#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

const webpackConfig = `const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const galadrielInjectionPlugin = require("./build/plugins/MystiCSSor/galadrielInjectionPlugin.js");
const postcssAutoprefixer = require("autoprefixer");
const postcssCssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./index.ts", // Entry point of your application
    output: {
        filename: "index.js", // Output file name
        path: path.resolve(__dirname, "build"), // Output directory
        library: "Galadriel", // Library name accessible in the browser
        libraryTarget: "umd", // Universal Module Definition (UMD)
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", // for JavaScript
                            "@babel/preset-typescript", // for TypeScript
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    galadrielInjectionPlugin(),
                                    postcssAutoprefixer(),
                                    postcssPresetEnv(),
                                    postcssCssnano(),
                                ],
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
            directory: path.join(__dirname, "build"),
        },
        compress: true, // Enable gzip compression
        port: 8080, // Port number
        hot: true, // Enable hot module replacement
    },
    watchOptions: {
        ignored: ["node_modules", "test"],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./index.html",
                    to: "",
                },
            ],
        }),
        new MiniCssExtractPlugin(),
    ],
};
`;

const galadrielConfig = `const config = {
    // content to exclude
    exclude: ["node_modules",],
    // content to include
    include: [],
    // new css rules
    craftStyles: {},
};

module.exports = config;
`;

const isTypescriptProject = () => {
    return fs.existsSync(path.join(process.cwd(), "tsconfig.json"));
};

const galadrielInit = () => {
    const rootPath = process.cwd();
    const webpackConfigPath = path.join(rootPath, "webpack.config.js");
    const galadrielConfigPath = path.join(
        rootPath,
        "galadriel.config" + (isTypescriptProject() ? ".ts" : ".js")
    );

    fs.writeFileSync(webpackConfigPath, webpackConfig);
    fs.writeFileSync(galadrielConfigPath, galadrielConfig);

    console.log("Configurations generated successfully!");
};

galadrielInit();
