# Freshworks API SDK

Node.js SDK for working with Freshworks HTTP APIs. Currently supports Freshteam and partially supports Freshservice.

## Installation

```sh
npm install --save @freshworks/api-sdk
```

## Supported product APIs

| Product      | Status |
| ------------ | ------ |
| Freshteam    | ✅     |
| Freshservice | 🏁     |

🏁 - Partially supported services

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
const res = await ft.employees.list({ first_name: "Arthur", last_name: "Dent" });
// Access the response body as an Array of `Employee` objects
const employees = res.json();
```

### Freshservice

This section depicts example of interacting with Freshservice API

```js
const { Freshservice } = require("@freshworks/api-sdk");

const fs = new Freshservice(domain, apiKey);
```

Call a method, e.g., fetch a Freshservice Ticket

```js
// Get a tick with given ticket ID
const res = await fs.tickets.get(14000239432);
// Access the response body as a `Ticket` object
const ticket = res.json();
```

## Documentation

- [**Freshworks API SDK documentation**](https://developers.freshworks.com/api-sdk/)
- [Sample code](https://github.com/freshworks-developers/api-sdk-samples)

---

## License

MIT
