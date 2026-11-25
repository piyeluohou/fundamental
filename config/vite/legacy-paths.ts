import type { Plugin } from 'vite';

// Keep existing development URLs working after relocating learning material.
const paths = [
  ['/src/coding/', '/examples/coding/'],
  ['/src/tools/', '/examples/tools/'],
  ['/src/react/', '/docs/react/'],
  ['/src/工程化/', '/docs/工程化/'],
  ['/src/真题/', '/docs/真题/'],
];

export function legacyPaths(): Plugin {
  return {
    name: 'legacy-learning-paths',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        if (request.url) {
          for (const [source, target] of paths) {
            const prefix = [source, encodeURI(source)].find((path) =>
              request.url?.startsWith(path),
            );
            if (prefix) {
              request.url = encodeURI(target) + request.url.slice(prefix.length);
              break;
            }
          }
        }
        next();
      });
    },
  };
}
