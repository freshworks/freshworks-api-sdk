# FreshserviceApiSdkCodegen.AgentField

## Properties

| Name                       | Type        | Description                                                                                                              | Notes                 |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| **name**                   | **String**  | Name of the requester field                                                                                              | [optional] [readonly] |
| **label_for_admins**       | **String**  | Field label shown to admins when editing an agent&#39;s profile                                                          | [optional] [readonly] |
| **placeholder_for_admins** | **String**  | Placeholder text shown to admins when editing an agent&#39;s profile                                                     | [optional] [readonly] |
| **mandatory_for_admins**   | **Boolean** | Signifies whether the field is mandatory for an admin when they are creating an agent, or editing an agent&#39;s profile | [optional] [readonly] |
| **label_for_agents**       | **String**  | Field label shown to agents when editing their own profile                                                               | [optional] [readonly] |
| **placeholder_for_agents** | **String**  | Placeholder text shown to agents when editing their own profile                                                          | [optional] [readonly] |
| **visible_to_agents**      | **Boolean** | Signifies whether the field is visible to agents when they are editing their own profile                                 | [optional] [readonly] |
| **editable_by_agents**     | **Boolean** | Signifies whether the field is editable by agents when they are editing their own profile                                | [optional] [readonly] |
| **mandatory_for_agents**   | **Boolean** | Signifies whether the field is mandatory for agents when they are editing their own profile                              | [optional] [readonly] |
| **position**               | **Number**  | Relative display position of the agent field                                                                             | [optional]            |
| **type**                   | **String**  | For custom fields, this signifies the type of value associated with the field (custom_date, custom_text)                 | [optional]            |
| **choices**                | **Object**  | Options available for selection for the field (available only for dropdown and nested fields)                            | [optional]            |
