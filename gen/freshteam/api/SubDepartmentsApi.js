"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse500"));

var _SubDepartment = _interopRequireDefault(require("../model/SubDepartment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SubDepartments service.
* @module api/SubDepartmentsApi
* @version 1.0.0
*/
var SubDepartmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SubDepartmentsApi. 
  * @alias module:api/SubDepartmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SubDepartmentsApi(apiClient) {
    _classCallCheck(this, SubDepartmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Sub Department Details
   * Get the Details of Sub Department in the Account
   * @param {Number} id the sub department identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubDepartment} and HTTP response
   */


  _createClass(SubDepartmentsApi, [{
    key: "getSubDepartmentWithHttpInfo",
    value: function getSubDepartmentWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubDepartment");
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
      var returnType = _SubDepartment["default"];
      return this.apiClient.callApi('/sub_departments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Sub Department Details
     * Get the Details of Sub Department in the Account
     * @param {Number} id the sub department identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubDepartment}
     */

  }, {
    key: "getSubDepartment",
    value: function getSubDepartment(id) {
      return this.getSubDepartmentWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Sub Departments List
     * List of Sub Departments in the Account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SubDepartment>} and HTTP response
     */

  }, {
    key: "getSubDepartmentsWithHttpInfo",
    value: function getSubDepartmentsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SubDepartment["default"]];
      return this.apiClient.callApi('/sub_departments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Sub Departments List
     * List of Sub Departments in the Account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SubDepartment>}
     */

  }, {
    key: "getSubDepartments",
    value: function getSubDepartments() {
      return this.getSubDepartmentsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SubDepartmentsApi;
}();

exports["default"] = SubDepartmentsApi;