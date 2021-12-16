---
prev: /freshteam/candidate-sources
next: /freshteam/employees
---

# Departments

## List all departments

```js
const depts = await ft.departments.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Department` objects

## Get department by ID

```js
const dept = await ft.departments.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Department` object
