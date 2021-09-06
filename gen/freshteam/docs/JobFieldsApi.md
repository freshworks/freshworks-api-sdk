# FreshteamApiSdkCodegen.JobFieldsApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                           | HTTP request                | Description     |
| ------------------------------------------------ | --------------------------- | --------------- |
| [**getJobFields**](JobFieldsApi.md#getJobFields) | **GET** /job_posting_fields | Job Fields List |

## getJobFields

> [JobField] getJobFields()

Job Fields List

List of active job fields in the form

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.JobFieldsApi();
apiInstance.getJobFields().then(
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

[**[JobField]**](JobField.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
