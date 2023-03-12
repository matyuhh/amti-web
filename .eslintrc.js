module.exports = {
    ignorePatterns: ['.eslintrc.js'],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'airbnb',
      'airbnb-typescript'
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      project: 'tsconfig.eslint.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 1,
      'linebreak-style': 0,
      'react/require-default-props': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
    },
};