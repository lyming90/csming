module.exports = {
  parser: 'babel-eslint',
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "react",
    "prettier",
  ],
  "parserOptions": {
    ecmaVersion: 7,
    "sourceType": "module",
    "ecmaFeatures": {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": "error",
    'max-depth': ['error', { max: 3 }],
    'max-statements': ['error', { max: 20 }],
    complexity: 'error',
    'max-params': ['error', { max: 4 }],
    'max-nested-callbacks': ['error', { max: 3 }],
  }
};