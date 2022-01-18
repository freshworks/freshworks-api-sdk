# FreshteamApiSdkCodegen.NewHireApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                           | HTTP request            | Description        |
| ------------------------------------------------ | ----------------------- | ------------------ |
| [**createNewHire**](NewHireApi.md#createNewHire) | **POST** /new_hires     | Create an NewHire  |
| [**getNewHire**](NewHireApi.md#getNewHire)       | **GET** /new_hires/{id} | Details of NewHire |
| [**getNewHires**](NewHireApi.md#getNewHires)     | **GET** /new_hires      | New Hires List     |
| [**updateNewHire**](NewHireApi.md#updateNewHire) | **PUT** /new_hires/{id} | Update a NewHire   |

## createNewHire

> NewHire createNewHire(new_hire)

Create an NewHire

Create an NewHire

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.NewHireApi();
let new_hire = new FreshteamApiSdkCodegen.NewHireCreate(); // NewHireCreate |
apiInstance.createNewHire(new_hire).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type                                  | Description | Notes |
| ------------ | ------------------------------------- | ----------- | ----- |
| **new_hire** | [**NewHireCreate**](NewHireCreate.md) |             |

### Return type

[**NewHire**](NewHire.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNewHire

> NewHireDetail getNewHire(id, opts)

Details of NewHire

Get the Details of NewHire in the Account

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.NewHireApi();
let id = 56; // Number | the NewHire identifier, as id
let opts = {
  include: ["null"] // [String] | Additional Properties to include in response
};
apiInstance.getNewHire(id, opts).then(
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
| **id**      | **Number**                | the NewHire identifier, as id                |
| **include** | [**[String]**](String.md) | Additional Properties to include in response | [optional] |

### Return type

[**NewHireDetail**](NewHireDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNewHires

> [NewHire] getNewHires(opts)

New Hires List

List of New Hires

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.NewHireApi();
let opts = {
  status: ["null"], // [String] | the status key
  first_name: "first_name_example", // String |  First Name of users to query
  last_name: "last_name_example", // String | Last Name of users to query
  personal_email: "personal_email_example", // String | Personal Email of users to query
  official_email: "official_email_example", // String | Official Email of users to query
  employee_type: "employee_type_example", // String | Employee type of users to query
  department: [null], // [Number] | the identifier of users departments to query, as id
  business_unit: [null], // [Number] | the identifier of users business units to query, as id
  location: [null], // [Number] | the identifier of user location, as id
  reporting_manager: [null], // [Number] | the identifier of user reporting manager, as id
  employee_id: "employee_id_example", // String | Employee Id of users to query
  updated_since: new Date("2013-10-20"), // Date | the identifier of user updated_since
  draft: true, // Boolean | the identifier of user draft
  deleted: true, // Boolean | the identifier of user deleted
  terminated: true, // Boolean | the identifier of user terminated
  no_show: true, // Boolean | the identifier of no show
  joining_date: new Date("2013-10-20"), // Date | the identifier of date of joining of the user
  page: 56, // Number | page number
  sort: "sort_example", // String | Sort By
  sort_type: "sort_type_example" // String | Sort Type
};
apiInstance.getNewHires(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type                      | Description                                            | Notes      |
| --------------------- | ------------------------- | ------------------------------------------------------ | ---------- |
| **status**            | [**[String]**](String.md) | the status key                                         | [optional] |
| **first_name**        | **String**                | First Name of users to query                           | [optional] |
| **last_name**         | **String**                | Last Name of users to query                            | [optional] |
| **personal_email**    | **String**                | Personal Email of users to query                       | [optional] |
| **official_email**    | **String**                | Official Email of users to query                       | [optional] |
| **employee_type**     | **String**                | Employee type of users to query                        | [optional] |
| **department**        | [**[Number]**](Number.md) | the identifier of users departments to query, as id    | [optional] |
| **business_unit**     | [**[Number]**](Number.md) | the identifier of users business units to query, as id | [optional] |
| **location**          | [**[Number]**](Number.md) | the identifier of user location, as id                 | [optional] |
| **reporting_manager** | [**[Number]**](Number.md) | the identifier of user reporting manager, as id        | [optional] |
| **employee_id**       | **String**                | Employee Id of users to query                          | [optional] |
| **updated_since**     | **Date**                  | the identifier of user updated_since                   | [optional] |
| **draft**             | **Boolean**               | the identifier of user draft                           | [optional] |
| **deleted**           | **Boolean**               | the identifier of user deleted                         | [optional] |
| **terminated**        | **Boolean**               | the identifier of user terminated                      | [optional] |
| **no_show**           | **Boolean**               | the identifier of no show                              | [optional] |
| **joining_date**      | **Date**                  | the identifier of date of joining of the user          | [optional] |
| **page**              | **Number**                | page number                                            | [optional] |
| **sort**              | **String**                | Sort By                                                | [optional] |
| **sort_type**         | **String**                | Sort Type                                              | [optional] |

### Return type

[**[NewHire]**](NewHire.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateNewHire

> NewHire updateNewHire(new_hire, id)

Update a NewHire

Update a NewHire

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.NewHireApi();
let new_hire = new FreshteamApiSdkCodegen.NewHireCreate(); // NewHireCreate |
let id = 56; // Number | the new_hire identifier, as id
apiInstance.updateNewHire(new_hire, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type                                  | Description                    | Notes |
| ------------ | ------------------------------------- | ------------------------------ | ----- |
| **new_hire** | [**NewHireCreate**](NewHireCreate.md) |                                |
| **id**       | **Number**                            | the new_hire identifier, as id |

### Return type

[**NewHire**](NewHire.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
