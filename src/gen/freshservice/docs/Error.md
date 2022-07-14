# FreshserviceApiSdkCodegen.Error

## Properties

| Name        | Type       | Description                                                                      | Notes                 |
| ----------- | ---------- | -------------------------------------------------------------------------------- | --------------------- |
| **field**   | **String** | The request field that triggered this error. Applicable to HTTP 400 errors only. | [optional] [readonly] |
| **code**    | **String** | Custom error code that is machine-parseable.                                     | [optional] [readonly] |
| **message** | **String** | Detailed error message.                                                          | [optional] [readonly] |

## Enum: CodeEnum

- `missing_field` (value: `"missing_field"`)

- `invalid_value` (value: `"invalid_value"`)

- `duplicate_value` (value: `"duplicate_value"`)

- `datatype_mismatch` (value: `"datatype_mismatch"`)

- `invalid_field` (value: `"invalid_field"`)

- `invalid_json` (value: `"invalid_json"`)

- `invalid_credentials` (value: `"invalid_credentials"`)

- `access_denied` (value: `"access_denied"`)

- `require_feature` (value: `"require_feature"`)

- `account_suspended` (value: `"account_suspended"`)

- `ssl_required` (value: `"ssl_required"`)

- `readonly_field` (value: `"readonly_field"`)

- `password_lockout` (value: `"password_lockout"`)

- `password_expired` (value: `"password_expired"`)

- `no_content_required` (value: `"no_content_required"`)

- `inaccessible_field` (value: `"inaccessible_field"`)

- `incompatible_field` (value: `"incompatible_field"`)
