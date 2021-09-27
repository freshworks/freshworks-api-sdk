# Freshteam REST API SDK

Get started:

```js
const { Freshteam } = require("@freshworks/freshworks-api-sdk");

const ft = Freshteam("xxxx.freshteam.com", apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const employees = await ft.employees.list({ first_name: "Arthur", last_name: "Dent" });
```
