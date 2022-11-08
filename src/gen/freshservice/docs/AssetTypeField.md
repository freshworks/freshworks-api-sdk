# FreshserviceApiSdkCodegen.AssetTypeField

## Properties

| Name                 | Type        | Description                                                                                                                              | Notes                 |
| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**               | **Number**  | Unique identifier of the asset type field                                                                                                | [optional] [readonly] |
| **asset_type_id**    | **Number**  | the asset type to which this field is belongs to (for example, Product belongs to Hardware asset type)                                   | [optional]            |
| **name**             | **String**  | Name of the asset type field                                                                                                             | [optional] [readonly] |
| **label**            | **String**  | Label of the field as displayed on the user interface                                                                                    | [optional] [readonly] |
| **field_type**       | **String**  | The data type of the value that can be stored in the field                                                                               | [optional] [readonly] |
| **is_default_field** | **Boolean** | Indicates whether the field is a default field in Freshservice for the asset type of or a custom field                                   | [optional] [readonly] |
| **required**         | **Boolean** | Mandatoriness of this field when creating or updating an asset                                                                           | [optional] [readonly] |
| **is_unique**        | **Boolean** | Indicates whether a field is unique in Freshservice. This is applicable only for Asset Display Name, Asset Tag and Serial Number fields. | [optional] [readonly] |
| **created_time**     | **Date**    | Timestamp at which the asset field was created                                                                                           | [optional] [readonly] |
| **updated_time**     | **Date**    | Timestamp at which the asset field was last modified                                                                                     | [optional] [readonly] |
| **field_choices**    | **Object**  | Options available for selection for the field (available only for dropdown and nested fields)                                            | [optional]            |
