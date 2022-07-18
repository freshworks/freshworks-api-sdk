# FreshserviceApiSdkCodegen.ReleasesApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                              | HTTP request                                                          | Description                      |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------- |
| [**createRelease**](ReleasesApi.md#createRelease)                   | **POST** /api/v2/releases                                             | Create Release                   |
| [**createReleaseNote**](ReleasesApi.md#createReleaseNote)           | **POST** /api/v2/releases/{release_id}/notes                          | Create Note on a release         |
| [**createReleaseTask**](ReleasesApi.md#createReleaseTask)           | **POST** /api/v2/releases/{release_id}/tasks                          | Create Task on a release         |
| [**createReleaseTimeEntry**](ReleasesApi.md#createReleaseTimeEntry) | **POST** /api/v2/releases/{release_id}/time_entries                   | Create time entry on a release   |
| [**deleteRelease**](ReleasesApi.md#deleteRelease)                   | **DELETE** /api/v2/release/{release_id}                               | Delete Release                   |
| [**deleteReleaseNote**](ReleasesApi.md#deleteReleaseNote)           | **DELETE** /api/v2/releases/{release_id}/notes/{note_id}              | Delete note on a release         |
| [**deleteReleaseTask**](ReleasesApi.md#deleteReleaseTask)           | **DELETE** /api/v2/releases/{release_id}/tasks/{task_id}              | Delete task on a release         |
| [**deleteReleaseTimeEntry**](ReleasesApi.md#deleteReleaseTimeEntry) | **DELETE** /api/v2/releases/{release_id}/time_entries/{time_entry_id} | Delete a time entry on a release |
| [**getRelease**](ReleasesApi.md#getRelease)                         | **GET** /api/v2/release/{release_id}                                  | View Release                     |
| [**getReleaseNote**](ReleasesApi.md#getReleaseNote)                 | **GET** /api/v2/releases/{release_id}/notes/{note_id}                 | View note on a release           |
| [**getReleaseTask**](ReleasesApi.md#getReleaseTask)                 | **GET** /api/v2/releases/{release_id}/tasks/{task_id}                 | View task on a release           |
| [**getReleaseTimeEntry**](ReleasesApi.md#getReleaseTimeEntry)       | **GET** /api/v2/releases/{release_id}/time_entries/{time_entry_id}    | View time entry on a release     |
| [**listReleaseFormFields**](ReleasesApi.md#listReleaseFormFields)   | **GET** /api/v2/release_form_fields                                   | View Release Fields              |
| [**listReleaseNote**](ReleasesApi.md#listReleaseNote)               | **GET** /api/v2/releases/{release_id}/notes                           | View notes on release            |
| [**listReleaseTasks**](ReleasesApi.md#listReleaseTasks)             | **GET** /api/v2/releases/{release_id}/tasks                           | View tasks on release            |
| [**listReleaseTimeEntries**](ReleasesApi.md#listReleaseTimeEntries) | **GET** /api/v2/releases/{release_id}/time_entries                    | View time entries on release     |
| [**listReleases**](ReleasesApi.md#listReleases)                     | **GET** /api/v2/releases                                              | List All Releases                |
| [**updateRelease**](ReleasesApi.md#updateRelease)                   | **PUT** /api/v2/release/{release_id}                                  | Update Release                   |
| [**updateReleaseNote**](ReleasesApi.md#updateReleaseNote)           | **PUT** /api/v2/releases/{release_id}/notes/{note_id}                 | Update a note on a release       |
| [**updateReleaseTask**](ReleasesApi.md#updateReleaseTask)           | **PUT** /api/v2/releases/{release_id}/tasks/{task_id}                 | Update a task on a release       |
| [**updateReleaseTimeEntry**](ReleasesApi.md#updateReleaseTimeEntry) | **PUT** /api/v2/releases/{release_id}/time_entries/{time_entry_id}    | Update a time entry on a release |

## createRelease

> CreateRelease201Response createRelease(release)

Create Release

Create a new Release request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release = new FreshserviceApiSdkCodegen.Release(); // Release | Details of the Release
apiInstance.createRelease(release).then(
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
| **release** | [**Release**](Release.md) | Details of the Release |

### Return type

[**CreateRelease201Response**](CreateRelease201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createReleaseNote

> CreateChangeNote201Response createReleaseNote(note, release_id)

Create Note on a release

Create a new note on a release in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let note = new FreshserviceApiSdkCodegen.Note(); // Note | Note content of release
let release_id = 789; // Number | ID of release for which notes are to be retrieved
apiInstance.createReleaseNote(note, release_id).then(
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
| **note**       | [**Note**](Note.md) | Note content of release                           |
| **release_id** | **Number**          | ID of release for which notes are to be retrieved |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createReleaseTask

> CreateTicketTask201Response createReleaseTask(task, release_id)

Create Task on a release

Create a new task on a release in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | detailss of task to be created
let release_id = 789; // Number | ID of release for which tasks are to be retrieved
apiInstance.createReleaseTask(task, release_id).then(
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
| **release_id** | **Number**          | ID of release for which tasks are to be retrieved |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createReleaseTimeEntry

> CreateTicketTimeEntry201Response createReleaseTimeEntry(time_entry, release_id)

Create time entry on a release

Create a new time entry on a release in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | details of time entry to be created
let release_id = 789; // Number | ID of release for which time entries are to be retrieved
apiInstance.createReleaseTimeEntry(time_entry, release_id).then(
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
| **release_id** | **Number**                    | ID of release for which time entries are to be retrieved |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRelease

> deleteRelease(release_id)

Delete Release

Delete the Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release to retrieve
apiInstance.deleteRelease(release_id).then(
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
| **release_id** | **Number** | ID of release to retrieve |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteReleaseNote

> deleteReleaseNote(release_id, note_id)

Delete note on a release

Delete the note on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release
let note_id = 789; // Number | ID of note
apiInstance.deleteReleaseNote(release_id, note_id).then(
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
| **release_id** | **Number** | ID of release |
| **note_id**    | **Number** | ID of note    |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteReleaseTask

> deleteReleaseTask(release_id, task_id)

Delete task on a release

Delete the task on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release
let task_id = 789; // Number | ID of task
apiInstance.deleteReleaseTask(release_id, task_id).then(
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
| **release_id** | **Number** | ID of release |
| **task_id**    | **Number** | ID of task    |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteReleaseTimeEntry

> deleteReleaseTimeEntry(release_id, time_entry_id)

Delete a time entry on a release

Delete the time entry on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.deleteReleaseTimeEntry(release_id, time_entry_id).then(
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
| **release_id**    | **Number** | ID of release        |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getRelease

> CreateRelease201Response getRelease(release_id)

View Release

Retrieve the Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of Release to retrieve
apiInstance.getRelease(release_id).then(
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
| **release_id** | **Number** | ID of Release to retrieve |

### Return type

[**CreateRelease201Response**](CreateRelease201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getReleaseNote

> CreateChangeNote201Response getReleaseNote(release_id, note_id)

View note on a release

Retrieve a note on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release
let note_id = 789; // Number | ID of the note
apiInstance.getReleaseNote(release_id, note_id).then(
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
| **release_id** | **Number** | ID of release  |
| **note_id**    | **Number** | ID of the note |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getReleaseTask

> CreateTicketTask201Response getReleaseTask(release_id, task_id)

View task on a release

Retrieve a task on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release
let task_id = 789; // Number | ID of the task
apiInstance.getReleaseTask(release_id, task_id).then(
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
| **release_id** | **Number** | ID of release  |
| **task_id**    | **Number** | ID of the task |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getReleaseTimeEntry

> CreateTicketTimeEntry201Response getReleaseTimeEntry(release_id, time_entry_id)

View time entry on a release

Retrieve a time entry on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.getReleaseTimeEntry(release_id, time_entry_id).then(
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
| **release_id**    | **Number** | ID of release        |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listReleaseFormFields

> ListReleaseFormFields200Response listReleaseFormFields()

View Release Fields

Retrieve all the Fields that constitute the Release Object

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
apiInstance.listReleaseFormFields().then(
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

[**ListReleaseFormFields200Response**](ListReleaseFormFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listReleaseNote

> ListChangeNotes200Response listReleaseNote(release_id, opts)

View notes on release

Retrieve the notes on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release for which notes are to be retrieved
let opts = {
  per_page: 30, // Number | The number of notes to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listReleaseNote(release_id, opts).then(
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
| **release_id** | **Number** | ID of release for which notes are to be retrieved                 |
| **per_page**   | **Number** | The number of notes to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**       | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListChangeNotes200Response**](ListChangeNotes200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listReleaseTasks

> ListTicketTasks200Response listReleaseTasks(release_id, opts)

View tasks on release

Retrieve the tasks on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release for which tasks are to be retrieved
let opts = {
  per_page: 10, // Number | The number of tasks to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listReleaseTasks(release_id, opts).then(
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
| **release_id** | **Number** | ID of release for which tasks are to be retrieved                 |
| **per_page**   | **Number** | The number of tasks to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**       | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListTicketTasks200Response**](ListTicketTasks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listReleaseTimeEntries

> ListTicketTimeEntries200Response listReleaseTimeEntries(release_id, opts)

View time entries on release

Retrieve the time entries on a Release with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release_id = 789; // Number | ID of release for which time entries are to be retrieved
let opts = {
  per_page: 10, // Number | The number of time entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listReleaseTimeEntries(release_id, opts).then(
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
| **release_id** | **Number** | ID of release for which time entries are to be retrieved                 |
| **per_page**   | **Number** | The number of time entries to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**       | **Number** | The page number to retrieve.                                             | [optional] [default to 1]  |

### Return type

[**ListTicketTimeEntries200Response**](ListTicketTimeEntries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listReleases

> ListReleases200Response listReleases(opts)

List All Releases

Retrieve a list of all Releases in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let opts = {
  updated_since: new Date("2013-10-20T19:20:30+01:00"), // Date | Retrieve the releases by when it was last updated
  per_page: 30, // Number | The number of releases to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listReleases(opts).then(
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
| **updated_since** | **Date**   | Retrieve the releases by when it was last updated                    | [optional]                 |
| **per_page**      | **Number** | The number of releases to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**          | **Number** | The page number to retrieve.                                         | [optional] [default to 1]  |

### Return type

[**ListReleases200Response**](ListReleases200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateRelease

> CreateRelease201Response updateRelease(release, release_id)

Update Release

Update an existing Release in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let release = new FreshserviceApiSdkCodegen.Release(); // Release | Release details that needs to be updated
let release_id = 789; // Number | ID of release to update
apiInstance.updateRelease(release, release_id).then(
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
| **release**    | [**Release**](Release.md) | Release details that needs to be updated |
| **release_id** | **Number**                | ID of release to update                  |

### Return type

[**CreateRelease201Response**](CreateRelease201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateReleaseNote

> CreateChangeNote201Response updateReleaseNote(note, release_id, note_id)

Update a note on a release

Update an existing note on an existing Release in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let note = new FreshserviceApiSdkCodegen.Note(); // Note | note details that needs to be updated
let release_id = 789; // Number | ID of release
let note_id = 789; // Number | ID of the note
apiInstance.updateReleaseNote(note, release_id, note_id).then(
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
| **release_id** | **Number**          | ID of release                         |
| **note_id**    | **Number**          | ID of the note                        |

### Return type

[**CreateChangeNote201Response**](CreateChangeNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateReleaseTask

> CreateTicketTask201Response updateReleaseTask(task, release_id, task_id)

Update a task on a release

Update an existing task on an existing Release in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | tassk details that needs to be updated
let release_id = 789; // Number | ID of release
let task_id = 789; // Number | ID of the task
apiInstance.updateReleaseTask(task, release_id, task_id).then(
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
| **release_id** | **Number**          | ID of release                          |
| **task_id**    | **Number**          | ID of the task                         |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateReleaseTimeEntry

> CreateTicketTimeEntry201Response updateReleaseTimeEntry(time_entry, release_id, time_entry_id)

Update a time entry on a release

Update an existing time entry on an existing Release in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ReleasesApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | time entry details that needs to be updated
let release_id = 789; // Number | ID of release
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.updateReleaseTimeEntry(time_entry, release_id, time_entry_id).then(
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
| **release_id**    | **Number**                    | ID of release                               |
| **time_entry_id** | **Number**                    | ID of the time entry                        |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
