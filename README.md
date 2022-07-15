# Freshworks API SDK

Node.js SDK for working with Freshworks HTTP APIs. Currently supports Freshteam and Freshrelease.

## Installation

``` sh
npm install --save @freshworks/api-sdk
```

## Supported product APIs

| Product      | Status |
| ------------ | ------ |
| Freshteam    | ✅     |
| Freshservice | ✅     |

## Get started

This section depicts example of using different API capabilities offered with examples

### Freshteam

This section depicts example of interacting with Freshteam API

```js
const { Freshteam } = require("@freshworks/api-sdk");

const ft = new Freshteam(domain, apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const employees = await ft.employees.list({ first_name: "Arthur", last_name: "Dent" });
```

### Freshservice

This section depicts example of interacting with Freshservice API

```js
const { Freshservice } = require("@freshworks/api-sdk");

const fs = new Freshservice(domain, apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const employees = await fs.employees.list({ first_name: "Arthur", last_name: "Dent" });
```

## Documentation

- [**Freshworks API SDK documentation**](https://developers.freshworks.com/api-sdk/)
- [Sample code](https://github.com/freshworks-developers/api-sdk-samples)

---

## License

MIT
