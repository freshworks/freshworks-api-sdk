# Freshteam REST API SDK

## Get started

```js
const { Freshteam } = require("@freshworks/freshworks-api-sdk");

const ft = new Freshteam("xxxx.freshteam.com", apiKey);
```

Call a method, e.g., list all employees (who match a search criteria):

```js
const employees = await ft.employees.list({ firstName: "Arthur", lastName: "Dent" });
```

# Models

The `Freshteam` class includes a static property called `models`. All models used by the API methods below can be accessed from there.

For example:

```js
// Create a new EmployeeCreate model to pass to employees.create() method
const newEmp = new Freshteam.models.EmployeeCreate("Arthur", "Dent", "arthur@heartofgold.com", [300060409]);
```

# API methods

API methods are the methods you'd interact primarily with. Each method is `async` and returns a `Promise`. So, you can either chain the method calls with `.then()` or call them using `async/await` syntax.

## Applicants

### List all applicants

```js
const applicants = await ft.applicants.list(jobPostingId, query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.ApplicantDetail` objects
- The second argument provides queries accepted by the REST API. (TODO: Document the query parameters)

### Get applicant by ID

```js
const applicant = await ft.applicants.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object

### Update an applicant

```js
const applicant = await ft.applicants.update(id, applicant);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantUpdate`

### Archive an applicant

```js
const applicant = await ft.applicants.archive(id, options);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantArchive`

### Update applicant sub-stage

```js
const applicant = await ft.applicants.updateSubStage(id, options);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The second argument is of type `Freshteam.models.ApplicantSubStage`

## Branches

### List all branches

```js
const branches = await ft.branches.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Branch` objects

### Get branch by ID

```js
const branch = await ft.branches.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Branch` object

## Business units

### List all business units

```js
const buList = await ft.businessUnits.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.BusinessUnit` objects

### Get business unit by ID

```js
const bu = await ft.businessUnits.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.BusinessUnit` object

## Candidate sources

### List all candidate sources

```js
const sources = await ft.candidateSources.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Source` objects

### Create a candidate source

```js
const newSource = await ft.candidateSources.create(source);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Source` object
- The first argument is of type `Freshteam.models.SourceCreate`

### List candidate source categories

```js
const categories = await ft.candidateSources.listCategories();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.SourceCategory` objects

## Departments

### List all departments

```js
const depts = await ft.departments.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Department` objects

### Get department by ID

```js
const dept = await ft.departments.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Department` object

## Employees

### List all employees

```js
const empList = await ft.employees.list(query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Employee` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_employees), specified using a lowerCamelCase property naming convention. So, `first_name` becomes `firstName`. (TODO: Document the query parameters)

### Get employee by ID

```js
const emp = await ft.employees.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.EmployeeDetail` object

### Create an employee

```js
const newEmp = await ft.employees.create(employee);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Employee` object
- The first argument is of type `Freshteam.models.EmployeeCreate`

### Update an employee

```js
const updatedEmp = await ft.employees.update(id, employee);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Employee` object
- The first argument is the employee ID
- The second argument is an object of type `Freshteam.models.Employee`

### List all employee fields

```js
const fields = await ft.employees.fields();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.EmployeeField` objects

### Create an employee field

```js
const newEmpField = await ft.employees.createField(field);
```

- Returns a `Promise` that resolves to a `Freshteam.models.EmployeeField` object
- The first argument is of type `Freshteam.models.EmployeeFieldCreate`

## Job postings

### List all job postings

```js
const jobList = await ft.jobPostings.list(query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Job` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_job_postings), specified using a lowerCamelCase property naming convention. So, `location_city` becomes `locationCity`. (TODO: Document the query parameters)

### Get job posting by ID

```js
const job = await ft.jobPostings.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Job` object

### Create an applicant

```js
const newApplicant = await ft.jobPostings.createApplicant(jobPostingId, applicant);
```

