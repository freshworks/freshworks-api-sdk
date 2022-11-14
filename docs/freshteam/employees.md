---
prev: /freshteam/departments
next: /freshteam/job-postings
---

# Employees

## List all employees

```js
const empList = await ft.employees.list(query);
```

- Returns a `Response` object containing `Array` of `Freshteam.models.Employee` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_employees).

## Get employee by ID

```js
const emp = await ft.employees.get(id);
// use emp.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.EmployeeDetail` object

## Create an employee

```js
const newEmp = await ft.employees.create(employee);
// use newEmp.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Employee` object
- The first argument is of type `Freshteam.models.EmployeeCreate`

## Update an employee

```js
const updatedEmp = await ft.employees.update(id, employee);
// use updatedEmp.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.Employee` object
- The first argument is the employee ID
- The second argument is an object of type `Freshteam.models.Employee`

## List all employee fields

```js
const fields = await ft.employees.fields();
// use fields.json() to access data
```

- Returns a `Response` object that resolves to an `Array` of `Freshteam.models.EmployeeField` objects

## Create an employee field

```js
const newEmpField = await ft.employees.createField(field);
// use newEmpField.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.EmployeeField` object
- The first argument is of type `Freshteam.models.EmployeeFieldCreate`
