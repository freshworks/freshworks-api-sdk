# FreshserviceApiSdkCodegen.VendorsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                         | HTTP request                           | Description                      |
| ---------------------------------------------- | -------------------------------------- | -------------------------------- |
| [**createVendor**](VendorsApi.md#createVendor) | **POST** /api/v2/vendors               | Create a new Vendor              |
| [**deleteVendor**](VendorsApi.md#deleteVendor) | **DELETE** /api/v2/vendors/{vendor_id} | Delete an existing vendor        |
| [**getVendor**](VendorsApi.md#getVendor)       | **GET** /api/v2/vendors/{vendor_id}    | Retrieve a specific vendor       |
| [**listVendors**](VendorsApi.md#listVendors)   | **GET** /api/v2/vendors                | List All Vednors in Freshservice |
| [**updateVendor**](VendorsApi.md#updateVendor) | **PUT** /api/v2/vendors/{vendor_id}    | Update an existing vendor        |

## createVendor

> ListVendors200Response createVendor(vendor)

Create a new Vendor

Create a new Vendor

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.VendorsApi();
let vendor = new FreshserviceApiSdkCodegen.Vendor(); // Vendor |
apiInstance.createVendor(vendor).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name       | Type                    | Description | Notes |
| ---------- | ----------------------- | ----------- | ----- |
| **vendor** | [**Vendor**](Vendor.md) |             |

### Return type

[**ListVendors200Response**](ListVendors200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteVendor

> deleteVendor(vendor_id)

Delete an existing vendor

Delete an existing vendor

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.VendorsApi();
let vendor_id = 56; // Number |
apiInstance.deleteVendor(vendor_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **vendor_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getVendor

> ListVendors200Response getVendor(vendor_id)

Retrieve a specific vendor

Retrieve a specific vendor

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.VendorsApi();
let vendor_id = 56; // Number |
apiInstance.getVendor(vendor_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **vendor_id** | **Number** |             |

### Return type

[**ListVendors200Response**](ListVendors200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listVendors

> ListVendors200Response listVendors(opts)

List All Vednors in Freshservice

Get a list of all Vendors in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.VendorsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listVendors(opts).then(
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

[**ListVendors200Response**](ListVendors200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateVendor

> ListVendors200Response updateVendor(vendor, vendor_id)

Update an existing vendor

Update an existing vendor

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.VendorsApi();
let vendor = new FreshserviceApiSdkCodegen.Vendor(); // Vendor |
let vendor_id = 56; // Number |
apiInstance.updateVendor(vendor, vendor_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                    | Description | Notes |
| ------------- | ----------------------- | ----------- | ----- |
| **vendor**    | [**Vendor**](Vendor.md) |             |
| **vendor_id** | **Number**              |             |

### Return type

[**ListVendors200Response**](ListVendors200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
