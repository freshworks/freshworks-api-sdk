"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Candidate = _interopRequireDefault(require("../model/Candidate"));

var _CandidateCreate = _interopRequireDefault(require("../model/CandidateCreate"));

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
* Candidate service.
* @module api/CandidateApi
* @version 1.0.0
*/
var CandidateApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CandidateApi. 
  * @alias module:api/CandidateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CandidateApi(apiClient) {
    _classCallCheck(this, CandidateApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Details of a candidate
   * Get the details of a candidate
   * @param {Number} id The candidate identifier, as id
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Candidate} and HTTP response
   */


  _createClass(CandidateApi, [{
    key: "getCandidateWithHttpInfo",
    value: function getCandidateWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCandidate");
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
      var returnType = _Candidate["default"];
      return this.apiClient.callApi('/candidates/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Details of a candidate
     * Get the details of a candidate
     * @param {Number} id The candidate identifier, as id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Candidate}
     */

  }, {
    key: "getCandidate",
    value: function getCandidate(id, opts) {
      return this.getCandidateWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Candidate
     * Update a Candidate
     * @param {module:model/CandidateCreate} candidate 
     * @param {Number} id the candidate identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Candidate} and HTTP response
     */

  }, {
    key: "updateCandidateWithHttpInfo",
    value: function updateCandidateWithHttpInfo(candidate, id) {
      var postBody = candidate; // verify the required parameter 'candidate' is set

      if (candidate === undefined || candidate === null) {
        throw new Error("Missing the required parameter 'candidate' when calling updateCandidate");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCandidate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Candidate["default"];
      return this.apiClient.callApi('/candidates/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Candidate
     * Update a Candidate
     * @param {module:model/CandidateCreate} candidate 
     * @param {Number} id the candidate identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Candidate}
     */

  }, {
    key: "updateCandidate",
    value: function updateCandidate(candidate, id) {
      return this.updateCandidateWithHttpInfo(candidate, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CandidateApi;
}();

exports["default"] = CandidateApi;