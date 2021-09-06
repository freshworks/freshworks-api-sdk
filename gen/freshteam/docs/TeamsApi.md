# FreshteamApiSdkCodegen.TeamsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                               | HTTP request        | Description      |
| ------------------------------------ | ------------------- | ---------------- |
| [**getTeam**](TeamsApi.md#getTeam)   | **GET** /teams/{id} | Get Team Details |
| [**getTeams**](TeamsApi.md#getTeams) | **GET** /teams      | Teams List       |

## getTeam

> Team getTeam(id)

Get Team Details

Get the Details of Team in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TeamsApi();
let id = 56; // Number | the team identifier, as id
apiInstance.getTeam(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                | Notes |
| ------ | ---------- | -------------------------- | ----- |
| **id** | **Number** | the team identifier, as id |

### Return type

[**Team**](Team.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTeams

> [Team] getTeams()

Teams List

List of Teams in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TeamsApi();
apiInstance.getTeams().then(
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

[**[Team]**](Team.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
