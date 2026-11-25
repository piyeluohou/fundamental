import type { Plugin } from 'vite';

function createHtml(script: string, styles: string[] = []) {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>fundamental</title>
    ${styles.map((href) => `<link rel="stylesheet" href="${href}" />`).join('\n    ')}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${script}"></script>
  </body>
</html>`;
}

export function tsxEntry(entry: string): Plugin {
  let base = '/';

  return {
    name: 'tsx-entry-html',
    configResolved(config) {
      base = config.base;
    },
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const pathname = request.url?.split('?')[0];
        if (pathname !== base && pathname !== `${base}index.html`) {
          next();
          return;
        }

        try {
          // Run Vite's HTML transforms to inject HMR and React Fast Refresh.
          const html = await server.transformIndexHtml(
            request.url ?? base,
            createHtml(`${base}${entry.slice(1)}`),
          );
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html; charset=utf-8');
          response.end(html);
        } catch (error) {
          next(error);
        }
      });
    },
    generateBundle(_options, bundle) {
      const main = Object.values(bundle).find((file) => file.type === 'chunk' && file.isEntry);
      if (!main) {
        this.error('Missing application entry chunk.');
      }

      const styles = Object.values(bundle)
        .filter((file) => file.type === 'asset' && file.fileName.endsWith('.css'))
        .map((file) => `${base}${file.fileName}`);

      this.emitFile({
        type: 'asset',
        fileName: 'index.html',
        source: createHtml(`${base}${main?.fileName}`, styles),
      });
    },
  };
}
