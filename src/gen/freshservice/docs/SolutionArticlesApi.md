# FreshserviceApiSdkCodegen.SolutionArticlesApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                      | HTTP request                                          | Description                           |
| --------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------- |
| [**createSolutionArticle**](SolutionArticlesApi.md#createSolutionArticle)   | **POST** /api/v2/solutions/articles                   | Create a solution article in a folder |
| [**createSolutionCategory**](SolutionArticlesApi.md#createSolutionCategory) | **POST** /api/v2/solutions/categories                 | Create a solution category            |
| [**createSolutionFolder**](SolutionArticlesApi.md#createSolutionFolder)     | **POST** /api/v2/solutions/folders                    | Create a solution folder              |
| [**deleteSolutionArticle**](SolutionArticlesApi.md#deleteSolutionArticle)   | **DELETE** /api/v2/solutions/articles/{article_id}    | Delete a solution article             |
| [**deleteSolutionCategory**](SolutionArticlesApi.md#deleteSolutionCategory) | **DELETE** /api/v2/solutions/categories/{category_id} | Delete a solution category            |
| [**deleteSolutionFolder**](SolutionArticlesApi.md#deleteSolutionFolder)     | **DELETE** /api/v2/solutions/folders/{folder_id}      | Delete a solution folder              |
| [**getSolutionArticle**](SolutionArticlesApi.md#getSolutionArticle)         | **GET** /api/v2/solutions/articles/{article_id}       | View a solution article               |
| [**getSolutionCategory**](SolutionArticlesApi.md#getSolutionCategory)       | **GET** /api/v2/solutions/categories/{category_id}    | View a solution category              |
| [**getSolutionFolder**](SolutionArticlesApi.md#getSolutionFolder)           | **GET** /api/v2/solutions/folders/{folder_id}         | View a solution folder                |
| [**listSolutionArticle**](SolutionArticlesApi.md#listSolutionArticle)       | **GET** /api/v2/solutions/articles                    | List All Solution articles            |
| [**listSolutionCategory**](SolutionArticlesApi.md#listSolutionCategory)     | **GET** /api/v2/solutions/categories                  | List All Solution Categories          |
| [**listSolutionFolders**](SolutionArticlesApi.md#listSolutionFolders)       | **GET** /api/v2/solutions/folders                     | List All Solution Folders             |
| [**updateSolutionArticle**](SolutionArticlesApi.md#updateSolutionArticle)   | **PUT** /api/v2/solutions/articles/{article_id}       | Update a solution article             |
| [**updateSolutionCategory**](SolutionArticlesApi.md#updateSolutionCategory) | **PUT** /api/v2/solutions/categories/{category_id}    | Update a solution category            |
| [**updateSolutionFolder**](SolutionArticlesApi.md#updateSolutionFolder)     | **PUT** /api/v2/solutions/folders/{folder_id}         | Update a solution folder              |

## createSolutionArticle

> CreateSolutionArticle200Response createSolutionArticle(solution_article)

Create a solution article in a folder

Create a new solution article in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let solution_article = new FreshserviceApiSdkCodegen.SolutionArticle(); // SolutionArticle | Article that needs to be created
apiInstance.createSolutionArticle(solution_article).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                 | Type                                      | Description                      | Notes |
| -------------------- | ----------------------------------------- | -------------------------------- | ----- |
| **solution_article** | [**SolutionArticle**](SolutionArticle.md) | Article that needs to be created |

### Return type

[**CreateSolutionArticle200Response**](CreateSolutionArticle200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createSolutionCategory

> CreateSolutionCategory200Response createSolutionCategory(solution_category)

Create a solution category

Create a new solution category in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let solution_category = new FreshserviceApiSdkCodegen.SolutionCategory(); // SolutionCategory | Solution Category that needs to be created
apiInstance.createSolutionCategory(solution_category).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type                                        | Description                                | Notes |
| --------------------- | ------------------------------------------- | ------------------------------------------ | ----- |
| **solution_category** | [**SolutionCategory**](SolutionCategory.md) | Solution Category that needs to be created |

### Return type

[**CreateSolutionCategory200Response**](CreateSolutionCategory200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createSolutionFolder

> CreateSolutionFolder200Response createSolutionFolder(solution_folder)

Create a solution folder

Create a new solution folder in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let solution_folder = new FreshserviceApiSdkCodegen.SolutionFolder(); // SolutionFolder | Folder that needs to be created
apiInstance.createSolutionFolder(solution_folder).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                    | Description                     | Notes |
| ------------------- | --------------------------------------- | ------------------------------- | ----- |
| **solution_folder** | [**SolutionFolder**](SolutionFolder.md) | Folder that needs to be created |

### Return type

[**CreateSolutionFolder200Response**](CreateSolutionFolder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteSolutionArticle

> deleteSolutionArticle(article_id)

Delete a solution article

Delete the solution article with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let article_id = 789; // Number | ID of the solution article to delete
apiInstance.deleteSolutionArticle(article_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description                          | Notes |
| -------------- | ---------- | ------------------------------------ | ----- |
| **article_id** | **Number** | ID of the solution article to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteSolutionCategory

> deleteSolutionCategory(category_id)

Delete a solution category

Delete the solution category with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let category_id = 789; // Number | ID of the solution category which has to be deleted
apiInstance.deleteSolutionCategory(category_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type       | Description                                         | Notes |
| --------------- | ---------- | --------------------------------------------------- | ----- |
| **category_id** | **Number** | ID of the solution category which has to be deleted |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteSolutionFolder

> deleteSolutionFolder(folder_id)

Delete a solution folder

Delete the solution folder with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let folder_id = 789; // Number | ID of the solution folder that has to be deleted
apiInstance.deleteSolutionFolder(folder_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                      | Notes |
| ------------- | ---------- | ------------------------------------------------ | ----- |
| **folder_id** | **Number** | ID of the solution folder that has to be deleted |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getSolutionArticle

> CreateSolutionArticle200Response getSolutionArticle(article_id)

View a solution article

View a solution article

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let article_id = 789; // Number | ID of solution article
apiInstance.getSolutionArticle(article_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description            | Notes |
| -------------- | ---------- | ---------------------- | ----- |
| **article_id** | **Number** | ID of solution article |

### Return type

[**CreateSolutionArticle200Response**](CreateSolutionArticle200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSolutionCategory

> CreateSolutionCategory200Response getSolutionCategory(category_id)

View a solution category

View a solution category

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let category_id = 789; // Number | ID of solution category
apiInstance.getSolutionCategory(category_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type       | Description             | Notes |
| --------------- | ---------- | ----------------------- | ----- |
| **category_id** | **Number** | ID of solution category |

### Return type

[**CreateSolutionCategory200Response**](CreateSolutionCategory200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSolutionFolder

> CreateSolutionFolder200Response getSolutionFolder(folder_id)

View a solution folder

View a solution folder

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let folder_id = 789; // Number | ID of solution folder
apiInstance.getSolutionFolder(folder_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description           | Notes |
| ------------- | ---------- | --------------------- | ----- |
| **folder_id** | **Number** | ID of solution folder |

### Return type

[**CreateSolutionFolder200Response**](CreateSolutionFolder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSolutionArticle

> ListSolutionArticle200Response listSolutionArticle(opts)

List All Solution articles

Retrieve a list of all Solution articles in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let opts = {
  per_page: 30, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1, // Number | The page number to retrieve.
  folder_id: 56, // Number | The ID of the folder whose solution articles have to be listed.
  category_id: 56 // Number | The ID of the category whose solution articles have to be listed.
};
apiInstance.listSolutionArticle(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type       | Description                                                         | Notes                      |
| --------------- | ---------- | ------------------------------------------------------------------- | -------------------------- |
| **per_page**    | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**        | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |
| **folder_id**   | **Number** | The ID of the folder whose solution articles have to be listed.     | [optional]                 |
| **category_id** | **Number** | The ID of the category whose solution articles have to be listed.   | [optional]                 |

### Return type

[**ListSolutionArticle200Response**](ListSolutionArticle200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSolutionCategory

> ListSolutionCategory200Response listSolutionCategory(opts)

List All Solution Categories

Retrieve a list of all Solution Categories in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let opts = {
  per_page: 30, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listSolutionCategory(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description                                                         | Notes                      |
| ------------ | ---------- | ------------------------------------------------------------------- | -------------------------- |
| **per_page** | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**     | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |

### Return type

[**ListSolutionCategory200Response**](ListSolutionCategory200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSolutionFolders

> ListSolutionFolders200Response listSolutionFolders(opts)

List All Solution Folders

Retrieve a list of all Solution Folders in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let opts = {
  category_id: 789, // Number | ID of solution category in which the folders reside
  per_page: 30, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listSolutionFolders(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type       | Description                                                         | Notes                      |
| --------------- | ---------- | ------------------------------------------------------------------- | -------------------------- |
| **category_id** | **Number** | ID of solution category in which the folders reside                 | [optional]                 |
| **per_page**    | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**        | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |

### Return type

[**ListSolutionFolders200Response**](ListSolutionFolders200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateSolutionArticle

> updateSolutionArticle(solution_article, article_id)

Update a solution article

Update the solution article with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let solution_article = new FreshserviceApiSdkCodegen.SolutionArticle(); // SolutionArticle | Article that needs to be created
let article_id = 789; // Number | ID of the solution article to update
apiInstance.updateSolutionArticle(solution_article, article_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                 | Type                                      | Description                          | Notes |
| -------------------- | ----------------------------------------- | ------------------------------------ | ----- |
| **solution_article** | [**SolutionArticle**](SolutionArticle.md) | Article that needs to be created     |
| **article_id**       | **Number**                                | ID of the solution article to update |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateSolutionCategory

> updateSolutionCategory(solution_category, category_id)

Update a solution category

Update the solution category with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let solution_category = new FreshserviceApiSdkCodegen.SolutionCategory(); // SolutionCategory | Category that needs to be updated
let category_id = 789; // Number | ID of the solution category which has to be updated
apiInstance.updateSolutionCategory(solution_category, category_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type                                        | Description                                         | Notes |
| --------------------- | ------------------------------------------- | --------------------------------------------------- | ----- |
| **solution_category** | [**SolutionCategory**](SolutionCategory.md) | Category that needs to be updated                   |
| **category_id**       | **Number**                                  | ID of the solution category which has to be updated |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## updateSolutionFolder

> updateSolutionFolder(solution_folder, folder_id)

Update a solution folder

Update the solution folder with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.SolutionArticlesApi();
let solution_folder = new FreshserviceApiSdkCodegen.SolutionFolder(); // SolutionFolder | Folder that needs to be created
let folder_id = 789; // Number | ID of the solution folder that has to be updated
apiInstance.updateSolutionFolder(solution_folder, folder_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                    | Description                                      | Notes |
| ------------------- | --------------------------------------- | ------------------------------------------------ | ----- |
| **solution_folder** | [**SolutionFolder**](SolutionFolder.md) | Folder that needs to be created                  |
| **folder_id**       | **Number**                              | ID of the solution folder that has to be updated |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
