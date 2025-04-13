import webpack, { RuleSetRule } from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.tsx', '.ts',)


    if (config.module && Array.isArray(config.module.rules)) {
        config.module.rules = config.module.rules
            .filter((rule): 
            rule is RuleSetRule => typeof rule === 'object' && rule !== null && 'test' in rule)
            .map((rule: RuleSetRule) => {
                if (/svg/.test(String(rule.test))) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            });
      
        config.module.rules.push(buildSvgLoader());
        config.module.rules.push(buildCssLoader(true));
    }
    return config;
};