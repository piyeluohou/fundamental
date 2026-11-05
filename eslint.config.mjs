import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['src/coding/**/*.js'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
    },
  },
  {
    files: ['src/coding/**/*.js'],
    rules: {
      // Learning snippets commonly declare standalone utilities for readers.
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['src/coding/demo.js'],
    rules: {
      // This scratch file intentionally contains an undeclared-variable example.
      'no-undef': 'off',
    },
  },
]);
