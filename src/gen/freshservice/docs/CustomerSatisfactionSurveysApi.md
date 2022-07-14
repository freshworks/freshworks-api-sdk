# FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                     | HTTP request                                   | Description       |
| -------------------------------------------------------------------------- | ---------------------------------------------- | ----------------- |
| [**activateSurvey**](CustomerSatisfactionSurveysApi.md#activateSurvey)     | **PUT** /api/v2/surveys/{survey_id}/activate   | Activate Survey   |
| [**createSurvey**](CustomerSatisfactionSurveysApi.md#createSurvey)         | **POST** /api/v2/surveys                       | Create Survey     |
| [**deactivateSurvey**](CustomerSatisfactionSurveysApi.md#deactivateSurvey) | **PUT** /api/v2/surveys/{survey_id}/deactivate | Deactivate Survey |
| [**deleteSurvey**](CustomerSatisfactionSurveysApi.md#deleteSurvey)         | **DELETE** /api/v2/surveys/{survey_id}         | Delete Survey     |
| [**getSurvey**](CustomerSatisfactionSurveysApi.md#getSurvey)               | **GET** /api/v2/surveys/{survey_id}            | View Survey       |
| [**listSurveys**](CustomerSatisfactionSurveysApi.md#listSurveys)           | **GET** /api/v2/surveys                        | List All Surveys  |
| [**updateSurvey**](CustomerSatisfactionSurveysApi.md#updateSurvey)         | **PUT** /api/v2/surveys/{survey_id}            | Update Survey     |

## activateSurvey

> activateSurvey(survey_id)

Activate Survey

Activate the CSAT Survey with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let survey_id = 789; // Number | ID of CSAT survey to activate
apiInstance.activateSurvey(survey_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                   | Notes |
| ------------- | ---------- | ----------------------------- | ----- |
| **survey_id** | **Number** | ID of CSAT survey to activate |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createSurvey

> CreateSurvey201Response createSurvey(survey)

Create Survey

Create a new CSAT survey in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let survey = new FreshserviceApiSdkCodegen.Survey(); // Survey | CSAT Survey that needs to be created
apiInstance.createSurvey(survey).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name       | Type                    | Description                          | Notes |
| ---------- | ----------------------- | ------------------------------------ | ----- |
| **survey** | [**Survey**](Survey.md) | CSAT Survey that needs to be created |

### Return type

[**CreateSurvey201Response**](CreateSurvey201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deactivateSurvey

> deactivateSurvey(survey_id)

Deactivate Survey

Deactivate the CSAT Survey with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let survey_id = 789; // Number | ID of CSAT survey to deactivate
apiInstance.deactivateSurvey(survey_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                     | Notes |
| ------------- | ---------- | ------------------------------- | ----- |
| **survey_id** | **Number** | ID of CSAT survey to deactivate |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteSurvey

> deleteSurvey(survey_id)

Delete Survey

Delete the Survey with the given ID along with the underlying responses to this Survey from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let survey_id = 789; // Number | ID of survey to be deleted
apiInstance.deleteSurvey(survey_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                | Notes |
| ------------- | ---------- | -------------------------- | ----- |
| **survey_id** | **Number** | ID of survey to be deleted |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getSurvey

> ListSurveys200Response getSurvey(survey_id)

View Survey

Retrieve the CSAT Survey with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let survey_id = 789; // Number | ID of CSAT survey to retrieve
apiInstance.getSurvey(survey_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                   | Notes |
| ------------- | ---------- | ----------------------------- | ----- |
| **survey_id** | **Number** | ID of CSAT survey to retrieve |

### Return type

[**ListSurveys200Response**](ListSurveys200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSurveys

> ListSurveys200Response listSurveys(opts)

List All Surveys

Retrieve a list of all CSAT Surveys in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let opts = {
  active: 56, // Number | Query param to filter out active / inactive surveys. E.g. Passing the parameter active=1 will list the active survey.
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listSurveys(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description                                                                                                                | Notes                      |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **active**   | **Number** | Query param to filter out active / inactive surveys. E.g. Passing the parameter active&#x3D;1 will list the active survey. | [optional]                 |
| **per_page** | **Number** | The number of entries to retrieve in each page of a paginated list.                                                        | [optional] [default to 10] |
| **page**     | **Number** | The page number to retrieve.                                                                                               | [optional] [default to 1]  |

### Return type

[**ListSurveys200Response**](ListSurveys200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateSurvey

> CreateSurvey201Response updateSurvey(survey, survey_id)

Update Survey

Update an existing CSAT Survey in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.CustomerSatisfactionSurveysApi();
let survey = new FreshserviceApiSdkCodegen.Survey(); // Survey | Survey that needs to be updated
let survey_id = 789; // Number | ID of Survey to be updated
apiInstance.updateSurvey(survey, survey_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                    | Description                     | Notes |
| ------------- | ----------------------- | ------------------------------- | ----- |
| **survey**    | [**Survey**](Survey.md) | Survey that needs to be updated |
| **survey_id** | **Number**              | ID of Survey to be updated      |

### Return type

[**CreateSurvey201Response**](CreateSurvey201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
