---
prev: /freshteam/job-postings
next: /freshteam/new-hires
---

# Levels

## List all levels

```js
const levels = await ft.levels.list();
// use levels.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Level` objects

## Get level by ID

```js
const level = await ft.levels.get(id);
// use level.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Level` object
