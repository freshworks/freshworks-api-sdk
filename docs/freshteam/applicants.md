---
prev: /freshteam
next: /freshteam/branches
---

# Applicants

## List all applicants

```js
const applicants = await ft.applicants.list(jobPostingId, query);
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.ApplicantDetail` objects
- The second argument provides queries accepted by the REST API. (TODO: Document the query parameters)

## Get applicant by ID

```js
const applicant = await ft.applicants.get(id);
// use applicant.json() to access objects
```

- Returns a `Response` object that resolves to a `Freshteam.models.ApplicantDetail` object

## Update an applicant

```js
const applicant = await ft.applicants.update(id, applicant);
// use applicant.json() to access objects
```

- Returns a `Response` object that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantUpdate`

## Archive an applicant

```js
const applicant = await ft.applicants.archive(id, options);
// use applicant.json() to access objects
```

- Returns a `Response` object that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantArchive`

## Update applicant sub-stage

```js
const applicant = await ft.applicants.updateSubStage(id, options);
// use applicant.json() to access objects
```

- Returns a `Response` object that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantSubStage`
