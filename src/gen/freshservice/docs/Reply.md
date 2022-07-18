# FreshserviceApiSdkCodegen.Reply

## Properties

| Name            | Type                              | Description                                                      | Notes                 |
| --------------- | --------------------------------- | ---------------------------------------------------------------- | --------------------- |
| **id**          | **Number**                        | Unique ID of the reply                                           | [optional] [readonly] |
| **user_id**     | **Number**                        | Unique ID of the user who created the reply                      | [optional] [readonly] |
| **created_at**  | **String**                        | Timestamp at which the note is created                           | [optional] [readonly] |
| **updated_at**  | **String**                        | Timestamp at which the note is updated                           | [optional] [readonly] |
| **body**        | **String**                        | The body of the note in HTML format.                             | [optional]            |
| **body_text**   | **String**                        | The body of the note in plain text format                        | [optional]            |
| **attachments** | [**[Attachment]**](Attachment.md) |                                                                  | [optional]            |
| **ticket_id**   | **Number**                        | Unique ID of the ticket to which the reply belongs               | [optional]            |
| **from_email**  | **String**                        |                                                                  | [optional]            |
| **to_emails**   | **[String]**                      | Addresses to which the conversation must be sent                 | [optional]            |
| **cc_emails**   | **[String]**                      | Addresses which must be copied on while sending the conversation | [optional]            |
| **bcc_emails**  | **[String]**                      | Addresses to which a blind copy must be sent                     | [optional]            |
