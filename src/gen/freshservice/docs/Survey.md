# FreshserviceApiSdkCodegen.Survey

## Properties

| Name                     | Type                                  | Description                                                                                                      | Notes                 |
| ------------------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------- |
| **id**                   | **Number**                            | Unique identifier of the Customer Satisfaction Survey                                                            | [optional] [readonly] |
| **name**                 | **String**                            | Name of the Survey                                                                                               | [optional]            |
| **active**               | **Boolean**                           | State of the survey. For an activated survey, active &#x3D; true. For a deactivated survey, active &#x3D; false. | [optional]            |
| **survey_trigger_event** | **String**                            | Field to capture when the survey should be sent.                                                                 | [optional]            |
| **question**             | **String**                            | Question that will be asked to the requester to capture the service experience                                   | [optional]            |
| **order_of_options**     | **String**                            | Gradient order of the options displayed                                                                          | [optional]            |
| **options**              | [**SurveyOptions**](SurveyOptions.md) |                                                                                                                  | [optional]            |
| **thank_you_message**    | **String**                            | The final \\\&quot;Thank you\\\&quot; message that gets displayed to the requester upon completion of the survey | [optional]            |
| **user_id**              | **Number**                            | Unique identifier of the agent who last modified this survey                                                     | [optional]            |
| **created_at**           | **Date**                              | Timestamp at which the survey was created                                                                        | [optional] [readonly] |
| **updated_at**           | **Date**                              | Timestamp at which the survey was last modified                                                                  | [optional] [readonly] |

## Enum: SurveyTriggerEventEnum

- `Ticket Closure` (value: `"Ticket Closure"`)

- `Ticket Resolution` (value: `"Ticket Resolution"`)

- `All Replies` (value: `"All Replies"`)

- `Agent Specified Emails` (value: `"Agent Specified Emails"`)

## Enum: OrderOfOptionsEnum

- `Good to Bad` (value: `"Good to Bad"`)

- `Bad to Good` (value: `"Bad to Good"`)
