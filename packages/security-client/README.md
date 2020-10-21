# RAD Security Client

[![npm version](https://badge.fury.io/js/%40tshio%2Fsecurity-client.svg)](https://badge.fury.io/js/%40tshio%2Fsecurity-client)


**Non-blocking RAD Security client for Node.js.**

This is a 100% JavaScript library, with TypeScript definition, with the Promise API.

This module makes it simple to implement a Node.js application that uses [RAD Security](https://thesoftwarehouse.github.io/rad-modules-docs/docs/security/security-index) for its authentication and authorization needs.

## Table of Contents

  * [Install](#installing)
  * [Loading and configuration](#loading-and-configuration-module)
  * [Usage](#usage)
  * [API](#api)
    * [Authorization](#authorization-api)
    * [Tokens](#tokens-api)
    * [Users](#users-api)
    * [Attributes](#attributes-api)
    * [Policy](#policy-api)

## Installing
```bash
$ npm install @tshio/security-client
```
or
```bash
yarn add @tshio/security-client
```

## Loading and configuration module

```js
// CommonJS
const { getSecurityClient } = require('@tshio/security-client');

// ES Module
import { getSecurityClient } from '@tshio/security-client';


const options = {
  host: "localhost",
  port: 50050,
}

const securityClient = getSecurityClient(options);
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
})();
```

### Examples

```js
(async () => {
    const securityClient = SecurityClient.getSecurityClient();
    const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });

    // Add User
    const newUser = {
      username: "superadmin2",
       password: "superadmin",
       attributes: ["ROLE_SUPERADMIN"],
    }

    const { newUserId } = await securityClient.users.addUser(newUser, { accessToken: token });

    console.log(newUserId);
    // => 45287eff-cdb0-4cd4-8a0f-a07d1a11b382

    // Add Attribute
    const newUserAttribute = {
      userId: newUserId,
       attributes: ["ATTR1", "ATTR2"],
    }

    await securityClient.users.addAttributes(newUserAttribute, { accessToken: token })

    const user = await securityClient.users.getUser({ userId: newUserId }, { accessToken: token });
    console.log(user);
    // =>
    // {
    //   id: '78204778-de24-4957-83d5-e01235d1d52a',
    //   username: 'superadmin2',
    //   isActive: true,
    //   activationToken: null,
    //   createdAt: '2020-09-16T11:25:44.509Z',
    //   updatedAt: '2020-09-16T11:25:44.509Z',
    //   attributes: [ 'ROLE_SUPERADMIN', 'ATTR1', 'ATTR2' ],
    //   isSuperAdmin: true
    // }

    // Get Users with query filter
    const users = await securityClient.users.getUsers({
      filter: {
        username: {
          include: "superadmin2",
        },
      },
    }, {
      accessToken: token
    });

    console.log(users);
    // =>
    // {
    //   users: [
    //     {
    //       id: 'c44ed13d-09cc-4797-8835-18e98b5f3e07',
    //       username: 'superadmin2',
    //       isActive: true,
    //       activationToken: null,
    //       createdAt: '2020-09-16T13:16:25.997Z',
    //       updatedAt: '2020-09-16T13:16:25.997Z',
    //       attributes: [Array],
    //       isSuperAdmin: true
    //     }
    //   ],
    //     total: 1,
    //   page: 1,
    //   limit: 25
    // }

    // Delete user
    await securityClient.users.deleteUser({ userId: newUserId }, { accessToken: token });

    // Get policies
    const policy = await securityClient.policy.getPolicies({ limit: 100 }, { accessToken: token });
    console.log(policy);

    // Add policy
    const newPolicy = {
      resource: "TEST",
      attribute: "TEST",
    }

    const { id } = await securityClient.policy.addPolicy(newPolicy, { accessToken: token });

    // Get policies with query filter
    const result2 = await securityClient.policy.getPolicies({
      filter: {
    id: {
      eq: id,
    },
      }
    }, {
       accessToken: token
    });

    console.log(result2);
    // =>
    // {
    //   policies: [
    //     {
    //       id: '7d9b054a-0c41-4517-8818-baa8af70cc12',
    //       attribute: 'TEST',
    //       resource: 'TEST'
    //     }
    //   ],
    //     total: 1,
    //   page: 1,
    //   limit: 25
    // }


    // Remove policy
    await securityClient.policy.removePolicy({ id }, { accessToken: token });
})();
```

## Add user and attributes

```js
const { getSecurityClient } = require('@tshio/security-client');

(async () => {
    const securityClient = getSecurityClient();
    const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });

    const newUser = {
      username: "superadmin2",
      password: "superadmin",
      attributes: ["ROLE_SUPERADMIN"],
    }

    const { newUserId } = await securityClient.users.addUser(newUser, { accessToken: token });

    console.log(newUserId);
    // => 45287eff-cdb0-4cd4-8a0f-a07d1a11b382

    const newUserAttribute = {
      userId: newUserId,
      attributes: ["ATTR1", "ATTR2"],
    }

    await securityClient.users.addAttributes(newUserAttribute, { accessToken: token })

    const user = await securityClient.users.getUser({ userId: newUserId }, { accessToken: token });
    console.log(user);
    // =>

    await securityClient.users.deleteUser({ userId: newUserId }, { accessToken: token });
})();
```

## Add user

```js
const { getSecurityClient } = require('@tshio/security-client');

(async () => {
    const securityClient = getSecurityClient();
    const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });

    const user = {
      username: "superadmin2",
      password: "superadmin",
      attributes: ["ROLE_SUPERADMIN"],
    }

    const { newUserId } = await security.users.addUser(user, { accessToken: token });

    console.log(newUserId);
    // => 45287eff-cdb0-4cd4-8a0f-a07d1a11b382
})();
```

## Authorization API

### async securityClient.auth.login({ username, password })

Login to rad-security

Returns a Token object or throw HttpError

##### Parameters

###### Request

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `string`   | User name                             |
| password | `string`   | User password                         |

##### Example

```js
const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
console.log(token);
// => { accessToken: "...", refreshToken: "..." }
```

[Back to Authorization API](#authorization-api)

<hr />

### async securityClient.auth.resetPassword({resetPasswordToken, newPassword?})

Reset password

Returns a new password or throw HttpError

##### Parameters

| Name               | Type       | Description                           |
|--------------------|------------|---------------------------------------|
| resetPasswordToken | `string`   | Reset password token                  |
| newPassword        | `string`   | **optional** <p>New password</p>      |

The `newPassword` is optional. If `undefined`, the password will be generated randomly
.
```js
const token = await securityClient.auth.resetPassword({
  resetPasswordToken: "reset password token...",
  newPassword: "NewSuperSecret",
});
```

[Back to Authorization API](#authorization-api)

<hr />

### async securityClient.auth.refreshToken({ asccessToken, refreshToken })

Refreshes access token.

Returns a new Token object or throw HttpError

##### Parameters

| Name         | Type       | Description                           |
|--------------|------------|---------------------------------------|
| accessToken  | `string`   | Access token                          |
| refreshToken | `string`   | Refresh token                         |

[Back to Authorization API](#authorization-api)

<hr />

### async securityClient.auth.refreshUserActiveToken(userId)

Refresh user's active token if token has expired.

Returns a new Token object or throw HttpError

##### Parameters

| Name         | Type       | Description                           |
|--------------|------------|---------------------------------------|
| userId       | `string`   | User ID                               |

[Back to Authorization API](#authorization-api)

## Tokens API

### async securityClient.tokens.createAccessKey({ accessToken })

Create Api Key

Return object
```js
{
  apiKey: string;
  type: "custom";
  createdBy: string;
}
```
or throw HttpError

##### Parameters

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |


[Back to Tokens API](#tokens-api)

<hr />

### async securityClient.tokens.generateToken({ accessExpirationInSeconds, refreshExpirationInSeconds }, { accessToken })

Creates new token with default policies and attributes without SUPERADMIN_ROLE attribute

Return object
```js
{
  accessToken: string;
  refreshToken: string;
}
```
or throw HttpError

##### Parameters

###### Request

| Name                               | Type       | Description                                 |
|------------------------------------|------------|---------------------------------------------|
| accessExpirationInSeconds          | `number`   | Access token expiration time                |
| refreshExpirationInSeconds         | `number`   | Refresh token expiration time               |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

[Back to Tokens API](#tokens-api)

<hr />

### async securityClient.tokens.getAccessKeys({ page, limit }, { accessToken })

Get access keys list (if no query parameters returns first 25 keys)

Return object
```js
{
  accessKeys: {
    id: string;
    apiKey: string;
    type: string;
    createdBy: string;
    createdAt: Date;
  }[];
  total: number;
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                                     | Default |
|--------------|------------|-------------------------------------------------|---------|
| page         | `number`   | **optional** <p>Page number</p>                 | 1       |
| limit        | `number`   | **optional** <p>Number of results per page</p>  | 25      |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

[Back to Tokens API](#tokens-api)

<hr />

### async securityClient.tokens.removeAccessKey({ apiKey }, { accessToken })

Remove api key

Return `void` or throw HttpError

##### Parameters

| Name         | Type       | Description                                     |
|--------------|------------|-------------------------------------------------|
| apiKey         | `string`   | ApiKey that should be deleted           |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| token                 | `object`   | Access token object                   |
| token.accessToken     | `string`   | Access token                          |

[Back to Tokens API](#tokens-api)

## Users API

### async securityClient.users.getUsers({ page?, limit?, filter?, order?}, { accessToken })

Get users list (if no query parameters returns first 25 users)

##### Parameters

| Name         | Type       | Description                                     | Default |
|--------------|------------|-------------------------------------------------|---------|
| page         | `number`   | **optional** <p>Page number</p>                 | 1       |
| limit        | `number`   | **optional** <p>Number of results per page</p>  | 25      |
| filter       | `object`   | **optional** <p>[Query filter](#understanding-filters-and-ordering)</p>               | {}      |
| order        | `object`   | **optional** <p>[Order filter](#understanding-filters-and-ordering)</p>                | {}      |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### filter[column] = operator
```ts
export type GetUserColumns = "id" | "username" | "isActive" | "createdAt" | "updatedAt" | "attribute.name";

export type FilterOperators =
  | "eq"
  | "eqOr"
  | "neq"
  | "neqOr"
  | "lt"
  | "ltOr"
  | "gt"
  | "gtOr"
  | "gte"
  | "gteOr"
  | "include"
  | "includeOr";

```

##### Example

```js
const users = await securityClient.users.getUsers({}, { accessToken });
console.log(users);
// => { users: [...], total: 1, page: 1, limit: 25, }

const users = await securityClient.users.getUsers({
  page: 1,
  limit: 10,
}, { accessToken });
console.log(users);
// => { users: [...], total: 1, page: 1, limit: 10, }

const users = await securityClient.users.getUsers({
  page: 1,
  limit: 10,
  filter: {
    username: {
      include: "super",
    }
  },
  order: {
    by: "username",
    type: "asc",
  },
}, {
  accessToken
});
console.log(users);
// => { users: [{username: "superadmin", ...}, ...], total: 1, page: 1, limit: 10, }
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.activateUser({ activationToken }, { accessToken })

Activate a new user

Returns an object
```ts
{
  userId: string,
  isActive: boolean
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| activationToken       | `string`   | Activation token                      |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const result = await securityClient.auth.activateUser({
  activationToken: "activation token..."
}, { 
  accessToken
});

console.log(result);
// => { userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", isActive: true }
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.deactivateUser({ userId }, { accessToken })

Deactivate a user

Returns an object
```ts
{
  userId: string;
  isActive: boolean;
  deactivationDate: Date;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| userId                | `string`   | User ID                               |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const result = await securityClient.auth.deactivateUser({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
}, {
  accessToken
});

console.log(result);
// => { userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", isActive: false,  deactivationDate: Date Tue Sep 15 2020 14:03:25 GMT+0200 (Central European Summer Time)}
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.isAuthenticated({ accessToken })

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

Am I logged?

Returns `{ isAuthenticated: boolean }` or throw HttpError

##### Example

```js
const  { isAuthenticated } = await securityClient.users.isAuthenticated({
  accessToken
});

console.log(isAuthenticated);
// => true
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.hasAttributes({ attributes }, { accessToken })

Check if the user has provided attributes

Returns an object
```ts
{
  hasAllAttributes: boolean;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| attributes            | `string[]` | Array of attributes name              |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const { hasAllAttributes } = await securityClient.users.hasAttributes({ attributes: ["ADMIN_PANEL"] }, { accessToken });

console.log(result);
// => true
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.hasAccess({ resources }, { accessToken })

Check if the user has access to provided resources

Returns an object
```ts
{
  hasAccess: boolean;  // true if the user has access to all of the resources
  forbidden: string[]; // list of forbidden resources
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| resources             | `string[]` | Array of resources name               |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const result = await securityClient.users.hasAccess({ resources: ["api/users"] }, { accessToken });

console.log(result);
// => { hasAccess: true, forbidden: [] }
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.addAttributes({ userId, attributes }, { accessToken })

Add attributes to the user

Returns an empty object or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| user ID               | `string`   | User ID                                                  |
| attributes            | `string[]` | An array of attributes for add to the user with userID   |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

```js
await securityClient.users.addAttributes({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382",
  attributes: ["ATTR_1", "ATTR_2"]
}, {
  accessToken
});
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.removeAttributes({ userId, attributes }, { accessToken })

Remove attributes from the user

Returns an empty object or throw HttpError

##### Parameters

| Name                  | Type       | Description                                                  |
|-----------------------|------------|--------------------------------------------------------------|
| user ID               | `string`   | User ID                                                      |
| attributes            | `string[]` | An array of attributes to remove from the user with userID   |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
await securityClient.users.removeAttributes({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382",
  attributes: ["ATTR_1", "ATTR_2"]
}, {
  accessToken
});
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.addUser({ username, password, attributes? }, { accessToken })

Create a new user

Returns an object
```js
{
  newUserId: string;
}
```
throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| username              | `string`   | New user username                                        |
| password              | `string`   | New user password                                        |
| attributes            | `string[]` | **optional** <p>An array of user attributes</p>          |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const { newUserId } = await securityClient.users.addUser({
  username: "new-user",
  password: "password",
  attributes: ["ADMIN_PANEL"],
}, { 
  accessToken
});

console.log(newUserId);
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.deleteUser({ userId }, { accessToken })

Delete user

Returns an empty object or throw HttpError

#### userId

Type: `string`

User ID

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
await securityClient.users.getUser({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382",
}, { accessToken });
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.getUser({ userId }, { accessToken })

Get user

Returns an user object
```js
User {
  id: string;
  username: string;
  isActive: boolean;
  isSuperAdmin: boolean;
  attributes: string[];
  createdAt: Date;
  updatedAt: Date;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| user ID               | `string`   | User ID                                                  |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const result = await securityClient.users.getUser({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382",
}, { 
  accessToken
});
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.getUserId({ username }, { accessToken })

Get user id

Returns an object
```js
{
  userId: string;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| username              | `string`   | User name                                                |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const { userId } = await securityClient.users.getUserId({
  username: "superadmin",
}, { accessToken });
console.log(userId)
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.getUserByResources({ resource, page?, limit? }, { accessToken })

Get users by resource name

Returns an object
```js
{
  users: User[];
  total: number;
  page: number;
  limit: number;
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                                     | Default | Range |
|--------------|------------|-------------------------------------------------|---------|-------|
| resource     | `string`   | Resource name                                   |         |       |
| page         | `number`   | **optional** <p>Page number</p>                 | 1       | 1 - MaxInteger |
| limit        | `number`   | **optional** <p>Number of results per page</p>  | 25      | 1 - 1000 |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const result = await securityClient.getUserByResources.getUserId({
  resource: "RES1",
}, { accessToken });
console.log(result)
// => { users: [...],  total: 5, page: 1, limit: 25 }
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.setPassword({ username, oldPassword, newPassword }, { accessToken })

Set a new password for user

Returns an object
```js
{
  passwordChanged: boolean;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| username              | `string`   | User name                                                |
| oldPassword           | `string`   | Old user password                                                |
| newPassword           | `string`   | New user password                                                |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const { passwordChanged } = await securityClient.getUserByResources.setPassword({
  username: "superadmin",
  oldPassword: "superadmin",
  newPassword: "My new password"
}, { 
  accessToken
});
console.log(passwordChanged)
// => true
```

[Back to Users API](#users-api)

<hr />

### async securityClient.users.passwordResetToken({ username }, { accessToken })

Returns token which will be used to reset the user password

Returns an object
```js
{
  resetPasswordToken: string;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| username              | `string`   | User name                                                |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const { resetPasswordToken } = await securityClient.passwordResetToken.setPassword({
  username: "superadmin"
}, { accessToken });
console.log(resetPasswordToken)
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

[Back to Users API](#users-api)

## Attributes API

### async securityClient.attributes.getAttributes({ page?, limit?, filter?, order? }, { accessToken })

Return attributes list (if no queryFilter parameters returns first 25 attributes)
```js
{
  attributes: Attribute[];
  total: number;
  page: number;
  limit: number;
}
```
```js
Attribute {
  id: string;
  name: string;
  userId: string;
  username: string;
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                                     | Default |
|--------------|------------|-------------------------------------------------|---------|
| page         | `number`   | **optional** <p>Page number</p>                 | 1       |
| limit        | `number`   | **optional** <p>Number of results per page</p>  | 25      |
| filter       | `object`   | **optional** <p>[Query filter](#understanding-filters-and-ordering)</p>               | {}      |
| order        | `object`   | **optional** <p>[Order filter](#understanding-filters-and-ordering)</p>                | {}      |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### filter[column] = operator
```ts
export type GetAttributesColumns = "id" | "name" | "user.id" | "user.username";

export type GetAttributesFilterOperators = "eq" | "eqOr" | "neq" | "lt" | "gt" | "include" | "includeOr";

```

##### Example

```js
const attributes = await securityClient.attributes.getAttributes({}, { accessToken });
console.log(attributes);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", name: "ROLE_SUPERADMIN", userId: "21637dee-3d21-4cd4-aa0f-117d1a11b123", username: "superadmin}], total: 1, page: 1, limit: 25, }

const attributes = await securityClient.attributes.getAttributes({
  page: 1,
  limit: 10,
}, { accessToken });
console.log(attributes);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", name: "ROLE_SUPERADMIN", userId: "21637dee-3d21-4cd4-aa0f-117d1a11b123", username: "superadmin}], total: 1, page: 1, limit: 10, }

const attributes = await securityClient.attributes.getAttributes({
  page: 1,
  limit: 10,
  filter: {
    name: {
      eq: "ROLE_SUPERADMIN",
    }
  },
  order: {
    by: "name",
    type: "asc",
  },
}, { accessToken });
console.log(users);
// => { users: [{username: "superadmin", ...}, ...], total: 1, page: 1, limit: 10, }
```

[Back to Attributes API](#attributes-api)

<hr />

## Policy API

### async securityClient.policy.addPolicy({ resource, attribute }, { accessToken })

Adds a new policy

Return object with policy id
```js
{
  id: string;
}
```
or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| resource              | `string`   | Policy resource                                          |
| attribute             | `string`   | Policy attribute                                         |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
const { id } = await securityClient.policy.addPolicy({ resource: "NEW_RESOURCE", attribute: "ATTR_1"}, { accessToken });
console.log(id);
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

[Back to Policy API](#policy-api)

<hr />

### async securityClient.policy.getPolicies({ page?, limit?, filter?, order? }, { accessToken })

Get policies list (if no query parameters returns first 25 policies)

Return object
```js
{
  policies: PolicyItem[];
  total: number;
  page: number;
  limit: number;
}
```
```
PolicyItem {
  id: string;
  resource: string;
  attribute: string;
}
```
or throw HttpError

##### Parameters

| Name         | Type       | Description                                     | Default |
|--------------|------------|-------------------------------------------------|---------|
| page         | `number`   | **optional** <p>Page number</p>                 | 1       |
| limit        | `number`   | **optional** <p>Number of results per page</p>  | 25      |
| filter       | `object`   | **optional** <p>[Query filter](#understanding-filters-and-ordering)</p>               | {}      |
| order        | `object`   | **optional** <p>[Order filter](#understanding-filters-and-ordering)</p>                | {}      |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### filter[column] = operator
```ts
export type GetPoliciesColumns = "id" | "resource" | "attribute";

export type GetPoliciesFilterOperators = "eq" | "neq" | "lt" | "gt" | "include" | "includeOr";
```

##### Example

```js
const policies = await securityClient.policy.getPolicies({}, { accessToken });
console.log(policies);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", resource: "api/users", attribute: "ADMIN_PANEL"}], total: 1, page: 1, limit: 25 }

const policies = await securityClient.policy.getPolicies({
  page: 1,
  limit: 10,
}, { accessToken });
console.log(policies);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", resource: "api/users", attribute: "ADMIN_PANEL"}], total: 1, page: 1, limit: 10 }

const policies = await securityClient.policy.getPolicies({
  page: 1,
  limit: 10,
  filter: {
    attribute: {
      eq: "ROLE_SUPERADMIN",
    }
  },
  order: {
    by: "resource",
    type: "asc",
  },
}, { accessToken });
console.log(policies);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", resource: "api/users", attribute: "ADMIN_PANEL"}], total: 1, page: 1, limit: 10 }
```

[Back to Policy API](#policy-api)

<hr />

### async securityClient.policy.removePolicy({ id }, { accessToken })

Removes a policy by id

Return an empty object or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| id                    | `string`   | Policy ID                                                |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
await securityClient.policy.removePolicy({ id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"}, { accessToken });
```

[Back to Policy API](#policy-api)

<hr />

### async securityClient.policy.removePolicy({ resource, attribute }, { accessToken })

Removes a policy by id

Return an empty object or throw HttpError

##### Parameters

| Name                  | Type       | Description                                              |
|-----------------------|------------|----------------------------------------------------------|
| resource              | `string`   | Policy resource                                          |
| attribute             | `string`   | Policy attribute                                         |

###### Options

| Name                  | Type       | Description                           |
|-----------------------|------------|---------------------------------------|
| apiKey                | `string`   | Api key                               |
| accessToken           | `string`   | Access token                          |

##### Example

```js
await securityClient.policy.removePolicy({ resource: "RESOURCE", attribute: "ATTR_1"}, { accessToken });
```

[Back to Policy API](#policy-api)

<hr />

### Understanding filters and ordering

Filters can be used search for a single condition or they can be wrapped in logical operands AND and OR. Filtering can be a simple conditional evaluation of a single field. The operator, `column`, and `operator` used in a filter are specific to the API they are used in.

```ts
//
interface UsersQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in Columns]: {
      [operator in Operators]: string;
    };
  };
  order?: {
    by: GetUserColumns;
    type: "asc" | "desc";
  };
}
```

- filter[column][operator] = value

  | Name                  | Type       | Description                                              |
  |-----------------------|------------|----------------------------------------------------------|
  | column                | `string`   | Column name, depending on the api method. See [getUsers](#getusers-filter-and-order) [getAttributes](#getattributes-filter-and-order) [getPolicies](#getpolicies-filter-and-order)             |
  | operator              | `string`   | Operator name, depending on the api method. See [getUsers](#getusers-filter-and-order) [getAttributes](#getattributes-filter-and-order) [getPolicies](#getpolicies-filter-and-order)                                     |
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
  | by                | `string`       | **optional** <p>column name for order sorting, depending on the api method. See [getUsers](#getusers-filter-and-order) [getAttributes](#getattributes-filter-and-order) [getPolicies](#getpolicies-filter-and-order)</p> | `id`    |
  | type              | `asc` or `desc`| **optional** <p>Ascending or descending order</p>                               | `asc`   |

  #### Examples
  ```js
  order: {
    by: "username",
    type: "desc"
  }
  ```

#### getUsers filter and order
[Get users method](#async-securityclientusersgetusers-page-limit-filter-order)

```js
column = "id" | "username" | "isActive" | "createdAt" | "updatedAt" | "attribute.name"
```

```js
operator = "eq"| "eqOr" | "neq" | "neqOr" | "lt" | "ltOr" | "gt" | "gtOr" | "gte" | "gteOr" | "include" | "includeOr"
```

#### getAttributes filter and order

[Get attributes method](#async-securityclientattributesgetattributes-page-limit-filter-order-)

```js
column = "id" | "name" | "user.id" | "user.username"`
```

```js
operator = "eq" | "eqOr" | "neq" | "lt" | "gt" | "include" | "includeOr"
```

#### getPolicies filter and order
[Get attributes method](#async-securityclientattributesgetattributes-page-limit-filter-order-)

```js
column = "id" | "resource" | "attribute"
```

```js
operator = "eq" | "neq" | "lt" | "gt" | "include" | "includeOr"
```

## License

[![license](https://img.shields.io/badge/license-MIT-4dc71f.svg)](https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## About us:

<a href="https://tsh.io"><b>The Software House</b></a>

<img src="https://raw.githubusercontent.com/TheSoftwareHouse/rad-modules-tools/master/assets/tsh.png" alt="tsh.png" width="150"  />  

