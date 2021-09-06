"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Department = _interopRequireDefault(require("../model/Department"));

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
* Departments service.
* @module api/DepartmentsApi
* @version 1.0.0
*/
var DepartmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DepartmentsApi. 
  * @alias module:api/DepartmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DepartmentsApi(apiClient) {
    _classCallCheck(this, DepartmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Department Details
   * Get the Details of Department in the Account
   * @param {Number} id the department identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Department} and HTTP response
   */


  _createClass(DepartmentsApi, [{
    key: "getDepartmentWithHttpInfo",
    value: function getDepartmentWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDepartment");
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
      var returnType = _Department["default"];
      return this.apiClient.callApi('/departments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Department Details
     * Get the Details of Department in the Account
     * @param {Number} id the department identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Department}
     */

  }, {
    key: "getDepartment",
    value: function getDepartment(id) {
      return this.getDepartmentWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Departments List
     * List of Departments in the Account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Department>} and HTTP response
     */

  }, {
    key: "getDepartmentsWithHttpInfo",
    value: function getDepartmentsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Department["default"]];
      return this.apiClient.callApi('/departments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Departments List
     * List of Departments in the Account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Department>}
     */

  }, {
    key: "getDepartments",
    value: function getDepartments() {
      return this.getDepartmentsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DepartmentsApi;
}();

exports["default"] = DepartmentsApi;