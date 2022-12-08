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
    'no-unused-vars': 'off',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',
    'no-use-before-define': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'func-names': 'error',
    // cambié de 5 a 20
    'complexity': ['warn', 20],
    // cambié de 50 a 200
    'max-lines-per-function': ['warn', { 'max': 200, 'skipBlankLines': true }],
    // cambié de 10 a 40
    'max-statements': ['warn', 40],
    'max-params': ['warn', 5],
    // 'no-console': 'warn',
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-inline-comments': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
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
