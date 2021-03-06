// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-unused-vars': 1,

    'space-before-function-paren': 0,

    'one-var': 0,

    'curly': 0,

    'no-multi-spaces': 0,

    'key-spacing': 0,

    // ES6
    'object-shorthand': 0,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'quotes': ['error', 'single'],
    'prefer-spread': 2,
    'require-await': 2,
    'prefer-rest-params': 1
  }
}
