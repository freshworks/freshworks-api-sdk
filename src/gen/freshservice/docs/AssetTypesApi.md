# FreshserviceApiSdkCodegen.AssetTypesApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                          | HTTP request                                       | Description                                                  |
| --------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| [**createAssetType**](AssetTypesApi.md#createAssetType)         | **POST** /api/v2/asset_types                       | Create a new Asset Type                                      |
| [**deleteAssetType**](AssetTypesApi.md#deleteAssetType)         | **DELETE** /api/v2/asset_types/{asset_type_id}     | Delete an existing Asset Type                                |
| [**getAssetType**](AssetTypesApi.md#getAssetType)               | **GET** /api/v2/asset_types/{asset_type_id}        | Retrieve a specific asset type                               |
| [**listAssetTypeFields**](AssetTypesApi.md#listAssetTypeFields) | **GET** /api/v2/asset_types/{asset_type_id}/fields | List all fields for an asset type (including default fields) |
| [**listAssetTypes**](AssetTypesApi.md#listAssetTypes)           | **GET** /api/v2/asset_types                        | List All Asset Types in Freshservice                         |
| [**updateAssetType**](AssetTypesApi.md#updateAssetType)         | **PUT** /api/v2/asset_types/{asset_type_id}        | Update an existing asset type                                |

## createAssetType

> ListAssetTypes200Response createAssetType(Asset_Types)

Create a new Asset Type

Create a new Asset Type

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetTypesApi();
let Asset_Types = new FreshserviceApiSdkCodegen.AssetType(); // AssetType |
apiInstance.createAssetType(Asset_Types).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type                          | Description | Notes |
| --------------- | ----------------------------- | ----------- | ----- |
| **Asset_Types** | [**AssetType**](AssetType.md) |             |

### Return type

[**ListAssetTypes200Response**](ListAssetTypes200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAssetType

> deleteAssetType(asset_type_id)

Delete an existing Asset Type

Delete an existing Asset Type

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetTypesApi();
let asset_type_id = 56; // Number |
apiInstance.deleteAssetType(asset_type_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description | Notes |
| ----------------- | ---------- | ----------- | ----- |
| **asset_type_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAssetType

> GetAssetType200Response getAssetType(asset_type_id)

Retrieve a specific asset type

Retrieve a specific asset type

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetTypesApi();
let asset_type_id = 56; // Number |
apiInstance.getAssetType(asset_type_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description | Notes |
| ----------------- | ---------- | ----------- | ----- |
| **asset_type_id** | **Number** |             |

### Return type

[**GetAssetType200Response**](GetAssetType200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssetTypeFields

> ListAssetTypeFields200Response listAssetTypeFields(asset_type_id)

List all fields for an asset type (including default fields)

Retrieve the Asset Fields from Freshservice. The fields will be returned in the sequence that they are displayed on the UI (this includes the default fields common for all asset types and the fields specific to an asset type)

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetTypesApi();
let asset_type_id = 56; // Number |
apiInstance.listAssetTypeFields(asset_type_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description | Notes |
| ----------------- | ---------- | ----------- | ----- |
| **asset_type_id** | **Number** |             |

### Return type

[**ListAssetTypeFields200Response**](ListAssetTypeFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssetTypes

> ListAssetTypes200Response listAssetTypes(opts)

List All Asset Types in Freshservice

Get a list of all Asset Types in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetTypesApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listAssetTypes(opts).then(
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

[**ListAssetTypes200Response**](ListAssetTypes200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAssetType

> GetAssetType200Response updateAssetType(asset_type, asset_type_id)

Update an existing asset type

Update an existing asset type

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetTypesApi();
let asset_type = new FreshserviceApiSdkCodegen.AssetType(); // AssetType |
let asset_type_id = 56; // Number |
apiInstance.updateAssetType(asset_type, asset_type_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                          | Description | Notes |
| ----------------- | ----------------------------- | ----------- | ----- |
| **asset_type**    | [**AssetType**](AssetType.md) |             |
| **asset_type_id** | **Number**                    |             |

### Return type

[**GetAssetType200Response**](GetAssetType200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
