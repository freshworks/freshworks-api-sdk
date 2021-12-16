---
prev: /freshteam/employees
next: /freshteam/levels
---

# Job postings

## List all job postings

```js
const jobList = await ft.jobPostings.list(query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Job` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_job_postings).

## Get job posting by ID

```js
const job = await ft.jobPostings.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Job` object

## Create an applicant

```js
const newApplicant = await ft.jobPostings.createApplicant(jobPostingId, applicant);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The first argument is the job posting ID for which to create an applicant
- The second argument is an object of type `Freshteam.models.ApplicantCreate`

## List job posting fields

```js
const fields = await ft.jobPostings.listFields();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Jobfield` objects

## List applicant fields

```js
const fields = await ft.jobPostings.listApplicantFields();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Applicantfield` objects
- The first argument is the job posting ID to fetch applicant fields from
