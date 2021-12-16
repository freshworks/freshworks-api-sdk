# Freshworks API SDK

Node.js SDK for working with Freshworks HTTP APIs. Currently supports Freshteam.

## Installation

```
npm install --save @freshworks/api-sdk
```

## Supported product APIs

| Product   | Status |
| --------- | ------ |
| Freshteam | ✅     |

## Get started

```js
const { Freshteam } = require("@freshworks/api-sdk");

const ft = new Freshteam(domain, apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const employees = await ft.employees.list({ first_name: "Arthur", last_name: "Dent" });
```

## Documentation

- [**Freshworks API SDK documentation**](https://developers.freshworks.com/api-sdk/)
- [Sample code](https://github.com/freshworks-developers/api-sdk-samples)

---

## License

MIT
