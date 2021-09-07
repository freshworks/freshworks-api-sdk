# FreshteamApiSdkCodegen.NewHireApi

All URIs are relative to *https://adityasharma2519.freshteam.com/api*

| Method                                           | HTTP request            | Description        |
| ------------------------------------------------ | ----------------------- | ------------------ |
| [**createNewHire**](NewHireApi.md#createNewHire) | **POST** /new_hires     | Create an NewHire  |
| [**getNewHire**](NewHireApi.md#getNewHire)       | **GET** /new_hires/{id} | Details of NewHire |
| [**updateNewHire**](NewHireApi.md#updateNewHire) | **PUT** /new_hires/{id} | Update a NewHire   |

## createNewHire

> NewHire createNewHire(newHire)

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
let newHire = new FreshteamApiSdkCodegen.NewHireCreate(); // NewHireCreate |
apiInstance.createNewHire(newHire).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name        | Type                                  | Description | Notes |
| ----------- | ------------------------------------- | ----------- | ----- |
| **newHire** | [**NewHireCreate**](NewHireCreate.md) |             |

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

## updateNewHire

> NewHire updateNewHire(newHire, id)

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
let newHire = new FreshteamApiSdkCodegen.NewHireCreate(); // NewHireCreate |
let id = 56; // Number | the new_hire identifier, as id
apiInstance.updateNewHire(newHire, id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name        | Type                                  | Description                    | Notes |
| ----------- | ------------------------------------- | ------------------------------ | ----- |
| **newHire** | [**NewHireCreate**](NewHireCreate.md) |                                |
| **id**      | **Number**                            | the new_hire identifier, as id |

### Return type

[**NewHire**](NewHire.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
