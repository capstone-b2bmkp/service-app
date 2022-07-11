module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',
    'no-use-before-define': 'error',
    camelcase: 'error',
    curly: 'error',
    eqeqeq: 'error',
    'func-names': 'error',
    'complexity': ['warn', 5],
    'max-lines-per-function': ['warn', { 'max': 15, 'skipBlankLines': true }],
    'max-statements': ['warn', 10],
    'max-params': ['warn', 5],
    'no-console': 'warn',
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-inline-comments': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true
      }
    ],
    'max-statements-per-line': ['error', { max: 2 }]
  },
  overrides: [
    {
      files: [
        'src/tests/*/*.js'
      ],
      rules: {
        'max-statements': 'off',
        'max-lines-per-function': 'off'
      }
    }
  ],
  plugins: ['jest']
}
