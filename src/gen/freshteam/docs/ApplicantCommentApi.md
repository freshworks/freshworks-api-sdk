# FreshteamApiSdkCodegen.ApplicantCommentApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                                      | HTTP request                       | Description                 |
| --------------------------------------------------------------------------- | ---------------------------------- | --------------------------- |
| [**createApplicantComment**](ApplicantCommentApi.md#createApplicantComment) | **POST** /applicants/{id}/comments | Create an Applicant Comment |

## createApplicantComment

> ApplicantComment createApplicantComment(applicant_comment, id)

Create an Applicant Comment

Create an Applicant Comment

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantCommentApi();
let applicant_comment = new FreshteamApiSdkCodegen.ApplicantCommentCreate(); // ApplicantCommentCreate |
let id = 56; // Number | the applicant identifier, as id
apiInstance.createApplicantComment(applicant_comment, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type                                                    | Description                     | Notes |
| --------------------- | ------------------------------------------------------- | ------------------------------- | ----- |
| **applicant_comment** | [**ApplicantCommentCreate**](ApplicantCommentCreate.md) |                                 |
| **id**                | **Number**                                              | the applicant identifier, as id |

### Return type

[**ApplicantComment**](ApplicantComment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
