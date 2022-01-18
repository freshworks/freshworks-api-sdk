# FreshteamApiSdkCodegen.ApplicantEmailApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                                | HTTP request                     | Description               |
| --------------------------------------------------------------------- | -------------------------------- | ------------------------- |
| [**createApplicantEmail**](ApplicantEmailApi.md#createApplicantEmail) | **POST** /applicants/{id}/emails | Create an Applicant Email |

## createApplicantEmail

> ApplicantEmail createApplicantEmail(applicant_email, id)

Create an Applicant Email

Create an Applicant Email

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantEmailApi();
let applicant_email = new FreshteamApiSdkCodegen.ApplicantEmailCreate(); // ApplicantEmailCreate |
let id = 56; // Number | the applicant identifier, as id
apiInstance.createApplicantEmail(applicant_email, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                                | Description                     | Notes |
| ------------------- | --------------------------------------------------- | ------------------------------- | ----- |
| **applicant_email** | [**ApplicantEmailCreate**](ApplicantEmailCreate.md) |                                 |
| **id**              | **Number**                                          | the applicant identifier, as id |

### Return type

[**ApplicantEmail**](ApplicantEmail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
