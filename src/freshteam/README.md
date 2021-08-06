# Freshteam REST API SDK

Get started:

```js
const { freshteam } = require("@freshworks/freshworks-api-sdk");

const ft = freshteam("xxxx.freshteam.com", apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const res = await ft.employees.list({ first_name: "Arthur", last_name: "Dent" });
```
