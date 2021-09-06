# FreshteamApiSdkCodegen.LocationsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                         | HTTP request           | Description          |
| ---------------------------------------------- | ---------------------- | -------------------- |
| [**getBranch**](LocationsApi.md#getBranch)     | **GET** /branches/{id} | Get Location Details |
| [**getBranches**](LocationsApi.md#getBranches) | **GET** /branches      | Locations List       |

## getBranch

> Branch getBranch(id)

Get Location Details

Get the Details of Location in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.LocationsApi();
let id = 56; // Number | the location identifier, as id
apiInstance.getBranch(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                    | Notes |
| ------ | ---------- | ------------------------------ | ----- |
| **id** | **Number** | the location identifier, as id |

### Return type

[**Branch**](Branch.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBranches

> [Branch] getBranches()

Locations List

List of Locations in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.LocationsApi();
apiInstance.getBranches().then(
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

[**[Branch]**](Branch.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
