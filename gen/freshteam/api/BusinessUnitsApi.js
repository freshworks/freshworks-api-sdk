"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BusinessUnit = _interopRequireDefault(require("../model/BusinessUnit"));

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
* BusinessUnits service.
* @module api/BusinessUnitsApi
* @version 1.0.0
*/
var BusinessUnitsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BusinessUnitsApi. 
  * @alias module:api/BusinessUnitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BusinessUnitsApi(apiClient) {
    _classCallCheck(this, BusinessUnitsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Business Unit Details
   * Get the Details of Business Unit in the Account
   * @param {Number} id the business unit identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BusinessUnit} and HTTP response
   */


  _createClass(BusinessUnitsApi, [{
    key: "getBusinessUnitWithHttpInfo",
    value: function getBusinessUnitWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBusinessUnit");
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
      var returnType = _BusinessUnit["default"];
      return this.apiClient.callApi('/business_units/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Business Unit Details
     * Get the Details of Business Unit in the Account
     * @param {Number} id the business unit identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BusinessUnit}
     */

  }, {
    key: "getBusinessUnit",
    value: function getBusinessUnit(id) {
      return this.getBusinessUnitWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Business Units List
     * List of Business Units in the Account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BusinessUnit>} and HTTP response
     */

  }, {
    key: "getBusinessUnitsWithHttpInfo",
    value: function getBusinessUnitsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BusinessUnit["default"]];
      return this.apiClient.callApi('/business_units', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Business Units List
     * List of Business Units in the Account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BusinessUnit>}
     */

  }, {
    key: "getBusinessUnits",
    value: function getBusinessUnits() {
      return this.getBusinessUnitsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BusinessUnitsApi;
}();

exports["default"] = BusinessUnitsApi;