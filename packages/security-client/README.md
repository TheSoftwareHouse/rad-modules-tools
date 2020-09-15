# `Security Client`

## Table of Contents
=================

  * [Install](#install)
  * [Loading and configuration](#loading-and-configuration-module)
  * [Usage](#usage)
  * [API](#api)
    * [Authorization](#authorization-api)
    * [Token](#token-api)
    * [Users](#users-api)
    * [Attributes](#attributes-api)
    * [Policy](#policy-api)
  
## Install

```sh
$ npm install @tshio/security-client
```

## Loading and configuration module

```js
// CommonJS
const { getSecurityClient } = require('@tshio/security-client');

// ES Module
import { getSecurityClient } from '@tshio/security-client';


const options = {
  host: "localhost",
  port: "50050",
}

const securityClient = getSecurityClient(options);
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

## Authorization API

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

Check if the user has provided attributes

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

### async securityClient.users.hasAccess(resources)

Check if the user has access to provided resources

Returns an object
```ts
{
  hasAccess: boolean;  // true if the user has access to all of the resources
  forbidden: string[]; // list of forbidden resources
}
```
or throw HttpError

#### resources

Type: `array`

Array of resources

```js
const result = await securityClient.users.hasAccess(["api/users"]);

console.log(result);
// => { hasAccess: true, forbidden: [] }
```

### async securityClient.users.addAttributes({ userId, attributes })

Add attributes to the user

Returns an empty object or throw HttpError

#### userId

Type: `string`

User ID

#### attributes

Type: `array`

Array of attributes

```js
await securityClient.users.addAttributes({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", 
  attributes: ["ATTR_1", "ATTR_2"]
});
```

### async securityClient.users.removeAttributes({ userId, attributes })

Remove attributes from the user

Returns an empty object or throw HttpError

#### userId

Type: `string`

User ID

#### attributes

Type: `array`

Array of attributes

```js
await securityClient.users.removeAttributes({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", 
  attributes: ["ATTR_1", "ATTR_2"]
});
```

### async securityClient.users.addUser({ username, password, attributes? })

Create a new user

Returns an object
```js
{
  newUserId: string;
}
```
throw HttpError

#### username

Type: `string`

New user username

#### password

Type: `string`

New user password

#### attributes

Type: `array`

Array of attributes, optional.

```js
const { newUserId } = await securityClient.users.addUser({
  username: "new-user", 
  password: "password",
  attributes: ["ADMIN_PANEL"],
});

console.log(newUserId);
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

### async securityClient.users.deleteUser({ userId })

Delete user

Returns an empty object or throw HttpError

#### userId

Type: `string`

User ID

```js
await securityClient.users.getUser({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382",
});
```

### async securityClient.users.getUser({ userId })

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

#### userId

Type: `string`

User ID

```js
const result = await securityClient.users.getUser({
  userId: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382",
});
```

### async securityClient.users.getUserId({ username })

Get user id

Returns an object 
```js
{
  userId: string;
}
```
or throw HttpError

#### username

Type: `string`

User username

```js
const { userId } = await securityClient.users.getUserId({
  username: "superadmin",
});
console.log(userId)
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

### async securityClient.users.getUserByResources({ resource, page?, limit? })

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

#### resource

Type: `string`

Resource name

#### page

Type: `number`

Page, optional

Default: `1`

#### limit

Type: `number`

Limit, optional `1-10000`

Default: `25`
```js
const result = await securityClient.getUserByResources.getUserId({
  resource: "RES1",
});
console.log(result)
// => { users: [...],  total: 5, page: 1, limit: 25 }
```

### async securityClient.users.setPassword({ username, oldPassword, newPassword })

Set a new password for user

Returns an object 
```js
{
  passwordChanged: boolean;
}
```
or throw HttpError

#### username

Type: `string`

User username

#### oldPassword

Type: `string`

User password

#### newPassword

Type: `string`

The new user password
```js
const { passwordChanged } = await securityClient.getUserByResources.setPassword({
  username: "superadmin",
  oldPassword: "superadmin",
  newPassword: "My new password"
});
console.log(passwordChanged)
// => true
```

### async securityClient.users.passwordResetToken({ username })

Returns token which will be used to reset the user password

Returns an object 
```js
{
  resetPasswordToken: string;
}
```
or throw HttpError

#### username

Type: `string`

User username

```js
const { resetPasswordToken } = await securityClient.passwordResetToken.setPassword({
  username: "superadmin"
});
console.log(resetPasswordToken)
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

## Attributes API

### async securityClient.attributes.getAttributes(queryFilter?)

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
export type GetAttributesColumns = "id" | "name" | "user.id" | "user.username";

export type GetAttributesFilterOperators = "eq" | "eqOr" | "neq" | "lt" | "gt" | "include" | "includeOr";

```

##### order

Type: `object`

##### order.by

Type: `string`

Default: `id`

Values: `id | name | user.id | user.username`

##### order.type

Type: `string`

Default: `asc`

Values: `asc` | `desc`

Examples:
```js
const attributes = await securityClient.attributes.getAttributes();
console.log(attributes);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", name: "ROLE_SUPERADMIN", userId: "21637dee-3d21-4cd4-aa0f-117d1a11b123", username: "superadmin}], total: 1, page: 1, limit: 25, }

const attributes = await securityClient.attributes.getAttributes({
  page: 1,
  limit: 10,
});
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
});
console.log(users);
// => { users: [{username: "superadmin", ...}, ...], total: 1, page: 1, limit: 10, }
```


## Policy API

### async securityClient.policy.addPolicy(policy)

Adds a new policy

Return object with policy id
```js
{
  id: string;
}
```
or throw HttpError

#### policy

Type: `object`

##### resource

Type: `string`

Resource name

##### attribute

Type: `string`

Attribute name

Examples:
```js
const { id } = await securityClient.policy.addPolicy({ resource: "NEW_RESOURCE", attribute: "ATTR_1"});
console.log(id);
// => "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"
```

### async securityClient.policy.getPolicies(queryFilter)

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
export type GetPoliciesColumns = "id" | "resource" | "attribute";

export type GetPoliciesFilterOperators = "eq" | "neq" | "lt" | "gt" | "include" | "includeOr";
```

##### order

Type: `object`

##### order.by

Type: `string`

Default: `id`

Values: `id | resource | attribute`

##### order.type

Type: `string`

Default: `asc`

Values: `asc` | `desc`

Examples:
```js
const policies = await securityClient.policy.getPolicies();
console.log(policies);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", resource: "api/users", attribute: "ADMIN_PANEL"}], total: 1, page: 1, limit: 25 }

const policies = await securityClient.policy.getPolicies({
  page: 1,
  limit: 10,
});
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
});
console.log(policies);
// => { attributes: [{id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382", resource: "api/users", attribute: "ADMIN_PANEL"}], total: 1, page: 1, limit: 10 }
```

### async securityClient.policy.removePolicy(policyId | policyQuery)

Removes a policy (identified either by id or resource and attribute)

Return an empty object or throw HttpError

#### policyId

Type: `object`

##### id

Type: `string`

Policy id

#### policyQuery

Type: `object`

##### resource

Type: `string`

Resource name

##### attribute

Type: `string`

Attribute name

Examples:
```js
await securityClient.policy.removePolicy({ resource: "RESOURCE", attribute: "ATTR_1"});

// or

await securityClient.policy.removePolicy({ id: "45287eff-cdb0-4cd4-8a0f-a07d1a11b382"});
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
