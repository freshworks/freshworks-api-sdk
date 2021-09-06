# FreshteamApiSdkCodegen.SourceCategoriesApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSourceCategories**](SourceCategoriesApi.md#getSourceCategories) | **GET** /candidate_source_categories | List of source categories



## getSourceCategories

> [SourceCategory] getSourceCategories()

List of source categories

List of source categories

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.SourceCategoriesApi();
apiInstance.getSourceCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SourceCategory]**](SourceCategory.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

