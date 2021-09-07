# FreshteamApiSdkCodegen.BusinessUnitsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                       | HTTP request                 | Description               |
| ------------------------------------------------------------ | ---------------------------- | ------------------------- |
| [**getBusinessUnit**](BusinessUnitsApi.md#getBusinessUnit)   | **GET** /business_units/{id} | Get Business Unit Details |
| [**getBusinessUnits**](BusinessUnitsApi.md#getBusinessUnits) | **GET** /business_units      | Business Units List       |

## getBusinessUnit

> BusinessUnit getBusinessUnit(id)

Get Business Unit Details

Get the Details of Business Unit in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.BusinessUnitsApi();
let id = 56; // Number | the business unit identifier, as id
apiInstance.getBusinessUnit(id).then(
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
| **id** | **Number** | the business unit identifier, as id |

### Return type

[**BusinessUnit**](BusinessUnit.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBusinessUnits

> [BusinessUnit] getBusinessUnits()

Business Units List

List of Business Units in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.BusinessUnitsApi();
apiInstance.getBusinessUnits().then(
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

[**[BusinessUnit]**](BusinessUnit.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
