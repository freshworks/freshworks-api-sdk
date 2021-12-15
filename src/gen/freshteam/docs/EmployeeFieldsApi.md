# FreshteamApiSdkCodegen.EmployeeFieldsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                              | HTTP request              | Description           |
| ------------------------------------------------------------------- | ------------------------- | --------------------- |
| [**createEmployeeFiled**](EmployeeFieldsApi.md#createEmployeeFiled) | **POST** /employee_fields | Create a Custom Field |
| [**getEmployeeFields**](EmployeeFieldsApi.md#getEmployeeFields)     | **GET** /employee_fields  | Employee Fields List  |

## createEmployeeFiled

> EmployeeField createEmployeeFiled(opts)

Create a Custom Field

Create a Custom Field in Employee Form

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeFieldsApi();
let opts = {
  employee_fields: new FreshteamApiSdkCodegen.InlineObject2() // InlineObject2 |
};
apiInstance.createEmployeeFiled(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                  | Description | Notes      |
| ------------------- | ------------------------------------- | ----------- | ---------- |
| **employee_fields** | [**InlineObject2**](InlineObject2.md) |             | [optional] |

### Return type

[**EmployeeField**](EmployeeField.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getEmployeeFields

> [EmployeeField] getEmployeeFields()

Employee Fields List

List of active employees fields in the form

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeFieldsApi();
apiInstance.getEmployeeFields().then(
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

[**[EmployeeField]**](EmployeeField.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
