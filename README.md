# rad-modules-tools

rad-modules-tools are set of tools that easily cooperate with rad-modules.

# Getting started

After cloning git repository perform the following steps:
1. `npm i` - installs all dependencies from main `package.json` file
2. `npm run bootstap` - installs all dependencies from all modules.

# Usage

It uses `lerna` to manage packages. Some useful scripts are prepared.
- `npm run bootstap` - install all packages dependencies and links andy cross-dependencies
- `npm run build` - run `build` in each package
- `npm run units` - run unit tests in each package
- `npm run integration` - run integration tests in each package
- `npm run add -- <dependency> [--scope=<package-name>]` - add `<depencency>` to `packages/package-name`. If `scope` flag is ommited it adds `dependency` to all packages.
- `npm run lint` - run linter analysis 
- `npm run watch` - build packages and watch for changes

