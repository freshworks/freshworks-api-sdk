# FreshteamApiSdkCodegen.UserFunctionsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                       | HTTP request                 | Description               |
| ------------------------------------------------------------ | ---------------------------- | ------------------------- |
| [**getUserFunction**](UserFunctionsApi.md#getUserFunction)   | **GET** /user_functions/{id} | Get user function details |
| [**getUserFunctions**](UserFunctionsApi.md#getUserFunctions) | **GET** /user_functions      | List of user functions    |

## getUserFunction

> UserFunction getUserFunction(id)

Get user function details

get user function details

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.UserFunctionsApi();
let id = 56; // Number | the user function identifier, as id
apiInstance.getUserFunction(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                         | Notes |
| ------ | ---------- | ----------------------------------- | ----- |
| **id** | **Number** | the user function identifier, as id |

### Return type

[**UserFunction**](UserFunction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getUserFunctions

> [UserFunction] getUserFunctions()

List of user functions

List of User Functions

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.UserFunctionsApi();
apiInstance.getUserFunctions().then(
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

[**[UserFunction]**](UserFunction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
