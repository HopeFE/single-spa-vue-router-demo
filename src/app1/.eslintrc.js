module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    AMap: true,
    lib: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-end-tags': 'error',
    'vue/require-default-prop': 'error',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'no-irregular-whitespace': 0,
    "space-before-function-paren": [0, { "anonymous": "always", "named": "never" }],
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/html-quotes': [
      'error',
      'double'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
