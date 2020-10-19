# create-etsc-jest

## Usage

### Using PNPM

```sh
pnpm init create-etsc-jest
```

### Using npm

```sh
npm init create-etsc-jest
```

### API

![--help screenshot](https://i.imgur.com/ONktmy4.png)

## Templates

### Base

[TypeScript](https://www.typescriptlang.org/) package using [esbuild](https://github.com/evanw/esbuild) + [esbuild-node-tsc](https://github.com/a7ul/esbuild-node-tsc) + [nodemon](https://nodemon.io/) for development, and concurrently checking types with `tsc`.

Testing with [Jest](https://jestjs.io/), using [esbuild](https://github.com/evanw/esbuild) to transform the tests optimally.

Building normally with `tsc` for declaration files.

Build

```sh
pnpm build
# or
npm run build
```

Development

```sh
pnpm dev
# or
npm run dev
```

Test

```sh
pnpm test
# or
npm test

## Watching mode

pnpm test -- --watch
#or
npm test -- --watch
```
