# FreshserviceApiSdkCodegen.ServiceCatalogApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                  | HTTP request                                          | Description                         |
| ----------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| [**createServiceRequest**](ServiceCatalogApi.md#createServiceRequest)   | **POST** /api/v2/service_requests                     | Create a Service Request            |
| [**getServiceItem**](ServiceCatalogApi.md#getServiceItem)               | **GET** /api/v2/service_items/{service_item_id}       | View a Service Item                 |
| [**listCatalogItemFields**](ServiceCatalogApi.md#listCatalogItemFields) | **GET** /api/v2/catalog/item/{service_item_id}/fields | View all fields of the service item |
| [**listServiceItems**](ServiceCatalogApi.md#listServiceItems)           | **GET** /api/v2/service_items                         | List All Service Items              |
| [**updateServiceRequest**](ServiceCatalogApi.md#updateServiceRequest)   | **PUT** /api/v2/service_requests/{service_request_id} | Update a service request            |

## createServiceRequest

> CreateServiceRequest200Response createServiceRequest(service_request)

Create a Service Request

Create a service request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ServiceCatalogApi();
let service_request = new FreshserviceApiSdkCodegen.ServiceRequest(); // ServiceRequest | Service request that needs to be created
apiInstance.createServiceRequest(service_request).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                    | Description                              | Notes |
| ------------------- | --------------------------------------- | ---------------------------------------- | ----- |
| **service_request** | [**ServiceRequest**](ServiceRequest.md) | Service request that needs to be created |

### Return type

[**CreateServiceRequest200Response**](CreateServiceRequest200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getServiceItem

> GetServiceItem200Response getServiceItem(service_item_id)

View a Service Item

View a Service item

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ServiceCatalogApi();
let service_item_id = 789; // Number | ID of service item to retrieve
apiInstance.getServiceItem(service_item_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type       | Description                    | Notes |
| ------------------- | ---------- | ------------------------------ | ----- |
| **service_item_id** | **Number** | ID of service item to retrieve |

### Return type

[**GetServiceItem200Response**](GetServiceItem200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCatalogItemFields

> ListCatalogItemFields200Response listCatalogItemFields(service_item_id)

View all fields of the service item

View all fields of the service item

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ServiceCatalogApi();
let service_item_id = 789; // Number | ID of service item to retrieve
apiInstance.listCatalogItemFields(service_item_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type       | Description                    | Notes |
| ------------------- | ---------- | ------------------------------ | ----- |
| **service_item_id** | **Number** | ID of service item to retrieve |

### Return type

[**ListCatalogItemFields200Response**](ListCatalogItemFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listServiceItems

> GetServiceItem200Response listServiceItems(opts)

List All Service Items

Retrieve a list of all Service Items in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ServiceCatalogApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listServiceItems(opts).then(
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

[**GetServiceItem200Response**](GetServiceItem200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateServiceRequest

> UpdateServiceRequest200Response updateServiceRequest(service_request, service_request_id)

Update a service request

Update an existing Service request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ServiceCatalogApi();
let service_request = new FreshserviceApiSdkCodegen.ServiceRequestUpdate(); // ServiceRequestUpdate | Service request to be updated
let service_request_id = 789; // Number | ID of Service Request to update
apiInstance.updateServiceRequest(service_request, service_request_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                   | Type                                                | Description                     | Notes |
| ---------------------- | --------------------------------------------------- | ------------------------------- | ----- |
| **service_request**    | [**ServiceRequestUpdate**](ServiceRequestUpdate.md) | Service request to be updated   |
| **service_request_id** | **Number**                                          | ID of Service Request to update |

### Return type

[**UpdateServiceRequest200Response**](UpdateServiceRequest200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
