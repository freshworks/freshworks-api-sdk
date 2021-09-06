# FreshteamApiSdkCodegen.SubDepartmentsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                          | HTTP request                  | Description                |
| --------------------------------------------------------------- | ----------------------------- | -------------------------- |
| [**getSubDepartment**](SubDepartmentsApi.md#getSubDepartment)   | **GET** /sub_departments/{id} | Get Sub Department Details |
| [**getSubDepartments**](SubDepartmentsApi.md#getSubDepartments) | **GET** /sub_departments      | Sub Departments List       |

## getSubDepartment

> SubDepartment getSubDepartment(id)

Get Sub Department Details

Get the Details of Sub Department in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.SubDepartmentsApi();
let id = 56; // Number | the sub department identifier, as id
apiInstance.getSubDepartment(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                          | Notes |
| ------ | ---------- | ------------------------------------ | ----- |
| **id** | **Number** | the sub department identifier, as id |

### Return type

[**SubDepartment**](SubDepartment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSubDepartments

> [SubDepartment] getSubDepartments()

Sub Departments List

List of Sub Departments in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.SubDepartmentsApi();
apiInstance.getSubDepartments().then(
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

[**[SubDepartment]**](SubDepartment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
