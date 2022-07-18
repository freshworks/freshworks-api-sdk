# FreshserviceApiSdkCodegen.ProductsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                            | HTTP request                             | Description                                          |
| ------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| [**createProduct**](ProductsApi.md#createProduct) | **POST** /api/v2/products                | Create a new Product in the Product Catalog          |
| [**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /api/v2/products/{product_id} | Delete an existing Product from the Product Catalog  |
| [**getProduct**](ProductsApi.md#getProduct)       | **GET** /api/v2/products/{product_id}    | Retrieve a specific Product from the Product Catalog |
| [**listProducts**](ProductsApi.md#listProducts)   | **GET** /api/v2/products                 | List All Products in the Product Catalog             |
| [**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /api/v2/products/{product_id}    | Update an existing Product in the Product Catalog    |

## createProduct

> ListProducts200Response createProduct(product)

Create a new Product in the Product Catalog

Create a new Product in the Product Catalog

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProductsApi();
let product = new FreshserviceApiSdkCodegen.Product(); // Product |
apiInstance.createProduct(product).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name        | Type                      | Description | Notes |
| ----------- | ------------------------- | ----------- | ----- |
| **product** | [**Product**](Product.md) |             |

### Return type

[**ListProducts200Response**](ListProducts200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteProduct

> deleteProduct(product_id)

Delete an existing Product from the Product Catalog

Delete an existing Product from the Product Catalog

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProductsApi();
let product_id = 56; // Number |
apiInstance.deleteProduct(product_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **product_id** | **Number** |             |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProduct

> ListProducts200Response getProduct(product_id)

Retrieve a specific Product from the Product Catalog

Retrieve a specific Product from the Product Catalog

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProductsApi();
let product_id = 56; // Number |
apiInstance.getProduct(product_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **product_id** | **Number** |             |

### Return type

[**ListProducts200Response**](ListProducts200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProducts

> ListProducts200Response listProducts(opts)

List All Products in the Product Catalog

Get a list of all Products in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProductsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listProducts(opts).then(
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
| **per_page** | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**     | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |

### Return type

[**ListProducts200Response**](ListProducts200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateProduct

> ListProducts200Response updateProduct(product, product_id)

Update an existing Product in the Product Catalog

Update an existing Product in the Product Catalog

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.ProductsApi();
let product = new FreshserviceApiSdkCodegen.Product(); // Product |
let product_id = 56; // Number |
apiInstance.updateProduct(product, product_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                      | Description | Notes |
| -------------- | ------------------------- | ----------- | ----- |
| **product**    | [**Product**](Product.md) |             |
| **product_id** | **Number**                |             |

### Return type

[**ListProducts200Response**](ListProducts200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
