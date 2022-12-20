---
title: Freshteam
prev: /get-started
next: /freshteam/applicants
---

## Quick start

Follow [installation instructions](/get-started.md#install) to install the API SDK, and then bring the `Freshteam` class into scope.

```js
const { Freshteam } = require("@freshworks/api-sdk");

const ft = new Freshteam(domain, apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const res = await ft.employees.list({ first_name: "Arthur", last_name: "Dent" });
// Access the response body as an Array of `Employee` objects
const employees = res.json();
```

## Models

The `Freshteam` class includes a static property called `models`. All models used by the API methods below can be accessed from there.

For example:

```js
// Create a new EmployeeCreate model to pass to employees.create() method
const newEmp = new Freshteam.models.EmployeeCreate("Arthur", "Dent", "arthur@heartofgold.com", [300060409]);
```

## API methods

API methods are the methods you'd interact primarily with. Each method is `async` and returns a `Promise`. So, you can either chain the method calls with `.then()` or call them using `async/await` syntax.

- [Applicants](applicants.md)
- [Branches](branches.md)
- [Business units](business-units.md)
- [Candidate sources](candidate-sources.md)
- [Departments](departments.md)
- [Employees](employees.md)
- [Job postings](job-postings.md)
- [Levels](levels.md)
- [New hires](new-hires.md)
- [Roles](roles.md)
- [Sub-departments](sub-departments.md)
- [Teams](teams.md)
- [Time-offs](time-offs.md)
- [User functions](user-functions.md)
