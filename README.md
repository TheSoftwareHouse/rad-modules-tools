# rad-modules-tools

rad-modules-tools are set of tools that easily cooperate with rad-modules.


# Usage

It uses `lerna` to manage packages. Some useful scripts are prepared.
- `npm run bootstrap` - install all packages dependencies and links andy crss-dependencies
- `npm run build` - run `build` in each package
- `npm run units` - run unit tests in each package
- `npm run integration` - run integration tests in each package
- `npm run add -- <dependency> [--scope=<package-name>]` - add `<depencency>` to `packages/package-name`. If `scope` flag is ommited it adds `dependency` to all packages.
- `npm run lint` - run linter analysis 
- `npm run watch` - build packages and watch for changes

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
