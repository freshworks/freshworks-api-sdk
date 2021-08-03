# Freshteam REST API SDK

Get started:

```js
const { Freshteam } = require("@freshworks/freshworks-api-sdk");

const ft = new Freshteam("xxxx.freshteam.com");
```

Call a method, e.g., list all employees:

```js
async function allEmployees() {
  // Use a try-catch here
  const res = await ft.employee.all();
}
```
