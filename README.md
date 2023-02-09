## From project root

```bash
npm run files:app1

> vercel-nft-workspace-demo@1.0.0 files:app1
> node apps/app1/nft.js

fileList Set(4) {
  'apps/app1/app.js',
  'apps/app1/package.json',
  'node_modules/intpp-some-nft-demo/package.json',
  'node_modules/intpp-some-nft-demo/index.js'
}
```

## From app root

```bash
npm run files

> vercel-nft-demo@1.0.0 files
> node nft.js

fileList Set(2) { 'app.js', 'package.json' }
```
