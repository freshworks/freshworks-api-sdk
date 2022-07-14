# FreshserviceApiSdkCodegen.ProblemsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                              | HTTP request                                                          | Description                      |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------- |
| [**createProblem**](ProblemsApi.md#createProblem)                   | **POST** /api/v2/problems                                             | Create Problem                   |
| [**createProblemNote**](ProblemsApi.md#createProblemNote)           | **POST** /api/v2/problems/{problem_id}/notes                          | Create Note on a problem         |
| [**createProblemTask**](ProblemsApi.md#createProblemTask)           | **POST** /api/v2/problems/{problem_id}/tasks                          | Create Task on a problem         |
| [**createProblemTimeEntry**](ProblemsApi.md#createProblemTimeEntry) | **POST** /api/v2/problems/{problem_id}/time_entries                   | Create time entry on a problem   |
| [**deleteProblem**](ProblemsApi.md#deleteProblem)                   | **DELETE** /api/v2/problem/{problem_id}                               | Delete Problem                   |
| [**deleteProblemNote**](ProblemsApi.md#deleteProblemNote)           | **DELETE** /api/v2/problems/{problem_id}/notes/{note_id}              | Delete note on a problem         |
| [**deleteProblemTask**](ProblemsApi.md#deleteProblemTask)           | **DELETE** /api/v2/problems/{problem_id}/tasks/{task_id}              | Delete task on a problem         |
| [**deleteProblemTimeEntry**](ProblemsApi.md#deleteProblemTimeEntry) | **DELETE** /api/v2/problems/{problem_id}/time_entries/{time_entry_id} | Delete a time entry on a problem |
| [**getProblem**](ProblemsApi.md#getProblem)                         | **GET** /api/v2/problem/{problem_id}                                  | View Problem                     |
| [**getProblemNote**](ProblemsApi.md#getProblemNote)                 | **GET** /api/v2/problems/{problem_id}/notes/{note_id}                 | View note on a problem           |
| [**getProblemTask**](ProblemsApi.md#getProblemTask)                 | **GET** /api/v2/problems/{problem_id}/tasks/{task_id}                 | View task on a problem           |
| [**getProblemTimeEntry**](ProblemsApi.md#getProblemTimeEntry)       | **GET** /api/v2/problems/{problem_id}/time_entries/{time_entry_id}    | View time entry on a problem     |
| [**listProblemNotes**](ProblemsApi.md#listProblemNotes)             | **GET** /api/v2/problems/{problem_id}/notes                           | View notes on problem            |
| [**listProblemTasks**](ProblemsApi.md#listProblemTasks)             | **GET** /api/v2/problems/{problem_id}/tasks                           | View tasks on problem            |
| [**listProblemTimeEntries**](ProblemsApi.md#listProblemTimeEntries) | **GET** /api/v2/problems/{problem_id}/time_entries                    | View time entries on problem     |
| [**listProblems**](ProblemsApi.md#listProblems)                     | **GET** /api/v2/problems                                              | List All Problems                |
| [**updateProblem**](ProblemsApi.md#updateProblem)                   | **PUT** /api/v2/problem/{problem_id}                                  | Update Problem                   |
| [**updateProblemNote**](ProblemsApi.md#updateProblemNote)           | **PUT** /api/v2/problems/{problem_id}/notes/{note_id}                 | Update a note on a problem       |
| [**updateProblemTask**](ProblemsApi.md#updateProblemTask)           | **PUT** /api/v2/problems/{problem_id}/tasks/{task_id}                 | Update a task on a problem       |
| [**updateProblemTimeEntry**](ProblemsApi.md#updateProblemTimeEntry) | **PUT** /api/v2/problems/{problem_id}/time_entries/{time_entry_id}    | Update a time entry on a problem |

## createProblem

> CreateProblem201Response createProblem(problem)

Create Problem

Create a new Problem in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem = new FreshserviceApiSdkCodegen.Problem(); // Problem | Details of the Problem
apiInstance.createProblem(problem).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name        | Type                      | Description            | Notes |
| ----------- | ------------------------- | ---------------------- | ----- |
| **problem** | [**Problem**](Problem.md) | Details of the Problem |

### Return type

[**CreateProblem201Response**](CreateProblem201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProblemNote

> CreateChangeNote201Response createProblemNote(note, problem_id)

Create Note on a problem

Create a new note on a problem in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let note = new FreshserviceApiSdkCodegen.Note(); // Note | Note content of problem
let problem_id = 789; // Number | ID of problem for which notes are to be retrieved
apiInstance.createProblemNote(note, problem_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                | Description                                       | Notes |
| -------------- | ------------------- | ------------------------------------------------- | ----- |
| **note**       | [**Note**](Note.md) | Note content of problem                           |
| **problem_id** | **Number**          | ID of problem for which notes are to be retrieved |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProblemTask

> CreateTicketTask201Response createProblemTask(task, problem_id)

Create Task on a problem

Create a new task on a problem in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | detailss of task to be created
let problem_id = 789; // Number | ID of problem for which tasks are to be retrieved
apiInstance.createProblemTask(task, problem_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                | Description                                       | Notes |
| -------------- | ------------------- | ------------------------------------------------- | ----- |
| **task**       | [**Task**](Task.md) | detailss of task to be created                    |
| **problem_id** | **Number**          | ID of problem for which tasks are to be retrieved |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProblemTimeEntry

> CreateTicketTimeEntry201Response createProblemTimeEntry(time_entry, problem_id)

Create time entry on a problem

Create a new time entry on a problem in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | details of time entry to be created
let problem_id = 789; // Number | ID of problem for which time entries are to be retrieved
apiInstance.createProblemTimeEntry(time_entry, problem_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                          | Description                                              | Notes |
| -------------- | ----------------------------- | -------------------------------------------------------- | ----- |
| **time_entry** | [**TimeEntry**](TimeEntry.md) | details of time entry to be created                      |
| **problem_id** | **Number**                    | ID of problem for which time entries are to be retrieved |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteProblem

> deleteProblem(problem_id)

Delete Problem

Delete the Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem to retrieve
apiInstance.deleteProblem(problem_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description               | Notes |
| -------------- | ---------- | ------------------------- | ----- |
| **problem_id** | **Number** | ID of problem to retrieve |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteProblemNote

> deleteProblemNote(problem_id, note_id)

Delete note on a problem

Delete the note on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem
let note_id = 789; // Number | ID of note
apiInstance.deleteProblemNote(problem_id, note_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description   | Notes |
| -------------- | ---------- | ------------- | ----- |
| **problem_id** | **Number** | ID of problem |
| **note_id**    | **Number** | ID of note    |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteProblemTask

> deleteProblemTask(problem_id, task_id)

Delete task on a problem

Delete the task on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem
let task_id = 789; // Number | ID of task
apiInstance.deleteProblemTask(problem_id, task_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description   | Notes |
| -------------- | ---------- | ------------- | ----- |
| **problem_id** | **Number** | ID of problem |
| **task_id**    | **Number** | ID of task    |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteProblemTimeEntry

> deleteProblemTimeEntry(problem_id, time_entry_id)

Delete a time entry on a problem

Delete the time entry on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.deleteProblemTimeEntry(problem_id, time_entry_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description          | Notes |
| ----------------- | ---------- | -------------------- | ----- |
| **problem_id**    | **Number** | ID of problem        |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getProblem

> CreateProblem201Response getProblem(problem_id)

View Problem

Retrieve the Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of Problem to retrieve
apiInstance.getProblem(problem_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description               | Notes |
| -------------- | ---------- | ------------------------- | ----- |
| **problem_id** | **Number** | ID of Problem to retrieve |

### Return type

[**CreateProblem201Response**](CreateProblem201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProblemNote

> CreateChangeNote201Response getProblemNote(problem_id, note_id)

View note on a problem

Retrieve a note on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem
let note_id = 789; // Number | ID of the note
apiInstance.getProblemNote(problem_id, note_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description    | Notes |
| -------------- | ---------- | -------------- | ----- |
| **problem_id** | **Number** | ID of problem  |
| **note_id**    | **Number** | ID of the note |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProblemTask

> CreateTicketTask201Response getProblemTask(problem_id, task_id)

View task on a problem

Retrieve a task on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem
let task_id = 789; // Number | ID of the task
apiInstance.getProblemTask(problem_id, task_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description    | Notes |
| -------------- | ---------- | -------------- | ----- |
| **problem_id** | **Number** | ID of problem  |
| **task_id**    | **Number** | ID of the task |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProblemTimeEntry

> CreateTicketTimeEntry201Response getProblemTimeEntry(problem_id, time_entry_id)

View time entry on a problem

Retrieve a time entry on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.getProblemTimeEntry(problem_id, time_entry_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description          | Notes |
| ----------------- | ---------- | -------------------- | ----- |
| **problem_id**    | **Number** | ID of problem        |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProblemNotes

> ListChangeNotes200Response listProblemNotes(problem_id, opts)

View notes on problem

Retrieve the notes on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem for which notes are to be retrieved
let opts = {
  per_page: 30, // Number | The number of notes to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listProblemNotes(problem_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description                                                       | Notes                      |
| -------------- | ---------- | ----------------------------------------------------------------- | -------------------------- |
| **problem_id** | **Number** | ID of problem for which notes are to be retrieved                 |
| **per_page**   | **Number** | The number of notes to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**       | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListChangeNotes200Response**](ListChangeNotes200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProblemTasks

> ListTicketTasks200Response listProblemTasks(problem_id, opts)

View tasks on problem

Retrieve the tasks on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem for which tasks are to be retrieved
let opts = {
  per_page: 10, // Number | The number of tasks to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listProblemTasks(problem_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description                                                       | Notes                      |
| -------------- | ---------- | ----------------------------------------------------------------- | -------------------------- |
| **problem_id** | **Number** | ID of problem for which tasks are to be retrieved                 |
| **per_page**   | **Number** | The number of tasks to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**       | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListTicketTasks200Response**](ListTicketTasks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProblemTimeEntries

> ListTicketTimeEntries200Response listProblemTimeEntries(problem_id, opts)

View time entries on problem

Retrieve the time entries on a Problem with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem_id = 789; // Number | ID of problem for which time entries are to be retrieved
let opts = {
  per_page: 10, // Number | The number of time entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listProblemTimeEntries(problem_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description                                                              | Notes                      |
| -------------- | ---------- | ------------------------------------------------------------------------ | -------------------------- |
| **problem_id** | **Number** | ID of problem for which time entries are to be retrieved                 |
| **per_page**   | **Number** | The number of time entries to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**       | **Number** | The page number to retrieve.                                             | [optional] [default to 1]  |

### Return type

[**ListTicketTimeEntries200Response**](ListTicketTimeEntries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProblems

> ListProblems200Response listProblems(opts)

List All Problems

Retrieve a list of all Problems in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let opts = {
  updated_since: new Date("2013-10-20T19:20:30+01:00"), // Date | Retrieve the problems by when it was last updated
  per_page: 30, // Number | The number of problems to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listProblems(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description                                                          | Notes                      |
| ----------------- | ---------- | -------------------------------------------------------------------- | -------------------------- |
| **updated_since** | **Date**   | Retrieve the problems by when it was last updated                    | [optional]                 |
| **per_page**      | **Number** | The number of problems to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**          | **Number** | The page number to retrieve.                                         | [optional] [default to 1]  |

### Return type

[**ListProblems200Response**](ListProblems200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateProblem

> CreateProblem201Response updateProblem(problem, problem_id)

Update Problem

Update an existing Problem in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let problem = new FreshserviceApiSdkCodegen.Problem(); // Problem | Problem details that needs to be updated
let problem_id = 789; // Number | ID of problem to update
apiInstance.updateProblem(problem, problem_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                      | Description                              | Notes |
| -------------- | ------------------------- | ---------------------------------------- | ----- |
| **problem**    | [**Problem**](Problem.md) | Problem details that needs to be updated |
| **problem_id** | **Number**                | ID of problem to update                  |

### Return type

[**CreateProblem201Response**](CreateProblem201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateProblemNote

> CreateChangeNote201Response updateProblemNote(note, problem_id, note_id)

Update a note on a problem

Update an existing note on an existing Problem in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let note = new FreshserviceApiSdkCodegen.Note(); // Note | note details that needs to be updated
let problem_id = 789; // Number | ID of problem
let note_id = 789; // Number | ID of the note
apiInstance.updateProblemNote(note, problem_id, note_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                | Description                           | Notes |
| -------------- | ------------------- | ------------------------------------- | ----- |
| **note**       | [**Note**](Note.md) | note details that needs to be updated |
| **problem_id** | **Number**          | ID of problem                         |
| **note_id**    | **Number**          | ID of the note                        |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateProblemTask

> CreateTicketTask201Response updateProblemTask(task, problem_id, task_id)

Update a task on a problem

Update an existing task on an existing Problem in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | tassk details that needs to be updated
let problem_id = 789; // Number | ID of problem
let task_id = 789; // Number | ID of the task
apiInstance.updateProblemTask(task, problem_id, task_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                | Description                            | Notes |
| -------------- | ------------------- | -------------------------------------- | ----- |
| **task**       | [**Task**](Task.md) | tassk details that needs to be updated |
| **problem_id** | **Number**          | ID of problem                          |
| **task_id**    | **Number**          | ID of the task                         |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateProblemTimeEntry

> CreateTicketTimeEntry201Response updateProblemTimeEntry(time_entry, problem_id, time_entry_id)

Update a time entry on a problem

Update an existing time entry on an existing Problem in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProblemsApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | time entry details that needs to be updated
let problem_id = 789; // Number | ID of problem
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.updateProblemTimeEntry(time_entry, problem_id, time_entry_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                          | Description                                 | Notes |
| ----------------- | ----------------------------- | ------------------------------------------- | ----- |
| **time_entry**    | [**TimeEntry**](TimeEntry.md) | time entry details that needs to be updated |
| **problem_id**    | **Number**                    | ID of problem                               |
| **time_entry_id** | **Number**                    | ID of the time entry                        |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
