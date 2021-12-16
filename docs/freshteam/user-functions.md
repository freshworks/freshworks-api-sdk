---
prev: /freshteam/time-offs
next: /freshteam
---

# User functions

## List all user functions

```js
const userFns = await ft.userFunctions.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.UserFunction` objects

## Get user function by ID

```js
const userFn = await ft.userFunctions.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.UserFunction` object
