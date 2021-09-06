# FreshteamApiSdkCodegen.EmployeeApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmployee**](EmployeeApi.md#createEmployee) | **POST** /employees | Create an Employee
[**getEmployee**](EmployeeApi.md#getEmployee) | **GET** /employees/{id} | Details of Employee
[**getEmployees**](EmployeeApi.md#getEmployees) | **GET** /employees | Employees List
[**sendInvite**](EmployeeApi.md#sendInvite) | **PUT** /employees/{id}/send_invite | Send Invite Email
[**updateEmployee**](EmployeeApi.md#updateEmployee) | **PUT** /employees/{id} | Update an Employee



## createEmployee

> Employee createEmployee(employee)

Create an Employee

Create an Employee

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeApi();
let employee = new FreshteamApiSdkCodegen.EmployeeCreate(); // EmployeeCreate | 
apiInstance.createEmployee(employee).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**EmployeeCreate**](EmployeeCreate.md)|  | 

### Return type

[**Employee**](Employee.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmployee

> EmployeeDetail getEmployee(id, opts)

Details of Employee

Get the Details of Employee in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeApi();
let id = 56; // Number | the employee identifier, as id
let opts = {
  'include': ["null"] // [String] | Additional Properties to include in response
};
apiInstance.getEmployee(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the employee identifier, as id | 
 **include** | [**[String]**](String.md)| Additional Properties to include in response | [optional] 

### Return type

[**EmployeeDetail**](EmployeeDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmployees

> [Employee] getEmployees(opts)

Employees List

List of active employees from directory

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeApi();
let opts = {
  'status': ["null"], // [String] | the status key
  'firstName': "firstName_example", // String |  First Name of users to query
  'lastName': "lastName_example", // String | Last Name of users to query
  'personalEmail': "personalEmail_example", // String | Personal Email of users to query
  'officialEmail': "officialEmail_example", // String | Official Email of users to query
  'employeeType': "employeeType_example", // String | Employee type of users to query
  'department': [null], // [Number] | the identifier of users departments to query, as id
  'businessUnit': [null], // [Number] | the identifier of users business units to query, as id
  'location': [null], // [Number] | the identifier of user location, as id
  'reportingManager': [null], // [Number] | the identifier of user reporting manager, as id
  'employeeId': "employeeId_example", // String | Employee Id of users to query
  'updatedSince': new Date("2013-10-20"), // Date | the identifier of user updated_since
  'draft': true, // Boolean | the identifier of user draft
  'deleted': true, // Boolean | the identifier of user deleted
  'terminated': true, // Boolean | the identifier of user terminated
  'page': 56, // Number | page number
  'sort': "sort_example", // String | Sort By
  'sortType': "sortType_example" // String | Sort Type
};
apiInstance.getEmployees(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**[String]**](String.md)| the status key | [optional] 
 **firstName** | **String**|  First Name of users to query | [optional] 
 **lastName** | **String**| Last Name of users to query | [optional] 
 **personalEmail** | **String**| Personal Email of users to query | [optional] 
 **officialEmail** | **String**| Official Email of users to query | [optional] 
 **employeeType** | **String**| Employee type of users to query | [optional] 
 **department** | [**[Number]**](Number.md)| the identifier of users departments to query, as id | [optional] 
 **businessUnit** | [**[Number]**](Number.md)| the identifier of users business units to query, as id | [optional] 
 **location** | [**[Number]**](Number.md)| the identifier of user location, as id | [optional] 
 **reportingManager** | [**[Number]**](Number.md)| the identifier of user reporting manager, as id | [optional] 
 **employeeId** | **String**| Employee Id of users to query | [optional] 
 **updatedSince** | **Date**| the identifier of user updated_since | [optional] 
 **draft** | **Boolean**| the identifier of user draft | [optional] 
 **deleted** | **Boolean**| the identifier of user deleted | [optional] 
 **terminated** | **Boolean**| the identifier of user terminated | [optional] 
 **page** | **Number**| page number | [optional] 
 **sort** | **String**| Sort By | [optional] 
 **sortType** | **String**| Sort Type | [optional] 

### Return type

[**[Employee]**](Employee.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendInvite

> Employee sendInvite(id)

Send Invite Email

Send Invite Email

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeApi();
let id = 56; // Number | the employee identifier, as id
apiInstance.sendInvite(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the employee identifier, as id | 

### Return type

[**Employee**](Employee.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateEmployee

> Employee updateEmployee(employee, id)

Update an Employee

Update an Employee

### Example

```javascript
import FreshteamApiSdkCodegen from 'freshteam-api-sdk-codegen';
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.EmployeeApi();
let employee = new FreshteamApiSdkCodegen.EmployeeCreate(); // EmployeeCreate | 
let id = 56; // Number | the employee identifier, as id
apiInstance.updateEmployee(employee, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**EmployeeCreate**](EmployeeCreate.md)|  | 
 **id** | **Number**| the employee identifier, as id | 

### Return type

[**Employee**](Employee.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

