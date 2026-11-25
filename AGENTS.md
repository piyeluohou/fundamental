# Repository Guidelines

## Project Structure & Module Organization

This is a Chinese-language learning repository for front-end fundamentals with a React + TypeScript application. Keep `src/` dedicated to the app: `src/main.tsx` mounts `src/App.tsx`, global styles live in `src/styles/index.css`, and new components belong in `src/components/`. Standalone JavaScript exercises live in `examples/coding/`; HTML tools live in `examples/tools/`. Learning notes live in `docs/react/`, `docs/工程化/`, and `docs/真题/`. These existing examples and learning notes remain frozen unless the user explicitly authorizes changes; React app files are writable. Vite plugins live in `config/vite/`, and engineering scripts live in `scripts/`. Root-level files retain standard tooling configuration: `vite.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc`, `.lintstagedrc.json`, and `.husky/`.

## Build, Test, and Development Commands

Vite and its React plugin provide a local development server and production build. `vite.config.ts` sets `src/main.tsx` as the entry; `config/vite/tsx-entry.ts` generates the HTML shell for development and production, so there is no root-level source `index.html`. `config/vite/legacy-paths.ts` preserves old learning-material URLs in development. Use pnpm 12.18.0 only; Node.js 22.22.1 or later is required. Run `pnpm install --frozen-lockfile` to install dependencies and enable Husky through `prepare`.

- `pnpm dev` starts the Vite server on localhost (default port 5173).
- `pnpm typecheck` checks TypeScript without emitting files.
- `pnpm build` checks types and builds the React app into `dist/`.
- `pnpm preview` serves the production build locally.
- `pnpm run lint` checks JavaScript exercises, TypeScript, and React Hooks with ESLint.
- `pnpm run lint:fix` applies ESLint fixes; do not use it to change frozen learning content without authorization.
- `pnpm run format:check` verifies Prettier formatting without writing files.
- `pnpm run format` runs Prettier across the repository; avoid using it to change frozen learning content without authorization. Format explicitly named writable files during scoped changes.
- `pnpm test` runs the combined type, lint, and format quality gate.

## Coding Style & Naming Conventions

Use the configured Prettier style: two spaces, semicolons, single quotes, trailing commas, 100-column print width, and LF endings. Let Prettier format writable files instead of hand-aligning code. ESLint uses recommended JavaScript rules with browser globals. Use `camelCase` for variables and functions. Learning-topic filenames may use clear Chinese names, such as `防抖节流.js`; keep each new file focused on one concept.

## Testing Guidelines

No unit-test framework or coverage target is configured. `pnpm test` is the current quality gate. When adding reusable behavior, introduce focused tests named after the feature, for example `debounce.test.js`, and document manual verification in the pull request.

## Commit & Pull Request Guidelines

Use Conventional Commits, enforced by `@commitlint/config-conventional`: `feat: add debounce example`, `fix: handle trailing call`, or `test: cover throttle`. Keep commits narrow. Pull requests should state the learning topic or problem addressed, list validation commands run, link related issues when available, and include screenshots only when visual output or documentation rendering changes.
