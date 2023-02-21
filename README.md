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

## From project root with `base` = `__dirname` (equals app root)

```bash
npm run files:app1:base

> vercel-nft-workspace-demo@1.0.0 files:app1:base
> node apps/app1/nft.js --with-base

args [ '--with-base' ]
fileList Set(2) { 'app.js', 'package.json' }
```

## From project root with `processCwd` = `__dirname` (equals app root)

```bash
npm run files:app1:cwd 

> vercel-nft-workspace-demo@1.0.0 files:app1:cwd
> node apps/app1/nft.js --with-cwd

args [ '--with-cwd' ]
fileList Set(6) {
  'apps/app1/app.js',
  'apps/app1/package.json',
  'node_modules/intpp-some-nft-demo/package.json',
  'node_modules/intpp-some-nft-demo/index.js',
  'apps/app1/config.js',
  'apps/app1/assets/common.json'
}
```

## From project root with `base` = `processCwd` = `__dirname` (equals app root)

```bash
npm run files:app1:base-cwd

> vercel-nft-workspace-demo@1.0.0 files:app1:base-cwd
> node apps/app1/nft.js --with-cwd

args [ '--with-cwd' ]
fileList Set(6) {
  'apps/app1/app.js',
  'apps/app1/package.json',
  'node_modules/intpp-some-nft-demo/package.json',
  'node_modules/intpp-some-nft-demo/index.js',
  'apps/app1/config.js',
  'apps/app1/assets/common.json'
}
```

## From app root

```bash
npm run files

> vercel-nft-demo@1.0.0 files
> node nft.js

fileList Set(2) { 'app.js', 'package.json' }
```

## From app root with `base` = `__dirname` (equals app root)

```bash
npm run files:base

> vercel-nft-demo@1.0.0 files:base
> node nft.js --with-base

args [ '--with-base' ]
fileList Set(2) { 'app.js', 'package.json' }
```


## From app root with `base` = `__dirname/../../` (equals project root)

```bash
npm run files:root-base

> vercel-nft-demo@1.0.0 files:root-base
> node nft.js --with-root-base

args [ '--with-root-base' ]
fileList Set(4) {
  'apps/app1/app.js',
  'apps/app1/package.json',
  'node_modules/intpp-some-nft-demo/package.json',
  'node_modules/intpp-some-nft-demo/index.js'
}
```

## From app root with `processCwd` = `__dirname` (equals app root)

```bash
npm run files:cwd 

> vercel-nft-demo@1.0.0 files:cwd
> node nft.js --with-cwd

args [ '--with-cwd' ]
fileList Set(2) { 'app.js', 'package.json' }
```


## From app root with `processCwd` = `__dirname/../../` (equals project root)

```bash
npm run files:root-cwd 

> vercel-nft-demo@1.0.0 files:root-cwd
> node nft.js --with-root-cwd

args [ '--with-root-cwd' ]
fileList Set(2) { 'app.js', 'package.json' }
```

## From app root with `base` = `processCwd` = `__dirname` (equals app root)

```bash
npm run files:base-cwd

> vercel-nft-demo@1.0.0 files:base-cwd
> node nft.js --with-base --with-cwd

args [ '--with-base', '--with-cwd' ]
fileList Set(2) { 'app.js', 'package.json' }
```

## From app root with `base` = `processCwd` = `__dirname/../../` (equals project root)

```bash
npm run files:root-base-cwd

> vercel-nft-demo@1.0.0 files:root-base-cwd
> node nft.js --with-root-base --with-root-cwd

args [ '--with-root-base', '--with-root-cwd' ]
fileList Set(4) {
  'apps/app1/app.js',
  'apps/app1/package.json',
  'node_modules/intpp-some-nft-demo/package.json',
  'node_modules/intpp-some-nft-demo/index.js'
}
```
