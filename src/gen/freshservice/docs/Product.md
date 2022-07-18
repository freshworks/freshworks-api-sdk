# FreshserviceApiSdkCodegen.Product

## Properties

| Name                       | Type       | Description                                                                                     | Notes                 |
| -------------------------- | ---------- | ----------------------------------------------------------------------------------------------- | --------------------- |
| **id**                     | **Number** | Unique ID of the Product                                                                        | [optional] [readonly] |
| **name**                   | **String** | Name of the Product                                                                             | [optional]            |
| **asset_type_id**          | **Number** | Asset Type id of the Product                                                                    | [optional]            |
| **manufacturer**           | **String** | Manufacturer Name - Free Text                                                                   | [optional]            |
| **status_id**              | **Number** | status can be &#x60;1&#x60; - In Production &#x60;2&#x60; - In Pipeline &#x60;3&#x60; - Retired | [optional]            |
| **mode_of_procurement_id** | **Number** | mode of procurement can be &#x60;1&#x60; - Buy &#x60;2&#x60; - Lease &#x60;3&#x60; - Both       | [optional]            |
| **depreciation_type_id**   | **Number** |                                                                                                 | [optional]            |
| **description**            | **String** | Unique identifier for the depreciation type used                                                | [optional]            |

## Enum: StatusIdEnum

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)

## Enum: ModeOfProcurementIdEnum

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)
