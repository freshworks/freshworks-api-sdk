# FreshserviceApiSdkCodegen.EmployeeOnboardingApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                                    | HTTP request                                     | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [**createOnboardingRequest**](EmployeeOnboardingApi.md#createOnboardingRequest)           | **POST** /api/v2/onboarding_requests             | Create Onboarding Request                                                                 |
| [**getOnboardingRequest**](EmployeeOnboardingApi.md#getOnboardingRequest)                 | **GET** /api/v2/onboarding_requests/{request_id} | Get a specific Onboarding Request                                                         |
| [**getOnboardingRequestForm**](EmployeeOnboardingApi.md#getOnboardingRequestForm)         | **GET** /api/v2/onboarding_requests/form         | Display onboarding form details                                                           |
| [**listOnboardingRequestTickets**](EmployeeOnboardingApi.md#listOnboardingRequestTickets) | **GET** /api/v2/onboarding_requests/id/tickets   | Get the details of the FreshService Tickets associated with a specific Onboarding Request |
| [**listOnboardingRequests**](EmployeeOnboardingApi.md#listOnboardingRequests)             | **GET** /api/v2/onboarding_requests              | Get all Onboarding Requests                                                               |

## createOnboardingRequest

> CreateOnboardingRequest201Response createOnboardingRequest(opts)

Create Onboarding Request

Create a new Onboarding Request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.EmployeeOnboardingApi();
let opts = {
  onboarding_request: new FreshserviceApiSdkCodegen.OnboardingRequestFields() // OnboardingRequestFields | onboarding request that needs to be created
};
apiInstance.createOnboardingRequest(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                   | Type                                                      | Description                                 | Notes      |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------- | ---------- |
| **onboarding_request** | [**OnboardingRequestFields**](OnboardingRequestFields.md) | onboarding request that needs to be created | [optional] |

### Return type

[**CreateOnboardingRequest201Response**](CreateOnboardingRequest201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getOnboardingRequest

> CreateOnboardingRequest201Response getOnboardingRequest(request_id)

Get a specific Onboarding Request

Get a specific Onboarding Request from freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.EmployeeOnboardingApi();
let request_id = 789; // Number | Display ID of the Onboarding Request
apiInstance.getOnboardingRequest(request_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description                          | Notes |
| -------------- | ---------- | ------------------------------------ | ----- |
| **request_id** | **Number** | Display ID of the Onboarding Request |

### Return type

[**CreateOnboardingRequest201Response**](CreateOnboardingRequest201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOnboardingRequestForm

> OnboardingForm getOnboardingRequestForm(opts)

Display onboarding form details

Retrieve a list of all fields in initiator form.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.EmployeeOnboardingApi();
let opts = {
  body: new FreshserviceApiSdkCodegen.GetOnboardingRequestFormRequest() // GetOnboardingRequestFormRequest |
};
apiInstance.getOnboardingRequestForm(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name     | Type                                                                      | Description | Notes      |
| -------- | ------------------------------------------------------------------------- | ----------- | ---------- |
| **body** | [**GetOnboardingRequestFormRequest**](GetOnboardingRequestFormRequest.md) |             | [optional] |

### Return type

[**OnboardingForm**](OnboardingForm.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOnboardingRequestTickets

> OnboardingTicket listOnboardingRequestTickets()

Get the details of the FreshService Tickets associated with a specific Onboarding Request

Get the details of the FreshService Tickets associated with a specific Onboarding Request

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.EmployeeOnboardingApi();
apiInstance.listOnboardingRequestTickets().then(
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

[**OnboardingTicket**](OnboardingTicket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOnboardingRequests

> OnboardingRequestIndex listOnboardingRequests()

Get all Onboarding Requests

Get all Onboarding Request for a particular user.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.EmployeeOnboardingApi();
apiInstance.listOnboardingRequests().then(
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

[**OnboardingRequestIndex**](OnboardingRequestIndex.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
