// Bundle the engine into the pack's common templates so a product project
// needs no Node: `npm run build` after any change under src/.
import { build } from 'esbuild';
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const out = resolve('../../skills/physical-product/templates/common/viz');
mkdirSync(out, { recursive: true });
await build({
  entryPoints: ['src/render.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  globalName: 'RobionViz',
  target: ['es2022'],
  outfile: resolve(out, 'render.bundle.js'),
  legalComments: 'linked',
  logLevel: 'info',
});
copyFileSync('src/index.html', resolve(out, 'index.html'));
console.log(`render.bundle.js ${(statSync(resolve(out, 'render.bundle.js')).size / 1024).toFixed(0)} kB`);
