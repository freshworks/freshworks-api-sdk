# FreshserviceApiSdkCodegen.Application

## Properties

| Name                   | Type       | Description                                                                     | Notes                 |
| ---------------------- | ---------- | ------------------------------------------------------------------------------- | --------------------- |
| **id**                 | **Number** | Unique identifier of the Application                                            | [optional] [readonly] |
| **name**               | **String** | Name of the Application                                                         | [optional] [readonly] |
| **installation_count** | **Number** | Count of the number of devices where the application is installed               | [optional] [readonly] |
| **status**             | **String** | Status of the application (can be ignored/blacklisted/managed/null)             | [optional]            |
| **manufacturer_id**    | **Number** | Freshservice Vendor ID which corresponds to the manufacturer of the application | [optional]            |
| **category**           | **String** | Category of the application                                                     | [optional]            |

## Enum: StatusEnum

- `Ignored` (value: `"Ignored"`)

- `Blacklisted` (value: `"Blacklisted"`)

- `Managed` (value: `"Managed"`)
