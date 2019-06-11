module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
  },

  // 解析 webpack alias 配置
  settings: {
    'import/resolver': {
      webpack: {
        config: '@guys/william/configs/index.js'
      },
    },
  },

  rules: {

    // 允许 devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      { "devDependencies": true }
    ],

  },
};
