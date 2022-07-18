# FreshserviceApiSdkCodegen.CannedResponsesApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                 | HTTP request                                            | Description               |
| ---------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------- |
| [**createCannedResponse**](CannedResponsesApi.md#createCannedResponse) | **POST** /api/v2/canned_responses                       | Create Canned Response    |
| [**deleteCannedResponse**](CannedResponsesApi.md#deleteCannedResponse) | **DELETE** /api/v2/canned_response/{canned_response_id} | Delete Canned Response    |
| [**getCannedResponse**](CannedResponsesApi.md#getCannedResponse)       | **GET** /api/v2/canned_response/{canned_response_id}    | View Canned Response      |
| [**listCannedResponses**](CannedResponsesApi.md#listCannedResponses)   | **GET** /api/v2/canned_responses                        | List All Canned Responses |
| [**updateCannedResponse**](CannedResponsesApi.md#updateCannedResponse) | **PUT** /api/v2/canned_response/{canned_response_id}    | Update Canned Response    |

## createCannedResponse

> CreateCannedResponse201Response createCannedResponse(canned_response)

Create Canned Response

Create a new Canned Response request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponsesApi();
let canned_response = new FreshserviceApiSdkCodegen.CannedResponse(); // CannedResponse | Details of the Canned Response
apiInstance.createCannedResponse(canned_response).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                    | Description                    | Notes |
| ------------------- | --------------------------------------- | ------------------------------ | ----- |
| **canned_response** | [**CannedResponse**](CannedResponse.md) | Details of the Canned Response |

### Return type

[**CreateCannedResponse201Response**](CreateCannedResponse201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCannedResponse

> deleteCannedResponse(canned_response_id)

Delete Canned Response

Delete the Canned Response with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponsesApi();
let canned_response_id = 789; // Number | ID of canned response to retrieve
apiInstance.deleteCannedResponse(canned_response_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                   | Type       | Description                       | Notes |
| ---------------------- | ---------- | --------------------------------- | ----- |
| **canned_response_id** | **Number** | ID of canned response to retrieve |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getCannedResponse

> GetCannedResponse200Response getCannedResponse(canned_response_id)

View Canned Response

Retrieve the Canned Response with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponsesApi();
let canned_response_id = 789; // Number | ID of Canned Response to retrieve
apiInstance.getCannedResponse(canned_response_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                   | Type       | Description                       | Notes |
| ---------------------- | ---------- | --------------------------------- | ----- |
| **canned_response_id** | **Number** | ID of Canned Response to retrieve |

### Return type

[**GetCannedResponse200Response**](GetCannedResponse200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCannedResponses

> ListCannedResponses200Response listCannedResponses()

List All Canned Responses

Retrieve a list of all Canned Responses in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponsesApi();
apiInstance.listCannedResponses().then(
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

[**ListCannedResponses200Response**](ListCannedResponses200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCannedResponse

> CreateCannedResponse201Response updateCannedResponse(canned_response, canned_response_id)

Update Canned Response

Update an existing Canned Response in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CannedResponsesApi();
let canned_response = new FreshserviceApiSdkCodegen.CannedResponse(); // CannedResponse | Canned Response details that needs to be updated
let canned_response_id = 789; // Number | ID of canned response to update
apiInstance.updateCannedResponse(canned_response, canned_response_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                   | Type                                    | Description                                      | Notes |
| ---------------------- | --------------------------------------- | ------------------------------------------------ | ----- |
| **canned_response**    | [**CannedResponse**](CannedResponse.md) | Canned Response details that needs to be updated |
| **canned_response_id** | **Number**                              | ID of canned response to update                  |

### Return type

[**CreateCannedResponse201Response**](CreateCannedResponse201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
