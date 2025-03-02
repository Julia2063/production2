import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/react-in-jsx-scope": "off", 
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            "@typescript-eslint/no-unused-vars": "warn", 
            "no-unused-vars": "warn", 
            "object-curly-spacing": ["error", "always"], 
            "@typescript-eslint/no-unused-expressions": "off"
        },

         globals: {
          __IS_DEV: true
        }
    },
    {
        settings: {
            "react": {
                "version": "detect" 
            }
        }
    }, 

   
]; 