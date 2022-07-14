# FreshserviceApiSdkCodegen.AgentGroupsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                     | HTTP request                                     | Description           |
| ---------------------------------------------------------- | ------------------------------------------------ | --------------------- |
| [**createAgentGroup**](AgentGroupsApi.md#createAgentGroup) | **POST** /api/v2/agent_groups                    | Create Agent Group    |
| [**deleteAgentGroup**](AgentGroupsApi.md#deleteAgentGroup) | **DELETE** /api/v2/agent_groups/{agent_group_id} | Delete Agent Group    |
| [**getAgentGroup**](AgentGroupsApi.md#getAgentGroup)       | **GET** /api/v2/agent_groups/{agent_group_id}    | View Agent Group      |
| [**listAgentGroups**](AgentGroupsApi.md#listAgentGroups)   | **GET** /api/v2/agent_groups                     | List All Agent Groups |
| [**updateAgentGroup**](AgentGroupsApi.md#updateAgentGroup) | **PUT** /api/v2/agent_groups/{agent_group_id}    | Update Agent Group    |

## createAgentGroup

> CreateAgentGroup200Response createAgentGroup(agent_group)

Create Agent Group

Create a new Agent Group in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentGroupsApi();
let agent_group = new FreshserviceApiSdkCodegen.AgentGroup(); // AgentGroup | Agent Group that needs to be created
apiInstance.createAgentGroup(agent_group).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type                            | Description                          | Notes |
| --------------- | ------------------------------- | ------------------------------------ | ----- |
| **agent_group** | [**AgentGroup**](AgentGroup.md) | Agent Group that needs to be created |

### Return type

[**CreateAgentGroup200Response**](CreateAgentGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAgentGroup

> deleteAgentGroup(agent_group_id)

Delete Agent Group

Delete the Agent Group with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentGroupsApi();
let agent_group_id = 789; // Number | ID of agent group to delete
apiInstance.deleteAgentGroup(agent_group_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type       | Description                 | Notes |
| ------------------ | ---------- | --------------------------- | ----- |
| **agent_group_id** | **Number** | ID of agent group to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getAgentGroup

> CreateAgentGroup200Response getAgentGroup(agent_group_id)

View Agent Group

Retrieve the Agent Group with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentGroupsApi();
let agent_group_id = 789; // Number | ID of the agent group to retrieve
apiInstance.getAgentGroup(agent_group_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type       | Description                       | Notes |
| ------------------ | ---------- | --------------------------------- | ----- |
| **agent_group_id** | **Number** | ID of the agent group to retrieve |

### Return type

[**CreateAgentGroup200Response**](CreateAgentGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAgentGroups

> ListAgentGroups200Response listAgentGroups(opts)

List All Agent Groups

Retrieve a list of all Agent Groups in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentGroupsApi();
let opts = {
  per_page: 10, // Number | The number of entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listAgentGroups(opts).then(
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

[**ListAgentGroups200Response**](ListAgentGroups200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAgentGroup

> CreateAgentGroup200Response updateAgentGroup(agent_group, agent_group_id)

Update Agent Group

Update an existing Agent Group in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.AgentGroupsApi();
let agent_group = new FreshserviceApiSdkCodegen.AgentGroup(); // AgentGroup | Agent group that needs to be updated
let agent_group_id = 789; // Number | ID of agent group to retrieve
apiInstance.updateAgentGroup(agent_group, agent_group_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type                            | Description                          | Notes |
| ------------------ | ------------------------------- | ------------------------------------ | ----- |
| **agent_group**    | [**AgentGroup**](AgentGroup.md) | Agent group that needs to be updated |
| **agent_group_id** | **Number**                      | ID of agent group to retrieve        |

### Return type

[**CreateAgentGroup200Response**](CreateAgentGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
