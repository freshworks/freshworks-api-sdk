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
import ConvertRequesterToAgent200Response from "../model/ConvertRequesterToAgent200Response";
import CreateRequester200Response from "../model/CreateRequester200Response";
import ListDepartments401Response from "../model/ListDepartments401Response";
import ListRequesterFields200Response from "../model/ListRequesterFields200Response";
import ListRequesters200Response from "../model/ListRequesters200Response";
import MergeRequester200Response from "../model/MergeRequester200Response";
import Requester from "../model/Requester";

/**
 * Requesters service.
 * @module api/RequestersApi
 * @version 2.0.1
 */
export default class RequestersApi {
  /**
   * Constructs a new RequestersApi.
   * @alias module:api/RequestersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Convert Requester to Agent
   * Convert a requester to an occasional agent with SD Agent role and no group memberships.
   * @param {Number} requester_id ID of requester to update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConvertRequesterToAgent200Response} and HTTP response
   */
  convertRequesterToAgentWithHttpInfo(requester_id) {
    let postBody = null;
    // verify the required parameter 'requester_id' is set
    if (requester_id === undefined || requester_id === null) {
      throw new Error("Missing the required parameter 'requester_id' when calling convertRequesterToAgent");
    }

    let pathParams = {
      requester_id: requester_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ConvertRequesterToAgent200Response;
    return this.apiClient.callApi(
      "/api/v2/requesters/{requester_id}/convert_to_agent",
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
   * Convert Requester to Agent
   * Convert a requester to an occasional agent with SD Agent role and no group memberships.
   * @param {Number} requester_id ID of requester to update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConvertRequesterToAgent200Response}
   */
  convertRequesterToAgent(requester_id) {
    return this.convertRequesterToAgentWithHttpInfo(requester_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Create Requester
   * Create a new Requester in Freshservice
   * @param {module:model/Requester} requester Requester who needs to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateRequester200Response} and HTTP response
   */
  createRequesterWithHttpInfo(requester) {
    let postBody = requester;
    // verify the required parameter 'requester' is set
    if (requester === undefined || requester === null) {
      throw new Error("Missing the required parameter 'requester' when calling createRequester");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateRequester200Response;
    return this.apiClient.callApi(
      "/api/v2/requesters",
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
   * Create Requester
   * Create a new Requester in Freshservice
   * @param {module:model/Requester} requester Requester who needs to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateRequester200Response}
   */
  createRequester(requester) {
    return this.createRequesterWithHttpInfo(requester).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete Requester
   * Delete the Requester with the given ID from Freshservice
   * @param {Number} requester_id ID of requester to delete
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteRequesterWithHttpInfo(requester_id) {
    let postBody = null;
    // verify the required parameter 'requester_id' is set
    if (requester_id === undefined || requester_id === null) {
      throw new Error("Missing the required parameter 'requester_id' when calling deleteRequester");
    }

    let pathParams = {
      requester_id: requester_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = null;
    return this.apiClient.callApi(
      "/api/v2/requesters/{requester_id}",
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
   * Delete Requester
   * Delete the Requester with the given ID from Freshservice
   * @param {Number} requester_id ID of requester to delete
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteRequester(requester_id) {
    return this.deleteRequesterWithHttpInfo(requester_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Forget Requester
   * Permanently deletes the requester and the tickets that they requested.
   * @param {Number} requester_id ID of requester to forget
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  forgetRequesterWithHttpInfo(requester_id) {
    let postBody = null;
    // verify the required parameter 'requester_id' is set
    if (requester_id === undefined || requester_id === null) {
      throw new Error("Missing the required parameter 'requester_id' when calling forgetRequester");
    }

    let pathParams = {
      requester_id: requester_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;
    return this.apiClient.callApi(
      "/api/v2/requesters/{requester_id}/forget",
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
   * Forget Requester
   * Permanently deletes the requester and the tickets that they requested.
   * @param {Number} requester_id ID of requester to forget
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  forgetRequester(requester_id) {
    return this.forgetRequesterWithHttpInfo(requester_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * View Requester
   * Retrieve the Requester with the given ID from Freshservice
   * @param {Number} requester_id ID of requester to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateRequester200Response} and HTTP response
   */
  getRequesterWithHttpInfo(requester_id) {
    let postBody = null;
    // verify the required parameter 'requester_id' is set
    if (requester_id === undefined || requester_id === null) {
      throw new Error("Missing the required parameter 'requester_id' when calling getRequester");
    }

    let pathParams = {
      requester_id: requester_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = CreateRequester200Response;
    return this.apiClient.callApi(
      "/api/v2/requesters/{requester_id}",
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
   * View Requester
   * Retrieve the Requester with the given ID from Freshservice
   * @param {Number} requester_id ID of requester to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateRequester200Response}
   */
  getRequester(requester_id) {
    return this.getRequesterWithHttpInfo(requester_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List All Requester Fields
   * Retrieve a list of all Requester Fields in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListRequesterFields200Response} and HTTP response
   */
  listRequesterFieldsWithHttpInfo(opts) {
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
    let returnType = ListRequesterFields200Response;
    return this.apiClient.callApi(
      "/api/v2/requester_fields",
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
   * List All Requester Fields
   * Retrieve a list of all Requester Fields in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListRequesterFields200Response}
   */
  listRequesterFields(opts) {
    return this.listRequesterFieldsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List All Requesters
   * Retrieve a list of all Requesters in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @param {String} opts.email The email address for which the corresponding requester needs to be listed.
   * @param {String} opts.mobile_phone_number The mobile phone number for which the corresponding requesters need to be listed.
   * @param {String} opts.work_phone_number The work phone number for which the corresponding requesters need to be listed.
   * @param {Boolean} opts.active Signifies if the user accounts to be listed are active (true), or have been deactivated. Not applying this filter returns both active and deactivated accounts.
   * @param {String} opts.query The simple or compound query which needs to be applied as a filter to the list of requesters. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>first_name, last_name, job_title, primary_email, secondary_emails, work_phone_number, mobile_phone_number, department_id, reporting_manager_id, time_zone, language, location_id, created_at, updated_at, (all custom fields).<br/>Sample Query: https://account.freshservice.com/api/v2/requesters?query=\"job_titile:'HR Manager' AND created_at:>'2018-08-10'\"
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListRequesters200Response} and HTTP response
   */
  listRequestersWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      per_page: opts["per_page"],
      page: opts["page"],
      email: opts["email"],
      mobile_phone_number: opts["mobile_phone_number"],
      work_phone_number: opts["work_phone_number"],
      active: opts["active"],
      query: opts["query"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListRequesters200Response;
    return this.apiClient.callApi(
      "/api/v2/requesters",
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
   * List All Requesters
   * Retrieve a list of all Requesters in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @param {String} opts.email The email address for which the corresponding requester needs to be listed.
   * @param {String} opts.mobile_phone_number The mobile phone number for which the corresponding requesters need to be listed.
   * @param {String} opts.work_phone_number The work phone number for which the corresponding requesters need to be listed.
   * @param {Boolean} opts.active Signifies if the user accounts to be listed are active (true), or have been deactivated. Not applying this filter returns both active and deactivated accounts.
   * @param {String} opts.query The simple or compound query which needs to be applied as a filter to the list of requesters. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>first_name, last_name, job_title, primary_email, secondary_emails, work_phone_number, mobile_phone_number, department_id, reporting_manager_id, time_zone, language, location_id, created_at, updated_at, (all custom fields).<br/>Sample Query: https://account.freshservice.com/api/v2/requesters?query=\"job_titile:'HR Manager' AND created_at:>'2018-08-10'\"
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListRequesters200Response}
   */
  listRequesters(opts) {
    return this.listRequestersWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Merge Requesters
   * Merge secondary requesters into a primary requester.
   * @param {Number} primary_requester_id ID of the primary requester
   * @param {Array.<Number>} secondary_requesters ID of the primary requester
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MergeRequester200Response} and HTTP response
   */
  mergeRequesterWithHttpInfo(primary_requester_id, secondary_requesters) {
    let postBody = null;
    // verify the required parameter 'primary_requester_id' is set
    if (primary_requester_id === undefined || primary_requester_id === null) {
      throw new Error("Missing the required parameter 'primary_requester_id' when calling mergeRequester");
    }
    // verify the required parameter 'secondary_requesters' is set
    if (secondary_requesters === undefined || secondary_requesters === null) {
      throw new Error("Missing the required parameter 'secondary_requesters' when calling mergeRequester");
    }

    let pathParams = {
      primary_requester_id: primary_requester_id
    };
    let queryParams = {
      secondary_requesters: this.apiClient.buildCollectionParam(secondary_requesters, "csv")
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = MergeRequester200Response;
    return this.apiClient.callApi(
      "/api/v2/requesters/{primary_requester_id}/merge",
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
   * Merge Requesters
   * Merge secondary requesters into a primary requester.
   * @param {Number} primary_requester_id ID of the primary requester
   * @param {Array.<Number>} secondary_requesters ID of the primary requester
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MergeRequester200Response}
   */
  mergeRequester(primary_requester_id, secondary_requesters) {
    return this.mergeRequesterWithHttpInfo(primary_requester_id, secondary_requesters).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Update Requester
   * Update an existing Requester in Freshservice
   * @param {module:model/Requester} requester Requester who needs to be updated
   * @param {Number} requester_id ID of requester to update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateRequester200Response} and HTTP response
   */
  updateRequesterWithHttpInfo(requester, requester_id) {
    let postBody = requester;
    // verify the required parameter 'requester' is set
    if (requester === undefined || requester === null) {
      throw new Error("Missing the required parameter 'requester' when calling updateRequester");
    }
    // verify the required parameter 'requester_id' is set
    if (requester_id === undefined || requester_id === null) {
      throw new Error("Missing the required parameter 'requester_id' when calling updateRequester");
    }

    let pathParams = {
      requester_id: requester_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateRequester200Response;
    return this.apiClient.callApi(
      "/api/v2/requesters/{requester_id}",
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
   * Update Requester
   * Update an existing Requester in Freshservice
   * @param {module:model/Requester} requester Requester who needs to be updated
   * @param {Number} requester_id ID of requester to update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateRequester200Response}
   */
  updateRequester(requester, requester_id) {
    return this.updateRequesterWithHttpInfo(requester, requester_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
