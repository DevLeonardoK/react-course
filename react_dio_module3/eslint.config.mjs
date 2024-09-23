import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'no-used-vars': 'warn',
            'prettier/prettier': 'error'
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'airbnb',
            'prettier',
            'plugin:prettier/recommended'
        ],
        plugins: ['prettier']
    }
];
