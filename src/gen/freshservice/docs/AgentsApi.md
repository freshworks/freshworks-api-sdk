# FreshserviceApiSdkCodegen.AgentsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                              | HTTP request                                | Description           |
| --------------------------------------------------- | ------------------------------------------- | --------------------- |
| [**createAgent**](AgentsApi.md#createAgent)         | **POST** /api/v2/agents                     | Create Agent          |
| [**deleteAgent**](AgentsApi.md#deleteAgent)         | **DELETE** /api/v2/agents/{agent_id}        | Delete Agent          |
| [**forgetAgent**](AgentsApi.md#forgetAgent)         | **DELETE** /api/v2/agents/{agent_id}/forget | Forget Agent          |
| [**getAgent**](AgentsApi.md#getAgent)               | **GET** /api/v2/agents/{agent_id}           | View Agent            |
| [**listAgentFields**](AgentsApi.md#listAgentFields) | **GET** /api/v2/agent_fields                | List All Agent Fields |
| [**listAgents**](AgentsApi.md#listAgents)           | **GET** /api/v2/agents                      | List All Agents       |
| [**updateAgent**](AgentsApi.md#updateAgent)         | **PUT** /api/v2/agents/{agent_id}           | Update Agent          |

## createAgent

> ConvertRequesterToAgent200Response createAgent(agent)

Create Agent

Create a new Agent in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let agent = new FreshserviceApiSdkCodegen.Agent(); // Agent | Agent who needs to be created
apiInstance.createAgent(agent).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name      | Type                  | Description                   | Notes |
| --------- | --------------------- | ----------------------------- | ----- |
| **agent** | [**Agent**](Agent.md) | Agent who needs to be created |

### Return type

[**ConvertRequesterToAgent200Response**](ConvertRequesterToAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAgent

> deleteAgent(agent_id)

Delete Agent

Converts the Agent with the given ID to a requester.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let agent_id = 789; // Number | ID of agent to delete
apiInstance.deleteAgent(agent_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description           | Notes |
| ------------ | ---------- | --------------------- | ----- |
| **agent_id** | **Number** | ID of agent to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## forgetAgent

> ConvertRequesterToAgent200Response forgetAgent(agent_id)

Forget Agent

Permanently deletes the agent and the tickets that they requested.

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let agent_id = 789; // Number | ID of agent to forget
apiInstance.forgetAgent(agent_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description           | Notes |
| ------------ | ---------- | --------------------- | ----- |
| **agent_id** | **Number** | ID of agent to forget |

### Return type

[**ConvertRequesterToAgent200Response**](ConvertRequesterToAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAgent

> ConvertRequesterToAgent200Response getAgent(agent_id)

View Agent

Retrieve the Agent with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let agent_id = 789; // Number | ID of agent to retrieve
apiInstance.getAgent(agent_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description             | Notes |
| ------------ | ---------- | ----------------------- | ----- |
| **agent_id** | **Number** | ID of agent to retrieve |

### Return type

[**ConvertRequesterToAgent200Response**](ConvertRequesterToAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAgentFields

> ListAgentFields200Response listAgentFields(opts)

List All Agent Fields

Retrieve a list of all Agent Fields in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listAgentFields(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type       | Description                                                         | Notes                      |
| ------------ | ---------- | ------------------------------------------------------------------- | -------------------------- |
| **per_page** | **Number** | The number of entries to retrieve in each page of a paginated list. | [optional] [default to 10] |
| **page**     | **Number** | The page number to retrieve.                                        | [optional] [default to 1]  |

### Return type

[**ListAgentFields200Response**](ListAgentFields200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAgents

> ListAgents200Response listAgents(opts)

List All Agents

Retrieve a list of all Agents in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1, // Number | The page number to retrieve.
  email: "email_example", // String | The email address for which the corresponding requester needs to be listed.
  mobile_phone_number: "mobile_phone_number_example", // String | The mobile phone number for which the corresponding requesters need to be listed.
  work_phone_number: "work_phone_number_example", // String | The work phone number for which the corresponding requesters need to be listed.
  state: "state_example", // String | Signifies whether the agents to be listed are full-time agents or occasional agents. Supports two possible values - fulltime, occasional.
  active: true, // Boolean | Signifies if the user accounts to be listed are active (true), or have been deactivated. Not applying this filter returns both active and deactivated accounts.
  query: "query_example" // String | The simple or compound query which needs to be applied as a filter to the list of agents. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>first_name, last_name, job_title, email, work_phone_number, mobile_phone_number, department_id, reporting_manager_id, time_zone, language, location_id, created_at, updated_at, (all custom fields).<br/>Sample Query: https://account.freshservice.com/api/v2/agents?query=\"job_titile:'HR Manager' AND created_at:>'2018-08-10'\"
};
apiInstance.listAgents(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Notes                      |
| ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| **per_page**            | **Number**  | The number of entries to retrieve in each page of a paginated list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [optional] [default to 10] |
| **page**                | **Number**  | The page number to retrieve.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [optional] [default to 1]  |
| **email**               | **String**  | The email address for which the corresponding requester needs to be listed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [optional]                 |
| **mobile_phone_number** | **String**  | The mobile phone number for which the corresponding requesters need to be listed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                 |
| **work_phone_number**   | **String**  | The work phone number for which the corresponding requesters need to be listed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [optional]                 |
| **state**               | **String**  | Signifies whether the agents to be listed are full-time agents or occasional agents. Supports two possible values - fulltime, occasional.                                                                                                                                                                                                                                                                                                                                                                                                                    | [optional]                 |
| **active**              | **Boolean** | Signifies if the user accounts to be listed are active (true), or have been deactivated. Not applying this filter returns both active and deactivated accounts.                                                                                                                                                                                                                                                                                                                                                                                              | [optional]                 |
| **query**               | **String**  | The simple or compound query which needs to be applied as a filter to the list of agents. This string needs to be URL encoded.&lt;br/&gt; Supported Query Parameters:&lt;br/&gt;first_name, last_name, job_title, email, work_phone_number, mobile_phone_number, department_id, reporting_manager_id, time_zone, language, location_id, created_at, updated_at, (all custom fields).&lt;br/&gt;Sample Query: https://account.freshservice.com/api/v2/agents?query&#x3D;\&quot;job_titile:&#39;HR Manager&#39; AND created_at:&gt;&#39;2018-08-10&#39;\&quot; | [optional]                 |

### Return type

[**ListAgents200Response**](ListAgents200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAgent

> ConvertRequesterToAgent200Response updateAgent(agent, agent_id)

Update Agent

Update an existing Agent in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentsApi();
let agent = new FreshserviceApiSdkCodegen.Agent(); // Agent | Agent who needs to be updated
let agent_id = 789; // Number | ID of agent to update
apiInstance.updateAgent(agent, agent_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name         | Type                  | Description                   | Notes |
| ------------ | --------------------- | ----------------------------- | ----- |
| **agent**    | [**Agent**](Agent.md) | Agent who needs to be updated |
| **agent_id** | **Number**            | ID of agent to update         |

### Return type

[**ConvertRequesterToAgent200Response**](ConvertRequesterToAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
