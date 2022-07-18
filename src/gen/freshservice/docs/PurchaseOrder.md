# FreshserviceApiSdkCodegen.PurchaseOrder

## Properties

| Name                         | Type        | Description                                                            | Notes                 |
| ---------------------------- | ----------- | ---------------------------------------------------------------------- | --------------------- |
| **id**                       | **Number**  | ID of the purchase order                                               | [optional] [readonly] |
| **vendor_id**                | **Number**  | ID of the vendor with whom the order is placed                         | [optional]            |
| **name**                     | **String**  | Title of the purchase order                                            | [optional]            |
| **po_number**                | **String**  | Purchase order number                                                  | [optional]            |
| **vendor_details**           | **String**  | Details of the vendor with whom the order is placed                    | [optional]            |
| **expected_delivery_date**   | **Date**    | Expected delivery date of the purchase order                           | [optional]            |
| **created_at**               | **Date**    | Created date and time of the purchase order                            | [optional] [readonly] |
| **updated_at**               | **Date**    | Updated date and time of the purchase order                            | [optional] [readonly] |
| **created_by**               | **Number**  | ID of the agent who created purchase order                             | [optional] [readonly] |
| **status**                   | **Number**  | Status of the purchase order                                           | [optional]            |
| **shipping_address**         | **String**  | Address to which the order should be shipped                           | [optional]            |
| **billing_same_as_shipping** | **Boolean** | True if Billing address is same as Shipping address                    | [optional]            |
| **billing_address**          | **String**  | Address to which the order should be billed                            | [optional]            |
| **currency_code**            | **String**  | Currency unit used in the transaction                                  | [optional]            |
| **conversion_rate**          | **Number**  | Conversion rate to convert selected currency unit to helpdesk currency | [optional]            |
| **department_id**            | **Number**  | Unique ID of the department                                            | [optional]            |
| **discount_percentage**      | **Number**  | Percentage of discount on the order                                    | [optional]            |
| **tax_percentage**           | **Number**  | Percentage of tax on the order                                         | [optional]            |
| **shipping_cost**            | **Number**  | Total cost of shipping the order                                       | [optional]            |
| **custom_fields**            | **Object**  |                                                                        | [optional]            |

## Enum: CurrencyCodeEnum

- `AUD` (value: `"AUD"`)

- `THB` (value: `"THB"`)

- `CAD` (value: `"CAD"`)

- `CNY` (value: `"CNY"`)

- `DKK` (value: `"DKK"`)

- `AED` (value: `"AED"`)

- `USD` (value: `"USD"`)

- `EGP` (value: `"EGP"`)

- `EUR` (value: `"EUR"`)

- `HUF` (value: `"HUF"`)

- `CHF` (value: `"CHF"`)

- `HKD` (value: `"HKD"`)

- `IDR` (value: `"IDR"`)

- `ILS` (value: `"ILS"`)

- `CZK` (value: `"CZK"`)

- `ISK` (value: `"ISK"`)

- `TRL` (value: `"TRL"`)

- `MYR` (value: `"MYR"`)

- `MXN` (value: `"MXN"`)

- `NOK` (value: `"NOK"`)

- `OMR` (value: `"OMR"`)

- `PHP` (value: `"PHP"`)

- `PLN` (value: `"PLN"`)

- `GBP` (value: `"GBP"`)

- `BWP` (value: `"BWP"`)

- `QAR` (value: `"QAR"`)

- `ZAR` (value: `"ZAR"`)

- `BRL` (value: `"BRL"`)

- `RUB` (value: `"RUB"`)

- `INR` (value: `"INR"`)

- `SAR` (value: `"SAR"`)

- `SGD` (value: `"SGD"`)

- `SEK` (value: `"SEK"`)

- `TWD` (value: `"TWD"`)

- `VND` (value: `"VND"`)

- `KRW` (value: `"KRW"`)

- `JPY` (value: `"JPY"`)

- `NZD` (value: `"NZD"`)

- `JOD` (value: `"JOD"`)
