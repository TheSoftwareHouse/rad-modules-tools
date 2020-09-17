# Rad Modules Tools

[![Build Status](https://secure.travis-ci.org/TheSoftwareHouse/rad-modules-tools.svg?branch=master)](http://travis-ci.org/TheSoftwareHouse/rad-modules-tools)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

rad-modules-tools are set of tools that easily cooperate with rad-modules.

[RAD Modules Documentation](https://thesoftwarehouse.github.io/rad-modules-docs/docs/index.html)

## Monorepo

This repo is a monorepo which contains the [rad-modules](https://github.com/TheSoftwareHouse/rad-modules) API clients.

- [Rad Security Client](https://github.com/TheSoftwareHouse/rad-modules-tools/tree/master/packages/security-client)

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

Copyright (c) 2017 The Software House

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
