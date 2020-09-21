<p align="center">
  <img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/feature/RAD-302-security-client-tests/assets/rad-modules-tools.svg">
</p>

# 
[![Build Status](https://travis-ci.com/TheSoftwareHouse/rad-modules-tools.svg?branch=master)](https://travis-ci.com/github/TheSoftwareHouse/rad-modules-tools)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

rad-modules-tools are set of tools that easily cooperate with rad-modules.

[RAD Modules Documentation](https://thesoftwarehouse.github.io/rad-modules-docs/docs/index.html)

## Monorepo

This repo is a monorepo which contains the [rad-modules](https://github.com/TheSoftwareHouse/rad-modules) API clients:

- [RAD Security Client](https://github.com/TheSoftwareHouse/rad-modules-tools/tree/master/packages/security-client)

## Setting up for local development

- Clone the repo
- From your workspace root run `npm install`, then `npm run bootstrap` and `npm run build`
- Ensure you have a `rad-security` instance running with [default configuration](https://thesoftwarehouse.github.io/rad-modules-docs/docs/security/security-getting-started#working-example-docker-composeyaml)
- `npm run integration` - run integration tests in each package
- `npm run add -- <dependency> [--scope=<package-name>]` - add `<depencency>` to `packages/package-name`. If `scope` flag is ommited it adds `dependency` to all packages.
- `npm run format` - run code formatter
- `npm run lint` - run linter analysis 
- `npm run watch` - build packages and watch for changes

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/feature/RAD-302-security-client-tests/assets/tsh.png" alt="tsh.png" width="150"  />  

