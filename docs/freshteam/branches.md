---
prev: /freshteam/applicants
next: /freshteam/business-units
---

# Branches

## List all branches

```js
const branches = await ft.branches.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Branch` objects

## Get branch by ID

```js
const branch = await ft.branches.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Branch` object
