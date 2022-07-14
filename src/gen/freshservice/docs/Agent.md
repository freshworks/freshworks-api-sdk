# FreshserviceApiSdkCodegen.Agent

## Properties

| Name                     | Type                                      | Description                                                                                                                                                   | Notes                 |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**                   | **Number**                                | Unique identifier of the agent                                                                                                                                | [optional] [readonly] |
| **first_name**           | **String**                                | First Name of the agent                                                                                                                                       |
| **occasional**           | **Boolean**                               | True if the agent is an occasional agent, and false if full-time agent.                                                                                       | [optional]            |
| **last_name**            | **String**                                | Last Name of the agent                                                                                                                                        | [optional]            |
| **job_title**            | **String**                                | Job Title of the agent                                                                                                                                        | [optional]            |
| **email**                | **String**                                | Email address of the agent                                                                                                                                    |
| **work_phone_number**    | **String**                                | Work phone number of the agent                                                                                                                                | [optional]            |
| **mobile_phone_number**  | **String**                                | Mobile phone number of the agent                                                                                                                              | [optional]            |
| **reporting_manager_id** | **Number**                                | Unique identifier of the agent&#39;s reporting manager                                                                                                        | [optional]            |
| **time_zone**            | **String**                                | Time zone of the agent                                                                                                                                        | [optional]            |
| **language**             | **String**                                | Language used by the agent                                                                                                                                    | [optional]            |
| **location_id**          | **Number**                                | Unique identifier of the location associated with the agent                                                                                                   | [optional]            |
| **scoreboard_level_id**  | **Number**                                | Unique ID of the level of the agent in the Arcade. Possible values: _ 1 - Beginner _ 2 - Intermediate _ 3 - Professional _ 4 - Expert _ 5 - Master _ 6 - Guru | [optional]            |
| **scope**                | [**AgentScope**](AgentScope.md)           |                                                                                                                                                               | [optional]            |
| **group_ids**            | **[Number]**                              | &lt;DEPRECATED&gt; Unique IDs of the agent groups associated with the agent                                                                                   | [optional]            |
| **member_of**            | **[Number]**                              | Unique IDs of the agent groups that the agent is a member of                                                                                                  | [optional]            |
| **observer_of**          | **[Number]**                              | Unique IDs of the agent groups that the agent is an observer of                                                                                               | [optional]            |
| **role_ids**             | **[Number]**                              | (DEPRECATED) Unique IDs of the agent roles associated with the agent                                                                                          |
| **roles**                | [**[RoleAssignment]**](RoleAssignment.md) |                                                                                                                                                               | [optional]            |
| **last_login_at**        | **Date**                                  | Timestamp of the agent&#39;s last successful login                                                                                                            | [optional] [readonly] |
| **active**               | **Boolean**                               | true if the user is active, and false if the user account has been deactivated.                                                                               | [optional]            |
| **has_logged_in**        | **Boolean**                               | true if the user has logged in to Freshservice at least once, and false otherwise.                                                                            | [optional]            |
| **created_at**           | **Date**                                  | Timestamp at which the agent was created                                                                                                                      | [optional] [readonly] |
| **updated_at**           | **Date**                                  | Timestamp at which the agent was last modified                                                                                                                | [optional] [readonly] |

## Enum: ScoreboardLevelIdEnum

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)

- `4` (value: `4`)

- `5` (value: `5`)

- `6` (value: `6`)
