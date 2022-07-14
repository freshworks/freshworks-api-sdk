# FreshserviceApiSdkCodegen.ServiceRequest

## Properties

| Name                    | Type       | Description                                                                  | Notes      |
| ----------------------- | ---------- | ---------------------------------------------------------------------------- | ---------- |
| **id**                  | **Number** | the id of the item that needs to requested                                   |
| **quantity**            | **Number** | The number of units of the item needed by the requester. By default it is 1. | [optional] |
| **requester_email**     | **String** | the email id of the requester                                                |
| **requested_for_email** | **String** | the email id of the user for whom this is requested.                         | [optional] |
| **custom_fields**       | **Object** | Custom fields that are associated with a Freshservice entity                 | [optional] |
