# FreshserviceApiSdkCodegen.RoleAssignment

## Properties

| Name                 | Type         | Description                                                                                                                                                                                                                             | Notes      |
| -------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **role_id**          | **Number**   | Unique identifier of the role assigned                                                                                                                                                                                                  | [optional] |
| **assignment_scope** | **String**   | The scope in which the agent can use the permissions granted by this role. Possible values are entire_helpdesk (all plans), member_groups (Blossom, Garden, and Estate), specified_groups (Forest only), and assigned_items (all plans) | [optional] |
| **groups**           | **[Number]** | Groups in which the permissions granted by the role applies. Returns an array of group identifiers when the assignment_scope is specified_groups, and null otherwise.                                                                   | [optional] |

## Enum: AssignmentScopeEnum

- `entire_helpdesk` (value: `"entire_helpdesk"`)

- `member_groups` (value: `"member_groups"`)

- `specified_groups` (value: `"specified_groups"`)

- `assigned_items` (value: `"assigned_items"`)
