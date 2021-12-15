# FreshteamApiSdkCodegen.EmployeeStock

## Properties

| Name                        | Type                                        | Description | Notes      |
| --------------------------- | ------------------------------------------- | ----------- | ---------- |
| **id**                      | **Number**                                  |             | [optional] |
| **user_id**                 | **Number**                                  |             | [optional] |
| **deleted**                 | **Boolean**                                 |             | [optional] |
| **grant_date**              | **Date**                                    |             | [optional] |
| **grant_number**            | **Number**                                  |             | [optional] |
| **expiration_date**         | **Date**                                    |             | [optional] |
| **currency**                | **String**                                  |             | [optional] |
| **total_stock_units**       | **Number**                                  |             | [optional] |
| **exercise_price**          | **Number**                                  |             | [optional] |
| **exercise_price_discount** | **Number**                                  |             | [optional] |
| **value_per_share**         | **Number**                                  |             | [optional] |
| **with_in_range**           | **Boolean**                                 |             | [optional] |
| **vesting_type**            | **Number**                                  |             | [optional] |
| **effective_date**          | **Date**                                    |             | [optional] |
| **vesting_period**          | **Number**                                  |             | [optional] |
| **vesting_schedule**        | **String**                                  |             | [optional] |
| **vesting_rate**            | **Number**                                  |             | [optional] |
| **description**             | **String**                                  |             | [optional] |
| **grant_reason**            | [**StockGrantReason**](StockGrantReason.md) |             | [optional] |
| **grant_type**              | [**GrantType**](GrantType.md)               |             | [optional] |
| **pay_rate**                | [**PayRate**](PayRate.md)                   |             | [optional] |

## Enum: VestingScheduleEnum

- `years` (value: `"years"`)

- `months` (value: `"months"`)

- `weeks` (value: `"weeks"`)

- `days` (value: `"days"`)

- `hours` (value: `"hours"`)
