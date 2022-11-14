---
prev: /freshteam/levels
next: /freshteam/roles
---

# New hires

## Create a new hire

```js
const newHire = await ft.newHires.create(data);
// use newHire.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.NewHire` object
- The first argument is of type `Freshteam.models.NewHireCreate`

## Get new hire by ID

```js
const newHireDetails = await ft.newHires.get(id, options);
// use newHireDetails.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.EmployeeDetail` object
- The first argument is ID of the new hire
- The second argument is an `Array` of `string` containing [names of related records to include](https://developers.freshteam.com/api/#retrieve_new_hire_information)

  - The property `options.include` can be added as an `Array` of `string` to include additional resources in the response, e.g.:

  ```js
  await ft.newHires.get(id, { include: ["branch", "team"], ...otherOptions });
  // use newHires.json() to access data
  ```

## Update an new hire

```js
const updatedNewHire = await ft.newHires.update(id, data);
// use updatedNewHire.json() to access data
```

- Returns a `Response` object that resolves to a `Freshteam.models.NewHire` object
- The first argument is the new hire ID
- The second argument is an object of type `Freshteam.models.NewHireCreate`
