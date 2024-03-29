/**
 * Freshservice
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import AgentGroup from "../model/AgentGroup";
import CreateAgentGroup200Response from "../model/CreateAgentGroup200Response";
import ListAgentGroups200Response from "../model/ListAgentGroups200Response";
import ListDepartments401Response from "../model/ListDepartments401Response";

/**
 * AgentGroups service.
 * @module api/AgentGroupsApi
 * @version 2.0.1
 */
export default class AgentGroupsApi {
  /**
   * Constructs a new AgentGroupsApi.
   * @alias module:api/AgentGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Agent Group
   * Create a new Agent Group in Freshservice
   * @param {module:model/AgentGroup} agent_group Agent Group that needs to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAgentGroup200Response} and HTTP response
   */
  createAgentGroupWithHttpInfo(agent_group) {
    let postBody = agent_group;
    // verify the required parameter 'agent_group' is set
    if (agent_group === undefined || agent_group === null) {
      throw new Error("Missing the required parameter 'agent_group' when calling createAgentGroup");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateAgentGroup200Response;
    return this.apiClient.callApi(
      "/api/v2/agent_groups",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create Agent Group
   * Create a new Agent Group in Freshservice
   * @param {module:model/AgentGroup} agent_group Agent Group that needs to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAgentGroup200Response}
   */
  createAgentGroup(agent_group) {
    return this.createAgentGroupWithHttpInfo(agent_group).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete Agent Group
   * Delete the Agent Group with the given ID from Freshservice
   * @param {Number} agent_group_id ID of agent group to delete
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteAgentGroupWithHttpInfo(agent_group_id) {
    let postBody = null;
    // verify the required parameter 'agent_group_id' is set
    if (agent_group_id === undefined || agent_group_id === null) {
      throw new Error("Missing the required parameter 'agent_group_id' when calling deleteAgentGroup");
    }

    let pathParams = {
      agent_group_id: agent_group_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = null;
    return this.apiClient.callApi(
      "/api/v2/agent_groups/{agent_group_id}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete Agent Group
   * Delete the Agent Group with the given ID from Freshservice
   * @param {Number} agent_group_id ID of agent group to delete
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteAgentGroup(agent_group_id) {
    return this.deleteAgentGroupWithHttpInfo(agent_group_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * View Agent Group
   * Retrieve the Agent Group with the given ID from Freshservice
   * @param {Number} agent_group_id ID of the agent group to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAgentGroup200Response} and HTTP response
   */
  getAgentGroupWithHttpInfo(agent_group_id) {
    let postBody = null;
    // verify the required parameter 'agent_group_id' is set
    if (agent_group_id === undefined || agent_group_id === null) {
      throw new Error("Missing the required parameter 'agent_group_id' when calling getAgentGroup");
    }

    let pathParams = {
      agent_group_id: agent_group_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = CreateAgentGroup200Response;
    return this.apiClient.callApi(
      "/api/v2/agent_groups/{agent_group_id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * View Agent Group
   * Retrieve the Agent Group with the given ID from Freshservice
   * @param {Number} agent_group_id ID of the agent group to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAgentGroup200Response}
   */
  getAgentGroup(agent_group_id) {
    return this.getAgentGroupWithHttpInfo(agent_group_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List All Agent Groups
   * Retrieve a list of all Agent Groups in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAgentGroups200Response} and HTTP response
   */
  listAgentGroupsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      per_page: opts["per_page"],
      page: opts["page"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAgentGroups200Response;
    return this.apiClient.callApi(
      "/api/v2/agent_groups",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List All Agent Groups
   * Retrieve a list of all Agent Groups in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAgentGroups200Response}
   */
  listAgentGroups(opts) {
    return this.listAgentGroupsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update Agent Group
   * Update an existing Agent Group in Freshservice
   * @param {module:model/AgentGroup} agent_group Agent group that needs to be updated
   * @param {Number} agent_group_id ID of agent group to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAgentGroup200Response} and HTTP response
   */
  updateAgentGroupWithHttpInfo(agent_group, agent_group_id) {
    let postBody = agent_group;
    // verify the required parameter 'agent_group' is set
    if (agent_group === undefined || agent_group === null) {
      throw new Error("Missing the required parameter 'agent_group' when calling updateAgentGroup");
    }
    // verify the required parameter 'agent_group_id' is set
    if (agent_group_id === undefined || agent_group_id === null) {
      throw new Error("Missing the required parameter 'agent_group_id' when calling updateAgentGroup");
    }

    let pathParams = {
      agent_group_id: agent_group_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateAgentGroup200Response;
    return this.apiClient.callApi(
      "/api/v2/agent_groups/{agent_group_id}",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Update Agent Group
   * Update an existing Agent Group in Freshservice
   * @param {module:model/AgentGroup} agent_group Agent group that needs to be updated
   * @param {Number} agent_group_id ID of agent group to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAgentGroup200Response}
   */
  updateAgentGroup(agent_group, agent_group_id) {
    return this.updateAgentGroupWithHttpInfo(agent_group, agent_group_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
