import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['src/**/*.{ts,tsx}', 'config/**/*.ts', 'vite.config.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    rules: {
      'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
    },
  },
  {
    files: ['coding/**/*.js'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
    },
  },
  {
    files: ['coding/**/*.js'],
    rules: {
      // Learning snippets commonly declare standalone utilities for readers.
      'no-unused-vars': 'off',
    },
  },
]);
