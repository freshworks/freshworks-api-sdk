# FreshserviceApiSdkCodegen.Note

## Properties

| Name              | Type         | Description                                     | Notes                 |
| ----------------- | ------------ | ----------------------------------------------- | --------------------- |
| **id**            | **Number**   | Unique ID of the note                           | [optional] [readonly] |
| **user_id**       | **Number**   | Unique ID of the user who created the note      | [optional] [readonly] |
| **notify_emails** | **[String]** | Addresses to which the note must be notified to | [optional]            |
| **body**          | **String**   | The body of the note in HTML format             | [optional]            |
| **body_text**     | **String**   | The body of the note in plain text format       | [optional]            |
| **created_at**    | **String**   | Date time at which the note was created         | [optional] [readonly] |
| **updated_at**    | **String**   | Date time at which the note was updated         | [optional] [readonly] |
