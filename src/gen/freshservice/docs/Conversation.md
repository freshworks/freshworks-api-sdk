# FreshserviceApiSdkCodegen.Conversation

## Properties

| Name            | Type                              | Description                                                                                                                 | Notes                 |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**          | **Number**                        | Unique ID of the conversatoin                                                                                               | [optional] [readonly] |
| **user_id**     | **Number**                        | Unique ID of the user who created the note                                                                                  | [optional] [readonly] |
| **source**      | **Number**                        | Source of the note, 0-email, 1-form, 2-note, 3-status, 4-meta, 5-feedback, 6-forward_email)                                 | [optional] [readonly] |
| **incoming**    | **Boolean**                       | Set to true if a particular conversation should appear as being created from the outside (i.e., not through the web portal) | [optional]            |
| **created_at**  | **String**                        | Date time at which the conversation is created                                                                              | [optional] [readonly] |
| **updated_at**  | **String**                        | Date time at which the conversation is updated                                                                              | [optional] [readonly] |
| **body**        | **String**                        |                                                                                                                             | [optional]            |
| **body_text**   | **String**                        |                                                                                                                             | [optional]            |
| **attachments** | [**[Attachment]**](Attachment.md) |                                                                                                                             | [optional] [readonly] |
| **change_id**   | **Number**                        | Unique ID of the change to which the note belongs                                                                           | [optional]            |
| **ticket_id**   | **Number**                        | Unique ID of the ticket to which the note belongs                                                                           | [optional]            |
| **from_email**  | **String**                        |                                                                                                                             | [optional]            |
| **to_emails**   | **[String]**                      | Addresses to which the conversation must be sent                                                                            | [optional]            |
| **cc_emails**   | **[String]**                      | Addresses which must be copied on while sending the conversation                                                            | [optional]            |
| **bcc_emails**  | **[String]**                      | Addresses to which a blind copy must be sent                                                                                | [optional]            |

## Enum: SourceEnum

- `0` (value: `0`)

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)

- `4` (value: `4`)

- `5` (value: `5`)

- `6` (value: `6`)
