# RAD Notifications Client

[![npm version](https://badge.fury.io/js/%40tshio%2Fnotifications-client.svg)](https://badge.fury.io/js/%40tshio%notifications-client)


**Non-blocking RAD Notifications client for Node.js.**

This is a 100% JavaScript library, with TypeScript definition, with the Promise API.

This module makes it simple to implement a Node.js application that uses [RAD Notifications](https://thesoftwarehouse.github.io/rad-modules-docs/docs/notifications/notifications-index).

## Table of Contents

  * [Install](#installing)
  * [Loading and configuration](#loading-and-configuration-module)
  * [Getting started](#getting-started)
  * [API](#api)

## Installing
```bash
$ npm install @tshio/notifications-client
```
or
```bash
$ yarn add @tshio/notifications-client
```

## Loading and configuration module

```js
// CommonJS
const { PdfClient } = require('@tshio/notifications-client');

// ES Module
import { PdfClient } from '@tshio/notifications-client';


const options = {
  host: "localhost",
  port: 50080,
}

const notificationsClient = new NotificationsClient(options);
```

## Getting started

#### Send notification

```js
const message = {
   channels: ["default"],
   message: "Test message",
}
const { notificationsIds } = async notificationsClient.notifications.send(message);
```

#### Get notifications

```js
const notifications = async notificationsClient.notifications.get();
```

## API

### notificationsClient.notifications.send({ channels, message }) => Promise<{ notificationsIds }>

Send notification

Returns an object with an array of crated notifications ids.
```ts
{
  notificationsIds: string[];
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| channels  | `string[]`   | Send messages to channels.                         | |
| message | `string`   | Notification message                      | |

[Back to API](#api)

### notificationsClient.notifications.get( queryFilter? ) => Promise<object>

Get notifications list (if no query parameters it returns first 25 notifications ordered by created date)

Returns an object
```ts
{
  notifications: Notification[];
  total: number;
  page: number;
  limit: number;
}

interface Notification {
  id: string;
  channel: string;
  message: string;
  createdAt: Date;
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
export type GetNotificationsColumns = "id" | "channel" | "message" | "createdAt";

export type GetNotificationsFilterOperators = "eq" | "neq" | "lt" | "gt" | "include" ;

export interface GetNotificationsRequest {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetNotificationsColumns]?: {
      [operator in GetNotificationsFilterOperators]?: string;
    };
  };
  order?: {
    by: "resource" | "attribute";
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
    message: {
      include: "test"
    }
  }
  ```

  Two parameter filter
  ```js
  filter: {
    message: {
      include: "test"
    },
    channel: {
      eq: "default",
    },
  }
  ```

- order

  | Name                  | Type       | Description                                                                     | Default |
  |-----------------------|------------|---------------------------------------------------------------------------------|---------|
  | by                | `string`       | **optional** <p>column name for order sorting, allowed values: `"id", "channel", "message", "createdAt"`</p> | `id`    |
  | type              | `asc` or `desc`| **optional** <p>Ascending or descending order</p>                               | `asc`   |

  #### Examples
  ```js
  order: {
    by: "id",
    type: "desc"
  }
  ```

[Back to API](#api)


## License

[![license](https://img.shields.io/badge/license-MIT-4dc71f.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/assets/tsh.png" alt="tsh.png" width="150"  />  

