# FreshserviceApiSdkCodegen.TicketNote

## Properties

| Name              | Type                              | Description                                                                                                | Notes                 |
| ----------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**            | **Number**                        | Unique ID of the note                                                                                      | [optional] [readonly] |
| **user_id**       | **Number**                        | Unique ID of the user who created the note                                                                 | [optional] [readonly] |
| **\_private**     | **Boolean**                       | Set to true if the note is private. The default value is true.                                             | [optional]            |
| **incoming**      | **Boolean**                       | Set to true if the note should appear as being created from the outside (i.e., not through the web portal) | [optional]            |
| **notify_emails** | **[String]**                      | Addresses to which the note must be notified to                                                            | [optional]            |
| **body**          | **String**                        | The body of the note in HTML format                                                                        | [optional]            |
| **body_text**     | **String**                        | The body of the note in plain text format                                                                  | [optional]            |
| **created_at**    | **String**                        | Date time at which the note was created                                                                    | [optional] [readonly] |
| **updated_at**    | **String**                        | Date time at which the note was updated                                                                    | [optional] [readonly] |
| **attachments**   | [**[Attachment]**](Attachment.md) |                                                                                                            | [optional]            |
