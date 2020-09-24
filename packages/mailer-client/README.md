# RAD Mailer Client

[![npm version](https://badge.fury.io/js/%40tshio%mailer-client.svg)](https://badge.fury.io/js/%40tshio%mailer-client)


**Non-blocking RAD Mailer client for Node.js.**

This is a 100% JavaScript library, with TypeScript definition, with the Promise API.

This module makes it simple to implement a Node.js application that uses [RAD Mailer](https://thesoftwarehouse.github.io/rad-modules-docs/docs/mailer/mailer-index).

## Table of Contents

  * [Install](#installing)
  * [Loading and configuration](#loading-and-configuration-module)
  * [Getting started](#getting-started)
  * [API](#api)

## Installing
```bash
$ npm install @tshio/mailer-client
```
or
```bash
$ yarn add @tshio/mailer-client
```

## Loading and configuration module

```js
// CommonJS
const { MailerClient } = require('@tshio/mailer-client');

// ES Module
import { MailerClient } from '@tshio/mailer-client';


const options = {
  host: "localhost",
  port: "50060",
}

const mailerClient = new MailerClient(options);
```

## Getting started

#### Send email

```js
const request: SendRequest = {
emails: [
  {
    sender: {
      name: "tsh.io",
      email: "sender@example.com",
    },
    recipient: {
      to: ["recipient@example.com"],
    },
    template: {
      id: "test",
      parameters: {
        firstName: "Antonio",
        lastName: "Hernández",
      },
    },
  },
],
}

await mailerClient.mailer.send(request);
```

## API

### mailerClient.mailer.send({ emails, priority }) => Promise< void >

Send emails

Returns void or throw HttpError

##### Parameters

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| messages  | `object[]`   | Array of [MailMessage](#mail-message)                      | |
| priority | `string`   | **optional** <p>Send priority, allowed values: `urgent`, `high`, `medium`, `low`</p>   | urgent |

##### Mail message

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| sender  | `object`   | Sender object                      | |
| sender.name  | `string`   | Sender name                      | |
| sender.email  | `string`   | Sender email                      | |
| recipient  | `object`   | Recipient object                      | |
| recipient.to  | `string[]`   | Recipient to                      | |
| recipient.cc  | `string`   | **optional** <p>Recipient bcc</p>                     | |
| recipient.bcc  | `string`   | **optional** <p>Recipient bcc</p>                     | |
| template  | `object`   | Template object                      | |
| template.id  | `string`   | Template id                      | |
| template.parameters  | `object`   | Template parameters                      | |
| attachments  | `object[]`   | Attachments objects array                      | |
| attachment.fileName  | `string`   | Attachments file name                      | |
| attachment.content  | `string`   | Attachments content encoded with base64               | |

## License

[![license](https://img.shields.io/badge/license-MIT-4dc71f.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/assets/tsh.png" alt="tsh.png" width="150"  />  

