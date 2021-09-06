# FreshteamApiSdkCodegen.EmployeeField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**deleted** | **Boolean** |  | [optional] 
**employeeFormId** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**label** | **String** |  | [optional] 
**fieldType** | **String** |  | [optional] 
**position** | **Number** |  | [optional] 
**required** | **Boolean** |  | [optional] 
**_default** | **Boolean** |  | [optional] 
**viewableBy** | **String** |  | [optional] 
**editableBy** | **String** |  | [optional] 
**tab** | **String** |  | [optional] 
**fieldScopes** | [**[EmployeeFieldScopes]**](EmployeeFieldScopes.md) |  | [optional] 
**sectionLabel** | **String** |  | [optional] 
**picklistValues** | [**[EmployeeFieldPicklistValues]**](EmployeeFieldPicklistValues.md) |  | [optional] 



## Enum: FieldTypeEnum


* `text` (value: `"text"`)

* `dropdown` (value: `"dropdown"`)

* `email` (value: `"email"`)

* `phone_number` (value: `"phone_number"`)

* `checkbox` (value: `"checkbox"`)

* `paragraph` (value: `"paragraph"`)

* `date_time` (value: `"date_time"`)

* `number` (value: `"number"`)

* `url_set` (value: `"url_set"`)

* `url` (value: `"url"`)

* `attachment` (value: `"attachment"`)

* `radio` (value: `"radio"`)

* `label` (value: `"label"`)

* `field_group` (value: `"field_group"`)

* `emergency_contact` (value: `"emergency_contact"`)

* `phone_number_set` (value: `"phone_number_set"`)

* `social_profile` (value: `"social_profile"`)

* `address` (value: `"address"`)

* `previous_employment` (value: `"previous_employment"`)

* `education` (value: `"education"`)

* `avatar` (value: `"avatar"`)

* `bank_details` (value: `"bank_details"`)

* `compensation` (value: `"compensation"`)

* `standard_email` (value: `"standard_email"`)

* `standard_dropdown` (value: `"standard_dropdown"`)

* `standard_multi_dropdown` (value: `"standard_multi_dropdown"`)

* `file_input` (value: `"file_input"`)

* `visa` (value: `"visa"`)

* `bg_verification` (value: `"bg_verification"`)

* `government_id` (value: `"government_id"`)

* `licenses` (value: `"licenses"`)

* `certifications` (value: `"certifications"`)

* `awards` (value: `"awards"`)

* `honours` (value: `"honours"`)

* `comp_bonuses` (value: `"comp_bonuses"`)

* `stock_grants` (value: `"stock_grants"`)

* `dependents` (value: `"dependents"`)

* `time` (value: `"time"`)

* `personal_contact_set` (value: `"personal_contact_set"`)





## Enum: ViewableByEnum


* `all` (value: `"all"`)

* `self` (value: `"self"`)

* `self_hr` (value: `"self_hr"`)

* `hr` (value: `"hr"`)





## Enum: EditableByEnum


* `self` (value: `"self"`)

* `hr` (value: `"hr"`)





## Enum: TabEnum


* `personal` (value: `"personal"`)

* `job` (value: `"job"`)

* `employment_education` (value: `"employment_education"`)

* `compensation` (value: `"compensation"`)

* `files` (value: `"files"`)




