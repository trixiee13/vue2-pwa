module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["only-warn"],
  extends: [
    'plugin:vue/recommended', 'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'object-curly-spacing': ['error', 'always'],
    indent: ['error', 2],
    curly: ['off'],
    'vue/valid-v-slot': ["off"],
    'prettier/prettier': ['off', { singleQuote: true }]
  }
}