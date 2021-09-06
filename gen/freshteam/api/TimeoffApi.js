"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse500"));

var _LeaveRequest = _interopRequireDefault(require("../model/LeaveRequest"));

var _LeaveRequestCreate = _interopRequireDefault(require("../model/LeaveRequestCreate"));

var _LeaveType = _interopRequireDefault(require("../model/LeaveType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Timeoff service.
* @module api/TimeoffApi
* @version 1.0.0
*/
var TimeoffApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeoffApi. 
  * @alias module:api/TimeoffApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeoffApi(apiClient) {
    _classCallCheck(this, TimeoffApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Approve Timeoff Request
   * Approve Timeoff Request details
   * @param {Number} id the timeoff type identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.leaveRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(TimeoffApi, [{
    key: "approveTimeoffWithHttpInfo",
    value: function approveTimeoffWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['leaveRequest']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling approveTimeoff");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/time_offs/{id}/approve', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Approve Timeoff Request
     * Approve Timeoff Request details
     * @param {Number} id the timeoff type identifier, as id
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.leaveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "approveTimeoff",
    value: function approveTimeoff(id, opts) {
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

  }, {
    key: "cancelTimeoffWithHttpInfo",
    value: function cancelTimeoffWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelTimeoff");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/time_offs/{id}/cancel', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Cancel Timeoff Request
     * Cancel Timeoff Request details
     * @param {Number} id the timeoff type identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cancelTimeoff",
    value: function cancelTimeoff(id) {
      return this.cancelTimeoffWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Apply leave request for logged in user
     * Apply leave request for logged in user
     * @param {module:model/LeaveRequestCreate} leaveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaveRequest} and HTTP response
     */

  }, {
    key: "createTimeOffWithHttpInfo",
    value: function createTimeOffWithHttpInfo(leaveRequest) {
      var postBody = leaveRequest; // verify the required parameter 'leaveRequest' is set

      if (leaveRequest === undefined || leaveRequest === null) {
        throw new Error("Missing the required parameter 'leaveRequest' when calling createTimeOff");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _LeaveRequest["default"];
      return this.apiClient.callApi('/time_offs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Apply leave request for logged in user
     * Apply leave request for logged in user
     * @param {module:model/LeaveRequestCreate} leaveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaveRequest}
     */

  }, {
    key: "createTimeOff",
    value: function createTimeOff(leaveRequest) {
      return this.createTimeOffWithHttpInfo(leaveRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Timeoff Request details
     * get Timeoff Request details
     * @param {Number} id the timeoff type identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaveRequest} and HTTP response
     */

  }, {
    key: "getTimeoffWithHttpInfo",
    value: function getTimeoffWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTimeoff");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _LeaveRequest["default"];
      return this.apiClient.callApi('/time_offs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Timeoff Request details
     * get Timeoff Request details
     * @param {Number} id the timeoff type identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaveRequest}
     */

  }, {
    key: "getTimeoff",
    value: function getTimeoff(id) {
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

  }, {
    key: "getTimeoffTypeWithHttpInfo",
    value: function getTimeoffTypeWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTimeoffType");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _LeaveType["default"];
      return this.apiClient.callApi('/time_off_types/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Timeoff Type details
     * get Timeoff type details
     * @param {Number} id the timeoff type identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaveType}
     */

  }, {
    key: "getTimeoffType",
    value: function getTimeoffType(id) {
      return this.getTimeoffTypeWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List of user TimeOff Types
     * List of TimeOff Types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LeaveType>} and HTTP response
     */

  }, {
    key: "getTimeoffTypesWithHttpInfo",
    value: function getTimeoffTypesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LeaveType["default"]];
      return this.apiClient.callApi('/time_off_types', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List of user TimeOff Types
     * List of TimeOff Types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LeaveType>}
     */

  }, {
    key: "getTimeoffTypes",
    value: function getTimeoffTypes() {
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
     * @param {Array.<String>} opts.leaveType the identifier of leave_type, as id
     * @param {Array.<String>} opts.location the identifier of user location, as id
     * @param {Date} opts.startDate The start date for the timeoff request. Must be used together with `end_date`. 
     * @param {Date} opts.endDate The end date for the timeoff request. Must be used together with `start_date` and should be greater than `start date`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LeaveRequest>} and HTTP response
     */

  }, {
    key: "getTimeoffsWithHttpInfo",
    value: function getTimeoffsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': this.apiClient.buildCollectionParam(opts['status'], 'csv'),
        'user': this.apiClient.buildCollectionParam(opts['user'], 'csv'),
        'leave_type': this.apiClient.buildCollectionParam(opts['leaveType'], 'csv'),
        'location': this.apiClient.buildCollectionParam(opts['location'], 'csv'),
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LeaveRequest["default"]];
      return this.apiClient.callApi('/time_offs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List of TimeOff Requests of Users in the Account
     * List of TimeOff Requests
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {Array.<String>} opts.user the identifier of user, id
     * @param {Array.<String>} opts.leaveType the identifier of leave_type, as id
     * @param {Array.<String>} opts.location the identifier of user location, as id
     * @param {Date} opts.startDate The start date for the timeoff request. Must be used together with `end_date`. 
     * @param {Date} opts.endDate The end date for the timeoff request. Must be used together with `start_date` and should be greater than `start date`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LeaveRequest>}
     */

  }, {
    key: "getTimeoffs",
    value: function getTimeoffs(opts) {
      return this.getTimeoffsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Reject Timeoff Request
     * Reject Timeoff Request details
     * @param {Number} id the timeoff type identifier, as id
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.leaveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "rejectTimeoffWithHttpInfo",
    value: function rejectTimeoffWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['leaveRequest']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rejectTimeoff");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/time_offs/{id}/reject', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Reject Timeoff Request
     * Reject Timeoff Request details
     * @param {Number} id the timeoff type identifier, as id
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.leaveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "rejectTimeoff",
    value: function rejectTimeoff(id, opts) {
      return this.rejectTimeoffWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TimeoffApi;
}();

exports["default"] = TimeoffApi;