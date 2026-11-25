import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tsxEntry } from './config/vite/tsx-entry.ts';
import { legacyPaths } from './config/vite/legacy-paths.ts';

// Change this path to use a different TSX entry.
const entry = '/src/main.tsx';

export default defineConfig({
  plugins: [react(), legacyPaths(), tsxEntry(entry)],
  build: {
    rolldownOptions: {
      input: fileURLToPath(new URL(`.${entry}`, import.meta.url)),
    },
  },
});
