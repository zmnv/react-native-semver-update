const path = require('path');

const ext = [
    '.js',
];

module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            // jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'import',
    ],
    rules: {
        'no-irregular-whitespace': ["error", { "skipComments": true }],
        'no-trailing-spaces': ["error", { "ignoreComments": true }],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': ["error", {
            "packageDir": './',
        }],
        'no-console': 0,
        // 'import/no-cycle': 'off',

        'class-methods-use-this': 'off',
        'no-confusing-arrow': 'off',
        'object-curly-spacing': 'off',
        'object-curly-newline': 'off',
        'arrow-parens': 'off',
        'indent': ['error', 4],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: ext,
                paths: [path.resolve(__dirname, 'src')],
            },
            alias: {
                extensions: ext,
                map: [
                    ["~", './src'],
                ]
            },
        }
    },
};
