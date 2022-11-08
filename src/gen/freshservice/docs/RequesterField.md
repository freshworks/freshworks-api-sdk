# FreshserviceApiSdkCodegen.RequesterField

## Properties

| Name                         | Type        | Description                                                                                                           | Notes                 |
| ---------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**                       | **Number**  | Unique identifier of the requester field                                                                              | [optional] [readonly] |
| **editable_in_signup**       | **Boolean** | Signifies whether the requester can provide a value for the field while signing up.                                   | [optional] [readonly] |
| **label**                    | **String**  | Field label shown to agents and admins when editing a requester&#39;s profile                                         | [optional] [readonly] |
| **name**                     | **String**  | Name of the requester field                                                                                           | [optional] [readonly] |
| **position**                 | **Number**  | Relative display position of the requester field                                                                      | [optional]            |
| **type**                     | **String**  | For custom fields, this signifies the type of value associated with the field (custom_date, custom_text)              | [optional]            |
| **requesters_can_edit**      | **Boolean** | Signifies whether the requester can modify the value for the field while editing their profile                        | [optional] [readonly] |
| **label_for_requesters**     | **String**  | Field label shown to requesters when viewing their own profile                                                        | [optional] [readonly] |
| **required_for_requesters**  | **Boolean** | Signifies whether the field is mandatory for requesters to complete during sign up or while editing their own profile | [optional] [readonly] |
| **displayed_for_requesters** | **Boolean** | Signifies whether the field is visible to requesters while editing their own profile                                  | [optional] [readonly] |
| **required_for_agents**      | **Boolean** | Signifies whether the field is mandatory for agents to complete when they create or modify a requester&#39;s profile  | [optional] [readonly] |
| **choices**                  | **Object**  | Options available for selection for the field (available only for dropdown and nested fields)                         | [optional]            |
| **created_at**               | **Date**    | Timestamp at which the department was created                                                                         | [optional] [readonly] |
| **updated_at**               | **Date**    | Timestamp at which the department was last modified                                                                   | [optional] [readonly] |