- Returns a `Promise` that resolves to a `Freshteam.models.ApplicantDetail` object
- The first argument is the job posting ID for which to create an applicant
- The second argument is an object of type `Freshteam.models.ApplicantCreate`

### List job posting fields

```js
const fields = await ft.jobPostings.listFields();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Jobfield` objects

### List applicant fields

```js
const fields = await ft.jobPostings.listApplicantFields();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Applicantfield` objects
- The first argument is the job posting ID to fetch applicant fields from

## Levels

### List all levels

```js
const levels = await ft.levels.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Level` objects

### Get level by ID

```js
const level = await ft.levels.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Level` object

## New hires

### Create a new hire

```js
const newHire = await ft.newHires.create(data);
```

- Returns a `Promise` that resolves to a `Freshteam.models.NewHire` object
- The first argument is of type `Freshteam.models.NewHireCreate`

### Get new hire by ID

```js
const newHireDetails = await ft.newHires.get(id, options);
```

- Returns a `Promise` that resolves to a `Freshteam.models.EmployeeDetail` object
- The first argument is ID of the new hire
- The second argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#retrieve_new_hire_information), specified using a lowerCamelCase property naming convention. So, `reporting_to` becomes `reportingTo`. (TODO: Document the query parameters)

  - The property `options.include` can be added as an `Array` of `string` to include additional resources in the response, e.g.:

  ```js
  await ft.newHires.get(id, { include: ["branch", "team"], ...otherOptions });
  ```

### Update an new hire

```js
const updatedNewHire = await ft.newHires.update(id, data);
```

- Returns a `Promise` that resolves to a `Freshteam.models.NewHire` object
- The first argument is the new hire ID
- The second argument is an object of type `Freshteam.models.NewHireCreate`

## Roles

### List all roles

```js
const roles = await ft.roles.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Role` objects

### Get role by ID

```js
const role = await ft.roles.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Role` object

## Sub-departments

### List all sub-departments

```js
const subDepts = await ft.subDepartments.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.SubDepartment` objects

### Get sub-department by ID

```js
const subDept = await ft.subDepartments.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.SubDepartment` object

## Teams

### List all teams

```js
const teams = await ft.teams.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.Team` objects

### Get team by ID

```js
const team = await ft.teams.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.Team` object

## Time offs

### List all time-off types

```js
const leaveTypes = await ft.timeOffs.types();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.LeaveType` objects

### Get time-off type by ID

```js
const leaveType = await ft.timeOffs.type(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.LeaveType` object

### List all time-off requests

```js
const leaveReqList = await ft.timeOffs.list(query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.LeaveRequest` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_leave_requests), specified using a lowerCamelCase property naming convention. So, `leave_type` becomes `leaveType`. (TODO: Document the query parameters)

### Create a time-off

```js
const newLeaveReq = await ft.timeOffs.create(leaveRequest);
```

- Returns a `Promise` that resolves to a `Freshteam.models.LeaveRequest` object
- The first argument is an object of type `Freshteam.models.LeaveRequestCreate`

### Get time-off by ID

```js
const leave = await ft.timeOffs.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.LeaveRequest` object

### Approve time-off by ID

```js
const res = await ft.timeOffs.approve(id, options);
```

- Returns a `Promise` that resolves to `null` if request was successful
- The second argument is an object of type `Freshteam.models.LeaveRequestApprove`

### Reject time-off by ID

```js
const res = await ft.timeOffs.reject(id, options);
```

- Returns a `Promise` that resolves to `null` if request was successful
- The second argument is an object of type `Freshteam.models.LeaveRequestReject`

### Cancel time-off by ID

```js
const res = await ft.timeOffs.cancel(id);
```

- Returns a `Promise` that resolves to `null` if request was successful

## User functions

### List all user functions

```js
const userFns = await ft.userFunctions.list();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.UserFunction` objects

### Get user function by ID

```js
const userFn = await ft.userFunctions.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.UserFunction` object
