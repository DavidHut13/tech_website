module.exports = {
  root: true,
  env: {
      node: true
  },
  'extends': [
      'plugin:vue/essentials',
      'plugin:prettier/recommended',
      '@vue/prettier'
  ],
  rules: {

  },
  parserOptions: {
      parser: 'babel-eslint'
  }
}
