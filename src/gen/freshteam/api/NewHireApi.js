/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse404 from "../model/InlineResponse404";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";
import Model500Error from "../model/Model500Error";
import NewHire from "../model/NewHire";
import NewHireCreate from "../model/NewHireCreate";
import NewHireDetail from "../model/NewHireDetail";

/**
 * NewHire service.
 * @module api/NewHireApi
 * @version 1.0.0
 */
export default class NewHireApi {
  /**
   * Constructs a new NewHireApi.
   * @alias module:api/NewHireApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create an NewHire
   * Create an NewHire
   * @param {module:model/NewHireCreate} new_hire
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewHire} and HTTP response
   */
  createNewHireWithHttpInfo(new_hire) {
    let postBody = new_hire;
    // verify the required parameter 'new_hire' is set
    if (new_hire === undefined || new_hire === null) {
      throw new Error("Missing the required parameter 'new_hire' when calling createNewHire");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = NewHire;
    return this.apiClient.callApi(
      "/new_hires",
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
   * Create an NewHire
   * Create an NewHire
   * @param {module:model/NewHireCreate} new_hire
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewHire}
   */
  createNewHire(new_hire) {
    return this.createNewHireWithHttpInfo(new_hire).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Details of NewHire
   * Get the Details of NewHire in the Account
   * @param {Number} id the NewHire identifier, as id
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewHireDetail} and HTTP response
   */
  getNewHireWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getNewHire");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {
      include: this.apiClient.buildCollectionParam(opts["include"], "csv")
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = NewHireDetail;
    return this.apiClient.callApi(
      "/new_hires/{id}",
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
   * Details of NewHire
   * Get the Details of NewHire in the Account
   * @param {Number} id the NewHire identifier, as id
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewHireDetail}
   */
  getNewHire(id, opts) {
    return this.getNewHireWithHttpInfo(id, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * New Hires List
   * List of New Hires
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.status the status key
   * @param {String} opts.first_name  First Name of users to query
   * @param {String} opts.last_name Last Name of users to query
   * @param {String} opts.personal_email Personal Email of users to query
   * @param {String} opts.official_email Official Email of users to query
   * @param {String} opts.employee_type Employee type of users to query
   * @param {Array.<Number>} opts.department the identifier of users departments to query, as id
   * @param {Array.<Number>} opts.business_unit the identifier of users business units to query, as id
   * @param {Array.<Number>} opts.location the identifier of user location, as id
   * @param {Array.<Number>} opts.reporting_manager the identifier of user reporting manager, as id
   * @param {String} opts.employee_id Employee Id of users to query
   * @param {Date} opts.updated_since the identifier of user updated_since
   * @param {Boolean} opts.draft the identifier of user draft
   * @param {Boolean} opts.deleted the identifier of user deleted
   * @param {Boolean} opts.terminated the identifier of user terminated
   * @param {Boolean} opts.no_show the identifier of no show
   * @param {Date} opts.joining_date the identifier of date of joining of the user
   * @param {Number} opts.page page number
   * @param {module:model/String} opts.sort Sort By
   * @param {module:model/String} opts.sort_type Sort Type
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NewHire>} and HTTP response
   */
  getNewHiresWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      status: this.apiClient.buildCollectionParam(opts["status"], "csv"),
      first_name: opts["first_name"],
      last_name: opts["last_name"],
      personal_email: opts["personal_email"],
      official_email: opts["official_email"],
      employee_type: opts["employee_type"],
      department: this.apiClient.buildCollectionParam(opts["department"], "csv"),
      business_unit: this.apiClient.buildCollectionParam(opts["business_unit"], "csv"),
      location: this.apiClient.buildCollectionParam(opts["location"], "csv"),
      reporting_manager: this.apiClient.buildCollectionParam(opts["reporting_manager"], "csv"),
      employee_id: opts["employee_id"],
      updated_since: opts["updated_since"],
      draft: opts["draft"],
      deleted: opts["deleted"],
      terminated: opts["terminated"],
      no_show: opts["no_show"],
      joining_date: opts["joining_date"],
      page: opts["page"],
      sort: opts["sort"],
      sort_type: opts["sort_type"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [NewHire];
    return this.apiClient.callApi(
      "/new_hires",
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
   * New Hires List
   * List of New Hires
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.status the status key
   * @param {String} opts.first_name  First Name of users to query
   * @param {String} opts.last_name Last Name of users to query
   * @param {String} opts.personal_email Personal Email of users to query
   * @param {String} opts.official_email Official Email of users to query
   * @param {String} opts.employee_type Employee type of users to query
   * @param {Array.<Number>} opts.department the identifier of users departments to query, as id
   * @param {Array.<Number>} opts.business_unit the identifier of users business units to query, as id
   * @param {Array.<Number>} opts.location the identifier of user location, as id
   * @param {Array.<Number>} opts.reporting_manager the identifier of user reporting manager, as id
   * @param {String} opts.employee_id Employee Id of users to query
   * @param {Date} opts.updated_since the identifier of user updated_since
   * @param {Boolean} opts.draft the identifier of user draft
   * @param {Boolean} opts.deleted the identifier of user deleted
   * @param {Boolean} opts.terminated the identifier of user terminated
   * @param {Boolean} opts.no_show the identifier of no show
   * @param {Date} opts.joining_date the identifier of date of joining of the user
   * @param {Number} opts.page page number
   * @param {module:model/String} opts.sort Sort By
   * @param {module:model/String} opts.sort_type Sort Type
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NewHire>}
   */
  getNewHires(opts) {
    return this.getNewHiresWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update a NewHire
   * Update a NewHire
   * @param {module:model/NewHireCreate} new_hire
   * @param {Number} id the new_hire identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewHire} and HTTP response
   */
  updateNewHireWithHttpInfo(new_hire, id) {
    let postBody = new_hire;
    // verify the required parameter 'new_hire' is set
    if (new_hire === undefined || new_hire === null) {
      throw new Error("Missing the required parameter 'new_hire' when calling updateNewHire");
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling updateNewHire");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = NewHire;
    return this.apiClient.callApi(
      "/new_hires/{id}",
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
   * Update a NewHire
   * Update a NewHire
   * @param {module:model/NewHireCreate} new_hire
   * @param {Number} id the new_hire identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewHire}
   */
  updateNewHire(new_hire, id) {
    return this.updateNewHireWithHttpInfo(new_hire, id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
