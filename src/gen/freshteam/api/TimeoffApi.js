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
import InlineObject from "../model/InlineObject";
import InlineObject1 from "../model/InlineObject1";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse404 from "../model/InlineResponse404";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";
import LeaveRequest from "../model/LeaveRequest";
import LeaveRequestCreate from "../model/LeaveRequestCreate";
import LeaveType from "../model/LeaveType";

/**
 * Timeoff service.
 * @module api/TimeoffApi
 * @version 1.0.0
 */
export default class TimeoffApi {
  /**
   * Constructs a new TimeoffApi.
   * @alias module:api/TimeoffApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Approve Timeoff Request
   * Approve Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.leave_request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  approveTimeoffWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = opts["leave_request"];
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling approveTimeoff");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = null;
    return this.apiClient.callApi(
      "/time_offs/{id}/approve",
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
   * Approve Timeoff Request
   * Approve Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.leave_request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  approveTimeoff(id, opts) {
    return this.approveTimeoffWithHttpInfo(id, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Cancel Timeoff Request
   * Cancel Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  cancelTimeoffWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling cancelTimeoff");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = null;
    return this.apiClient.callApi(
      "/time_offs/{id}/cancel",
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
   * Cancel Timeoff Request
   * Cancel Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  cancelTimeoff(id) {
    return this.cancelTimeoffWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Apply leave request for logged in user
   * Apply leave request for logged in user
   * @param {module:model/LeaveRequestCreate} leave_request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaveRequest} and HTTP response
   */
  createTimeOffWithHttpInfo(leave_request) {
    let postBody = leave_request;
    // verify the required parameter 'leave_request' is set
    if (leave_request === undefined || leave_request === null) {
      throw new Error("Missing the required parameter 'leave_request' when calling createTimeOff");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = LeaveRequest;
    return this.apiClient.callApi(
      "/time_offs",
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
   * Apply leave request for logged in user
   * Apply leave request for logged in user
   * @param {module:model/LeaveRequestCreate} leave_request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaveRequest}
   */
  createTimeOff(leave_request) {
    return this.createTimeOffWithHttpInfo(leave_request).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get Timeoff Request details
   * get Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaveRequest} and HTTP response
   */
  getTimeoffWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getTimeoff");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = LeaveRequest;
    return this.apiClient.callApi(
      "/time_offs/{id}",
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
   * Get Timeoff Request details
   * get Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaveRequest}
   */
  getTimeoff(id) {
    return this.getTimeoffWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get Timeoff Type details
   * get Timeoff type details
   * @param {Number} id the timeoff type identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaveType} and HTTP response
   */
  getTimeoffTypeWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getTimeoffType");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = LeaveType;
    return this.apiClient.callApi(
      "/time_off_types/{id}",
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
   * Get Timeoff Type details
   * get Timeoff type details
   * @param {Number} id the timeoff type identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaveType}
   */
  getTimeoffType(id) {
    return this.getTimeoffTypeWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List of user TimeOff Types
   * List of TimeOff Types
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LeaveType>} and HTTP response
   */
  getTimeoffTypesWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [LeaveType];
    return this.apiClient.callApi(
      "/time_off_types",
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
   * List of user TimeOff Types
   * List of TimeOff Types
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LeaveType>}
   */
  getTimeoffTypes() {
    return this.getTimeoffTypesWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List of TimeOff Requests of Users in the Account
   * List of TimeOff Requests
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.status the status key
   * @param {Array.<String>} opts.user the identifier of user, id
   * @param {Array.<String>} opts.leave_type the identifier of leave_type, as id
   * @param {Array.<String>} opts.location the identifier of user location, as id
   * @param {Date} opts.start_date The start date for the timeoff request. Must be used together with `end_date`.
   * @param {Date} opts.end_date The end date for the timeoff request. Must be used together with `start_date` and should be greater than `start date`.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LeaveRequest>} and HTTP response
   */
  getTimeoffsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      status: this.apiClient.buildCollectionParam(opts["status"], "csv"),
      user: this.apiClient.buildCollectionParam(opts["user"], "csv"),
      leave_type: this.apiClient.buildCollectionParam(opts["leave_type"], "csv"),
      location: this.apiClient.buildCollectionParam(opts["location"], "csv"),
      start_date: opts["start_date"],
      end_date: opts["end_date"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [LeaveRequest];
    return this.apiClient.callApi(
      "/time_offs",
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
   * List of TimeOff Requests of Users in the Account
   * List of TimeOff Requests
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.status the status key
   * @param {Array.<String>} opts.user the identifier of user, id
   * @param {Array.<String>} opts.leave_type the identifier of leave_type, as id
   * @param {Array.<String>} opts.location the identifier of user location, as id
   * @param {Date} opts.start_date The start date for the timeoff request. Must be used together with `end_date`.
   * @param {Date} opts.end_date The end date for the timeoff request. Must be used together with `start_date` and should be greater than `start date`.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LeaveRequest>}
   */
  getTimeoffs(opts) {
    return this.getTimeoffsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Reject Timeoff Request
   * Reject Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject1} opts.leave_request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  rejectTimeoffWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = opts["leave_request"];
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling rejectTimeoff");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = null;
    return this.apiClient.callApi(
      "/time_offs/{id}/reject",
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
   * Reject Timeoff Request
   * Reject Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject1} opts.leave_request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  rejectTimeoff(id, opts) {
    return this.rejectTimeoffWithHttpInfo(id, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
