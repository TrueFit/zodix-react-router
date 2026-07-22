require('esbuild').buildSync({
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['zod', 'zod/v3', '@remix-run/server-runtime'],
  outfile: 'dist/index.js',
  platform: 'node',
  target: ['node20'],
});

require('esbuild').buildSync({
  bundle: true,
  entryPoints: ['src/v4/index.ts'],
  external: ['zod', 'zod/v4', '@remix-run/server-runtime'],
  outfile: 'dist/v4/index.js',
  platform: 'node',
  target: ['node20'],
});
