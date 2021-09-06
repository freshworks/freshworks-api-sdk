# FreshteamApiSdkCodegen.JobApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicant**](JobApi.md#createApplicant) | **POST** /job_postings/{id}/applicants | Create an Applicant
[**getApplicantFields**](JobApi.md#getApplicantFields) | **GET** /job_postings/{id}/applicant_fields | Applicant Fields List
[**getJob**](JobApi.md#getJob) | **GET** /job_postings/{id} | Details of Job
[**getJobs**](JobApi.md#getJobs) | **GET** /job_postings | Jobs List



## createApplicant

> ApplicantDetail createApplicant(employee, id)

Create an Applicant

Create an Applicant

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.JobApi();
let employee = new FreshteamApiSdkCodegen.ApplicantCreate(); // ApplicantCreate | 
let id = 56; // Number | the job_posting identifier, as id
apiInstance.createApplicant(employee, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**ApplicantCreate**](ApplicantCreate.md)|  | 
 **id** | **Number**| the job_posting identifier, as id | 

### Return type

[**ApplicantDetail**](ApplicantDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicantFields

> [ApplicantField] getApplicantFields(id)

Applicant Fields List

List of active applicant fields in the form

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.JobApi();
let id = 56; // Number | the job_posting identifier, as id
apiInstance.getApplicantFields(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the job_posting identifier, as id | 

### Return type

[**[ApplicantField]**](ApplicantField.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJob

> JobDetail getJob(id)

Details of Job

Get the Details of Job

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.JobApi();
let id = 56; // Number | the job identifier, as id
apiInstance.getJob(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the job identifier, as id | 

### Return type

[**JobDetail**](JobDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJobs

> [Job] getJobs(opts)

Jobs List

List of jobs

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.JobApi();
let opts = {
  'status': ["null"], // [String] | the status key
  'title': "title_example", // String | Title of jobs to query
  'type': "type_example", // String | type of jobs to query
  'department': [null], // [Number] | the identifier of jobs department to query, as id
  'location': [null], // [Number] | the identifier of jobs location to query, as id
  'remote': [null], // [Boolean] | remote flag of jobs to query
  'locationCity': ["null"], // [String] | jobs city to query
  'locationCountry': ["null"], // [String] | jobs country to query
  'locationState': ["null"] // [String] | jobs state to query
};
apiInstance.getJobs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**[String]**](String.md)| the status key | [optional] 
 **title** | **String**| Title of jobs to query | [optional] 
 **type** | **String**| type of jobs to query | [optional] 
 **department** | [**[Number]**](Number.md)| the identifier of jobs department to query, as id | [optional] 
 **location** | [**[Number]**](Number.md)| the identifier of jobs location to query, as id | [optional] 
 **remote** | [**[Boolean]**](Boolean.md)| remote flag of jobs to query | [optional] 
 **locationCity** | [**[String]**](String.md)| jobs city to query | [optional] 
 **locationCountry** | [**[String]**](String.md)| jobs country to query | [optional] 
 **locationState** | [**[String]**](String.md)| jobs state to query | [optional] 

### Return type

[**[Job]**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

