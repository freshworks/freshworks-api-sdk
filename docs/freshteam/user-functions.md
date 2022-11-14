---
prev: /freshteam/time-offs
next: /freshservice
---

# User functions

## List all user functions

```js
const userFns = await ft.userFunctions.list();
// use userFns.json() to access data
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.UserFunction` objects

## Get user function by ID

```js
const userFn = await ft.userFunctions.get(id);
// use userFn.json() to access data
```

- Returns a `Promise` that resolves to a `Freshteam.models.UserFunction` object
