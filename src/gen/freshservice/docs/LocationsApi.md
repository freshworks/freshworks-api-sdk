# FreshserviceApiSdkCodegen.LocationsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                               | HTTP request                               | Description                        |
| ---------------------------------------------------- | ------------------------------------------ | ---------------------------------- |
| [**createLocation**](LocationsApi.md#createLocation) | **POST** /api/v2/locations                 | Create a new Location              |
| [**deleteLocation**](LocationsApi.md#deleteLocation) | **DELETE** /api/v2/locations/{location_id} | Delete an existing location        |
| [**getLocation**](LocationsApi.md#getLocation)       | **GET** /api/v2/locations/{location_id}    | Retrieve a specific location       |
| [**listLocations**](LocationsApi.md#listLocations)   | **GET** /api/v2/locations                  | List All Locations in Freshservice |
| [**updateLocation**](LocationsApi.md#updateLocation) | **PUT** /api/v2/locations/{location_id}    | Update an existing location        |

## createLocation

> ListLocations200Response createLocation(location)

Create a new Location

Create a new Location

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.LocationsApi();
let location = new FreshserviceApiSdkCodegen.Location(); // Location |
apiInstance.createLocation(location).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type                        | Description | Notes |
| ------------ | --------------------------- | ----------- | ----- |
| **location** | [**Location**](Location.md) |             |

### Return type

[**ListLocations200Response**](ListLocations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteLocation

> deleteLocation(location_id)

Delete an existing location

Delete an existing location

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.LocationsApi();
let location_id = 56; // Number |
apiInstance.deleteLocation(location_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **location_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getLocation

> ListLocations200Response getLocation(location_id)

Retrieve a specific location

Retrieve a specific location

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.LocationsApi();
let location_id = 56; // Number |
apiInstance.getLocation(location_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **location_id** | **Number** |             |

### Return type

[**ListLocations200Response**](ListLocations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLocations

> ListLocations200Response listLocations(opts)

List All Locations in Freshservice

Get a list of all locations in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.LocationsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listLocations(opts).then(
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

[**ListLocations200Response**](ListLocations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateLocation

> UpdateLocation200Response updateLocation(location, location_id)

Update an existing location

Update an existing location

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.LocationsApi();
let location = new FreshserviceApiSdkCodegen.Location(); // Location |
let location_id = 56; // Number |
apiInstance.updateLocation(location, location_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type                        | Description | Notes |
| --------------- | --------------------------- | ----------- | ----- |
| **location**    | [**Location**](Location.md) |             |
| **location_id** | **Number**                  |             |

### Return type

[**UpdateLocation200Response**](UpdateLocation200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
