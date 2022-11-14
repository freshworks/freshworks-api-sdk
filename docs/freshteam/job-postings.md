---
prev: /freshteam/employees
next: /freshteam/levels
---

# Job postings

## List all job postings

```js
const jobList = await ft.jobPostings.list(query);
// use jobList.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Job` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_job_postings).

## Get job posting by ID

```js
const job = await ft.jobPostings.get(id);
// use job.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Job` object

## Create an applicant

```js
const newApplicant = await ft.jobPostings.createApplicant(jobPostingId, applicant);
// use newApplicant.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.ApplicantDetail` object
- The first argument is the job posting ID for which to create an applicant
- The second argument is an object of type `Freshteam.models.ApplicantCreate`

## List job posting fields

```js
const fields = await ft.jobPostings.listFields();
// use fields.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Jobfield` objects

## List applicant fields

```js
const fields = await ft.jobPostings.listApplicantFields();
// use fields.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.Applicantfield` objects
- The first argument is the job posting ID to fetch applicant fields from
