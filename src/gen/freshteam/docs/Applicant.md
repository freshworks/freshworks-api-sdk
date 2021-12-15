# FreshteamApiSdkCodegen.Applicant

## Properties

| Name               | Type                                            | Description | Notes      |
| ------------------ | ----------------------------------------------- | ----------- | ---------- |
| **id**             | **Number**                                      |             | [optional] |
| **created_at**     | **Date**                                        |             | [optional] |
| **updated_at**     | **Date**                                        |             | [optional] |
| **status**         | **String**                                      |             | [optional] |
| **stage**          | **String**                                      |             | [optional] |
| **sub_stage_id**   | **Number**                                      |             | [optional] |
| **job_id**         | **Number**                                      |             | [optional] |
| **requisition_id** | **Number**                                      |             | [optional] |
| **deleted**        | **Boolean**                                     |             | [optional] |
| **candidate**      | [**ApplicantCandidate**](ApplicantCandidate.md) |             | [optional] |

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
