# Engineering Simplification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the repository's root tooling while preserving every file and directory under `src/` unchanged.

**Architecture:** `src/` remains the immutable learning-content tree. Root-level configuration owns linting, formatting, commit validation, Node-version declaration, CI, and contributor guidance; ESLint applies narrow documented exceptions for existing standalone teaching snippets without editing them.

**Tech Stack:** Node.js 22.22.1+, npm, ESLint 10, Prettier 3, Husky 9, lint-staged, Commitlint, GitHub Actions.

---

### Task 1: Consolidate local tooling

**Files:**

- Create: `.nvmrc`
- Modify: `package.json`, `package-lock.json`, `eslint.config.mjs`, `.prettierignore`, `.gitignore`, `.husky/commit-msg`
- Delete: `.eslintrc.json`, `.eslintignore`, `.czrc`, `pnpm-lock.yaml`, `.husky/prepare-commit-msg`, `diagnose.txt`

- [ ] **Step 1: Record the failing baseline**

Run: `npm.cmd run lint`
Expected: FAIL on Node 20.0 because ESLint 10 requires Node 20.19 or later; JSON output also shows the existing teaching-snippet findings.

- [ ] **Step 2: Configure the desired behavior**

Set the lint target to `src/coding/`, make `npm test` run the quality checks, use npm as the declared package manager, declare Node 22.22.1, and remove the legacy ESLint and Commitizen paths. Keep `src/` ignored by Prettier because it is frozen.

- [ ] **Step 3: Regenerate the npm lockfile**

Run: `npm.cmd install --package-lock-only --ignore-scripts --offline`
Expected: `package-lock.json` matches `package.json` and no pnpm lockfile remains.

- [ ] **Step 4: Verify the ESLint configuration without the unsupported stylish formatter**

Run: `npx eslint src/coding --format json`
Expected: `[]` and no `.eslintignore` deprecation warning.

### Task 2: Add reproducible quality automation

**Files:**

- Create: `.github/workflows/quality.yml`
- Modify: `README.md`, `AGENTS.md`, `CLAUDE.md`

- [ ] **Step 1: Add the CI workflow**

Create a workflow that runs on pushes and pull requests, uses Node 22.22.1, executes `npm ci`, then runs `npm test`.

- [ ] **Step 2: Update contributor-facing documentation**

Document the frozen `src/` content tree, npm-only workflow, Node requirement, available checks, and the retained root configuration. Replace duplicated Claude-specific guidance with a short pointer to `AGENTS.md`.

- [ ] **Step 3: Format writable repository files**

Run: `npx prettier --write .`
Expected: root configuration and documentation are formatted; `.prettierignore` prevents any `src/` mutation.

- [ ] **Step 4: Verify the final quality gate**

Run: `npm.cmd test`
Expected: PASS after using Node 22.22.1 or later. In the current Node 22.0 environment, run `npx eslint src/coding --format json` and `npx prettier --check .` as equivalent configuration checks; CI provides the authoritative Node-22.22.1 verification.

### Task 3: Preserve user-owned Git state

**Files:**

- Preserve: `src/**`, `.claude/settings.local.json`, deletion of `test3.txt`, all unrelated untracked files

- [ ] **Step 1: Review the final diff**

Run: `git status --short` and `git diff --check`
Expected: no whitespace errors; no files inside `src/` appear as modified by this change.

- [ ] **Step 2: Leave staging and commits to the repository owner**

Do not run `git add` or create a commit because the worktree contains pre-existing user changes.
