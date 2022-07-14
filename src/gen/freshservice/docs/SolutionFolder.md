# FreshserviceApiSdkCodegen.SolutionFolder

## Properties

| Name                 | Type                                                        | Description                                                                                                                                         | Notes      |
| -------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **id**               | **Number**                                                  | Unique identifier of the solution folder                                                                                                            | [optional] |
| **category_id**      | **Number**                                                  | Unique identifier of the solution category                                                                                                          | [optional] |
| **name**             | **String**                                                  | Name of the solution folder                                                                                                                         | [optional] |
| **description**      | **String**                                                  | Description of the solution folder                                                                                                                  | [optional] |
| **position**         | **Number**                                                  | The position of the solution folder in the folder listing. When there are more than 1 folders in a category, then this will determine the position. | [optional] |
| **managed_by_group** | **Number**                                                  | Agent group ID who can edit the articles in the folder                                                                                              | [optional] |
| **managed_by_agent** | **Number**                                                  | The agent ID who can edit the articles in the folder                                                                                                | [optional] |
| **visibility**       | [**SolutionFolderVisibility**](SolutionFolderVisibility.md) |                                                                                                                                                     | [optional] |
| **default_folder**   | **Boolean**                                                 | If this is a default folder shipped with the product. You can create or rename a default folder.                                                    | [optional] |
