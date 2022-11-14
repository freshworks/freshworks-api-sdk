---
prev: /freshteam/branches
next: /freshteam/candidate-sources
---

# Business units

## List all business units

```js
const buList = await ft.businessUnits.list();
// use buList.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.BusinessUnit` objects

## Get business unit by ID

```js
const bu = await ft.businessUnits.get(id);
// use bu.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.BusinessUnit` object
