# FreshserviceApiSdkCodegen.Asset

## Properties

| Name              | Type       | Description                                                                                              | Notes                 |
| ----------------- | ---------- | -------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**            | **Number** | id of the asset                                                                                          | [optional] [readonly] |
| **display_id**    | **Number** | display id of the asset that is used for all operations                                                  | [optional] [readonly] |
| **name**          | **String** | Display Name of the Asset                                                                                | [optional]            |
| **description**   | **String** | Description of the asset                                                                                 | [optional]            |
| **asset_type_id** | **Number** | Id of the asset type.                                                                                    | [optional]            |
| **impact**        | **String** | Impact of the asset (accepted values &#39;high&#39; &#39;medium&#39; &#39;low&#39;)                      | [optional]            |
| **author_type**   | **String** | Asset created by source                                                                                  | [optional] [readonly] |
| **usage_type**    | **String** | Usage type of the asset (accepted values are &#39;permanent&#39; &amp; &#39;loaner&#39;)                 | [optional]            |
| **asset_tag**     | **String** | Asset tag of the asset                                                                                   | [optional]            |
| **user_id**       | **Number** | Used by of the asset                                                                                     | [optional]            |
| **department_id** | **Number** | Department of the asset                                                                                  | [optional]            |
| **location_id**   | **Number** | Location of the asset                                                                                    | [optional]            |
| **agent_id**      | **Number** | Managed by of the asset                                                                                  | [optional]            |
| **group_id**      | **Number** | Managed by group of the asset                                                                            | [optional]            |
| **assigned_on**   | **Date**   | Date and time when the asset was assigned                                                                | [optional]            |
| **created_at**    | **Date**   | Timestamp at which the asset was created                                                                 | [optional] [readonly] |
| **updated_at**    | **Date**   | Timestamp at which the asset was last modified                                                           | [optional] [readonly] |
| **type_fields**   | **Object** | Fields specific to every asset type (Every asset will have default base fields and type specific fields) | [optional]            |

## Enum: ImpactEnum

- `low` (value: `"low"`)

- `medium` (value: `"medium"`)

- `high` (value: `"high"`)

## Enum: UsageTypeEnum

- `permanent` (value: `"permanent"`)

- `loaner` (value: `"loaner"`)
