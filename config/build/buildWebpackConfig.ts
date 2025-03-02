import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buidDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        entry: paths.entry ,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPlugins(options),
        devServer: isDev ?  buidDevServer(options) : undefined
    }
}