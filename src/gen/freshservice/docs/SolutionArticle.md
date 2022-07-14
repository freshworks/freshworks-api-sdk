# FreshserviceApiSdkCodegen.SolutionArticle

## Properties

| Name                 | Type         | Description                                                | Notes                 |
| -------------------- | ------------ | ---------------------------------------------------------- | --------------------- |
| **id**               | **Number**   | Unique identifier of the solution article                  | [optional] [readonly] |
| **folder_id**        | **Number**   | ID of the folder under which the article is listed         | [optional]            |
| **category_id**      | **Number**   | Unique identifier of the solution category                 | [optional]            |
| **title**            | **String**   | Title of the solution article                              | [optional]            |
| **description**      | **String**   | Content of the solution article in HTML format             | [optional]            |
| **description_text** | **String**   | Content of the solution article in plain-text format       | [optional]            |
| **position**         | **Number**   | The rank of the solution article in the article listing    | [optional]            |
| **article_type**     | **Number**   | The type of the article. ( 1 - permanent, 2 - workaround ) | [optional]            |
| **status**           | **Number**   | Status of the article. ( 1 - draft, 2 - published )        | [optional]            |
| **thumbs_up**        | **Number**   | Number of upvotes for the article                          | [optional] [readonly] |
| **thumbs_down**      | **Number**   | Number of downvotes for the article                        | [optional] [readonly] |
| **created_by**       | **Number**   | ID of the user who created the article                     | [optional]            |
| **created_time**     | **Date**     | Timestamp at which the department was created              | [optional] [readonly] |
| **updated_by**       | **Number**   | ID of the user who last updated the article                | [optional]            |
| **updated_time**     | **Date**     | Timestamp at which the department was last modified        | [optional] [readonly] |
| **views**            | **Number**   | number of views for the article                            | [optional] [readonly] |
| **search_keywords**  | **[String]** | Keywords for which this article should be mapped           | [optional]            |
| **tags**             | **[String]** | The tags associated to the article                         | [optional]            |
