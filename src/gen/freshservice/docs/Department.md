# FreshserviceApiSdkCodegen.Department

## Properties

| Name              | Type         | Description                                                                                | Notes                 |
| ----------------- | ------------ | ------------------------------------------------------------------------------------------ | --------------------- |
| **id**            | **Number**   | Unique identifier of the department                                                        | [optional] [readonly] |
| **name**          | **String**   | Name of the department                                                                     | [optional]            |
| **description**   | **String**   | Description about the department                                                           | [optional]            |
| **head_user_id**  | **Number**   | Unique identifier of the agent or requester who serves as the head of the department       | [optional]            |
| **prime_user_id** | **Number**   | Unique identifier of the agent or requester who serves as the prime user of the department | [optional]            |
| **domains**       | **[String]** | Email domains associated with the department                                               | [optional]            |
| **custom_fields** | **Object**   | Custom fields that are associated with a Freshservice entity                               | [optional]            |
| **created_at**    | **Date**     | Timestamp at which the department was created                                              | [optional] [readonly] |
| **updated_at**    | **Date**     | Timestamp at which the department was last modified                                        | [optional] [readonly] |
