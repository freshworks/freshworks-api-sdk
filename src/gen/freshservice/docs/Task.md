# FreshserviceApiSdkCodegen.Task

## Properties

| Name              | Type       | Description                                                             | Notes                 |
| ----------------- | ---------- | ----------------------------------------------------------------------- | --------------------- |
| **created_by**    | **Number** | Unique ID of the user who created the task                              | [optional] [readonly] |
| **agent_id**      | **Number** | Id of the agent to whom the task is assigned                            | [optional] [readonly] |
| **id**            | **Number** | Unique ID of the task                                                   | [optional] [readonly] |
| **status**        | **Number** | Status of the task, 1-Open, 2-In Progress, 3-Completed                  | [optional] [readonly] |
| **parent_id**     | **Number** | Unique ID of the parent entity to which the task belongs                | [optional] [readonly] |
| **parent_type**   | **String** | Type of the parent entity - [Ticket, Problem, Change, Release, Project] | [optional]            |
| **due_date**      | **Date**   | Due date of the task                                                    | [optional]            |
| **notify_before** | **Number** | Time in seconds before which notification is sent prior to due date     | [optional]            |
| **title**         | **String** | Title of the task                                                       | [optional]            |
| **description**   | **String** | Description of the task                                                 | [optional]            |
| **created_at**    | **Date**   | Timestamp at which the task was created                                 | [optional] [readonly] |
| **updated_at**    | **Date**   | Timestamp at which the task was updated                                 | [optional] [readonly] |
| **closed_at**     | **Date**   | Timestamp at which the task was closed                                  | [optional] [readonly] |
| **group_id**      | **Number** | Unique ID of the group to which the task is assigned                    | [optional] [readonly] |
| **start_date**    | **Date**   | Timestamp at which the task is started                                  | [optional]            |

## Enum: StatusEnum

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)

- `4` (value: `4`)
