# FreshserviceApiSdkCodegen.BusinessHoursApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                       | HTTP request                                       | Description                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------- |
| [**getBusinessHoursConfig**](BusinessHoursApi.md#getBusinessHoursConfig)     | **GET** /api/v2/business_hours/{business_hours_id} | View Business Hours Configuration      |
| [**listBusinessHoursConfigs**](BusinessHoursApi.md#listBusinessHoursConfigs) | **GET** /api/v2/business_hours                     | List All Business Hours Configurations |

## getBusinessHoursConfig

> ListBusinessHoursConfigs200Response getBusinessHoursConfig(business_hours_id)

View Business Hours Configuration

Retrieve the Business Hours configuration with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.BusinessHoursApi();
let business_hours_id = 789; // Number | ID of Business Hours configuration to retrieve
apiInstance.getBusinessHoursConfig(business_hours_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type       | Description                                    | Notes |
| --------------------- | ---------- | ---------------------------------------------- | ----- |
| **business_hours_id** | **Number** | ID of Business Hours configuration to retrieve |

### Return type

[**ListBusinessHoursConfigs200Response**](ListBusinessHoursConfigs200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listBusinessHoursConfigs

> ListBusinessHoursConfigs200Response listBusinessHoursConfigs(opts)

List All Business Hours Configurations

Retrieve a list of all Business Hours configurations

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.BusinessHoursApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listBusinessHoursConfigs(opts).then(
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

[**ListBusinessHoursConfigs200Response**](ListBusinessHoursConfigs200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
