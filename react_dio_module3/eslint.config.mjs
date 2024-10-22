import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        languageOptions: {
            globals: globals.browser,
        },
    },

    {
        rules: {
            'no-unused-vars': 'error',
        },
    },
    {
        plugins: {
            react: pluginReact,
        },
    },
];
