const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const isDevelopment = argv.mode !== "production";

    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./static/frontend"),
            filename: "[name].js",
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    use: ["babel-loader"],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ["style-loader!css-loader"],
                },

                {
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        isDevelopment
                            ? "style-loader"
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                sourceMap: isDevelopment,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevelopment,
                            },
                        },
                    ],
                },

                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    use: [
                        isDevelopment
                            ? "style-loader"
                            : MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevelopment,
                            },
                        },
                    ],
                },

                {

                    test: /\.svg$/,
                    use: [
                      {
                        loader: 'svg-url-loader',
                        options: {
                          limit: 10000,
                        },
                      },
                    ],
                  },
            ],
        },
        optimization: {
            minimize: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".scss"],
        },

        plugins: [
            ///...
            new MiniCssExtractPlugin({
                filename: isDevelopment ? "[name].css" : "[name].[hash].css",
                chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
            }),
        ],
    };
};
