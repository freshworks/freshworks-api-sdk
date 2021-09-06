# FreshteamApiSdkCodegen.ApplicantApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveApplicant**](ApplicantApi.md#archiveApplicant) | **PUT** /applicants/{id}/archive | Archive Applicant
[**getApplicant**](ApplicantApi.md#getApplicant) | **GET** /applicants/{id} | Get an Applicant
[**getApplicants**](ApplicantApi.md#getApplicants) | **GET** /job_postings/{id}/applicants | Applicants List
[**moveSubStage**](ApplicantApi.md#moveSubStage) | **PUT** /applicants/{id}/move_sub_stage | sub stage update
[**updateApplicant**](ApplicantApi.md#updateApplicant) | **PUT** /applicants/{id} | Update an Applicant



## archiveApplicant

> ApplicantDetail archiveApplicant(id, opts)

Archive Applicant

Archive Applicant

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the applicant identifier, as id
let opts = {
  'applicant': new FreshteamApiSdkCodegen.InlineObject3() // InlineObject3 | 
};
apiInstance.archiveApplicant(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the applicant identifier, as id | 
 **applicant** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

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
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the applicant identifier, as id
apiInstance.getApplicant(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the applicant identifier, as id | 

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
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the job_posting identifier, as id
let opts = {
  'status': ["null"], // [String] | the status key
  'stage': [null], // [Number] | the identifier of Stage of applicants, as Id
  'followersId': [null], // [Number] | the identifier of followers of applicant, as Id
  'candidateFirstName': "candidateFirstName_example", // String |  First Name of candidate to query
  'candidateLastName': "candidateLastName_example", // String | Last Name of candidate to query
  'candidateEmail': "candidateEmail_example", // String | Email of candidate to query
  'candidateSource': [null], // [Number] | the identifier of source of candidate, as Id
  'candidateSourceCategory': [null], // [Number] | the identifier of source_category of candidate, as Id
  'candidateOwner': [null], // [Number] | the identifier of owner of candidate, as Id
  'candidateCity': ["null"], // [String] | candidate city to query
  'candidateCountryCode': ["null"], // [String] | candidate country code to query
  'candidateTags': ["null"], // [String] | candidate tags to query
  'candidateSkills': ["null"], // [String] | candidate skills to query
  'candidatePositionsCompany': ["null"], // [String] | candidate companies to query
  'candidatePositionsTitle': ["null"], // [String] | candidate positions title to query
  'candidateRating': ["null"], // [String] | candidate rating to query
  'candidateReferredBy': [null], // [Number] | the identifier of referred_by of candidate, as Id
  'candidateHasEmail': true, // Boolean | candidate email exists
  'candidateResponded': true, // Boolean | has candidate responded
  'candidateSpam': true, // Boolean | blocked candidate
  'requisitionId': [null], // [Number] | the identifier of requisition of applicants, as Id
  'createdAt': new Date("2013-10-20"), // Date | applicant created_at
  'createdSince': new Date("2013-10-20"), // Date | applicant created_since
  'updatedSince': new Date("2013-10-20"), // Date | applicant updated_since
  'deleted': true, // Boolean | the identifier of applicant deleted
  'sort': "sort_example", // String | Sort By
  'sortType': "sortType_example" // String | Sort Type
};
apiInstance.getApplicants(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the job_posting identifier, as id | 
 **status** | [**[String]**](String.md)| the status key | [optional] 
 **stage** | [**[Number]**](Number.md)| the identifier of Stage of applicants, as Id | [optional] 
 **followersId** | [**[Number]**](Number.md)| the identifier of followers of applicant, as Id | [optional] 
 **candidateFirstName** | **String**|  First Name of candidate to query | [optional] 
 **candidateLastName** | **String**| Last Name of candidate to query | [optional] 
 **candidateEmail** | **String**| Email of candidate to query | [optional] 
 **candidateSource** | [**[Number]**](Number.md)| the identifier of source of candidate, as Id | [optional] 
 **candidateSourceCategory** | [**[Number]**](Number.md)| the identifier of source_category of candidate, as Id | [optional] 
 **candidateOwner** | [**[Number]**](Number.md)| the identifier of owner of candidate, as Id | [optional] 
 **candidateCity** | [**[String]**](String.md)| candidate city to query | [optional] 
 **candidateCountryCode** | [**[String]**](String.md)| candidate country code to query | [optional] 
 **candidateTags** | [**[String]**](String.md)| candidate tags to query | [optional] 
 **candidateSkills** | [**[String]**](String.md)| candidate skills to query | [optional] 
 **candidatePositionsCompany** | [**[String]**](String.md)| candidate companies to query | [optional] 
 **candidatePositionsTitle** | [**[String]**](String.md)| candidate positions title to query | [optional] 
 **candidateRating** | [**[String]**](String.md)| candidate rating to query | [optional] 
 **candidateReferredBy** | [**[Number]**](Number.md)| the identifier of referred_by of candidate, as Id | [optional] 
 **candidateHasEmail** | **Boolean**| candidate email exists | [optional] 
 **candidateResponded** | **Boolean**| has candidate responded | [optional] 
 **candidateSpam** | **Boolean**| blocked candidate | [optional] 
 **requisitionId** | [**[Number]**](Number.md)| the identifier of requisition of applicants, as Id | [optional] 
 **createdAt** | **Date**| applicant created_at | [optional] 
 **createdSince** | **Date**| applicant created_since | [optional] 
 **updatedSince** | **Date**| applicant updated_since | [optional] 
 **deleted** | **Boolean**| the identifier of applicant deleted | [optional] 
 **sort** | **String**| Sort By | [optional] 
 **sortType** | **String**| Sort Type | [optional] 

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
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let id = 56; // Number | the applicant identifier, as id
let opts = {
  'applicant': new FreshteamApiSdkCodegen.InlineObject4() // InlineObject4 | 
};
apiInstance.moveSubStage(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the applicant identifier, as id | 
 **applicant** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

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
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.ApplicantApi();
let applicant = new FreshteamApiSdkCodegen.ApplicantUpdate(); // ApplicantUpdate | 
let id = 56; // Number | the applicant identifier, as id
apiInstance.updateApplicant(applicant, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant** | [**ApplicantUpdate**](ApplicantUpdate.md)|  | 
 **id** | **Number**| the applicant identifier, as id | 

### Return type

[**ApplicantDetail**](ApplicantDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

