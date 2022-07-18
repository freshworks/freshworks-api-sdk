# FreshserviceApiSdkCodegen.ChangesApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                           | HTTP request                                                        | Description                     |
| ---------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------- |
| [**createChange**](ChangesApi.md#createChange)                   | **POST** /api/v2/changes                                            | Create Change                   |
| [**createChangeNote**](ChangesApi.md#createChangeNote)           | **POST** /api/v2/changes/{change_id}/notes                          | Create Note on a change         |
| [**createChangeTask**](ChangesApi.md#createChangeTask)           | **POST** /api/v2/changes/{change_id}/tasks                          | Create Task on a change         |
| [**createChangeTimeEntry**](ChangesApi.md#createChangeTimeEntry) | **POST** /api/v2/changes/{change_id}/time_entries                   | Create time entry on a change   |
| [**deleteChange**](ChangesApi.md#deleteChange)                   | **DELETE** /api/v2/changes/{change_id}                              | Delete Change request           |
| [**deleteChangeNote**](ChangesApi.md#deleteChangeNote)           | **DELETE** /api/v2/changes/{change_id}/notes/{note_id}              | Delete note on a change         |
| [**deleteChangeTask**](ChangesApi.md#deleteChangeTask)           | **DELETE** /api/v2/changes/{change_id}/tasks/{task_id}              | Delete task on a change         |
| [**deleteChangeTimeEntry**](ChangesApi.md#deleteChangeTimeEntry) | **DELETE** /api/v2/changes/{change_id}/time_entries/{time_entry_id} | Delete a time entry on a change |
| [**getChange**](ChangesApi.md#getChange)                         | **GET** /api/v2/changes/{change_id}                                 | View Change                     |
| [**getChangeNote**](ChangesApi.md#getChangeNote)                 | **GET** /api/v2/changes/{change_id}/notes/{note_id}                 | View note on a change           |
| [**getChangeTask**](ChangesApi.md#getChangeTask)                 | **GET** /api/v2/changes/{change_id}/tasks/{task_id}                 | View task on a change           |
| [**getChangeTimeEntry**](ChangesApi.md#getChangeTimeEntry)       | **GET** /api/v2/changes/{change_id}/time_entries/{time_entry_id}    | View time entry on a change     |
| [**listChangeFormFields**](ChangesApi.md#listChangeFormFields)   | **GET** /api/v2/change_form_fields                                  | View Change Fields              |
| [**listChangeNotes**](ChangesApi.md#listChangeNotes)             | **GET** /api/v2/changes/{change_id}/notes                           | View notes on change            |
| [**listChangeTasks**](ChangesApi.md#listChangeTasks)             | **GET** /api/v2/changes/{change_id}/tasks                           | View tasks on change            |
| [**listChangeTimeEntries**](ChangesApi.md#listChangeTimeEntries) | **GET** /api/v2/changes/{change_id}/time_entries                    | View time entries on change     |
| [**listChanges**](ChangesApi.md#listChanges)                     | **GET** /api/v2/changes                                             | List All Changes                |
| [**updateChange**](ChangesApi.md#updateChange)                   | **PUT** /api/v2/changes/{change_id}                                 | Update Change request           |
| [**updateChangeNote**](ChangesApi.md#updateChangeNote)           | **PUT** /api/v2/changes/{change_id}/notes/{note_id}                 | Update a note on a change       |
| [**updateChangeTask**](ChangesApi.md#updateChangeTask)           | **PUT** /api/v2/changes/{change_id}/tasks/{task_id}                 | Update a task on a change       |
| [**updateChangeTimeEntry**](ChangesApi.md#updateChangeTimeEntry) | **PUT** /api/v2/changes/{change_id}/time_entries/{time_entry_id}    | Update a time entry on a change |

## createChange

> CreateChange201Response createChange(change)

Create Change

Create a new Change request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change = new FreshserviceApiSdkCodegen.Change(); // Change | Subject of the change request
apiInstance.createChange(change).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name       | Type                    | Description                   | Notes |
| ---------- | ----------------------- | ----------------------------- | ----- |
| **change** | [**Change**](Change.md) | Subject of the change request |

### Return type

[**CreateChange201Response**](CreateChange201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createChangeNote

> CreateChangeNote201Response createChangeNote(note, change_id)

Create Note on a change

Create a new note on a change request in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let note = new FreshserviceApiSdkCodegen.Note(); // Note | Note content of change
let change_id = 789; // Number | ID of change request for which notes are to be retrieved
apiInstance.createChangeNote(note, change_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                | Description                                              | Notes |
| ------------- | ------------------- | -------------------------------------------------------- | ----- |
| **note**      | [**Note**](Note.md) | Note content of change                                   |
| **change_id** | **Number**          | ID of change request for which notes are to be retrieved |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createChangeTask

> CreateTicketTask201Response createChangeTask(task, change_id)

Create Task on a change

Create a new task on a change request in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | detailss of task to be created
let change_id = 789; // Number | ID of change request for which tasks are to be retrieved
apiInstance.createChangeTask(task, change_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                | Description                                              | Notes |
| ------------- | ------------------- | -------------------------------------------------------- | ----- |
| **task**      | [**Task**](Task.md) | detailss of task to be created                           |
| **change_id** | **Number**          | ID of change request for which tasks are to be retrieved |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createChangeTimeEntry

> CreateTicketTimeEntry201Response createChangeTimeEntry(time_entry, change_id)

Create time entry on a change

Create a new time entry on a change request in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | details of time entry to be created
let change_id = 789; // Number | ID of change request for which time entries are to be retrieved
apiInstance.createChangeTimeEntry(time_entry, change_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                          | Description                                                     | Notes |
| -------------- | ----------------------------- | --------------------------------------------------------------- | ----- |
| **time_entry** | [**TimeEntry**](TimeEntry.md) | details of time entry to be created                             |
| **change_id**  | **Number**                    | ID of change request for which time entries are to be retrieved |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteChange

> deleteChange(change_id)

Delete Change request

Delete the Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change to retrieve
apiInstance.deleteChange(change_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description              | Notes |
| ------------- | ---------- | ------------------------ | ----- |
| **change_id** | **Number** | ID of change to retrieve |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteChangeNote

> deleteChangeNote(change_id, note_id)

Delete note on a change

Delete the note on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change
let note_id = 789; // Number | ID of note
apiInstance.deleteChangeNote(change_id, note_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description  | Notes |
| ------------- | ---------- | ------------ | ----- |
| **change_id** | **Number** | ID of change |
| **note_id**   | **Number** | ID of note   |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteChangeTask

> deleteChangeTask(change_id, task_id)

Delete task on a change

Delete the task on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change
let task_id = 789; // Number | ID of task
apiInstance.deleteChangeTask(change_id, task_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description  | Notes |
| ------------- | ---------- | ------------ | ----- |
| **change_id** | **Number** | ID of change |
| **task_id**   | **Number** | ID of task   |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteChangeTimeEntry

> deleteChangeTimeEntry(change_id, time_entry_id)

Delete a time entry on a change

Delete the time entry on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.deleteChangeTimeEntry(change_id, time_entry_id).then(
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
| **change_id**     | **Number** | ID of change         |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getChange

> CreateChange201Response getChange(change_id)

View Change

Retrieve the Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request to retrieve
apiInstance.getChange(change_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                      | Notes |
| ------------- | ---------- | -------------------------------- | ----- |
| **change_id** | **Number** | ID of change request to retrieve |

### Return type

[**CreateChange201Response**](CreateChange201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getChangeNote

> CreateChangeNote201Response getChangeNote(change_id, note_id)

View note on a change

Retrieve a note on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request
let note_id = 789; // Number | ID of the note
apiInstance.getChangeNote(change_id, note_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description          | Notes |
| ------------- | ---------- | -------------------- | ----- |
| **change_id** | **Number** | ID of change request |
| **note_id**   | **Number** | ID of the note       |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getChangeTask

> CreateTicketTask201Response getChangeTask(change_id, task_id)

View task on a change

Retrieve a task on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request
let task_id = 789; // Number | ID of the task
apiInstance.getChangeTask(change_id, task_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description          | Notes |
| ------------- | ---------- | -------------------- | ----- |
| **change_id** | **Number** | ID of change request |
| **task_id**   | **Number** | ID of the task       |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getChangeTimeEntry

> CreateTicketTimeEntry201Response getChangeTimeEntry(change_id, time_entry_id)

View time entry on a change

Retrieve a time entry on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.getChangeTimeEntry(change_id, time_entry_id).then(
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
| **change_id**     | **Number** | ID of change request |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listChangeFormFields

> ListChangeFormFields200Response listChangeFormFields()

View Change Fields

Retrieve all the Fields that constitute the Change Object

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
apiInstance.listChangeFormFields().then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListChangeFormFields200Response**](ListChangeFormFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listChangeNotes

> ListChangeNotes200Response listChangeNotes(change_id, opts)

View notes on change

Retrieve the notes on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request for which notes are to be retrieved
let opts = {
  per_page: 30, // Number | The number of notes to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listChangeNotes(change_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                       | Notes                      |
| ------------- | ---------- | ----------------------------------------------------------------- | -------------------------- |
| **change_id** | **Number** | ID of change request for which notes are to be retrieved          |
| **per_page**  | **Number** | The number of notes to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**      | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListChangeNotes200Response**](ListChangeNotes200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listChangeTasks

> ListTicketTasks200Response listChangeTasks(change_id, opts)

View tasks on change

Retrieve the tasks on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request for which tasks are to be retrieved
let opts = {
  per_page: 10, // Number | The number of tasks to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listChangeTasks(change_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                       | Notes                      |
| ------------- | ---------- | ----------------------------------------------------------------- | -------------------------- |
| **change_id** | **Number** | ID of change request for which tasks are to be retrieved          |
| **per_page**  | **Number** | The number of tasks to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**      | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListTicketTasks200Response**](ListTicketTasks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listChangeTimeEntries

> ListTicketTimeEntries200Response listChangeTimeEntries(change_id, opts)

View time entries on change

Retrieve the time entries on a Change request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change_id = 789; // Number | ID of change request for which time entries are to be retrieved
let opts = {
  per_page: 10, // Number | The number of time entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listChangeTimeEntries(change_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                              | Notes                      |
| ------------- | ---------- | ------------------------------------------------------------------------ | -------------------------- |
| **change_id** | **Number** | ID of change request for which time entries are to be retrieved          |
| **per_page**  | **Number** | The number of time entries to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**      | **Number** | The page number to retrieve.                                             | [optional] [default to 1]  |

### Return type

[**ListTicketTimeEntries200Response**](ListTicketTimeEntries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listChanges

> ListChanges200Response listChanges(opts)

List All Changes

Retrieve a list of all Changes in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let opts = {
  filter_name: "filter_name_example", // String | Retrieve the changes by the filter name
  requester_id: "requester_id_example", // String | Retrieve the changes by the requester id
  email: "email_example", // String | Retrieve the changes by the requester email
  updated_since: new Date("2013-10-20T19:20:30+01:00"), // Date | Retrieve the changes by when it was last updated
  per_page: 30, // Number | The number of changes to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listChanges(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description                                                         | Notes                      |
| ----------------- | ---------- | ------------------------------------------------------------------- | -------------------------- |
| **filter_name**   | **String** | Retrieve the changes by the filter name                             | [optional]                 |
| **requester_id**  | **String** | Retrieve the changes by the requester id                            | [optional]                 |
| **email**         | **String** | Retrieve the changes by the requester email                         | [optional]                 |
| **updated_since** | **Date**   | Retrieve the changes by when it was last updated                    | [optional]                 |
| **per_page**      | **Number** | The number of changes to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**          | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |

### Return type

[**ListChanges200Response**](ListChanges200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateChange

> CreateChange201Response updateChange(change, change_id)

Update Change request

Update an existing Change request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let change = new FreshserviceApiSdkCodegen.Change(); // Change | change details that needs to be updated
let change_id = 789; // Number | ID of change request to update
apiInstance.updateChange(change, change_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                    | Description                             | Notes |
| ------------- | ----------------------- | --------------------------------------- | ----- |
| **change**    | [**Change**](Change.md) | change details that needs to be updated |
| **change_id** | **Number**              | ID of change request to update          |

### Return type

[**CreateChange201Response**](CreateChange201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateChangeNote

> CreateChangeNote201Response updateChangeNote(note, change_id, note_id)

Update a note on a change

Update an existing note on an existing Change request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let note = new FreshserviceApiSdkCodegen.Note(); // Note | note details that needs to be updated
let change_id = 789; // Number | ID of change request
let note_id = 789; // Number | ID of the note
apiInstance.updateChangeNote(note, change_id, note_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                | Description                           | Notes |
| ------------- | ------------------- | ------------------------------------- | ----- |
| **note**      | [**Note**](Note.md) | note details that needs to be updated |
| **change_id** | **Number**          | ID of change request                  |
| **note_id**   | **Number**          | ID of the note                        |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateChangeTask

> CreateTicketTask201Response updateChangeTask(task, change_id, task_id)

Update a task on a change

Update an existing task on an existing Change request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | tassk details that needs to be updated
let change_id = 789; // Number | ID of change request
let task_id = 789; // Number | ID of the task
apiInstance.updateChangeTask(task, change_id, task_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                | Description                            | Notes |
| ------------- | ------------------- | -------------------------------------- | ----- |
| **task**      | [**Task**](Task.md) | tassk details that needs to be updated |
| **change_id** | **Number**          | ID of change request                   |
| **task_id**   | **Number**          | ID of the task                         |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateChangeTimeEntry

> CreateTicketTimeEntry201Response updateChangeTimeEntry(time_entry, change_id, time_entry_id)

Update a time entry on a change

Update an existing time entry on an existing Change request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ChangesApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | time entry details that needs to be updated
let change_id = 789; // Number | ID of change request
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.updateChangeTimeEntry(time_entry, change_id, time_entry_id).then(
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
| **change_id**     | **Number**                    | ID of change request                        |
| **time_entry_id** | **Number**                    | ID of the time entry                        |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
