# FreshteamApiSdkCodegen.ApplicantDetail

## Properties

| Name              | Type                                                          | Description | Notes      |
| ----------------- | ------------------------------------------------------------- | ----------- | ---------- |
| **id**            | **Number**                                                    |             | [optional] |
| **createdAt**     | **Date**                                                      |             | [optional] |
| **updatedAt**     | **Date**                                                      |             | [optional] |
| **status**        | **String**                                                    |             | [optional] |
| **deleted**       | **Boolean**                                                   |             | [optional] |
| **stage**         | **String**                                                    |             | [optional] |
| **subStageId**    | **Number**                                                    |             | [optional] |
| **onHoldAt**      | **Date**                                                      |             | [optional] |
| **onHoldTill**    | **Date**                                                      |             | [optional] |
| **rejectedAt**    | **Date**                                                      |             | [optional] |
| **archivedAt**    | **Date**                                                      |             | [optional] |
| **movedAt**       | **Date**                                                      |             | [optional] |
| **jobId**         | **Number**                                                    |             | [optional] |
| **jobTitle**      | **String**                                                    |             | [optional] |
| **requisitionId** | **Number**                                                    |             | [optional] |
| **customFields**  | [**NewHireCreateCustomFields**](NewHireCreateCustomFields.md) |             | [optional] |
| **candidate**     | [**ApplicantDetailCandidate**](ApplicantDetailCandidate.md)   |             | [optional] |
| **followers**     | [**[ApplicantDetailFollowers]**](ApplicantDetailFollowers.md) |             | [optional] |

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
