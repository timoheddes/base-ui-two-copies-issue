// Two separate bundles = two independent copies of React and Base UI on one page,
// like a host app plus an injected widget.
import { build } from 'esbuild';
for (const name of ['host', 'embed', 'single']) {
  await build({
    entryPoints: [`src/${name}.jsx`],
    bundle: true,
    format: 'iife',
    outfile: `dist/${name}.js`,
    jsx: 'automatic',
    define: { 'process.env.NODE_ENV': '"development"' },
    logLevel: 'warning',
  });
}
