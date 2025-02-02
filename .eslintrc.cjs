module.exports = {
  extends: [
    '@alergeek-ventures/eslint-config/typescript',
    '@alergeek-ventures/eslint-config/react',
    '@alergeek-ventures/eslint-config/tests',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.next', 'node_modules', '*.js'],
  rules: {
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'no-magic-numbers': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'jest-dom/prefer-in-document': 'off',
    'jest-dom/prefer-to-have-attribute': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
