---
prev: /freshteam/new-hires
next: /freshteam/sub-departments
---

# Roles

## List all roles

```js
const roles = await ft.roles.list();
// use roles.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Role` objects

## Get role by ID

```js
const role = await ft.roles.get(id);
// use role.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Role` object
