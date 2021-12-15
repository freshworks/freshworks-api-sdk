# FreshteamApiSdkCodegen.Employee

## Properties

| Name                      | Type                                                                | Description | Notes      |
| ------------------------- | ------------------------------------------------------------------- | ----------- | ---------- |
| **id**                    | **Number**                                                          |             | [optional] |
| **created_at**            | **Date**                                                            |             | [optional] |
| **updated_at**            | **Date**                                                            |             | [optional] |
| **deleted**               | **Boolean**                                                         |             | [optional] |
| **work_numbers**          | [**[EmployeeWorkPhoneNumber]**](EmployeeWorkPhoneNumber.md)         |             | [optional] |
| **nick_name**             | **String**                                                          |             | [optional] |
| **date_of_birth**         | **Date**                                                            |             | [optional] |
| **gender**                | **String**                                                          |             | [optional] |
| **designation**           | **String**                                                          |             | [optional] |
| **phone_numbers**         | [**[EmployeePhoneNumber]**](EmployeePhoneNumber.md)                 |             | [optional] |
| **joining_date**          | **Date**                                                            |             | [optional] |
| **termination_date**      | **Date**                                                            |             | [optional] |
| **first_name**            | **String**                                                          |             | [optional] |
| **middle_name**           | **String**                                                          |             | [optional] |
| **last_name**             | **String**                                                          |             | [optional] |
| **employee_id**           | **String**                                                          |             | [optional] |
| **employee_type**         | **String**                                                          |             | [optional] |
| **status**                | **String**                                                          |             | [optional] |
| **official_email**        | **String**                                                          |             | [optional] |
| **personal_email**        | **String**                                                          |             | [optional] |
| **branch_id**             | **Number**                                                          |             | [optional] |
| **reporting_to_id**       | **Number**                                                          |             | [optional] |
| **hr_incharge_id**        | **Number**                                                          |             | [optional] |
| **team_id**               | **Number**                                                          |             | [optional] |
| **department_id**         | **Number**                                                          |             | [optional] |
| **sub_department_id**     | **Number**                                                          |             | [optional] |
| **business_unit_id**      | **Number**                                                          |             | [optional] |
| **shift_id**              | **Number**                                                          |             | [optional] |
| **address**               | [**EmployeeAddress**](EmployeeAddress.md)                           |             | [optional] |
| **communication_address** | [**EmployeeCommunicationAddress**](EmployeeCommunicationAddress.md) |             | [optional] |
| **confirmed**             | **Boolean**                                                         |             | [optional] |

## Enum: GenderEnum

- `male` (value: `"male"`)

- `female` (value: `"female"`)

## Enum: StatusEnum

- `active` (value: `"active"`)

- `inactive` (value: `"inactive"`)
