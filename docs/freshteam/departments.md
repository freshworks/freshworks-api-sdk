---
prev: /freshteam/candidate-sources
next: /freshteam/employees
---

# Departments

## List all departments

```js
const depts = await ft.departments.list();
// use depts.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Department` objects

## Get department by ID

```js
const dept = await ft.departments.get(id);
// use dept.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Department` object
