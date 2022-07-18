# FreshserviceApiSdkCodegen.ProjectTask

## Properties

| Name                    | Type                                          | Description                      | Notes                 |
| ----------------------- | --------------------------------------------- | -------------------------------- | --------------------- |
| **id**                  | **Number**                                    | Unique identifier of the task    | [optional] [readonly] |
| **project_id**          | **Number**                                    | Unique identifier of the project | [optional] [readonly] |
| **title**               | **String**                                    | Name of the task                 | [optional]            |
| **description**         | **String**                                    | Description about the task       | [optional]            |
| **status**              | **Number**                                    | Status of the task               | [optional]            |
| **owner_id**            | **Number**                                    | Owner of the task                | [optional]            |
| **user_id**             | **Number**                                    | Agent who created the task       | [optional] [readonly] |
| **closed_at**           | **Date**                                      | Closed time of the task          | [optional] [readonly] |
| **start_date**          | **Date**                                      | Start date of the task           | [optional]            |
| **end_date**            | **Date**                                      | End date of the task             | [optional]            |
| **parent_id**           | **Number**                                    | Immediate parent of the task     | [optional]            |
| **root_id**             | **Number**                                    | Root parent of the task          | [optional] [readonly] |
| **has_subtasks**        | **Boolean**                                   | States if the task has subtasks  | [optional] [readonly] |
| **notification_needed** | **Boolean**                                   | Specify if needed to be notified | [optional]            |
| **notify**              | [**ProjectTaskNotify**](ProjectTaskNotify.md) |                                  | [optional]            |
