"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse500"));

var _Source = _interopRequireDefault(require("../model/Source"));

var _SourceCreate = _interopRequireDefault(require("../model/SourceCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Source service.
* @module api/SourceApi
* @version 1.0.0
*/
var SourceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SourceApi. 
  * @alias module:api/SourceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SourceApi(apiClient) {
    _classCallCheck(this, SourceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create candidate source
   * Create candidate source
   * @param {module:model/SourceCreate} source 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Source} and HTTP response
   */


  _createClass(SourceApi, [{
    key: "createCandidateSourcesWithHttpInfo",
    value: function createCandidateSourcesWithHttpInfo(source) {
      var postBody = source; // verify the required parameter 'source' is set

      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling createCandidateSources");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Source["default"];
      return this.apiClient.callApi('/candidate_sources', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create candidate source
     * Create candidate source
     * @param {module:model/SourceCreate} source 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Source}
     */

  }, {
    key: "createCandidateSources",
    value: function createCandidateSources(source) {
      return this.createCandidateSourcesWithHttpInfo(source).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SourceApi;
}();

exports["default"] = SourceApi;