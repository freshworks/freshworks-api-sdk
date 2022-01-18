# FreshteamApiSdkCodegen.InterviewApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                           | HTTP request             | Description          |
| ------------------------------------------------ | ------------------------ | -------------------- |
| [**getInterview**](InterviewApi.md#getInterview) | **GET** /interviews/{id} | Details of Interview |

## getInterview

> InterviewDetail getInterview(id, opts)

Details of Interview

Get the Details of an Interview

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.InterviewApi();
let id = 56; // Number | the interview identifier, as id
let opts = {
  include: ["null"] // [String] | Additional Properties to include in response
};
apiInstance.getInterview(id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name        | Type                      | Description                                  | Notes      |
| ----------- | ------------------------- | -------------------------------------------- | ---------- |
| **id**      | **Number**                | the interview identifier, as id              |
| **include** | [**[String]**](String.md) | Additional Properties to include in response | [optional] |

### Return type

[**InterviewDetail**](InterviewDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
