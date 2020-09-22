# RAD Scheduler Client

[![npm version](https://badge.fury.io/js/%40tshio%2Fscheduler-client.svg)](https://badge.fury.io/js/%40tshio%2Fscheduler-client)


**Non-blocking RAD Scheduler client for Node.js.**

This is a 100% JavaScript library, with TypeScript definition, with the Promise API.

This module makes it simple to implement a Node.js application that uses [RAD Scheduler](https://thesoftwarehouse.github.io/rad-modules-docs/docs/scheduler/scheduler-index) for its authentication and authorization needs.

## Table of Contents

  * [Install](#installing)
  * [Loading and configuration](#loading-and-configuration-module)

## Installing
```bash
$ npm install @tshio/scheduler-client
```
or
```bash
yarn add @tshio/scheduler-client
```

## Loading and configuration module

```js
// CommonJS
const { SchedulerClient } = require('@tshio/scheduler-client');

// ES Module
import { SchedulerClient } from '@tshio/scheduler-client';


const options = {
  host: "localhost",
  port: "50050",
}

const schedulerClient = new SchedulerClient(options);
```

## License

[![license](https://img.shields.io/badge/license-MIT-4dc71f.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/assets/tsh.png" alt="tsh.png" width="150"  />  

