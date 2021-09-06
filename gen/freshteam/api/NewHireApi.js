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

var _Model500Error = _interopRequireDefault(require("../model/Model500Error"));

var _NewHire = _interopRequireDefault(require("../model/NewHire"));

var _NewHireCreate = _interopRequireDefault(require("../model/NewHireCreate"));

var _NewHireDetail = _interopRequireDefault(require("../model/NewHireDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* NewHire service.
* @module api/NewHireApi
* @version 1.0.0
*/
var NewHireApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NewHireApi. 
  * @alias module:api/NewHireApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NewHireApi(apiClient) {
    _classCallCheck(this, NewHireApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create an NewHire
   * Create an NewHire
   * @param {module:model/NewHireCreate} newHire 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewHire} and HTTP response
   */


  _createClass(NewHireApi, [{
    key: "createNewHireWithHttpInfo",
    value: function createNewHireWithHttpInfo(newHire) {
      var postBody = newHire; // verify the required parameter 'newHire' is set

      if (newHire === undefined || newHire === null) {
        throw new Error("Missing the required parameter 'newHire' when calling createNewHire");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NewHire["default"];
      return this.apiClient.callApi('/new_hires', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an NewHire
     * Create an NewHire
     * @param {module:model/NewHireCreate} newHire 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewHire}
     */

  }, {
    key: "createNewHire",
    value: function createNewHire(newHire) {
      return this.createNewHireWithHttpInfo(newHire).then(function (response_and_data) {
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

  }, {
    key: "getNewHireWithHttpInfo",
    value: function getNewHireWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewHire");
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
      var returnType = _NewHireDetail["default"];
      return this.apiClient.callApi('/new_hires/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Details of NewHire
     * Get the Details of NewHire in the Account
     * @param {Number} id the NewHire identifier, as id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewHireDetail}
     */

  }, {
    key: "getNewHire",
    value: function getNewHire(id, opts) {
      return this.getNewHireWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a NewHire
     * Update a NewHire
     * @param {module:model/NewHireCreate} newHire 
     * @param {Number} id the new_hire identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewHire} and HTTP response
     */

  }, {
    key: "updateNewHireWithHttpInfo",
    value: function updateNewHireWithHttpInfo(newHire, id) {
      var postBody = newHire; // verify the required parameter 'newHire' is set

      if (newHire === undefined || newHire === null) {
        throw new Error("Missing the required parameter 'newHire' when calling updateNewHire");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNewHire");
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
      var returnType = _NewHire["default"];
      return this.apiClient.callApi('/new_hires/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a NewHire
     * Update a NewHire
     * @param {module:model/NewHireCreate} newHire 
     * @param {Number} id the new_hire identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewHire}
     */

  }, {
    key: "updateNewHire",
    value: function updateNewHire(newHire, id) {
      return this.updateNewHireWithHttpInfo(newHire, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NewHireApi;
}();

exports["default"] = NewHireApi;