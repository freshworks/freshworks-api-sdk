---
prev: /freshteam/business-units
next: /freshteam/departments
---

# Candidate sources

## List all candidate sources

```js
const sources = await ft.candidateSources.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Source` objects

## Create a candidate source

```js
const newSource = await ft.candidateSources.create(source);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Source` object
- The first argument is of type `Freshteam.models.SourceCreate`

## List candidate source categories

```js
const categories = await ft.candidateSources.listCategories();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.SourceCategory` objects
