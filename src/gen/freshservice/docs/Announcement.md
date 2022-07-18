# FreshserviceApiSdkCodegen.Announcement

## Properties

| Name                  | Type         | Description                                                                     | Notes                 |
| --------------------- | ------------ | ------------------------------------------------------------------------------- | --------------------- |
| **id**                | **Number**   | Unique identifier of the Announcement                                           | [optional] [readonly] |
| **created_by**        | **Number**   | Unique identifier of the agent to created this Announcement                     | [optional]            |
| **state**             | **String**   | State of the Announcement active, archived, scheduled                           | [optional] [readonly] |
| **title**             | **String**   | Title of the Announcement                                                       | [optional]            |
| **body**              | **String**   | Body of the Announcement in plain text                                          | [optional] [readonly] |
| **body_html**         | **String**   | Body of the Announcement in HTML format                                         | [optional]            |
| **visible_from**      | **Date**     | Timestamp at which Announcement becomes active                                  | [optional]            |
| **visible_till**      | **Date**     | Timestamp until which Announcement is active                                    | [optional]            |
| **visibility**        | **String**   | Who can see the announcement. Values - everyone, agents_only, agents_and_groups | [optional]            |
| **departments**       | **[Number]** | Array of Department IDs that can view this Announcement                         | [optional]            |
| **groups**            | **[Number]** | Array of Group IDs that can view this Announcement                              | [optional]            |
| **is_read**           | **Boolean**  | True if the logged-in-user has read the announcement. False, otherwise          | [optional] [readonly] |
| **send_email**        | **Boolean**  | True if the announcement needs to be sent via email as well. False, otherwise   | [optional] [readonly] |
| **additional_emails** | **[String]** | Additional email addresses to which the announcement needs to be sent           | [optional]            |
| **created_at**        | **Date**     | Timestamp at which Announcement was created                                     | [optional] [readonly] |
| **updated_at**        | **Date**     | Timestamp at which Announcement was last updated                                | [optional] [readonly] |
