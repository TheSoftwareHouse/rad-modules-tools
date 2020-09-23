# RAD PDF Client

[![npm version](https://badge.fury.io/js/%40tshio%2Fpdf-client.svg)](https://badge.fury.io/js/%40tshio%pdf-client)


**Non-blocking RAD PDF client for Node.js.**

This is a 100% JavaScript library, with TypeScript definition, with the Promise API.

## Table of Contents

  * [Install](#installing)
  * [Loading and configuration](#loading-and-configuration-module)
  * [Getting started](#getting-started)
  * [API](#api)

## Installing
```bash
$ npm install @tshio/pdf-client
```
or
```bash
$ yarn add @tshio/pdf-client
```

## Loading and configuration module

```js
// CommonJS
const { PdfClient } = require('@tshio/pdf-client');

// ES Module
import { PdfClient } from '@tshio/pdf-client';


const options = {
  host: "localhost",
  port: "50080",
}

const pdfClient = new PdfClient(options);
```

## Getting started

#### Create pdf

```js
pdfClient.pdf.create({
      from: "http://www.example.com",
      type: "uri",
      pdfOptions: {},
    }).then({ url, fileId, expiryAt } => {
      // ...
    });
```

#### Download pdf

```js
pdfClient.pdf.download({ 
      fileId: "9aeb4fc5-d95c-4130-8d0e-f876e3a29565"
    }).then( pdf => {
      // save pdf to file
      const stream = fs.createWriteStream('./example.pdf');
      
      stream.on('finish', () => {
        console.log('PDF file created');
      });
       
      stream.write(pdf);
    });
```

## API

### schedulerClient.pdf.create({ from, type, pdfOptions? }) => Promise<{ url, expiryAt }>

Create pdf from url

Returns an object
```ts
{
  fileId: string;
  url: string;
  expiryAt: Date;
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| from  | `string`   | uri or html string                         | |
| type | `string`   | Source type, allowed values: `uri`, `html`                        | |
| pdfOptions | `object`   | **optional** <p>PDF options</p>                        | |
| pdfOptions.scale | `number`   | **optional** <p>Scale of the webpage rendering.</p>                        | 1 |
| pdfOptions.displayHeaderFooter | `boolean`   | **optional** <p>Display header and footer.</p>                        | false |
| pdfOptions.headerTemplate | `string`   | **optional** <p>HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them:</p><p>`date` formatted print date<br />`title` document title<br />`url` document location<br />`pageNumber` current page number<br />`totalPages` total pages in the document</p>                        |  |
| pdfOptions.footerTemplate | `string`   | **optional** <p>HTML template for the print footer. Should be valid HTML markup with following classes used to inject printing values into them:</p><p>`date` formatted print date<br />`title` document title<br />`url` document location<br />`pageNumber` current page number<br />`totalPages` total pages in the document</p>                        |  |
| pdfOptions.printBackground | `boolean`   | **optional** <p>Print background graphics.</p>                        | false |
| pdfOptions.landscape | `boolean`   | **optional** <p>Paper orientation.</p>                        | false |
| pdfOptions.pageRanges | `string`   | **optional** <p>Paper ranges to print, e.g., '1-5, 8, 11-13'.</p>                        | `''` which means print all pages. |
| pdfOptions.format | `string`   | **optional** <p>Paper format. If set, takes priority over width or height options.<br/>Allowed values: `"Letter", "Legal", "Tabloid", "Ledger", "A0", "A1", "A2", "A3", "A4", "A5", "A6"` </p>                        | Letter |
| pdfOptions.width | `number`   | **optional** <p>Paper width.</p>                        |  |
| pdfOptions.height | `number`   | **optional** <p>Paper height.</p>                        |  |
| pdfOptions.margin | `objetct`   | **optional** <p>Paper margins, defaults to none.</p>                        |  |
| pdfOptions.top | `number`   | **optional** <p>Top margin.</p>                        |  |
| pdfOptions.right | `number`   | **optional** <p>Right margin.</p>                        |  |
| pdfOptions.bottom | `number`   | **optional** <p>Bottom margin.</p>                        |  |
| pdfOptions.left | `number`   | **optional** <p>Left margin.</p>                        |  |

[Back to API](#api)

### schedulerClient.pdf.download({ fileId }) => Promise<string>

Download PDF file

Returns string of pdf file content or throw HttpError

##### Parameters

| Name         | Type       | Description                           | Default |
|--------------|------------|---------------------------------------|-----|
| fileId  | `string`   | File ID for download pdf file                       | |

[Back to API](#api)


## License

[![license](https://img.shields.io/badge/license-MIT-4dc71f.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/assets/tsh.png" alt="tsh.png" width="150"  />  

