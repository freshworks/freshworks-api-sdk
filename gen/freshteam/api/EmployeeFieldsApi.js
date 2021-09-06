"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeField = _interopRequireDefault(require("../model/EmployeeField"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EmployeeFields service.
* @module api/EmployeeFieldsApi
* @version 1.0.0
*/
var EmployeeFieldsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeeFieldsApi. 
  * @alias module:api/EmployeeFieldsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeeFieldsApi(apiClient) {
    _classCallCheck(this, EmployeeFieldsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a Custom Field
   * Create a Custom Field in Employee Form
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject2} opts.employeeFields 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmployeeField} and HTTP response
   */


  _createClass(EmployeeFieldsApi, [{
    key: "createEmployeeFiledWithHttpInfo",
    value: function createEmployeeFiledWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['employeeFields'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _EmployeeField["default"];
      return this.apiClient.callApi('/employee_fields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Custom Field
     * Create a Custom Field in Employee Form
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.employeeFields 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmployeeField}
     */

  }, {
    key: "createEmployeeFiled",
    value: function createEmployeeFiled(opts) {
      return this.createEmployeeFiledWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Employee Fields List
     * List of active employees fields in the form
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/EmployeeField>} and HTTP response
     */

  }, {
    key: "getEmployeeFieldsWithHttpInfo",
    value: function getEmployeeFieldsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_EmployeeField["default"]];
      return this.apiClient.callApi('/employee_fields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Employee Fields List
     * List of active employees fields in the form
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/EmployeeField>}
     */

  }, {
    key: "getEmployeeFields",
    value: function getEmployeeFields() {
      return this.getEmployeeFieldsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EmployeeFieldsApi;
}();

exports["default"] = EmployeeFieldsApi;