---
prev: /freshteam/sub-departments
next: /freshteam/time-offs
---

# Teams

## List all teams

```js
const teams = await ft.teams.list();
// use teams.json() to access data
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Team` objects

## Get team by ID

```js
const team = await ft.teams.get(id);
// use team.json() to access data
```

- Returns a `Promise` that resolves to a `Freshteam.models.Team` object
