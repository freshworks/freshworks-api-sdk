# FreshteamApiSdkCodegen.ApplicantApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                                   | HTTP request                            | Description         |
| -------------------------------------------------------- | --------------------------------------- | ------------------- |
| [**archiveApplicant**](ApplicantApi.md#archiveApplicant) | **PUT** /applicants/{id}/archive        | Archive Applicant   |
| [**getApplicant**](ApplicantApi.md#getApplicant)         | **GET** /applicants/{id}                | Get an Applicant    |
| [**getApplicants**](ApplicantApi.md#getApplicants)       | **GET** /job_postings/{id}/applicants   | Applicants List     |
| [**moveSubStage**](ApplicantApi.md#moveSubStage)         | **PUT** /applicants/{id}/move_sub_stage | sub stage update    |
| [**updateApplicant**](ApplicantApi.md#updateApplicant)   | **PUT** /applicants/{id}                | Update an Applicant |

## archiveApplicant

> ApplicantDetail archiveApplicant(id, opts)

Archive Applicant

Archive Applicant

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the applicant identifier, as id
let opts = {
  applicant: new FreshteamApiSdkCodegen.InlineObject3() // InlineObject3 |
};
apiInstance.archiveApplicant(id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                                  | Description                     | Notes      |
| ------------- | ------------------------------------- | ------------------------------- | ---------- |
| **id**        | **Number**                            | the applicant identifier, as id |
| **applicant** | [**InlineObject3**](InlineObject3.md) |                                 | [optional] |

### Return type

[**ApplicantDetail**](ApplicantDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getApplicant

> ApplicantDetail getApplicant(id)

Get an Applicant

Get an Applicant

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the applicant identifier, as id
apiInstance.getApplicant(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                     | Notes |
| ------ | ---------- | ------------------------------- | ----- |
| **id** | **Number** | the applicant identifier, as id |

### Return type

[**ApplicantDetail**](ApplicantDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getApplicants

> [Applicant] getApplicants(id, opts)

Applicants List

Get all Applicants

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the job_posting identifier, as id
let opts = {
  status: ["null"], // [String] | the status key
  stage: [null], // [Number] | the identifier of Stage of applicants, as Id
  followers_id: [null], // [Number] | the identifier of followers of applicant, as Id
  candidate_first_name: "candidate_first_name_example", // String |  First Name of candidate to query
  candidate_last_name: "candidate_last_name_example", // String | Last Name of candidate to query
  candidate_email: "candidate_email_example", // String | Email of candidate to query
  candidate_source: [null], // [Number] | the identifier of source of candidate, as Id
  candidate_source_category: [null], // [Number] | the identifier of source_category of candidate, as Id
  candidate_owner: [null], // [Number] | the identifier of owner of candidate, as Id
  candidate_city: ["null"], // [String] | candidate city to query
  candidate_country_code: ["null"], // [String] | candidate country code to query
  candidate_tags: ["null"], // [String] | candidate tags to query
  candidate_skills: ["null"], // [String] | candidate skills to query
  candidate_positions_company: ["null"], // [String] | candidate companies to query
  candidate_positions_title: ["null"], // [String] | candidate positions title to query
  candidate_rating: ["null"], // [String] | candidate rating to query
  candidate_referred_by: [null], // [Number] | the identifier of referred_by of candidate, as Id
  candidate_has_email: true, // Boolean | candidate email exists
  candidate_responded: true, // Boolean | has candidate responded
  candidate_spam: true, // Boolean | blocked candidate
  requisition_id: [null], // [Number] | the identifier of requisition of applicants, as Id
  created_at: new Date("2013-10-20"), // Date | applicant created_at
  created_since: new Date("2013-10-20"), // Date | applicant created_since
  updated_since: new Date("2013-10-20"), // Date | applicant updated_since
  deleted: true, // Boolean | the identifier of applicant deleted
  sort: "sort_example", // String | Sort By
  sort_type: "sort_type_example" // String | Sort Type
};
apiInstance.getApplicants(id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                            | Type                      | Description                                           | Notes      |
| ------------------------------- | ------------------------- | ----------------------------------------------------- | ---------- |
| **id**                          | **Number**                | the job_posting identifier, as id                     |
| **status**                      | [**[String]**](String.md) | the status key                                        | [optional] |
| **stage**                       | [**[Number]**](Number.md) | the identifier of Stage of applicants, as Id          | [optional] |
| **followers_id**                | [**[Number]**](Number.md) | the identifier of followers of applicant, as Id       | [optional] |
| **candidate_first_name**        | **String**                | First Name of candidate to query                      | [optional] |
| **candidate_last_name**         | **String**                | Last Name of candidate to query                       | [optional] |
| **candidate_email**             | **String**                | Email of candidate to query                           | [optional] |
| **candidate_source**            | [**[Number]**](Number.md) | the identifier of source of candidate, as Id          | [optional] |
| **candidate_source_category**   | [**[Number]**](Number.md) | the identifier of source_category of candidate, as Id | [optional] |
| **candidate_owner**             | [**[Number]**](Number.md) | the identifier of owner of candidate, as Id           | [optional] |
| **candidate_city**              | [**[String]**](String.md) | candidate city to query                               | [optional] |
| **candidate_country_code**      | [**[String]**](String.md) | candidate country code to query                       | [optional] |
| **candidate_tags**              | [**[String]**](String.md) | candidate tags to query                               | [optional] |
| **candidate_skills**            | [**[String]**](String.md) | candidate skills to query                             | [optional] |
| **candidate_positions_company** | [**[String]**](String.md) | candidate companies to query                          | [optional] |
| **candidate_positions_title**   | [**[String]**](String.md) | candidate positions title to query                    | [optional] |
| **candidate_rating**            | [**[String]**](String.md) | candidate rating to query                             | [optional] |
| **candidate_referred_by**       | [**[Number]**](Number.md) | the identifier of referred_by of candidate, as Id     | [optional] |
| **candidate_has_email**         | **Boolean**               | candidate email exists                                | [optional] |
| **candidate_responded**         | **Boolean**               | has candidate responded                               | [optional] |
| **candidate_spam**              | **Boolean**               | blocked candidate                                     | [optional] |
| **requisition_id**              | [**[Number]**](Number.md) | the identifier of requisition of applicants, as Id    | [optional] |
| **created_at**                  | **Date**                  | applicant created_at                                  | [optional] |
| **created_since**               | **Date**                  | applicant created_since                               | [optional] |
| **updated_since**               | **Date**                  | applicant updated_since                               | [optional] |
| **deleted**                     | **Boolean**               | the identifier of applicant deleted                   | [optional] |
| **sort**                        | **String**                | Sort By                                               | [optional] |
| **sort_type**                   | **String**                | Sort Type                                             | [optional] |

### Return type

[**[Applicant]**](Applicant.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## moveSubStage

> ApplicantDetail moveSubStage(id, opts)

sub stage update

Applicant sub stage update

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the applicant identifier, as id
let opts = {
  applicant: new FreshteamApiSdkCodegen.InlineObject4() // InlineObject4 |
};
apiInstance.moveSubStage(id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                                  | Description                     | Notes      |
| ------------- | ------------------------------------- | ------------------------------- | ---------- |
| **id**        | **Number**                            | the applicant identifier, as id |
| **applicant** | [**InlineObject4**](InlineObject4.md) |                                 | [optional] |

### Return type

[**ApplicantDetail**](ApplicantDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateApplicant

> ApplicantDetail updateApplicant(applicant, id)

Update an Applicant

Update an Applicant

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let applicant = new FreshteamApiSdkCodegen.ApplicantUpdate(); // ApplicantUpdate |
let id = 56; // Number | the applicant identifier, as id
apiInstance.updateApplicant(applicant, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                                      | Description                     | Notes |
| ------------- | ----------------------------------------- | ------------------------------- | ----- |
| **applicant** | [**ApplicantUpdate**](ApplicantUpdate.md) |                                 |
| **id**        | **Number**                                | the applicant identifier, as id |

### Return type

[**ApplicantDetail**](ApplicantDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
