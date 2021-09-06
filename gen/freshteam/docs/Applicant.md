# FreshteamApiSdkCodegen.Applicant

## Properties

| Name              | Type                                            | Description | Notes      |
| ----------------- | ----------------------------------------------- | ----------- | ---------- |
| **id**            | **Number**                                      |             | [optional] |
| **createdAt**     | **Date**                                        |             | [optional] |
| **updatedAt**     | **Date**                                        |             | [optional] |
| **status**        | **String**                                      |             | [optional] |
| **stage**         | **String**                                      |             | [optional] |
| **subStageId**    | **Number**                                      |             | [optional] |
| **jobId**         | **Number**                                      |             | [optional] |
| **requisitionId** | **Number**                                      |             | [optional] |
| **deleted**       | **Boolean**                                     |             | [optional] |
| **candidate**     | [**ApplicantCandidate**](ApplicantCandidate.md) |             | [optional] |

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
