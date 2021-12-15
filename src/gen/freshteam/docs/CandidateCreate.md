# FreshteamApiSdkCodegen.CandidateCreate

## Properties

| Name                           | Type                                                                                  | Description | Notes      |
| ------------------------------ | ------------------------------------------------------------------------------------- | ----------- | ---------- |
| **id**                         | **Number**                                                                            |             | [optional] |
| **first_name**                 | **String**                                                                            |             |
| **middle_name**                | **String**                                                                            |             | [optional] |
| **last_name**                  | **String**                                                                            |             |
| **email**                      | **String**                                                                            |             |
| **mobile**                     | **String**                                                                            |             | [optional] |
| **phone**                      | **String**                                                                            |             | [optional] |
| **date_of_birth**              | **Date**                                                                              |             | [optional] |
| **gender**                     | **String**                                                                            |             | [optional] |
| **owner_id**                   | **Number**                                                                            |             | [optional] |
| **skype_id**                   | **String**                                                                            |             | [optional] |
| **source_id**                  | **Number**                                                                            |             |
| **source_category_id**         | **Number**                                                                            |             |
| **deleted**                    | **Boolean**                                                                           |             | [optional] |
| **spam**                       | **Boolean**                                                                           |             | [optional] |
| **total_experience_in_months** | **Number**                                                                            |             | [optional] |
| **description**                | **String**                                                                            |             | [optional] |
| **tags**                       | **[String]**                                                                          |             | [optional] |
| **skills**                     | **[String]**                                                                          |             | [optional] |
| **profile_links**              | [**[ApplicantDetailCandidateProfileLinks]**](ApplicantDetailCandidateProfileLinks.md) |             | [optional] |
| **location**                   | [**ApplicantDetailCandidateLocation**](ApplicantDetailCandidateLocation.md)           |             | [optional] |
| **qualifications**             | [**[CandidateQualifications]**](CandidateQualifications.md)                           |             | [optional] |
| **positions**                  | [**[CandidateCreatePositions]**](CandidateCreatePositions.md)                         |             | [optional] |
| **resumes**                    | **[File]**                                                                            |             | [optional] |
| **cover_letters**              | **[File]**                                                                            |             | [optional] |
| **portfolios**                 | **[File]**                                                                            |             | [optional] |
| **created_at**                 | **Date**                                                                              |             | [optional] |
| **updated_at**                 | **Date**                                                                              |             | [optional] |

## Enum: GenderEnum

- `male` (value: `"male"`)

- `female` (value: `"female"`)
