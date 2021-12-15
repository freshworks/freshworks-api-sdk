# FreshteamApiSdkCodegen.EmployeeCreate

## Properties

| Name                      | Type                                                            | Description | Notes      |
| ------------------------- | --------------------------------------------------------------- | ----------- | ---------- |
| **first_name**            | **String**                                                      |             |
| **middle_name**           | **String**                                                      |             | [optional] |
| **last_name**             | **String**                                                      |             |
| **official_email**        | **String**                                                      |             |
| **role_ids**              | **[Number]**                                                    |             |
| **employee_id**           | **String**                                                      |             | [optional] |
| **employee_type**         | **String**                                                      |             | [optional] |
| **personal_email**        | **String**                                                      |             | [optional] |
| **work_numbers**          | [**[EmployeeWorkPhoneNumber]**](EmployeeWorkPhoneNumber.md)     |             | [optional] |
| **phone_numbers**         | [**[EmployeePhoneNumber]**](EmployeePhoneNumber.md)             |             | [optional] |
| **date_of_birth**         | **Date**                                                        |             | [optional] |
| **designation**           | **String**                                                      |             | [optional] |
| **joining_date**          | **Date**                                                        |             | [optional] |
| **branch_id**             | **Number**                                                      |             | [optional] |
| **hr_incharge_id**        | **Number**                                                      |             | [optional] |
| **reporting_to_id**       | **Number**                                                      |             | [optional] |
| **department_id**         | **Number**                                                      |             | [optional] |
| **sub_department_id**     | **Number**                                                      |             | [optional] |
| **shift_id**              | **Number**                                                      |             | [optional] |
| **job_role_id**           | **Number**                                                      |             | [optional] |
| **team_id**               | **Number**                                                      |             | [optional] |
| **level_id**              | **Number**                                                      |             | [optional] |
| **blood_group**           | **String**                                                      |             | [optional] |
| **gender**                | **String**                                                      |             | [optional] |
| **address**               | [**Address**](Address.md)                                       |             | [optional] |
| **communication_address** | [**Address**](Address.md)                                       |             | [optional] |
| **custom_fields**         | [**EmployeeCreateCustomFields**](EmployeeCreateCustomFields.md) |             | [optional] |
| **draft**                 | **Boolean**                                                     |             | [optional] |
| **send_invite_email**     | **Boolean**                                                     |             | [optional] |

## Enum: BloodGroupEnum

- `A−` (value: `"A−"`)

- `B−` (value: `"B−"`)

- `O−` (value: `"O−"`)

- `B+` (value: `"B+"`)

- `O+` (value: `"O+"`)

- `A+` (value: `"A+"`)

- `A1+` (value: `"A1+"`)

- `A1B-` (value: `"A1B-"`)

- `AB+` (value: `"AB+"`)

- `AB-` (value: `"AB-"`)

- `A1B+` (value: `"A1B+"`)

- `A2+` (value: `"A2+"`)

- `A2B-` (value: `"A2B-"`)

- `A2B+` (value: `"A2B+"`)

- `A1-` (value: `"A1-"`)

## Enum: GenderEnum

- `male` (value: `"male"`)

- `female` (value: `"female"`)
