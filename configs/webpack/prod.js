// production config
const merge = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    mode: "production",
    entry: "./index.tsx",
    output: {
        filename: "js/bundle.[hash].min.js",
        path: resolve(__dirname, "../../deployment/server/public"),
        publicPath: "/",
    },
    devtool: "source-map",
    plugins: [],
});
