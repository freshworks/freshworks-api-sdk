# FreshserviceApiSdkCodegen.ProjectsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                    | HTTP request                                        | Description               |
| --------------------------------------------------------- | --------------------------------------------------- | ------------------------- |
| [**archiveProject**](ProjectsApi.md#archiveProject)       | **POST** /api/v2/projects/{id}/archive              | Archive Project           |
| [**createProject**](ProjectsApi.md#createProject)         | **POST** /api/v2/projects                           | Create Project            |
| [**createProjectTask**](ProjectsApi.md#createProjectTask) | **POST** /api/v2/projects/{id}/tasks                | Create Project Task       |
| [**deleteProject**](ProjectsApi.md#deleteProject)         | **DELETE** /api/v2/projects/{project_id}            | Delete Project            |
| [**deleteProjectTask**](ProjectsApi.md#deleteProjectTask) | **DELETE** /api/v2/projects/{project_id}/tasks/{id} | Delete a Project Task     |
| [**getProject**](ProjectsApi.md#getProject)               | **GET** /api/v2/projects/{project_id}               | View Project              |
| [**getProjectTask**](ProjectsApi.md#getProjectTask)       | **GET** /api/v2/projects/{project_id}/tasks/{id}    | View Project Task Details |
| [**listProjectTasks**](ProjectsApi.md#listProjectTasks)   | **GET** /api/v2/projects/{id}/tasks                 | List All Project Tasks    |
| [**listProjects**](ProjectsApi.md#listProjects)           | **GET** /api/v2/projects                            | List All Projects         |
| [**restoreProject**](ProjectsApi.md#restoreProject)       | **POST** /api/v2/projects/{id}/restore              | Restore Project           |
| [**updateProject**](ProjectsApi.md#updateProject)         | **PUT** /api/v2/projects/{project_id}               | Update Project            |
| [**updateProjectTask**](ProjectsApi.md#updateProjectTask) | **PUT** /api/v2/projects/{project_id}/tasks/{id}    | Update a Project Task     |

## archiveProject

> CreateProject201Response archiveProject(id)

Archive Project

Archive an existing Project in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let id = 789; // Number |
apiInstance.archiveProject(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **Number** |             |

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createProject

> CreateProject201Response createProject(project)

Create Project

Create a new Project in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project = new FreshserviceApiSdkCodegen.Project(); // Project | project that needs to be created
apiInstance.createProject(project).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name        | Type                      | Description                      | Notes |
| ----------- | ------------------------- | -------------------------------- | ----- |
| **project** | [**Project**](Project.md) | project that needs to be created |

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProjectTask

> CreateProjectTask201Response createProjectTask(project_task, id)

Create Project Task

Create a new Project Task in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project_task = new FreshserviceApiSdkCodegen.ProjectTask(); // ProjectTask | project task that needs to be created
let id = 789; // Number | ID of project to retrieve
apiInstance.createProjectTask(project_task, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type                              | Description                           | Notes |
| ---------------- | --------------------------------- | ------------------------------------- | ----- |
| **project_task** | [**ProjectTask**](ProjectTask.md) | project task that needs to be created |
| **id**           | **Number**                        | ID of project to retrieve             |

### Return type

[**CreateProjectTask201Response**](CreateProjectTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteProject

> deleteProject(project_id)

Delete Project

Delete an existing Project in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project_id = 789; // Number |
apiInstance.deleteProject(project_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **project_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectTask

> deleteProjectTask(project_id, id)

Delete a Project Task

Delete an existing Project Task in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project_id = 789; // Number | ID of project to retrieve
let id = 789; // Number | ID of the task to be deleted
apiInstance.deleteProjectTask(project_id, id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description                  | Notes |
| -------------- | ---------- | ---------------------------- | ----- |
| **project_id** | **Number** | ID of project to retrieve    |
| **id**         | **Number** | ID of the task to be deleted |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProject

> CreateProject201Response getProject(project_id)

View Project

Retrieve the Project with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project_id = 789; // Number | ID of project to retrieve
apiInstance.getProject(project_id).then(
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
| **project_id** | **Number** | ID of project to retrieve |

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectTask

> CreateProjectTask201Response getProjectTask(id, project_id)

View Project Task Details

View Project Task Details

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let id = 789; // Number | Task id
let project_id = 789; // Number | Project id of the task
apiInstance.getProjectTask(id, project_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description            | Notes |
| -------------- | ---------- | ---------------------- | ----- |
| **id**         | **Number** | Task id                |
| **project_id** | **Number** | Project id of the task |

### Return type

[**CreateProjectTask201Response**](CreateProjectTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProjectTasks

> ListProjectTasks200Response listProjectTasks(id, opts)

List All Project Tasks

Retrieve a list of all Project Tasks in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let id = 789; // Number | ID of project to retrieve
let opts = {
  per_page: 30, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1, // Number | The page number to retrieve.
  filter: "'all'", // String | Task filters
  parent_id: 56 // Number | Task filters
};
apiInstance.listProjectTasks(id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                         | Notes                                 |
| ------------- | ---------- | ------------------------------------------------------------------- | ------------------------------------- |
| **id**        | **Number** | ID of project to retrieve                                           |
| **per_page**  | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 30]            |
| **page**      | **Number** | The page number to retrieve.                                        | [optional] [default to 1]             |
| **filter**    | **String** | Task filters                                                        | [optional] [default to &#39;all&#39;] |
| **parent_id** | **Number** | Task filters                                                        | [optional]                            |

### Return type

[**ListProjectTasks200Response**](ListProjectTasks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProjects

> ListProjects200Response listProjects(opts)

List All Projects

Retrieve a list of all Projects in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let opts = {
  per_page: 30, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1, // Number | The page number to retrieve.
  status: "'all'", // String | Filter to be applied in retrieving projects
  archived: false // Boolean | Filter archived or active projects
};
apiInstance.listProjects(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type        | Description                                                         | Notes                                 |
| ------------ | ----------- | ------------------------------------------------------------------- | ------------------------------------- |
| **per_page** | **Number**  | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 30]            |
| **page**     | **Number**  | The page number to retrieve.                                        | [optional] [default to 1]             |
| **status**   | **String**  | Filter to be applied in retrieving projects                         | [optional] [default to &#39;all&#39;] |
| **archived** | **Boolean** | Filter archived or active projects                                  | [optional] [default to false]         |

### Return type

[**ListProjects200Response**](ListProjects200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## restoreProject

> CreateProject201Response restoreProject(id)

Restore Project

Restore an archived Project in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let id = 789; // Number |
apiInstance.restoreProject(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **Number** |             |

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateProject

> CreateProject201Response updateProject(project, project_id)

Update Project

Update an existing Project in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project = new FreshserviceApiSdkCodegen.Project(); // Project | project that needs to be updated
let project_id = 789; // Number |
apiInstance.updateProject(project, project_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                      | Description                      | Notes |
| -------------- | ------------------------- | -------------------------------- | ----- |
| **project**    | [**Project**](Project.md) | project that needs to be updated |
| **project_id** | **Number**                |                                  |

### Return type

[**CreateProject201Response**](CreateProject201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateProjectTask

> CreateProjectTask201Response updateProjectTask(project_id, id, opts)

Update a Project Task

Update an existing Project Task in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProjectsApi();
let project_id = 789; // Number | ID of project to retrieve
let id = 789; // Number | ID of the task to be updated
let opts = {
  project_task: new FreshserviceApiSdkCodegen.ProjectTask() // ProjectTask | project task that needs to be created
};
apiInstance.updateProjectTask(project_id, id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type                              | Description                           | Notes      |
| ---------------- | --------------------------------- | ------------------------------------- | ---------- |
| **project_id**   | **Number**                        | ID of project to retrieve             |
| **id**           | **Number**                        | ID of the task to be updated          |
| **project_task** | [**ProjectTask**](ProjectTask.md) | project task that needs to be created | [optional] |

### Return type

[**CreateProjectTask201Response**](CreateProjectTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
