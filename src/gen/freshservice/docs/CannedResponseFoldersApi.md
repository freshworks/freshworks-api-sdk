# FreshserviceApiSdkCodegen.CannedResponseFoldersApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                                                               | HTTP request                                                                         | Description                      |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------- |
| [**createCannedResponseFolder**](CannedResponseFoldersApi.md#createCannedResponseFolder)                             | **POST** /api/v2/canned_response_folders                                             | Create Canned Response Folder    |
| [**deleteCanedResponseFolder**](CannedResponseFoldersApi.md#deleteCanedResponseFolder)                               | **DELETE** /api/v2/canned_response_folder/{canned_response_folder_id}                | Delete Canned Response Folder    |
| [**getCannedResponseFolder**](CannedResponseFoldersApi.md#getCannedResponseFolder)                                   | **GET** /api/v2/canned_response_folder/{canned_response_folder_id}                   | View Canned Response Folder      |
| [**listCannedResponseFolders**](CannedResponseFoldersApi.md#listCannedResponseFolders)                               | **GET** /api/v2/canned_response_folders                                              | List All Canned Response Folders |
| [**listCannedResponseFoldersCannedResponses**](CannedResponseFoldersApi.md#listCannedResponseFoldersCannedResponses) | **GET** /api/v2/canned_response_folders/{canned_response_folder_id}/canned_responses | List All Canned Responses        |
| [**updateCannedResponseFolder**](CannedResponseFoldersApi.md#updateCannedResponseFolder)                             | **PUT** /api/v2/canned_response_folder/{canned_response_folder_id}                   | Update Canned Response Folder    |

## createCannedResponseFolder

> CreateCannedResponseFolder201Response createCannedResponseFolder(canned_response)

Create Canned Response Folder

Create a new Canned Response Folder request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponseFoldersApi();
let canned_response = new FreshserviceApiSdkCodegen.CannedResponseFolder(); // CannedResponseFolder | Details of the Canned Response Folder
apiInstance.createCannedResponseFolder(canned_response).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                                | Description                           | Notes |
| ------------------- | --------------------------------------------------- | ------------------------------------- | ----- |
| **canned_response** | [**CannedResponseFolder**](CannedResponseFolder.md) | Details of the Canned Response Folder |

### Return type

[**CreateCannedResponseFolder201Response**](CreateCannedResponseFolder201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCanedResponseFolder

> deleteCanedResponseFolder(canned_response_folder_id)

Delete Canned Response Folder

Delete the Canned Response Folder with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponseFoldersApi();
let canned_response_folder_id = 789; // Number | ID of canned response folder to delete
apiInstance.deleteCanedResponseFolder(canned_response_folder_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                          | Type       | Description                            | Notes |
| ----------------------------- | ---------- | -------------------------------------- | ----- |
| **canned_response_folder_id** | **Number** | ID of canned response folder to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getCannedResponseFolder

> CreateCannedResponse201Response getCannedResponseFolder(canned_response_folder_id)

View Canned Response Folder

Retrieve the Canned Response Folder with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponseFoldersApi();
let canned_response_folder_id = 789; // Number | ID of Canned Response to retrieve
apiInstance.getCannedResponseFolder(canned_response_folder_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                          | Type       | Description                       | Notes |
| ----------------------------- | ---------- | --------------------------------- | ----- |
| **canned_response_folder_id** | **Number** | ID of Canned Response to retrieve |

### Return type

[**CreateCannedResponse201Response**](CreateCannedResponse201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCannedResponseFolders

> ListCannedResponseFolders200Response listCannedResponseFolders()

List All Canned Response Folders

Retrieve a list of all Canned Responses in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponseFoldersApi();
apiInstance.listCannedResponseFolders().then(
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

[**ListCannedResponseFolders200Response**](ListCannedResponseFolders200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCannedResponseFoldersCannedResponses

> ListCannedResponses200Response listCannedResponseFoldersCannedResponses(canned_response_folder_id)

List All Canned Responses

Retrieve a list of all Canned Responses in a Canned Response Folder in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponseFoldersApi();
let canned_response_folder_id = 789; // Number | ID of canned response folder
apiInstance.listCannedResponseFoldersCannedResponses(canned_response_folder_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                          | Type       | Description                  | Notes |
| ----------------------------- | ---------- | ---------------------------- | ----- |
| **canned_response_folder_id** | **Number** | ID of canned response folder |

### Return type

[**ListCannedResponses200Response**](ListCannedResponses200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCannedResponseFolder

> UpdateCannedResponseFolder200Response updateCannedResponseFolder(canned_response_folder, canned_response_folder_id)

Update Canned Response Folder

Update an existing Canned Response Folder in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponseFoldersApi();
let canned_response_folder = new FreshserviceApiSdkCodegen.CannedResponseFolder(); // CannedResponseFolder | Canned Response details that needs to be updated
let canned_response_folder_id = 789; // Number | ID of canned response Folder to update
apiInstance.updateCannedResponseFolder(canned_response_folder, canned_response_folder_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                          | Type                                                | Description                                      | Notes |
| ----------------------------- | --------------------------------------------------- | ------------------------------------------------ | ----- |
| **canned_response_folder**    | [**CannedResponseFolder**](CannedResponseFolder.md) | Canned Response details that needs to be updated |
| **canned_response_folder_id** | **Number**                                          | ID of canned response Folder to update           |

### Return type

[**UpdateCannedResponseFolder200Response**](UpdateCannedResponseFolder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
