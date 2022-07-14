# FreshserviceApiSdkCodegen.Release

## Properties

| Name                   | Type                                    | Description                                                                                                                 | Notes                 |
| ---------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**                 | **Number**                              | Unique identifier of the Release                                                                                            | [optional] [readonly] |
| **agent_id**           | **Number**                              | Unique identifier of the agent to whom the Release is assigned                                                              | [optional]            |
| **group_id**           | **Number**                              | Unique identifier of the agent group to which the Release is assigned                                                       | [optional]            |
| **priority**           | **Number**                              | Priority of the Release 1-Low, 2-Medium, 3-High, 4-Urgent                                                                   | [optional]            |
| **status**             | **Number**                              | Status identifier of the Release. Open -&gt; 1, On hold -&gt; 2, In Progress -&gt; 3, Incomplete -&gt; 4, Completed -&gt; 5 | [optional]            |
| **release_type**       | **Number**                              | Type of the Release 1-minor, 2-standard, 3-major, 4-emergency                                                               | [optional]            |
| **subject**            | **String**                              | Subject of the Release                                                                                                      | [optional]            |
| **planned_start_date** | **Date**                                | Timestamp at which release is starting                                                                                      | [optional]            |
| **planned_end_date**   | **Date**                                | Timestamp at which release is ending                                                                                        | [optional]            |
| **work_start_date**    | **Date**                                | Timestamp at which release work started                                                                                     | [optional]            |
| **work_end_date**      | **Date**                                | Timestamp at which release work ended                                                                                       | [optional]            |
| **department_id**      | **Number**                              | Unique ID of the department initiating the Release                                                                          | [optional]            |
| **category**           | **String**                              | Category of the Release                                                                                                     | [optional]            |
| **sub_category**       | **String**                              | Sub-category of the Release                                                                                                 | [optional]            |
| **item_category**      | **String**                              | Item of the Release                                                                                                         | [optional]            |
| **created_at**         | **Date**                                | Timestamp at which Release was created                                                                                      | [optional] [readonly] |
| **updated_at**         | **Date**                                | Timestamp at which Release was last updated                                                                                 | [optional] [readonly] |
| **associated_assets**  | **[Number]**                            | Unique IDs of the assets associated with the Release request                                                                | [optional] [readonly] |
| **assets**             | [**[Asset]**](Asset.md)                 | Assets associated with the Ticket                                                                                           | [optional]            |
| **associated_changes** | **[Number]**                            | Unique IDs of the Changes associated with the Release                                                                       | [optional] [readonly] |
| **custom_fields**      | **{String: String}**                    | Key value pairs containing the names and values of custom fields                                                            | [optional]            |
| **planning_fields**    | [**PlanningFields**](PlanningFields.md) |                                                                                                                             | [optional]            |
