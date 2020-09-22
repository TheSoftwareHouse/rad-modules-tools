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
  port: "50070",
}

const schedulerClient = new SchedulerClient(options);
```

## Getting started

### Login and authorization

```js
const SecurityClient = require('@tshio/security-client');

(async () => {
    const securityClient = SecurityClient.getSecurityClient();
    const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });

    console.log(token);
    // => { accessToken: "xxx", refreshToken: "xxx" }

    securityClient.setToken(token); // From now, the token will be automatically added to all API requests

    // Alternatively, you can set the API Key instead of a Token
    // securityClient.setApiKey("api key string");
})();
```

### Examples

```js
```

## API

### schedulerClient.jobs.addJob({ name, type, payload?, jobOptions? }) => Promise<{ id }>

Schedule an action to another service - either to run immediately, at some specific timestamp or as a cron job.

Returns an object
```ts
{
  id: string; // job id
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| name  | `string`   | Job name                         | |
| type | `string`   | Job type (always "http")                         | |
| payload | `object`   | Job payload                         | |
| payload.method | `string`   | **optional** <p>HTTP method, allowed values: `GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH`</p>         | |
| payload.url | `string`   | Request URL string         | |
| payload.headers | `object`   | **optional** <p>Request headers, example: `{ "Content-Type": "application/json" }`</p>        | |
| payload.body | `object`  `string`   | **optional** <p>Request body, string or any of object</p>        | |
| payload.options | `object`   | **optional** <p>Request options</p>        | |
| payload.compress | `boolean`   | **optional** <p>Support gzip/deflate content encoding. false to disable</p>        | false |
| payload.follow | `number`   | **optional** <p>Maximum redirect count. 0 to not follow redirect</p>        | 20 |
| payload.size | `number`   | **optional** <p>Maximum response body size in bytes. 0 to disable</p>        | 0 |
| payload.timeout | `number`   | **optional** <p>Request/response timeout in ms, it resets on redirect. 0 to disable (OS limit applies)</p>        | 0 |
| jobOptions | `object`   | **optional** <p>Job configuration object</p>        |  |
| jobOptions.priority | `number`   | **optional** <p>Optional priority value. ranges from 1 (highest priority) to MAX_INT  (lowest priority). Note that using priorities has a slight impact on performance, so do not use it if not required.</p>        |  |
| jobOptions.delay | `number`   | **optional** <p>An amount of milliseconds to wait until this job can be processed. Note that for accurate delays, both server and clients should have their clocks synchronized.</p>        |  |
| jobOptions.attempts | `number`   | **optional** <p>The total number of attempts to try the job until it completes.</p>        | 3 |
| jobOptions.cron | `string`   | **optional** <p>Repeat job according to a cron specification.</p>        |  |
| jobOptions.cronStartDate | `string`   | **optional** <p>Start date when the repeat job should start repeating. Example: `"2020-01-01 10:00:00"`</p>        |  |
| jobOptions.cronEndDate | `string`   | **optional** <p>End date when the repeat job should stop repeating. Example: `"2020-01-02 15:30:00"`</p>        |  |
| jobOptions.cronTimeZone | `string`   | **optional** <p>Cron Timezone</p>        |  |
| jobOptions.cronLimit | `number`   | **optional** <p>Number of times the job should repeat at max.</p>        |  |
| jobOptions.backoff | `number`   | **optional** <p>Setting for automatic retries if the job fails.</p>        | 5000 |
| jobOptions.lifo | `boolean`   | **optional** <p>If true, adds the job to the right of the queue instead of the left.</p>        | false |
| jobOptions.timeout | `number`   | **optional** <p>The number of milliseconds after which the job should be fail with a timeout error.</p>        |  |
| jobOptions.removeOnComplete | `boolean`   | **optional** <p>If true, removes the job when it successfully completes.</p>        |  |
| jobOptions.removeOnFail | `boolean`   | **optional** <p>If true, removes the job when it fails after all attempts.</p>        |  |
| jobOptions.stackTraceLimit | `number`   | **optional** <p>Limits the amount of stack trace lines that will be recorded in the stacktrace.</p>        |  |

[Back to API](#api)

### schedulerClient.jobs.getJobs({ queryFilter? }) => Promise<{ jobs }>

Get jobs list (if no query parameters it returns first 25 jobs ordered by name)

Returns an object
```ts
{
  jobs: Job[];
  page: number;
  limit: number;
  total: number;
}
```

```ts
interface Job {
  id: string;
  name: string;
  type: JobType;
  cron?: string;
  status: JobStatus;
  jobOptions?: JobOptions;
  payload?: jsonB;
  createdAt: Date;
  updatedAt: Date;
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| queryFilter  | `object`   | **optional**<p>Query filter</p>                         | |
| queryFilter.page | `number`   | **optional**<p>Page number</p>                          | 1 |
| queryFilter.limit | `number`   | **optional**<p>Response limit</p>                          | 25 |
| queryFilter.filter | `number`   | **optional**<p>Filter object</p>                          |  |
| queryFilter.query | `number`   | **optional**<p>Query object</p>                          |  |

Filters can be used search for a single condition or they can be wrapped in logical operands AND and OR. Filtering can be a simple conditional evaluation of a single field.

```ts
//
export type GetJobsColumns = "id" | "name" | "service" | "action" | "status" | "createdAt" | "updatedAt";

export type GetJobsFilterOperators =
  | "eq"
  | "eqOr"
  | "neq"
  | "neqOr"
  | "lt"
  | "ltOr"
  | "lte"
  | "lteOr"
  | "gt"
  | "gtOr"
  | "gte"
  | "gteOr"
  | "include"
  | "includeOr"
  | "in"
  | "inOr";

export interface JobsQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetJobsColumns]?: {
      [operator in GetJobsFilterOperators]?: string;
    };
  };
  order?: {
    by: "id" | "name" | "service" | "action" | "status" | "createdAt" | "updatedAt";
    type: "asc" | "desc";
  };
}
```

- filter[column][operator] = value

  | Name                  | Type       | Description                                              |
  |-----------------------|------------|----------------------------------------------------------|
  | column                | `string`   | Column name            |
  | operator              | `string`   | Operator name                                    |
  | value                 | `string` or `number` or `boolean` (depending on the `column` type)         |                                          |

  #### Examples

  Single parameter filter
  ```js
  filter: {
    username: {
      include: "super"
    }
  }
  ```

  Two parameter filter
  ```js
  filter: {
    username: {
      include: "super"
    },
    isActive: {
      eq: true,
    },
  }
  ```

- order

  | Name                  | Type       | Description                                                                     | Default |
  |-----------------------|------------|---------------------------------------------------------------------------------|---------|
  | by                | `string`       | **optional** <p>column name for order sorting, allowed values: `"id", "name", "service", "action", "status", "createdAt", "updatedAt"`</p> | `id`    |
  | type              | `asc` or `desc`| **optional** <p>Ascending or descending order</p>                               | `asc`   |

  #### Examples
  ```js
  order: {
    by: "username",
    type: "desc"
  }
  ```
  
[Back to API](#api)

### schedulerClient.jobs.cancelJob({ jobId }) => Promise< void >

Cancels a job with given id

Returns void or throw HttpError

##### Parameters

| Name         | Type       | Description                           |
|--------------|------------|---------------------------------------|
| jobId  | `string`   | Job ID                       |

[Back to API](#api)

## License

[![license](https://img.shields.io/badge/license-MIT-4dc71f.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/assets/tsh.png" alt="tsh.png" width="150"  />  

