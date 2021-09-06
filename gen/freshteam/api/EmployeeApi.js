"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Employee = _interopRequireDefault(require("../model/Employee"));

var _EmployeeCreate = _interopRequireDefault(require("../model/EmployeeCreate"));

var _EmployeeDetail = _interopRequireDefault(require("../model/EmployeeDetail"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse500"));

var _Model500Error = _interopRequireDefault(require("../model/Model500Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Employee service.
* @module api/EmployeeApi
* @version 1.0.0
*/
var EmployeeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeeApi. 
  * @alias module:api/EmployeeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeeApi(apiClient) {
    _classCallCheck(this, EmployeeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create an Employee
   * Create an Employee
   * @param {module:model/EmployeeCreate} employee 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Employee} and HTTP response
   */


  _createClass(EmployeeApi, [{
    key: "createEmployeeWithHttpInfo",
    value: function createEmployeeWithHttpInfo(employee) {
      var postBody = employee; // verify the required parameter 'employee' is set

      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling createEmployee");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Employee["default"];
      return this.apiClient.callApi('/employees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an Employee
     * Create an Employee
     * @param {module:model/EmployeeCreate} employee 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Employee}
     */

  }, {
    key: "createEmployee",
    value: function createEmployee(employee) {
      return this.createEmployeeWithHttpInfo(employee).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Details of Employee
     * Get the Details of Employee in the Account
     * @param {Number} id the employee identifier, as id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmployeeDetail} and HTTP response
     */

  }, {
    key: "getEmployeeWithHttpInfo",
    value: function getEmployeeWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEmployee");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmployeeDetail["default"];
      return this.apiClient.callApi('/employees/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Details of Employee
     * Get the Details of Employee in the Account
     * @param {Number} id the employee identifier, as id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmployeeDetail}
     */

  }, {
    key: "getEmployee",
    value: function getEmployee(id, opts) {
      return this.getEmployeeWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Employees List
     * List of active employees from directory
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {String} opts.firstName  First Name of users to query
     * @param {String} opts.lastName Last Name of users to query
     * @param {String} opts.personalEmail Personal Email of users to query
     * @param {String} opts.officialEmail Official Email of users to query
     * @param {String} opts.employeeType Employee type of users to query
     * @param {Array.<Number>} opts.department the identifier of users departments to query, as id
     * @param {Array.<Number>} opts.businessUnit the identifier of users business units to query, as id
     * @param {Array.<Number>} opts.location the identifier of user location, as id
     * @param {Array.<Number>} opts.reportingManager the identifier of user reporting manager, as id
     * @param {String} opts.employeeId Employee Id of users to query
     * @param {Date} opts.updatedSince the identifier of user updated_since
     * @param {Boolean} opts.draft the identifier of user draft
     * @param {Boolean} opts.deleted the identifier of user deleted
     * @param {Boolean} opts.terminated the identifier of user terminated
     * @param {Number} opts.page page number
     * @param {module:model/String} opts.sort Sort By
     * @param {module:model/String} opts.sortType Sort Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Employee>} and HTTP response
     */

  }, {
    key: "getEmployeesWithHttpInfo",
    value: function getEmployeesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': this.apiClient.buildCollectionParam(opts['status'], 'csv'),
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'personal_email': opts['personalEmail'],
        'official_email': opts['officialEmail'],
        'employee_type': opts['employeeType'],
        'department': this.apiClient.buildCollectionParam(opts['department'], 'csv'),
        'business_unit': this.apiClient.buildCollectionParam(opts['businessUnit'], 'csv'),
        'location': this.apiClient.buildCollectionParam(opts['location'], 'csv'),
        'reporting_manager': this.apiClient.buildCollectionParam(opts['reportingManager'], 'csv'),
        'employee_id': opts['employeeId'],
        'updated_since': opts['updatedSince'],
        'draft': opts['draft'],
        'deleted': opts['deleted'],
        'terminated': opts['terminated'],
        'page': opts['page'],
        'sort': opts['sort'],
        'sort_type': opts['sortType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Employee["default"]];
      return this.apiClient.callApi('/employees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Employees List
     * List of active employees from directory
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {String} opts.firstName  First Name of users to query
     * @param {String} opts.lastName Last Name of users to query
     * @param {String} opts.personalEmail Personal Email of users to query
     * @param {String} opts.officialEmail Official Email of users to query
     * @param {String} opts.employeeType Employee type of users to query
     * @param {Array.<Number>} opts.department the identifier of users departments to query, as id
     * @param {Array.<Number>} opts.businessUnit the identifier of users business units to query, as id
     * @param {Array.<Number>} opts.location the identifier of user location, as id
     * @param {Array.<Number>} opts.reportingManager the identifier of user reporting manager, as id
     * @param {String} opts.employeeId Employee Id of users to query
     * @param {Date} opts.updatedSince the identifier of user updated_since
     * @param {Boolean} opts.draft the identifier of user draft
     * @param {Boolean} opts.deleted the identifier of user deleted
     * @param {Boolean} opts.terminated the identifier of user terminated
     * @param {Number} opts.page page number
     * @param {module:model/String} opts.sort Sort By
     * @param {module:model/String} opts.sortType Sort Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Employee>}
     */

  }, {
    key: "getEmployees",
    value: function getEmployees(opts) {
      return this.getEmployeesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send Invite Email
     * Send Invite Email
     * @param {Number} id the employee identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Employee} and HTTP response
     */

  }, {
    key: "sendInviteWithHttpInfo",
    value: function sendInviteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sendInvite");
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
      var returnType = _Employee["default"];
      return this.apiClient.callApi('/employees/{id}/send_invite', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Send Invite Email
     * Send Invite Email
     * @param {Number} id the employee identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Employee}
     */

  }, {
    key: "sendInvite",
    value: function sendInvite(id) {
      return this.sendInviteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an Employee
     * Update an Employee
     * @param {module:model/EmployeeCreate} employee 
     * @param {Number} id the employee identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Employee} and HTTP response
     */

  }, {
    key: "updateEmployeeWithHttpInfo",
    value: function updateEmployeeWithHttpInfo(employee, id) {
      var postBody = employee; // verify the required parameter 'employee' is set

      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling updateEmployee");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateEmployee");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Employee["default"];
      return this.apiClient.callApi('/employees/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an Employee
     * Update an Employee
     * @param {module:model/EmployeeCreate} employee 
     * @param {Number} id the employee identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Employee}
     */

  }, {
    key: "updateEmployee",
    value: function updateEmployee(employee, id) {
      return this.updateEmployeeWithHttpInfo(employee, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EmployeeApi;
}();

exports["default"] = EmployeeApi;