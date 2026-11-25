import { readFileSync } from 'node:fs';

const { packageManager } = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);
const expected = packageManager.replace('@', '/');
const actual = (process.env.npm_config_user_agent ?? '').split(' ')[0];

if (actual !== expected) {
  console.error(`This project requires ${packageManager}. Run: pnpm install`);
  process.exit(1);
}
