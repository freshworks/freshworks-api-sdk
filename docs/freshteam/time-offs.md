---
prev: /freshteam/teams
next: /freshteam/user-functions
---

# Time offs

## List all time-off types

```js
const leaveTypes = await ft.timeOffs.types();
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.LeaveType` objects

## Get time-off type by ID

```js
const leaveType = await ft.timeOffs.type(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.LeaveType` object

## List all time-off requests

```js
const leaveReqList = await ft.timeOffs.list(query);
```

- Returns a `Promise` that resolves to an `Array` of `Freshteam.models.LeaveRequest` objects
- The first argument is an `object` containing [query parameters accepted by the REST API](https://developers.freshteam.com/api/#list_all_leave_requests).

## Create a time-off

```js
const newLeaveReq = await ft.timeOffs.create(leaveRequest);
```

- Returns a `Promise` that resolves to a `Freshteam.models.LeaveRequest` object
- The first argument is an object of type `Freshteam.models.LeaveRequestCreate`

## Get time-off by ID

```js
const leave = await ft.timeOffs.get(id);
```

- Returns a `Promise` that resolves to a `Freshteam.models.LeaveRequest` object

## Approve time-off by ID

```js
const res = await ft.timeOffs.approve(id, options);
```

- Returns a `Promise` that resolves to `null` if request was successful
- The second argument is an object of type `Freshteam.models.LeaveRequestApprove`

## Reject time-off by ID

```js
const res = await ft.timeOffs.reject(id, options);
```

- Returns a `Promise` that resolves to `null` if request was successful
- The second argument is an object of type `Freshteam.models.LeaveRequestReject`

## Cancel time-off by ID

```js
const res = await ft.timeOffs.cancel(id);
```

- Returns a `Promise` that resolves to `null` if request was successful
