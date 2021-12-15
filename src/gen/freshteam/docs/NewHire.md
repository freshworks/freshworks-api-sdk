# FreshteamApiSdkCodegen.NewHire

## Properties

| Name                                | Type                                                                                | Description | Notes      |
| ----------------------------------- | ----------------------------------------------------------------------------------- | ----------- | ---------- |
| **id**                              | **Number**                                                                          |             | [optional] |
| **created_at**                      | **Date**                                                                            |             | [optional] |
| **updated_at**                      | **Date**                                                                            |             | [optional] |
| **deleted**                         | **Boolean**                                                                         |             | [optional] |
| **work_numbers**                    | [**[EmployeeWorkPhoneNumber]**](EmployeeWorkPhoneNumber.md)                         |             | [optional] |
| **nick_name**                       | **String**                                                                          |             | [optional] |
| **date_of_birth**                   | **Date**                                                                            |             | [optional] |
| **gender**                          | **String**                                                                          |             | [optional] |
| **designation**                     | **String**                                                                          |             | [optional] |
| **phone_numbers**                   | [**[EmployeePhoneNumber]**](EmployeePhoneNumber.md)                                 |             | [optional] |
| **joining_date**                    | **Date**                                                                            |             | [optional] |
| **termination_date**                | **Date**                                                                            |             | [optional] |
| **first_name**                      | **String**                                                                          |             | [optional] |
| **middle_name**                     | **String**                                                                          |             | [optional] |
| **last_name**                       | **String**                                                                          |             | [optional] |
| **employee_id**                     | **String**                                                                          |             | [optional] |
| **employee_type**                   | **String**                                                                          |             | [optional] |
| **status**                          | **String**                                                                          |             | [optional] |
| **official_email**                  | **String**                                                                          |             | [optional] |
| **personal_email**                  | **String**                                                                          |             | [optional] |
| **hired_on**                        | **Date**                                                                            |             | [optional] |
| **no_show**                         | **Boolean**                                                                         |             | [optional] |
| **no_show_reason**                  | **String**                                                                          |             | [optional] |
| **branch**                          | [**Branch**](Branch.md)                                                             |             | [optional] |
| **reporting_to**                    | [**EmployeeLiteModel**](EmployeeLiteModel.md)                                       |             | [optional] |
| **hr_incharge**                     | [**EmployeeLiteModel**](EmployeeLiteModel.md)                                       |             | [optional] |
| **team**                            | [**Team**](Team.md)                                                                 |             | [optional] |
| **department**                      | [**Department**](Department.md)                                                     |             | [optional] |
| **awards**                          | [**EmployeeAward**](EmployeeAward.md)                                               |             | [optional] |
| **honors**                          | [**EmployeeHonor**](EmployeeHonor.md)                                               |             | [optional] |
| **certificates**                    | [**EmployeeCertificate**](EmployeeCertificate.md)                                   |             | [optional] |
| **licenses**                        | [**EmployeeLicense**](EmployeeLicense.md)                                           |             | [optional] |
| **background_verification_details** | [**EmployeeBackGroundVerificationDetail**](EmployeeBackGroundVerificationDetail.md) |             | [optional] |
| **government_documents**            | [**EmployeeGovernmentDocument**](EmployeeGovernmentDocument.md)                     |             | [optional] |
| **dependents**                      | [**EmployeeDependent**](EmployeeDependent.md)                                       |             | [optional] |
| **bank_accounts**                   | [**EmployeeBankAccount**](EmployeeBankAccount.md)                                   |             | [optional] |
| **prev_employments**                | [**EmployeePosition**](EmployeePosition.md)                                         |             | [optional] |
| **qualifications**                  | [**EmployeeQualification**](EmployeeQualification.md)                               |             | [optional] |
| **compensation_details**            | [**EmployeeCompensationDetail**](EmployeeCompensationDetail.md)                     |             | [optional] |
| **bonuses**                         | [**EmployeeBonus**](EmployeeBonus.md)                                               |             | [optional] |
| **stocks**                          | [**EmployeeStock**](EmployeeStock.md)                                               |             | [optional] |
| **custom_field_values**             | [**CustomField**](CustomField.md)                                                   |             | [optional] |
| **time_off**                        | [**EmployeeTimeoff**](EmployeeTimeoff.md)                                           |             | [optional] |

## Enum: GenderEnum

- `male` (value: `"male"`)

- `female` (value: `"female"`)

## Enum: StatusEnum

- `hired` (value: `"hired"`)

- `initiated` (value: `"initiated"`)

- `submitted` (value: `"submitted"`)
