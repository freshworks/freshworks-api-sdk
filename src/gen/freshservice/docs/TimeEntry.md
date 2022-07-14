# FreshserviceApiSdkCodegen.TimeEntry

## Properties

| Name              | Type                 | Description                                                             | Notes                 |
| ----------------- | -------------------- | ----------------------------------------------------------------------- | --------------------- |
| **id**            | **Number**           | Unique ID of the time entry                                             | [optional] [readonly] |
| **task_id**       | **Number**           | Unique ID of the task associated with the time entry                    | [optional]            |
| **parent_id**     | **Number**           | Unique ID of the parent entity to which the time entry belongs          | [optional] [readonly] |
| **parent_type**   | **String**           | Type of the parent entity - [Ticket, Problem, Change, Release, Project] | [optional]            |
| **start_time**    | **Date**             | Time at which the timer started                                         | [optional]            |
| **time_spent**    | **String**           | Duration of time spent in seconds                                       | [optional]            |
| **timer_running** | **Boolean**          | true if timer is running, false otherwise                               | [optional]            |
| **billable**      | **Boolean**          | true if billable, false otherwise                                       | [optional]            |
| **agent_id**      | **Number**           | Unique ID of the user who created the time entry                        | [optional]            |
| **note**          | **String**           | Description note of the time entry                                      | [optional]            |
| **created_at**    | **Date**             | Timestamp at which the time entry is created                            | [optional] [readonly] |
| **updated_at**    | **Date**             | Time stamp at which the time entry is updated                           | [optional] [readonly] |
| **executed_at**   | **Date**             | Date time at which the time entry is executed                           | [optional] [readonly] |
| **custom_fields** | **{String: String}** | Key value pairs containing the names and values of custom fields        | [optional]            |
