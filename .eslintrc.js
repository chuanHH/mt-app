module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-multiple-empty-lines': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-console': 'off',
    'vue/no-reserved-keys': 'off'
  }
}
