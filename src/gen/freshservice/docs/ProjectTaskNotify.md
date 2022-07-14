# FreshserviceApiSdkCodegen.ProjectTaskNotify

## Properties

| Name          | Type       | Description                                                                 | Notes      |
| ------------- | ---------- | --------------------------------------------------------------------------- | ---------- |
| **type**      | **String** | Specify whether notification should be sent before start or before end date | [optional] |
| **value**     | **Number** | Time period of notification                                                 | [optional] |
| **time_unit** | **String** | Time unit                                                                   | [optional] |

## Enum: TypeEnum

- `START_DATE` (value: `"BEFORE_START_DATE"`)

- `END_DATE` (value: `"BEFORE_END_DATE"`)

## Enum: TimeUnitEnum

- `minutes` (value: `"minutes"`)

- `hours` (value: `"hours"`)

- `days` (value: `"days"`)

- `weeks` (value: `"weeks"`)
