# FreshserviceApiSdkCodegen.RequestersApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                  | HTTP request                                               | Description                |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------- |
| [**convertRequesterToAgent**](RequestersApi.md#convertRequesterToAgent) | **PUT** /api/v2/requesters/{requester_id}/convert_to_agent | Convert Requester to Agent |
| [**createRequester**](RequestersApi.md#createRequester)                 | **POST** /api/v2/requesters                                | Create Requester           |
| [**deleteRequester**](RequestersApi.md#deleteRequester)                 | **DELETE** /api/v2/requesters/{requester_id}               | Delete Requester           |
| [**forgetRequester**](RequestersApi.md#forgetRequester)                 | **DELETE** /api/v2/requesters/{requester_id}/forget        | Forget Requester           |
| [**getRequester**](RequestersApi.md#getRequester)                       | **GET** /api/v2/requesters/{requester_id}                  | View Requester             |
| [**listRequesterFields**](RequestersApi.md#listRequesterFields)         | **GET** /api/v2/requester_fields                           | List All Requester Fields  |
| [**listRequesters**](RequestersApi.md#listRequesters)                   | **GET** /api/v2/requesters                                 | List All Requesters        |
| [**mergeRequester**](RequestersApi.md#mergeRequester)                   | **PUT** /api/v2/requesters/{primary_requester_id}/merge    | Merge Requesters           |
| [**updateRequester**](RequestersApi.md#updateRequester)                 | **PUT** /api/v2/requesters/{requester_id}                  | Update Requester           |

## convertRequesterToAgent

> ConvertRequesterToAgent200Response convertRequesterToAgent(requester_id)

Convert Requester to Agent

Convert a requester to an occasional agent with SD Agent role and no group memberships.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let requester_id = 789; // Number | ID of requester to update
apiInstance.convertRequesterToAgent(requester_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description               | Notes |
| ---------------- | ---------- | ------------------------- | ----- |
| **requester_id** | **Number** | ID of requester to update |

### Return type

[**ConvertRequesterToAgent200Response**](ConvertRequesterToAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createRequester

> CreateRequester200Response createRequester(requester)

Create Requester

Create a new Requester in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let requester = new FreshserviceApiSdkCodegen.Requester(); // Requester | Requester who needs to be created
apiInstance.createRequester(requester).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                          | Description                       | Notes |
| ------------- | ----------------------------- | --------------------------------- | ----- |
| **requester** | [**Requester**](Requester.md) | Requester who needs to be created |

### Return type

[**CreateRequester200Response**](CreateRequester200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRequester

> deleteRequester(requester_id)

Delete Requester

Delete the Requester with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let requester_id = 789; // Number | ID of requester to delete
apiInstance.deleteRequester(requester_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description               | Notes |
| ---------------- | ---------- | ------------------------- | ----- |
| **requester_id** | **Number** | ID of requester to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## forgetRequester

> forgetRequester(requester_id)

Forget Requester

Permanently deletes the requester and the tickets that they requested.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let requester_id = 789; // Number | ID of requester to forget
apiInstance.forgetRequester(requester_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description               | Notes |
| ---------------- | ---------- | ------------------------- | ----- |
| **requester_id** | **Number** | ID of requester to forget |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRequester

> CreateRequester200Response getRequester(requester_id)

View Requester

Retrieve the Requester with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let requester_id = 789; // Number | ID of requester to retrieve
apiInstance.getRequester(requester_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description                 | Notes |
| ---------------- | ---------- | --------------------------- | ----- |
| **requester_id** | **Number** | ID of requester to retrieve |

### Return type

[**CreateRequester200Response**](CreateRequester200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listRequesterFields

> ListRequesterFields200Response listRequesterFields(opts)

List All Requester Fields

Retrieve a list of all Requester Fields in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listRequesterFields(opts).then(
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

[**ListRequesterFields200Response**](ListRequesterFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listRequesters

> ListRequesters200Response listRequesters(opts)

List All Requesters

Retrieve a list of all Requesters in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1, // Number | The page number to retrieve.
  email: "email_example", // String | The email address for which the corresponding requester needs to be listed.
  mobile_phone_number: "mobile_phone_number_example", // String | The mobile phone number for which the corresponding requesters need to be listed.
  work_phone_number: "work_phone_number_example", // String | The work phone number for which the corresponding requesters need to be listed.
  active: true, // Boolean | Signifies if the user accounts to be listed are active (true), or have been deactivated. Not applying this filter returns both active and deactivated accounts.
  query: "query_example" // String | The simple or compound query which needs to be applied as a filter to the list of requesters. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>first_name, last_name, job_title, primary_email, secondary_emails, work_phone_number, mobile_phone_number, department_id, reporting_manager_id, time_zone, language, location_id, created_at, updated_at, (all custom fields).<br/>Sample Query: https://account.freshservice.com/api/v2/requesters?query=\"job_titile:'HR Manager' AND created_at:>'2018-08-10'\"
};
apiInstance.listRequesters(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Notes                      |
| ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **per_page**            | **Number**  | The number of entries to retrieve in each page of a paginated list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to 10] |
| **page**                | **Number**  | The page number to retrieve.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [optional] [default to 1]  |
| **email**               | **String**  | The email address for which the corresponding requester needs to be listed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [optional]                 |
| **mobile_phone_number** | **String**  | The mobile phone number for which the corresponding requesters need to be listed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [optional]                 |
| **work_phone_number**   | **String**  | The work phone number for which the corresponding requesters need to be listed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | [optional]                 |
| **active**              | **Boolean** | Signifies if the user accounts to be listed are active (true), or have been deactivated. Not applying this filter returns both active and deactivated accounts.                                                                                                                                                                                                                                                                                                                                                                                                                                | [optional]                 |
| **query**               | **String**  | The simple or compound query which needs to be applied as a filter to the list of requesters. This string needs to be URL encoded.&lt;br/&gt; Supported Query Parameters:&lt;br/&gt;first_name, last_name, job_title, primary_email, secondary_emails, work_phone_number, mobile_phone_number, department_id, reporting_manager_id, time_zone, language, location_id, created_at, updated_at, (all custom fields).&lt;br/&gt;Sample Query: https://account.freshservice.com/api/v2/requesters?query&#x3D;\&quot;job_titile:&#39;HR Manager&#39; AND created_at:&gt;&#39;2018-08-10&#39;\&quot; | [optional]                 |

### Return type

[**ListRequesters200Response**](ListRequesters200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## mergeRequester

> MergeRequester200Response mergeRequester(primary_requester_id, secondary_requesters)

Merge Requesters

Merge secondary requesters into a primary requester.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let primary_requester_id = 789; // Number | ID of the primary requester
let secondary_requesters = [null]; // [Number] | ID of the primary requester
apiInstance.mergeRequester(primary_requester_id, secondary_requesters).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                     | Type                      | Description                 | Notes |
| ------------------------ | ------------------------- | --------------------------- | ----- |
| **primary_requester_id** | **Number**                | ID of the primary requester |
| **secondary_requesters** | [**[Number]**](Number.md) | ID of the primary requester |

### Return type

[**MergeRequester200Response**](MergeRequester200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateRequester

> CreateRequester200Response updateRequester(requester, requester_id)

Update Requester

Update an existing Requester in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.RequestersApi();
let requester = new FreshserviceApiSdkCodegen.Requester(); // Requester | Requester who needs to be updated
let requester_id = 789; // Number | ID of requester to update
apiInstance.updateRequester(requester, requester_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type                          | Description                       | Notes |
| ---------------- | ----------------------------- | --------------------------------- | ----- |
| **requester**    | [**Requester**](Requester.md) | Requester who needs to be updated |
| **requester_id** | **Number**                    | ID of requester to update         |

### Return type

[**CreateRequester200Response**](CreateRequester200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
