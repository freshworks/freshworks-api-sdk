# FreshteamApiSdkCodegen.LevelsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLevel**](LevelsApi.md#getLevel) | **GET** /levels/{id} | Get level details
[**getLevels**](LevelsApi.md#getLevels) | **GET** /levels | List of levels



## getLevel

> Level getLevel(id)

Get level details

get level details

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.LevelsApi();
let id = 56; // Number | the level, as id
apiInstance.getLevel(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the level, as id | 

### Return type

[**Level**](Level.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getLevels

> [Level] getLevels()

List of levels

List of levels

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.LevelsApi();
apiInstance.getLevels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Level]**](Level.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

