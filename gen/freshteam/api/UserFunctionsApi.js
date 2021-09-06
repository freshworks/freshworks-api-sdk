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

var _UserFunction = _interopRequireDefault(require("../model/UserFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserFunctions service.
* @module api/UserFunctionsApi
* @version 1.0.0
*/
var UserFunctionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserFunctionsApi. 
  * @alias module:api/UserFunctionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserFunctionsApi(apiClient) {
    _classCallCheck(this, UserFunctionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get user function details
   * get user function details
   * @param {Number} id the user function identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserFunction} and HTTP response
   */


  _createClass(UserFunctionsApi, [{
    key: "getUserFunctionWithHttpInfo",
    value: function getUserFunctionWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserFunction");
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
      var returnType = _UserFunction["default"];
      return this.apiClient.callApi('/user_functions/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get user function details
     * get user function details
     * @param {Number} id the user function identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserFunction}
     */

  }, {
    key: "getUserFunction",
    value: function getUserFunction(id) {
      return this.getUserFunctionWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List of user functions
     * List of User Functions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/UserFunction>} and HTTP response
     */

  }, {
    key: "getUserFunctionsWithHttpInfo",
    value: function getUserFunctionsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_UserFunction["default"]];
      return this.apiClient.callApi('/user_functions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List of user functions
     * List of User Functions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/UserFunction>}
     */

  }, {
    key: "getUserFunctions",
    value: function getUserFunctions() {
      return this.getUserFunctionsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserFunctionsApi;
}();

exports["default"] = UserFunctionsApi;