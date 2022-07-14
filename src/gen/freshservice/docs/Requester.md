# FreshserviceApiSdkCodegen.Requester

## Properties

| Name                                                | Type         | Description                                                                                                                | Notes                 |
| --------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**                                              | **Number**   | Unique identifier of the requester                                                                                         | [optional] [readonly] |
| **first_name**                                      | **String**   | First Name of the requester                                                                                                | [optional]            |
| **last_name**                                       | **String**   | Last Name of the requester                                                                                                 | [optional]            |
| **job_title**                                       | **String**   | Job Title of the requester                                                                                                 | [optional]            |
| **primary_email**                                   | **String**   | Primary email address of the requester                                                                                     | [optional]            |
| **secondary_emails**                                | **[String]** | Secondary email addresses of the requester                                                                                 | [optional]            |
| **work_phone_number**                               | **String**   | Work phone number of the requester                                                                                         | [optional]            |
| **mobile_phone_number**                             | **String**   | Mobile phone number of the requester                                                                                       | [optional]            |
| **department_ids**                                  | **[Number]** | Unique IDs of the departments associated with the requester                                                                | [optional]            |
| **can_see_all_tickets_from_associated_departments** | **Boolean**  | Set to true if the requester must be allowed to view tickets filed by other members of the department, and false otherwise | [optional]            |
| **reporting_manager_id**                            | **Number**   | Unique identifier of the requester&#39;s reporting manager                                                                 | [optional]            |
| **address**                                         | **String**   | Address of the requester                                                                                                   | [optional]            |
| **time_zone**                                       | **String**   | Time zone of the requester                                                                                                 | [optional]            |
| **language**                                        | **String**   | Language used by the requester                                                                                             | [optional]            |
| **location_id**                                     | **Number**   | Unique identifier of the location associated with the requester                                                            | [optional]            |
| **background_information**                          | **String**   | Address of the requester                                                                                                   | [optional]            |
| **active**                                          | **Boolean**  | true if the user is active, and false if the user account has been deactivated.                                            | [optional]            |
| **has_logged_in**                                   | **Boolean**  | true if the user has logged in to Freshservice at least once, and false otherwise.                                         | [optional]            |
| **created_time**                                    | **Date**     | Timestamp at which the requester was created                                                                               | [optional] [readonly] |
| **updated_time**                                    | **Date**     | Timestamp at which the requester was last modified                                                                         | [optional] [readonly] |
| **custom_fields**                                   | **Object**   | Custom fields that are associated with a Freshservice entity                                                               | [optional]            |
