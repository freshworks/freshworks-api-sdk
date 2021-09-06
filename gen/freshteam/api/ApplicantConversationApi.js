"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantConversation = _interopRequireDefault(require("../model/ApplicantConversation"));

var _ApplicantConversationCreate = _interopRequireDefault(require("../model/ApplicantConversationCreate"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ApplicantConversation service.
* @module api/ApplicantConversationApi
* @version 1.0.0
*/
var ApplicantConversationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicantConversationApi. 
  * @alias module:api/ApplicantConversationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicantConversationApi(apiClient) {
    _classCallCheck(this, ApplicantConversationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create an Applicant Conversation
   * Create an Applicant Conversation
   * @param {module:model/ApplicantConversationCreate} applicantConversation 
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantConversation} and HTTP response
   */


  _createClass(ApplicantConversationApi, [{
    key: "createApplicantConversationWithHttpInfo",
    value: function createApplicantConversationWithHttpInfo(applicantConversation, id) {
      var postBody = applicantConversation; // verify the required parameter 'applicantConversation' is set

      if (applicantConversation === undefined || applicantConversation === null) {
        throw new Error("Missing the required parameter 'applicantConversation' when calling createApplicantConversation");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createApplicantConversation");
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
      var returnType = _ApplicantConversation["default"];
      return this.apiClient.callApi('/applicants/{id}/conversations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an Applicant Conversation
     * Create an Applicant Conversation
     * @param {module:model/ApplicantConversationCreate} applicantConversation 
     * @param {Number} id the applicant identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantConversation}
     */

  }, {
    key: "createApplicantConversation",
    value: function createApplicantConversation(applicantConversation, id) {
      return this.createApplicantConversationWithHttpInfo(applicantConversation, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ApplicantConversationApi;
}();

exports["default"] = ApplicantConversationApi;