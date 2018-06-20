module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            ecmaVersion: 7,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "semi": 0,
        "no-console": 0,
        "indent": [
            "error",
            2
        ],
    },

    // React Rules Override
    'react/prop-types': 0,
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],

    // Prettier
    'prettier/prettier': ['error'],

    'max-depth': ['error', { max: 3 }],
    'max-statements': ['error', { max: 20 }],
    complexity: 'error',
    'max-params': ['error', { max: 4 }],
    'max-nested-callbacks': ['error', { max: 3 }],
};