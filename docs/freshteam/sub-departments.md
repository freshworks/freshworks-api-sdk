---
prev: /freshteam/roles
next: /freshteam/teams
---

# Sub-departments

## List all sub-departments

```js
const subDepts = await ft.subDepartments.list();
// use subDepts.json() to access data
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.SubDepartment` objects

## Get sub-department by ID

```js
const subDept = await ft.subDepartments.get(id);
// use subDept.json() to access data
```

- Returns a `Promise` that resolves to a `Freshteam.models.SubDepartment` object
