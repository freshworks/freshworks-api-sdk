# FreshteamApiSdkCodegen.ApplicantConversationApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                                                     | HTTP request                            | Description                      |
| ------------------------------------------------------------------------------------------ | --------------------------------------- | -------------------------------- |
| [**createApplicantConversation**](ApplicantConversationApi.md#createApplicantConversation) | **POST** /applicants/{id}/conversations | Create an Applicant Conversation |

## createApplicantConversation

> ApplicantConversation createApplicantConversation(applicant_conversation, id)

Create an Applicant Conversation

Create an Applicant Conversation

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantConversationApi();
let applicant_conversation = new FreshteamApiSdkCodegen.ApplicantConversationCreate(); // ApplicantConversationCreate |
let id = 56; // Number | the applicant identifier, as id
apiInstance.createApplicantConversation(applicant_conversation, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                       | Type                                                              | Description                     | Notes |
| -------------------------- | ----------------------------------------------------------------- | ------------------------------- | ----- |
| **applicant_conversation** | [**ApplicantConversationCreate**](ApplicantConversationCreate.md) |                                 |
| **id**                     | **Number**                                                        | the applicant identifier, as id |

### Return type

[**ApplicantConversation**](ApplicantConversation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
