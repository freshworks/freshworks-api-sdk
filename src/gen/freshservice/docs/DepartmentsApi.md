# FreshserviceApiSdkCodegen.DepartmentsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                             | HTTP request                                   | Description            |
| ------------------------------------------------------------------ | ---------------------------------------------- | ---------------------- |
| [**createDepartment**](DepartmentsApi.md#createDepartment)         | **POST** /api/v2/departments                   | Create Department      |
| [**deleteDepartment**](DepartmentsApi.md#deleteDepartment)         | **DELETE** /api/v2/departments/{department_id} | Delete Department      |
| [**getDepartment**](DepartmentsApi.md#getDepartment)               | **GET** /api/v2/departments/{department_id}    | View Department        |
| [**listDepartmentFields**](DepartmentsApi.md#listDepartmentFields) | **GET** /api/v2/department_fields              | List Department Fields |
| [**listDepartments**](DepartmentsApi.md#listDepartments)           | **GET** /api/v2/departments                    | List All Departments   |
| [**updateDepartment**](DepartmentsApi.md#updateDepartment)         | **PUT** /api/v2/departments/{department_id}    | Update Department      |

## createDepartment

> CreateDepartment200Response createDepartment(department)

Create Department

Create a new Department (or Company in MSP Mode) in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.DepartmentsApi();
let department = new FreshserviceApiSdkCodegen.Department(); // Department | Department that needs to be created
apiInstance.createDepartment(department).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                            | Description                         | Notes |
| -------------- | ------------------------------- | ----------------------------------- | ----- |
| **department** | [**Department**](Department.md) | Department that needs to be created |

### Return type

[**CreateDepartment200Response**](CreateDepartment200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteDepartment

> deleteDepartment(department_id)

Delete Department

Delete the Department (or Company in MSP Mode) with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.DepartmentsApi();
let department_id = 789; // Number | ID of department to delete
apiInstance.deleteDepartment(department_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description                | Notes |
| ----------------- | ---------- | -------------------------- | ----- |
| **department_id** | **Number** | ID of department to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getDepartment

> CreateDepartment200Response getDepartment(department_id)

View Department

Retrieve the Department (or Company in MSP Mode) with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.DepartmentsApi();
let department_id = 789; // Number | ID of department to retrieve
apiInstance.getDepartment(department_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description                  | Notes |
| ----------------- | ---------- | ---------------------------- | ----- |
| **department_id** | **Number** | ID of department to retrieve |

### Return type

[**CreateDepartment200Response**](CreateDepartment200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDepartmentFields

> ListDepartmentFields200Response listDepartmentFields()

List Department Fields

Retrieve the Department Fields (or Company Fields in MSP Mode) from Freshservice. The fields will be returned in the sequence that they are displayed on the UI.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.DepartmentsApi();
apiInstance.listDepartmentFields().then(
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

[**ListDepartmentFields200Response**](ListDepartmentFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDepartments

> ListDepartments200Response listDepartments(opts)

List All Departments

Retrieve a list of all Departments (or Companies in MSP Mode) in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.DepartmentsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listDepartments(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description                                                         | Notes                      |
| ------------ | ---------- | ------------------------------------------------------------------- | -------------------------- |
| **per_page** | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**     | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |

### Return type

[**ListDepartments200Response**](ListDepartments200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDepartment

> CreateDepartment200Response updateDepartment(department, department_id)

Update Department

Update an existing Department (or Company in MSP Mode) in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.DepartmentsApi();
let department = new FreshserviceApiSdkCodegen.Department(); // Department | Department that needs to be created
let department_id = 789; // Number | ID of department to retrieve
apiInstance.updateDepartment(department, department_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                            | Description                         | Notes |
| ----------------- | ------------------------------- | ----------------------------------- | ----- |
| **department**    | [**Department**](Department.md) | Department that needs to be created |
| **department_id** | **Number**                      | ID of department to retrieve        |

### Return type

[**CreateDepartment200Response**](CreateDepartment200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
