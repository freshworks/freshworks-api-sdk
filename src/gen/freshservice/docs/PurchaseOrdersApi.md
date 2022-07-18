# FreshserviceApiSdkCodegen.PurchaseOrdersApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                      | HTTP request                                           | Description                                 |
| --------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| [**createPurchaseOrderPost**](PurchaseOrdersApi.md#createPurchaseOrderPost) | **POST** /api/v2/purchase_orders                       | Create a new Purchase Order in Freshservice |
| [**deletePurchaseOrder**](PurchaseOrdersApi.md#deletePurchaseOrder)         | **DELETE** /api/v2/purchase_orders/{purchase_order_id} | Delete a purchase order                     |
| [**getPurchaseOrder**](PurchaseOrdersApi.md#getPurchaseOrder)               | **GET** /api/v2/purchase_orders/{purchase_order_id}    | Retrieve an existing Purchase Order         |
| [**listPurchaseOrders**](PurchaseOrdersApi.md#listPurchaseOrders)           | **GET** /api/v2/purchase_orders                        | List All Purchase Orders                    |
| [**updatePurchaseOrder**](PurchaseOrdersApi.md#updatePurchaseOrder)         | **PUT** /api/v2/purchase_orders/{purchase_order_id}    | Update an existing Purchase Order           |

## createPurchaseOrderPost

> CreatePurchaseOrderPost201Response createPurchaseOrderPost(purchase_order)

Create a new Purchase Order in Freshservice

Create a new Purchase Order in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.PurchaseOrdersApi();
let purchase_order = new FreshserviceApiSdkCodegen.PurchaseOrder(); // PurchaseOrder |
apiInstance.createPurchaseOrderPost(purchase_order).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type                                  | Description | Notes |
| ------------------ | ------------------------------------- | ----------- | ----- |
| **purchase_order** | [**PurchaseOrder**](PurchaseOrder.md) |             |

### Return type

[**CreatePurchaseOrderPost201Response**](CreatePurchaseOrderPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deletePurchaseOrder

> deletePurchaseOrder(purchase_order_id)

Delete a purchase order

Delete the purchase order with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.PurchaseOrdersApi();
let purchase_order_id = 789; // Number | ID of purchase order to delete
apiInstance.deletePurchaseOrder(purchase_order_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type       | Description                    | Notes |
| --------------------- | ---------- | ------------------------------ | ----- |
| **purchase_order_id** | **Number** | ID of purchase order to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getPurchaseOrder

> CreatePurchaseOrderPost201Response getPurchaseOrder(purchase_order_id)

Retrieve an existing Purchase Order

Retrieve an existing Purchase Order

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.PurchaseOrdersApi();
let purchase_order_id = 56; // Number |
apiInstance.getPurchaseOrder(purchase_order_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type       | Description | Notes |
| --------------------- | ---------- | ----------- | ----- |
| **purchase_order_id** | **Number** |             |

### Return type

[**CreatePurchaseOrderPost201Response**](CreatePurchaseOrderPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPurchaseOrders

> ListPurchaseOrders200Response listPurchaseOrders(opts)

List All Purchase Orders

Get a list of all Purchase Orders in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.PurchaseOrdersApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listPurchaseOrders(opts).then(
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

[**ListPurchaseOrders200Response**](ListPurchaseOrders200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePurchaseOrder

> CreatePurchaseOrderPost201Response updatePurchaseOrder(product, purchase_order_id)

Update an existing Purchase Order

Update an existing Purchase Order

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.PurchaseOrdersApi();
let product = new FreshserviceApiSdkCodegen.PurchaseOrder(); // PurchaseOrder |
let purchase_order_id = 56; // Number |
apiInstance.updatePurchaseOrder(product, purchase_order_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                  | Type                                  | Description | Notes |
| --------------------- | ------------------------------------- | ----------- | ----- |
| **product**           | [**PurchaseOrder**](PurchaseOrder.md) |             |
| **purchase_order_id** | **Number**                            |             |

### Return type

[**CreatePurchaseOrderPost201Response**](CreatePurchaseOrderPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
