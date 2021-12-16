---
prev: /freshteam
next: /freshteam/branches
---

# Applicants

## List all applicants

```js
const applicants = await ft.applicants.list(jobPostingId, query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.ApplicantDetail` objects
- The second argument provides queries accepted by the REST API. (TODO: Document the query parameters)

## Get applicant by ID

```js
const applicant = await ft.applicants.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object

## Update an applicant

```js
const applicant = await ft.applicants.update(id, applicant);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantUpdate`

## Archive an applicant

```js
const applicant = await ft.applicants.archive(id, options);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantArchive`

## Update applicant sub-stage

```js
const applicant = await ft.applicants.updateSubStage(id, options);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantSubStage`
