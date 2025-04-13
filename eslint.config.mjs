import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';

export default [
    { 
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
        languageOptions: { 
            globals: { 
                ...globals.browser, 
                __IS_DEV: true // Глобальная переменная __IS_DEV
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
    {
        rules: {
            "react/react-in-jsx-scope": "off", 
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            "indent": [2, 4],
            "@typescript-eslint/no-unused-vars": "warn", 
            "no-unused-vars": "warn", 
            "object-curly-spacing": ["error", "always"], 
            "@typescript-eslint/no-unused-expressions": "off",
            'max-len': ['error', {  code: 100, ignoreComments: true }],
            'react/display-name': 'off',
        }
    },
    {
        settings: {
            "react": {
                "version": "detect" 
            }
        }
    }
]; 
