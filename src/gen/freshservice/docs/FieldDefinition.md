# FreshserviceApiSdkCodegen.FieldDefinition

## Properties

| Name                 | Type        | Description                                                                                         | Notes                 |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------- | --------------------- |
| **id**               | **Number**  | Unique identifier of the field                                                                      | [optional] [readonly] |
| **name**             | **String**  | Name of the field                                                                                   | [optional] [readonly] |
| **label**            | **String**  | Label of the field as displayed on the user interface                                               | [optional] [readonly] |
| **field_type**       | **String**  | The data type of the value that can be stored in the field                                          | [optional] [readonly] |
| **mandatory**        | **Boolean** | Mandatoriness of this field when an agent is creating or updating the corresponding entity          | [optional] [readonly] |
| **is_default_field** | **Boolean** | Signifies if this field is a default field that is always applicable for the entity in Freshservice | [optional] [readonly] |
| **created_time**     | **Date**    | Timestamp at which the field was created                                                            | [optional] [readonly] |
| **updated_time**     | **Date**    | Timestamp at which the field was last modified                                                      | [optional] [readonly] |
