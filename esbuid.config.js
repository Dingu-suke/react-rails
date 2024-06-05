const esbuild = require('esbuild')
const typescriptPlugin = require('esbuild-plugin-typescript2')

esbuild.build({
  entryPoints: ['app/javascript/application.ts'],
  bundle: true,
  outdir: 'app/assets/builds',
  plugins: [typescriptPlugin()],
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx'
  }
}).catch(() => process.exit(1))