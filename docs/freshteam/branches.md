---
prev: /freshteam/applicants
next: /freshteam/business-units
---

# Branches

## List all branches

```js
const branches = await ft.branches.list();
// use branches.json to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Branch` objects

## Get branch by ID

```js
const branch = await ft.branches.get(id);
// use branch.json to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Branch` object
