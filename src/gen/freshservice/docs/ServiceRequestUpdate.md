# FreshserviceApiSdkCodegen.ServiceRequestUpdate

## Properties

| Name                    | Type         | Description                                                                                                                                        | Notes      |
| ----------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **requester_email**     | **String**   | the email id of the requester                                                                                                                      | [optional] |
| **requested_for_email** | **String**   | the email id of the user for whom this is requested.                                                                                               | [optional] |
| **subject**             | **String**   | the subject of the ticket                                                                                                                          | [optional] |
| **status**              | **Number**   | the status of the ticket                                                                                                                           | [optional] |
| **priority**            | **Number**   | the priority of the ticket                                                                                                                         | [optional] |
| **description**         | **String**   | the description/body of the ticket                                                                                                                 | [optional] |
| **agent_id**            | **Number**   | the agent ID to whom the ticket is assigned                                                                                                        | [optional] |
| **due_by**              | **Date**     | Timestamp that denotes when the ticket is due to be resolved                                                                                       | [optional] |
| **group_id**            | **Number**   | ID of the group to which the ticket has been assigned. The default value is the ID of the group that is associated with the given email_config_id. | [optional] |
| **source**              | **Number**   | The channel through which the ticket was created. The default value is 2.                                                                          | [optional] |
| **tags**                | **[String]** | Tags that have been associated with the ticket.                                                                                                    | [optional] |
| **custom_fields**       | **Object**   | Custom fields that are associated with a Freshservice entity                                                                                       | [optional] |
