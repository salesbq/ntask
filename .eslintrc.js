module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {

    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'new-cap': 0,
    'no-console': 0,
  },
};
