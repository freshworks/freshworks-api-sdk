# FreshteamApiSdkCodegen.ApplicantField

## Properties

| Name                           | Type                                                                | Description | Notes      |
| ------------------------------ | ------------------------------------------------------------------- | ----------- | ---------- |
| **id**                         | **Number**                                                          |             | [optional] |
| **created_at**                 | **Date**                                                            |             | [optional] |
| **updated_at**                 | **Date**                                                            |             | [optional] |
| **applicant_form_id**          | **Number**                                                          |             | [optional] |
| **name**                       | **String**                                                          |             | [optional] |
| **label**                      | **String**                                                          |             | [optional] |
| **field_type**                 | **String**                                                          |             | [optional] |
| **position**                   | **Number**                                                          |             | [optional] |
| **\_default**                  | **Boolean**                                                         |             | [optional] |
| **group_label**                | **String**                                                          |             | [optional] |
| **group_position**             | **String**                                                          |             | [optional] |
| **group_name**                 | **String**                                                          |             | [optional] |
| **external_field**             | **Boolean**                                                         |             | [optional] |
| **recruiter_field**            | **Boolean**                                                         |             | [optional] |
| **vendor_field**               | **Boolean**                                                         |             | [optional] |
| **required_in_vendor_form**    | **Boolean**                                                         |             | [optional] |
| **required_in_external_form**  | **Boolean**                                                         |             | [optional] |
| **required_in_recruiter_form** | **Boolean**                                                         |             | [optional] |
| **viewable_by**                | **String**                                                          |             | [optional] |
| **base_model**                 | **String**                                                          |             | [optional] |
| **picklist_values**            | [**[EmployeeFieldPicklistValues]**](EmployeeFieldPicklistValues.md) |             | [optional] |

## Enum: FieldTypeEnum

- `text` (value: `"text"`)

- `dropdown` (value: `"dropdown"`)

- `email` (value: `"email"`)

- `phone_number` (value: `"phone_number"`)

- `checkbox` (value: `"checkbox"`)

- `paragraph` (value: `"paragraph"`)

- `date_time` (value: `"date_time"`)

- `number` (value: `"number"`)

- `url_set` (value: `"url_set"`)

- `url` (value: `"url"`)

- `attachment` (value: `"attachment"`)

- `radio` (value: `"radio"`)

- `label` (value: `"label"`)
