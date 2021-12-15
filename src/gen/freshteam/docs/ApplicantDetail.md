# FreshteamApiSdkCodegen.ApplicantDetail

## Properties

| Name               | Type                                                          | Description | Notes      |
| ------------------ | ------------------------------------------------------------- | ----------- | ---------- |
| **id**             | **Number**                                                    |             | [optional] |
| **created_at**     | **Date**                                                      |             | [optional] |
| **updated_at**     | **Date**                                                      |             | [optional] |
| **status**         | **String**                                                    |             | [optional] |
| **deleted**        | **Boolean**                                                   |             | [optional] |
| **stage**          | **String**                                                    |             | [optional] |
| **sub_stage_id**   | **Number**                                                    |             | [optional] |
| **on_hold_at**     | **Date**                                                      |             | [optional] |
| **on_hold_till**   | **Date**                                                      |             | [optional] |
| **rejected_at**    | **Date**                                                      |             | [optional] |
| **archived_at**    | **Date**                                                      |             | [optional] |
| **moved_at**       | **Date**                                                      |             | [optional] |
| **job_id**         | **Number**                                                    |             | [optional] |
| **job_title**      | **String**                                                    |             | [optional] |
| **requisition_id** | **Number**                                                    |             | [optional] |
| **custom_fields**  | [**NewHireCreateCustomFields**](NewHireCreateCustomFields.md) |             | [optional] |
| **candidate**      | [**ApplicantDetailCandidate**](ApplicantDetailCandidate.md)   |             | [optional] |
| **followers**      | [**[ApplicantDetailFollowers]**](ApplicantDetailFollowers.md) |             | [optional] |

## Enum: StatusEnum

- `open` (value: `"open"`)

- `on_hold` (value: `"on_hold"`)

- `rejected` (value: `"rejected"`)

- `archived` (value: `"archived"`)

- `moved` (value: `"moved"`)

- `dropped` (value: `"dropped"`)

## Enum: StageEnum

- `candidature` (value: `"candidature"`)

- `screening` (value: `"screening"`)

- `on_site` (value: `"on_site"`)

- `offer` (value: `"offer"`)

- `hire` (value: `"hire"`)
