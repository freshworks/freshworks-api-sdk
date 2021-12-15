# FreshteamApiSdkCodegen.TimeoffApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                               | HTTP request                    | Description                                      |
| ---------------------------------------------------- | ------------------------------- | ------------------------------------------------ |
| [**approveTimeoff**](TimeoffApi.md#approveTimeoff)   | **PUT** /time_offs/{id}/approve | Approve Timeoff Request                          |
| [**cancelTimeoff**](TimeoffApi.md#cancelTimeoff)     | **PUT** /time_offs/{id}/cancel  | Cancel Timeoff Request                           |
| [**createTimeOff**](TimeoffApi.md#createTimeOff)     | **POST** /time_offs             | Apply leave request for logged in user           |
| [**getTimeoff**](TimeoffApi.md#getTimeoff)           | **GET** /time_offs/{id}         | Get Timeoff Request details                      |
| [**getTimeoffType**](TimeoffApi.md#getTimeoffType)   | **GET** /time_off_types/{id}    | Get Timeoff Type details                         |
| [**getTimeoffTypes**](TimeoffApi.md#getTimeoffTypes) | **GET** /time_off_types         | List of user TimeOff Types                       |
| [**getTimeoffs**](TimeoffApi.md#getTimeoffs)         | **GET** /time_offs              | List of TimeOff Requests of Users in the Account |
| [**rejectTimeoff**](TimeoffApi.md#rejectTimeoff)     | **PUT** /time_offs/{id}/reject  | Reject Timeoff Request                           |

## approveTimeoff

> approveTimeoff(id, opts)

Approve Timeoff Request

Approve Timeoff Request details

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let id = 56; // Number | the timeoff type identifier, as id
let opts = {
  leave_request: new FreshteamApiSdkCodegen.InlineObject() // InlineObject |
};
apiInstance.approveTimeoff(id, opts).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                                | Description                        | Notes      |
| ----------------- | ----------------------------------- | ---------------------------------- | ---------- |
| **id**            | **Number**                          | the timeoff type identifier, as id |
| **leave_request** | [**InlineObject**](InlineObject.md) |                                    | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## cancelTimeoff

> cancelTimeoff(id)

Cancel Timeoff Request

Cancel Timeoff Request details

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let id = 56; // Number | the timeoff type identifier, as id
apiInstance.cancelTimeoff(id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                        | Notes |
| ------ | ---------- | ---------------------------------- | ----- |
| **id** | **Number** | the timeoff type identifier, as id |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## createTimeOff

> LeaveRequest createTimeOff(leave_request)

Apply leave request for logged in user

Apply leave request for logged in user

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let leave_request = new FreshteamApiSdkCodegen.LeaveRequestCreate(); // LeaveRequestCreate |
apiInstance.createTimeOff(leave_request).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                                            | Description | Notes |
| ----------------- | ----------------------------------------------- | ----------- | ----- |
| **leave_request** | [**LeaveRequestCreate**](LeaveRequestCreate.md) |             |

### Return type

[**LeaveRequest**](LeaveRequest.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getTimeoff

> LeaveRequest getTimeoff(id)

Get Timeoff Request details

get Timeoff Request details

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let id = 56; // Number | the timeoff type identifier, as id
apiInstance.getTimeoff(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                        | Notes |
| ------ | ---------- | ---------------------------------- | ----- |
| **id** | **Number** | the timeoff type identifier, as id |

### Return type

[**LeaveRequest**](LeaveRequest.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getTimeoffType

> LeaveType getTimeoffType(id)

Get Timeoff Type details

get Timeoff type details

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let id = 56; // Number | the timeoff type identifier, as id
apiInstance.getTimeoffType(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name   | Type       | Description                        | Notes |
| ------ | ---------- | ---------------------------------- | ----- |
| **id** | **Number** | the timeoff type identifier, as id |

### Return type

[**LeaveType**](LeaveType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getTimeoffTypes

> [LeaveType] getTimeoffTypes()

List of user TimeOff Types

List of TimeOff Types

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
apiInstance.getTimeoffTypes().then(
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

[**[LeaveType]**](LeaveType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTimeoffs

> [LeaveRequest] getTimeoffs(opts)

List of TimeOff Requests of Users in the Account

List of TimeOff Requests

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let opts = {
  status: ["null"], // [String] | the status key
  user: ["null"], // [String] | the identifier of user, id
  leave_type: ["null"], // [String] | the identifier of leave_type, as id
  location: ["null"], // [String] | the identifier of user location, as id
  start_date: new Date("2013-10-20"), // Date | The start date for the timeoff request. Must be used together with `end_date`.
  end_date: new Date("2013-10-20") // Date | The end date for the timeoff request. Must be used together with `start_date` and should be greater than `start date`.
};
apiInstance.getTimeoffs(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                      | Description                                                                                                                                | Notes      |
| -------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **status**     | [**[String]**](String.md) | the status key                                                                                                                             | [optional] |
| **user**       | [**[String]**](String.md) | the identifier of user, id                                                                                                                 | [optional] |
| **leave_type** | [**[String]**](String.md) | the identifier of leave_type, as id                                                                                                        | [optional] |
| **location**   | [**[String]**](String.md) | the identifier of user location, as id                                                                                                     | [optional] |
| **start_date** | **Date**                  | The start date for the timeoff request. Must be used together with &#x60;end_date&#x60;.                                                   | [optional] |
| **end_date**   | **Date**                  | The end date for the timeoff request. Must be used together with &#x60;start_date&#x60; and should be greater than &#x60;start date&#x60;. | [optional] |

### Return type

[**[LeaveRequest]**](LeaveRequest.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## rejectTimeoff

> rejectTimeoff(id, opts)

Reject Timeoff Request

Reject Timeoff Request details

### Example

```javascript
import FreshteamApiSdkCodegen from "freshteam-api-sdk-codegen";
let defaultClient = FreshteamApiSdkCodegen.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FreshteamApiSdkCodegen.TimeoffApi();
let id = 56; // Number | the timeoff type identifier, as id
let opts = {
  leave_request: new FreshteamApiSdkCodegen.InlineObject1() // InlineObject1 |
};
apiInstance.rejectTimeoff(id, opts).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                                  | Description                        | Notes      |
| ----------------- | ------------------------------------- | ---------------------------------- | ---------- |
| **id**            | **Number**                            | the timeoff type identifier, as id |
| **leave_request** | [**InlineObject1**](InlineObject1.md) |                                    | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_
