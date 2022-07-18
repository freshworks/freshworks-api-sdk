# FreshserviceApiSdkCodegen.ApplicationsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                              | HTTP request                                                | Description                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| [**getApplication**](ApplicationsApi.md#getApplication)                             | **GET** /api/v2/applications/{application_id}               | Retreive a specific software in Freshservice        |
| [**listApplicationInstallations**](ApplicationsApi.md#listApplicationInstallations) | **GET** /api/v2/applications/{application_id}/installations | List all devices where the software is installed in |
| [**listApplicationLicenses**](ApplicationsApi.md#listApplicationLicenses)           | **GET** /api/v2/applications/{application_id}/licenses      | List all licenses linked to the software            |
| [**listApplications**](ApplicationsApi.md#listApplications)                         | **GET** /api/v2/applications                                | List all Software in Freshservice                   |

## getApplication

> ListApplications200Response getApplication(application_id)

Retreive a specific software in Freshservice

Retreive a specific software in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ApplicationsApi();
let application_id = 56; // Number |
apiInstance.getApplication(application_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type       | Description | Notes |
| ------------------ | ---------- | ----------- | ----- |
| **application_id** | **Number** |             |

### Return type

[**ListApplications200Response**](ListApplications200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listApplicationInstallations

> ListApplicationInstallations200Response listApplicationInstallations(application_id)

List all devices where the software is installed in

Get a list of all the devices where the software is installed in

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ApplicationsApi();
let application_id = 56; // Number |
apiInstance.listApplicationInstallations(application_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type       | Description | Notes |
| ------------------ | ---------- | ----------- | ----- |
| **application_id** | **Number** |             |

### Return type

[**ListApplicationInstallations200Response**](ListApplicationInstallations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listApplicationLicenses

> ListApplicationLicenses200Response listApplicationLicenses(application_id)

List all licenses linked to the software

Get a list of all the licenses where linked to the software

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ApplicationsApi();
let application_id = 56; // Number |
apiInstance.listApplicationLicenses(application_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type       | Description | Notes |
| ------------------ | ---------- | ----------- | ----- |
| **application_id** | **Number** |             |

### Return type

[**ListApplicationLicenses200Response**](ListApplicationLicenses200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listApplications

> ListApplications200Response listApplications(opts)

List all Software in Freshservice

Get a list of all the Software in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ApplicationsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listApplications(opts).then(
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

[**ListApplications200Response**](ListApplications200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
