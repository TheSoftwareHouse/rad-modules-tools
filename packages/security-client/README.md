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
