# Repository Guidelines

## Project Structure & Module Organization

This is a Chinese-language learning repository for front-end fundamentals. JavaScript exercises and scratch examples live in `src/coding/`; focused topics use descriptive subdirectories such as `src/coding/js基础题/`. Engineering notes live in `src/工程化/`, for example `src/工程化/eslint/介绍.md`. Treat the entire `src/` tree as frozen unless the user explicitly authorizes a change. Root-level files own shared tooling: `eslint.config.mjs`, `.prettierrc`, `.lintstagedrc.json`, and `.husky/`.

## Build, Test, and Development Commands

There is no build or local server. Use npm only; Node.js 22.22.1 or later is required. Run `npm install` to install dependencies and enable Husky through `prepare`.

- `npm run lint` checks JavaScript under `src/coding/` with ESLint.
- `npm run lint:fix` applies safe ESLint fixes in that directory.
- `npm run format:check` verifies Prettier formatting without writing files.
- `npm run format` formats writable repository files; `src/` is intentionally ignored.
- `npm test` runs the combined lint and format quality gate.

## Coding Style & Naming Conventions

Use the configured Prettier style: two spaces, semicolons, single quotes, trailing commas, 100-column print width, and LF endings. Let Prettier format writable files instead of hand-aligning code. ESLint uses recommended JavaScript rules with browser globals. Use `camelCase` for variables and functions. Learning-topic filenames may use clear Chinese names, such as `防抖节流.js`; keep each new file focused on one concept.

## Testing Guidelines

No unit-test framework or coverage target is configured. `npm test` is the current quality gate. When adding reusable behavior, introduce focused tests named after the feature, for example `debounce.test.js`, and document manual verification in the pull request.

## Commit & Pull Request Guidelines

Use Conventional Commits, enforced by `@commitlint/config-conventional`: `feat: add debounce example`, `fix: handle trailing call`, or `test: cover throttle`. Keep commits narrow. Pull requests should state the learning topic or problem addressed, list validation commands run, link related issues when available, and include screenshots only when visual output or documentation rendering changes.
