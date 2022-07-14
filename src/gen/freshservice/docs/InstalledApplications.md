# FreshserviceApiSdkCodegen.InstalledApplications

## Properties

| Name                  | Type       | Description                                                         | Notes                 |
| --------------------- | ---------- | ------------------------------------------------------------------- | --------------------- |
| **application_id**    | **Number** | ID of the application                                               | [optional] [readonly] |
| **version**           | **Number** | Version of the application installed in the device                  | [optional]            |
| **status**            | **String** | Status of the application (can be ignored/blacklisted/managed/null) | [optional]            |
| **installation_date** | **Date**   | Date when the application was installed                             | [optional]            |
| **installation_path** | **String** | The installation path of the application                            | [optional]            |
| **created_time**      | **Date**   | Timestamp at which the application installation was created         | [optional] [readonly] |
| **updated_time**      | **Date**   | Timestamp at which the application installation was last modified   | [optional] [readonly] |

## Enum: StatusEnum

- `Ignored` (value: `"Ignored"`)

- `Blacklisted` (value: `"Blacklisted"`)

- `Managed` (value: `"Managed"`)
