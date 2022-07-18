# FreshserviceApiSdkCodegen.AssetsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                          | HTTP request                                                     | Description                                |
| --------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| [**createAsset**](AssetsApi.md#createAsset)                     | **POST** /api/v2/assets                                          | Create a new Asset                         |
| [**createAssetComponent**](AssetsApi.md#createAssetComponent)   | **POST** /api/v2/assets/{display_id}/components                  | Add a new component for an asset           |
| [**deleteAsset**](AssetsApi.md#deleteAsset)                     | **DELETE** /api/v2/assets/{display_id}                           | Delete an existing Asset Type              |
| [**deleteAssetComponent**](AssetsApi.md#deleteAssetComponent)   | **DELETE** /api/v2/assets/{display_id}/components/{component_id} | Delete an existing component               |
| [**getAsset**](AssetsApi.md#getAsset)                           | **GET** /api/v2/assets/{display_id}                              | Retrieve a specific asset                  |
| [**listAssetApplications**](AssetsApi.md#listAssetApplications) | **GET** /api/v2/assets/{display_id}/applications                 | List all software installed in the device  |
| [**listAssetComponents**](AssetsApi.md#listAssetComponents)     | **GET** /api/v2/assets/{display_id}/components                   | List all components of the device          |
| [**listAssetContracts**](AssetsApi.md#listAssetContracts)       | **GET** /api/v2/assets/{display_id}/contracts                    | List all contracts associated to the asset |
| [**listAssetRequests**](AssetsApi.md#listAssetRequests)         | **GET** /api/v2/assets/{display_id}/requests                     | List all requests associated to the asset  |
| [**listAssets**](AssetsApi.md#listAssets)                       | **GET** /api/v2/assets                                           | List all assets in Freshservice            |
| [**listComponentTypes**](AssetsApi.md#listComponentTypes)       | **GET** /api/v2/component_types                                  | List all component types                   |
| [**updateAsset**](AssetsApi.md#updateAsset)                     | **PUT** /api/v2/assets/{display_id}                              | Update an existing asset                   |
| [**updateAssetComponent**](AssetsApi.md#updateAssetComponent)   | **PUT** /api/v2/assets/{display_id}/components/{component_id}    | update a component in an asset             |

## createAsset

> ListAssets200Response createAsset(Asset)

Create a new Asset

Create a new Asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let Asset = new FreshserviceApiSdkCodegen.Asset(); // Asset |
apiInstance.createAsset(Asset).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name      | Type                  | Description | Notes |
| --------- | --------------------- | ----------- | ----- |
| **Asset** | [**Asset**](Asset.md) |             |

### Return type

[**ListAssets200Response**](ListAssets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createAssetComponent

> ListAssetComponents200Response createAssetComponent(display_id)

Add a new component for an asset

Add a new component for an asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.createAssetComponent(display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

[**ListAssetComponents200Response**](ListAssetComponents200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteAsset

> deleteAsset(display_id)

Delete an existing Asset Type

Delete an existing Asset Type

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.deleteAsset(display_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteAssetComponent

> deleteAssetComponent(display_id, component_id)

Delete an existing component

Delete an existing component

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
let component_id = 56; // Number |
apiInstance.deleteAssetComponent(display_id, component_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description | Notes |
| ---------------- | ---------- | ----------- | ----- |
| **display_id**   | **Number** |             |
| **component_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAsset

> ListAssets200Response getAsset(display_id)

Retrieve a specific asset

Retrieve a specific asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.getAsset(display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

[**ListAssets200Response**](ListAssets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssetApplications

> ListAssetApplications200Response listAssetApplications(display_id)

List all software installed in the device

Get a list of all the software installed in the device

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.listAssetApplications(display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

[**ListAssetApplications200Response**](ListAssetApplications200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssetComponents

> ListAssetComponents200Response listAssetComponents(display_id)

List all components of the device

Get a list of all the components of the device

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.listAssetComponents(display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

[**ListAssetComponents200Response**](ListAssetComponents200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssetContracts

> ListAssetContracts200Response listAssetContracts(display_id)

List all contracts associated to the asset

Get a list of all the contracts associated to the asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.listAssetContracts(display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

[**ListAssetContracts200Response**](ListAssetContracts200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssetRequests

> ListAssetRequests200Response listAssetRequests(display_id)

List all requests associated to the asset

Get a list of all requests associated to the asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
apiInstance.listAssetRequests(display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **display_id** | **Number** |             |

### Return type

[**ListAssetRequests200Response**](ListAssetRequests200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAssets

> ListAssets200Response listAssets(opts)

List all assets in Freshservice

Get a list of all assets in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let opts = {
  per_page: 30, // Number | The number of entries to retrieve in each page of a paginated list. This is not applicable when search or filter query is present.
  page: 1, // Number | The page number to retrieve.
  trashed: true, // Boolean | List assets in trash.
  include: "include_example", // String | Query param to include asset type fields in response.
  filter: "filter_example", // String | The simple or compound query which needs to be applied as a filter to the list of asset. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>asset_type_id, department_id, location_id, asset_state, user_id, agent_id, name, asset_tag, created_at, updated_at.<br/>Sample Query: https://account.freshservice.com/api/v2/assets?filter=\"asset_type_id:12034 AND asset_tag:'HSN2323' AND created_at:>'2018-08-10'\"
  search: "search_example" // String | The simple query which needs to be applied to search an asset from the list of assets.<br/> Supported Query Parameters:<br/>name, asset_tag, serial_number.<br/>Sample Query: https://account.freshservice.com/api/v2/assets?search=\"name:'dell monitor'\"
};
apiInstance.listAssets(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Notes                      |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **per_page** | **Number**  | The number of entries to retrieve in each page of a paginated list. This is not applicable when search or filter query is present.                                                                                                                                                                                                                                                                                                                                                              | [optional] [default to 30] |
| **page**     | **Number**  | The page number to retrieve.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [optional] [default to 1]  |
| **trashed**  | **Boolean** | List assets in trash.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                 |
| **include**  | **String**  | Query param to include asset type fields in response.                                                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                 |
| **filter**   | **String**  | The simple or compound query which needs to be applied as a filter to the list of asset. This string needs to be URL encoded.&lt;br/&gt; Supported Query Parameters:&lt;br/&gt;asset_type_id, department_id, location_id, asset_state, user_id, agent_id, name, asset_tag, created_at, updated_at.&lt;br/&gt;Sample Query: https://account.freshservice.com/api/v2/assets?filter&#x3D;\&quot;asset_type_id:12034 AND asset_tag:&#39;HSN2323&#39; AND created_at:&gt;&#39;2018-08-10&#39;\&quot; | [optional]                 |
| **search**   | **String**  | The simple query which needs to be applied to search an asset from the list of assets.&lt;br/&gt; Supported Query Parameters:&lt;br/&gt;name, asset_tag, serial_number.&lt;br/&gt;Sample Query: https://account.freshservice.com/api/v2/assets?search&#x3D;\&quot;name:&#39;dell monitor&#39;\&quot;                                                                                                                                                                                            | [optional]                 |

### Return type

[**ListAssets200Response**](ListAssets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, Invalid search query format, Invalid search field in search query, Invalid filter query format, Invalid filter field in filter query

## listComponentTypes

> ListComponentTypes200Response listComponentTypes(opts)

List all component types

Get a list of all component types in Freshservice along with the fields specific to the component type

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listComponentTypes(opts).then(
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

[**ListComponentTypes200Response**](ListComponentTypes200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAsset

> ListAssets200Response updateAsset(asset, display_id)

Update an existing asset

Update an existing asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let asset = new FreshserviceApiSdkCodegen.Asset(); // Asset |
let display_id = 56; // Number |
apiInstance.updateAsset(asset, display_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                  | Description | Notes |
| -------------- | --------------------- | ----------- | ----- |
| **asset**      | [**Asset**](Asset.md) |             |
| **display_id** | **Number**            |             |

### Return type

[**ListAssets200Response**](ListAssets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateAssetComponent

> ListAssetComponents200Response updateAssetComponent(display_id, component_id)

update a component in an asset

update a component in an asset

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AssetsApi();
let display_id = 56; // Number |
let component_id = 56; // Number |
apiInstance.updateAssetComponent(display_id, component_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description | Notes |
| ---------------- | ---------- | ----------- | ----- |
| **display_id**   | **Number** |             |
| **component_id** | **Number** |             |

### Return type

[**ListAssetComponents200Response**](ListAssetComponents200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
