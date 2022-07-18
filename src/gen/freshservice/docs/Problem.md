# FreshserviceApiSdkCodegen.Problem

## Properties

| Name                | Type                                    | Description                                                                              | Notes                 |
| ------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------- |
| **id**              | **Number**                              | Unique identifier of the Problem                                                         | [optional] [readonly] |
| **agent_id**        | **Number**                              | Unique identifier of the agent to whom the Problem is assigned                           | [optional]            |
| **requester_id**    | **Number**                              | Unique identifier of the user who raised the Problem                                     | [optional]            |
| **group_id**        | **Number**                              | Unique identifier of the agent group to which the Problem is assigned                    | [optional]            |
| **priority**        | **Number**                              | Priority of the Problem 1-Low, 2-Medium, 3-High, 4-Urgent                                | [optional]            |
| **impact**          | **Number**                              | Impact of the Problem 1-Low, 2-Medium, 3-High                                            | [optional]            |
| **status**          | **Number**                              | Status identifier of the Problem. Open -&gt; 1, Change Requested -&gt; 2, Closed -&gt; 3 | [optional]            |
| **subject**         | **String**                              | Subject of the Problem                                                                   | [optional]            |
| **due_by**          | **Date**                                | Timestamp at which Problem&#39;s resolution is due                                       | [optional] [readonly] |
| **department_id**   | **Number**                              | Unique ID of the department initiating the Problem                                       | [optional]            |
| **category**        | **String**                              | Category of the Problem                                                                  | [optional]            |
| **sub_category**    | **String**                              | Sub-category of the Problem                                                              | [optional]            |
| **item_category**   | **String**                              | Item of the Problem                                                                      | [optional]            |
| **known_error**     | **Boolean**                             | true if the Problem is a known error, false otherwise                                    | [optional]            |
| **created_at**      | **Date**                                | Timestamp at which Problem was created                                                   | [optional] [readonly] |
| **updated_at**      | **Date**                                | Timestamp at which Problem was last updated                                              | [optional] [readonly] |
| **assets**          | [**[Asset]**](Asset.md)                 | Assets associated with the Ticket                                                        | [optional]            |
| **attachments**     | **[String]**                            | URLs of attachments attached to the Problem request                                      | [optional] [readonly] |
| **custom_fields**   | **{String: String}**                    | Key value pairs containing the names and values of custom fields                         | [optional]            |
| **analysis_fields** | [**AnalysisFields**](AnalysisFields.md) |                                                                                          | [optional]            |

## Enum: PriorityEnum

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)

- `4` (value: `4`)

## Enum: ImpactEnum

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)
