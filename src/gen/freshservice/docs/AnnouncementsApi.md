# FreshserviceApiSdkCodegen.AnnouncementsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                           | HTTP request                                       | Description            |
| ---------------------------------------------------------------- | -------------------------------------------------- | ---------------------- |
| [**createAnnouncement**](AnnouncementsApi.md#createAnnouncement) | **POST** /api/v2/announcements                     | Create Announcement    |
| [**deleteAnnouncement**](AnnouncementsApi.md#deleteAnnouncement) | **DELETE** /api/v2/announcements/{announcement_id} | Delete Announcement    |
| [**getAnnouncement**](AnnouncementsApi.md#getAnnouncement)       | **GET** /api/v2/announcements/{announcement_id}    | View Announcement      |
| [**listAnnouncement**](AnnouncementsApi.md#listAnnouncement)     | **GET** /api/v2/announcements                      | List All Announcements |
| [**updateAnnouncement**](AnnouncementsApi.md#updateAnnouncement) | **PUT** /api/v2/announcements/{announcement_id}    | Update Announcement    |

## createAnnouncement

> CreateAnnouncement201Response createAnnouncement(announcement)

Create Announcement

Create a new Announcement request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AnnouncementsApi();
let announcement = new FreshserviceApiSdkCodegen.Announcement(); // Announcement | Details of the Announcement
apiInstance.createAnnouncement(announcement).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type                                | Description                 | Notes |
| ---------------- | ----------------------------------- | --------------------------- | ----- |
| **announcement** | [**Announcement**](Announcement.md) | Details of the Announcement |

### Return type

[**CreateAnnouncement201Response**](CreateAnnouncement201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAnnouncement

> deleteAnnouncement(announcement_id)

Delete Announcement

Delete the Announcement with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AnnouncementsApi();
let announcement_id = 789; // Number | ID of announcement to retrieve
apiInstance.deleteAnnouncement(announcement_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type       | Description                    | Notes |
| ------------------- | ---------- | ------------------------------ | ----- |
| **announcement_id** | **Number** | ID of announcement to retrieve |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getAnnouncement

> CreateAnnouncement201Response getAnnouncement(announcement_id)

View Announcement

Retrieve the Announcement with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AnnouncementsApi();
let announcement_id = 789; // Number | ID of Announcement to retrieve
apiInstance.getAnnouncement(announcement_id).then(
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
| **announcement_id** | **Number** | ID of Announcement to retrieve |

### Return type

[**CreateAnnouncement201Response**](CreateAnnouncement201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAnnouncement

> ListAnnouncement200Response listAnnouncement(opts)

List All Announcements

Retrieve a list of all Announcements in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AnnouncementsApi();
let opts = {
  state: "state_example", // String | (archived, active, scheduled, unread)
  per_page: 30, // Number | The number of Announcements to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listAnnouncement(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description                                                               | Notes                      |
| ------------ | ---------- | ------------------------------------------------------------------------- | -------------------------- |
| **state**    | **String** | (archived, active, scheduled, unread)                                     | [optional]                 |
| **per_page** | **Number** | The number of Announcements to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**     | **Number** | The page number to retrieve.                                              | [optional] [default to 1]  |

### Return type

[**ListAnnouncement200Response**](ListAnnouncement200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAnnouncement

> CreateAnnouncement201Response updateAnnouncement(announcement, announcement_id)

Update Announcement

Update an existing Announcement in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AnnouncementsApi();
let announcement = new FreshserviceApiSdkCodegen.Announcement(); // Announcement | Announcement details that needs to be updated
let announcement_id = 789; // Number | ID of announcement to update
apiInstance.updateAnnouncement(announcement, announcement_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                | Description                                   | Notes |
| ------------------- | ----------------------------------- | --------------------------------------------- | ----- |
| **announcement**    | [**Announcement**](Announcement.md) | Announcement details that needs to be updated |
| **announcement_id** | **Number**                          | ID of announcement to update                  |

### Return type

[**CreateAnnouncement201Response**](CreateAnnouncement201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
