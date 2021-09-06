# FreshteamApiSdkCodegen.CandidateApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCandidate**](CandidateApi.md#getCandidate) | **GET** /candidates/{id} | Details of a candidate
[**updateCandidate**](CandidateApi.md#updateCandidate) | **PUT** /candidates/{id} | Update a Candidate



## getCandidate

> Candidate getCandidate(id, opts)

Details of a candidate

Get the details of a candidate

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.CandidateApi();
let id = 56; // Number | The candidate identifier, as id
let opts = {
  'include': ["null"] // [String] | Additional Properties to include in response
};
apiInstance.getCandidate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The candidate identifier, as id | 
 **include** | [**[String]**](String.md)| Additional Properties to include in response | [optional] 

### Return type

[**Candidate**](Candidate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCandidate

> Candidate updateCandidate(candidate, id)

Update a Candidate

Update a Candidate

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.CandidateApi();
let candidate = new FreshteamApiSdkCodegen.CandidateCreate(); // CandidateCreate | 
let id = 56; // Number | the candidate identifier, as id
apiInstance.updateCandidate(candidate, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candidate** | [**CandidateCreate**](CandidateCreate.md)|  | 
 **id** | **Number**| the candidate identifier, as id | 

### Return type

[**Candidate**](Candidate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

