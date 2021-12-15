module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['airbnb', 'prettier'],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-debugger': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-console': 0,
    'import/prefer-default-export': 1,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    radix: 0,
    'no-shadow': 'off',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 100
      }
    ]
  },
  plugins: ['prettier']
};
