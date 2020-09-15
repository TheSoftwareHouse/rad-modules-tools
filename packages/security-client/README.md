# `Security Client`
## Install

```sh
$ npm install @tshio/security-client
```

## Loading the module

```js
// CommonJS
const SecurityClient = require('@tshio/security-client');

// ES Module
import SecurityClient from '@tshio/security-client';
```

## Usage

### Login and authorization

```js
const SecurityClient = require('@tshio/security-client');

(async () => {
    const securityClient = SecurityClient.getSecurityClient();
    const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
	
    console.log(token);
    // => { accessToken: "xxx", refreshToken: "xxx" }
   
    securityClient.setToken(token); // From now, the token will be automatically added to all API requests
})();
```

## API

### securityClient.setToken(token)

Set the token object for authorize api requests.

**This command is crucial, the token will be used for authorization all of api requests.**

#### token

Type: `object`

##### accessToken

Type: `string`

##### refreshToken

Type: `string`

## Auth API

### async securityClient.auth.login(credentials)

Login to rad-security

Returns a Token object or throw HttpError

#### credentials

Type: `object`

##### username

Type: `string`

##### password

Type: string

```js
const token = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
console.log(token);
// => { accessToken: "...", refreshToken: "..." }
```

### async securityClient.auth.resetPassword({resetPasswordToken, newPassword?})

Reset password

Returns a new password or throw HttpError

#### resetPasswordRequest

Type: `object`

##### resetPasswordToken

Type: `string`

##### newPassword

Type: string

The `newPassword` is optional. If `undefined`, the password will be generated randomly
.
```js
const token = await securityClient.auth.resetPassword({ 
  resetPasswordToken: "reset password token...", 
  newPassword: "NewSuperSecret",
});
```

### async securityClient.auth.refreshToken(token)

Refreshes access token.

Returns a new Token object or throw HttpError

#### token

Type: `object`

##### accessToken

Type: `string`

##### refreshToken

Type: `string`


### async securityClient.auth.refreshUserActiveToken(userId)

Refresh user's active token if token has expired.

Returns a new Token object or throw HttpError

#### userId

Type: `string`


## Users API

### async securityClient.users.getUsers(queryFilter)

Get users list (if no query parameters returns first 25 users)

#### queryFilter

Type: `object`

##### page

Type: `number`

Optional, default value: `1`

##### limit

Type: `number`

Optional, default value: `25`

##### filter

Type: `object`

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

##### order

Type: `object`

##### order.by

Type: `string`

Default: `id`

Values: `id | username | isActive | createdAt | updatedAt | attribute.name`

##### order.type

Type: `string`

Default: `asc`

Values: `asc` | `desc`

Examples:
```js
const users = await securityClient.users.getUsers();
console.log(users);
// => { users: [...], total: 1, page: 1, limit: 25, }

const users = await securityClient.users.getUsers({
  page: 1,
  limit: 10,
});
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
});
console.log(users);
// => { users: [{username: "superadmin", ...}, ...], total: 1, page: 1, limit: 10, }
```

### async securityClient.users.activateUser({ activationToken })

Activate a new user

Returns an object
```ts
{
  userId: string,
  isActive: boolean
}
```
or throw HttpError

#### activationToken

Type: `string`

Activation token

```js
const result = await securityClient.auth.activateUser({ 
  activationToken: "activation token..."
});

console.log(result);
// => { userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", isActive: true } 
```

### async securityClient.users.deactivateUser({ userId })

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

#### userId

Type: `string`

User ID

```js
const result = await securityClient.auth.deactivateUser({ 
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
});

console.log(result);
// => { userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", isActive: false,  deactivationDate: Date Tue Sep 15 2020 14:03:25 GMT+0200 (Central European Summer Time)} 
```

### async securityClient.users.isAuthenticated()

Am I logged?

Returns `{ isAuthenticated: boolean }` or throw HttpError

```js
const  { isAuthenticated } = await securityClient.users.isAuthenticated();

console.log(isAuthenticated);
// => true
```

### async securityClient.users.hasAttributes(attributes)

Check if the user has access to provided attributes

Returns an object
```ts
{
  hasAllAttributes: boolean;
}
```
or throw HttpError

#### attributes

Type: `array`

Array of attributes

```js
const { hasAllAttributes } = await securityClient.users.hasAttributes(["ADMIN_PANEL"]);

console.log(result);
// => true
```


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
- filter
  - Single parameter filter
    ```js
    filter: {
      username: {
        include: "super"
      }
    }
    ```
  - Two parameter filter
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
  
  Type: `object`
  - by
  
    type: `string`
    
    default: `id`
  - type
    
    type: `string`
    
    default: `asc`
    
  Example:
  ```js
  order: {
    by: "username",
    type: "desc"
  }
  ```
- page
  
  type: `number`
  
  default: `1`
- limit

  type: `number`
  
  default: `25`
