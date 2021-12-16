---
prev: /freshteam/branches
next: /freshteam/candidate-sources
---

# Business units

## List all business units

```js
const buList = await ft.businessUnits.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.BusinessUnit` objects

## Get business unit by ID

```js
const bu = await ft.businessUnits.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.BusinessUnit` object
