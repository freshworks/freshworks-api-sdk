"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Applicant = _interopRequireDefault(require("../model/Applicant"));

var _ApplicantDetail = _interopRequireDefault(require("../model/ApplicantDetail"));

var _ApplicantUpdate = _interopRequireDefault(require("../model/ApplicantUpdate"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject4"));

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
* Applicant service.
* @module api/ApplicantApi
* @version 1.0.0
*/
var ApplicantApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicantApi. 
  * @alias module:api/ApplicantApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicantApi(apiClient) {
    _classCallCheck(this, ApplicantApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Archive Applicant
   * Archive Applicant
   * @param {Number} id the applicant identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject3} opts.applicant 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
   */


  _createClass(ApplicantApi, [{
    key: "archiveApplicantWithHttpInfo",
    value: function archiveApplicantWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['applicant']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling archiveApplicant");
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
      var returnType = _ApplicantDetail["default"];
      return this.apiClient.callApi('/applicants/{id}/archive', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Archive Applicant
     * Archive Applicant
     * @param {Number} id the applicant identifier, as id
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.applicant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
     */

  }, {
    key: "archiveApplicant",
    value: function archiveApplicant(id, opts) {
      return this.archiveApplicantWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an Applicant
     * Get an Applicant
     * @param {Number} id the applicant identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
     */

  }, {
    key: "getApplicantWithHttpInfo",
    value: function getApplicantWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getApplicant");
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
      var returnType = _ApplicantDetail["default"];
      return this.apiClient.callApi('/applicants/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an Applicant
     * Get an Applicant
     * @param {Number} id the applicant identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
     */

  }, {
    key: "getApplicant",
    value: function getApplicant(id) {
      return this.getApplicantWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Applicants List
     * Get all Applicants
     * @param {Number} id the job_posting identifier, as id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {Array.<Number>} opts.stage the identifier of Stage of applicants, as Id
     * @param {Array.<Number>} opts.followersId the identifier of followers of applicant, as Id
     * @param {String} opts.candidateFirstName  First Name of candidate to query
     * @param {String} opts.candidateLastName Last Name of candidate to query
     * @param {String} opts.candidateEmail Email of candidate to query
     * @param {Array.<Number>} opts.candidateSource the identifier of source of candidate, as Id
     * @param {Array.<Number>} opts.candidateSourceCategory the identifier of source_category of candidate, as Id
     * @param {Array.<Number>} opts.candidateOwner the identifier of owner of candidate, as Id
     * @param {Array.<String>} opts.candidateCity candidate city to query
     * @param {Array.<String>} opts.candidateCountryCode candidate country code to query
     * @param {Array.<String>} opts.candidateTags candidate tags to query
     * @param {Array.<String>} opts.candidateSkills candidate skills to query
     * @param {Array.<String>} opts.candidatePositionsCompany candidate companies to query
     * @param {Array.<String>} opts.candidatePositionsTitle candidate positions title to query
     * @param {Array.<module:model/String>} opts.candidateRating candidate rating to query
     * @param {Array.<Number>} opts.candidateReferredBy the identifier of referred_by of candidate, as Id
     * @param {Boolean} opts.candidateHasEmail candidate email exists
     * @param {Boolean} opts.candidateResponded has candidate responded
     * @param {Boolean} opts.candidateSpam blocked candidate
     * @param {Array.<Number>} opts.requisitionId the identifier of requisition of applicants, as Id
     * @param {Date} opts.createdAt applicant created_at
     * @param {Date} opts.createdSince applicant created_since
     * @param {Date} opts.updatedSince applicant updated_since
     * @param {Boolean} opts.deleted the identifier of applicant deleted
     * @param {module:model/String} opts.sort Sort By
     * @param {module:model/String} opts.sortType Sort Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Applicant>} and HTTP response
     */

  }, {
    key: "getApplicantsWithHttpInfo",
    value: function getApplicantsWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getApplicants");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'status': this.apiClient.buildCollectionParam(opts['status'], 'csv'),
        'stage': this.apiClient.buildCollectionParam(opts['stage'], 'csv'),
        'followers_id': this.apiClient.buildCollectionParam(opts['followersId'], 'csv'),
        'candidate_first_name': opts['candidateFirstName'],
        'candidate_last_name': opts['candidateLastName'],
        'candidate_email': opts['candidateEmail'],
        'candidate_source': this.apiClient.buildCollectionParam(opts['candidateSource'], 'csv'),
        'candidate_source_category': this.apiClient.buildCollectionParam(opts['candidateSourceCategory'], 'csv'),
        'candidate_owner': this.apiClient.buildCollectionParam(opts['candidateOwner'], 'csv'),
        'candidate_city': this.apiClient.buildCollectionParam(opts['candidateCity'], 'csv'),
        'candidate_country_code': this.apiClient.buildCollectionParam(opts['candidateCountryCode'], 'csv'),
        'candidate_tags': this.apiClient.buildCollectionParam(opts['candidateTags'], 'csv'),
        'candidate_skills': this.apiClient.buildCollectionParam(opts['candidateSkills'], 'csv'),
        'candidate_positions_company': this.apiClient.buildCollectionParam(opts['candidatePositionsCompany'], 'csv'),
        'candidate_positions_title': this.apiClient.buildCollectionParam(opts['candidatePositionsTitle'], 'csv'),
        'candidate_rating': this.apiClient.buildCollectionParam(opts['candidateRating'], 'csv'),
        'candidate_referred_by': this.apiClient.buildCollectionParam(opts['candidateReferredBy'], 'csv'),
        'candidate_has_email': opts['candidateHasEmail'],
        'candidate_responded': opts['candidateResponded'],
        'candidate_spam': opts['candidateSpam'],
        'requisition_id': this.apiClient.buildCollectionParam(opts['requisitionId'], 'csv'),
        'created_at': opts['createdAt'],
        'created_since': opts['createdSince'],
        'updated_since': opts['updatedSince'],
        'deleted': opts['deleted'],
        'sort': opts['sort'],
        'sort_type': opts['sortType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Applicant["default"]];
      return this.apiClient.callApi('/job_postings/{id}/applicants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Applicants List
     * Get all Applicants
     * @param {Number} id the job_posting identifier, as id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {Array.<Number>} opts.stage the identifier of Stage of applicants, as Id
     * @param {Array.<Number>} opts.followersId the identifier of followers of applicant, as Id
     * @param {String} opts.candidateFirstName  First Name of candidate to query
     * @param {String} opts.candidateLastName Last Name of candidate to query
     * @param {String} opts.candidateEmail Email of candidate to query
     * @param {Array.<Number>} opts.candidateSource the identifier of source of candidate, as Id
     * @param {Array.<Number>} opts.candidateSourceCategory the identifier of source_category of candidate, as Id
     * @param {Array.<Number>} opts.candidateOwner the identifier of owner of candidate, as Id
     * @param {Array.<String>} opts.candidateCity candidate city to query
     * @param {Array.<String>} opts.candidateCountryCode candidate country code to query
     * @param {Array.<String>} opts.candidateTags candidate tags to query
     * @param {Array.<String>} opts.candidateSkills candidate skills to query
     * @param {Array.<String>} opts.candidatePositionsCompany candidate companies to query
     * @param {Array.<String>} opts.candidatePositionsTitle candidate positions title to query
     * @param {Array.<module:model/String>} opts.candidateRating candidate rating to query
     * @param {Array.<Number>} opts.candidateReferredBy the identifier of referred_by of candidate, as Id
     * @param {Boolean} opts.candidateHasEmail candidate email exists
     * @param {Boolean} opts.candidateResponded has candidate responded
     * @param {Boolean} opts.candidateSpam blocked candidate
     * @param {Array.<Number>} opts.requisitionId the identifier of requisition of applicants, as Id
     * @param {Date} opts.createdAt applicant created_at
     * @param {Date} opts.createdSince applicant created_since
     * @param {Date} opts.updatedSince applicant updated_since
     * @param {Boolean} opts.deleted the identifier of applicant deleted
     * @param {module:model/String} opts.sort Sort By
     * @param {module:model/String} opts.sortType Sort Type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Applicant>}
     */

  }, {
    key: "getApplicants",
    value: function getApplicants(id, opts) {
      return this.getApplicantsWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * sub stage update
     * Applicant sub stage update
     * @param {Number} id the applicant identifier, as id
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.applicant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
     */

  }, {
    key: "moveSubStageWithHttpInfo",
    value: function moveSubStageWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['applicant']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling moveSubStage");
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
      var returnType = _ApplicantDetail["default"];
      return this.apiClient.callApi('/applicants/{id}/move_sub_stage', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * sub stage update
     * Applicant sub stage update
     * @param {Number} id the applicant identifier, as id
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.applicant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
     */

  }, {
    key: "moveSubStage",
    value: function moveSubStage(id, opts) {
      return this.moveSubStageWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an Applicant
     * Update an Applicant
     * @param {module:model/ApplicantUpdate} applicant 
     * @param {Number} id the applicant identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
     */

  }, {
    key: "updateApplicantWithHttpInfo",
    value: function updateApplicantWithHttpInfo(applicant, id) {
      var postBody = applicant; // verify the required parameter 'applicant' is set

      if (applicant === undefined || applicant === null) {
        throw new Error("Missing the required parameter 'applicant' when calling updateApplicant");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateApplicant");
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
      var returnType = _ApplicantDetail["default"];
      return this.apiClient.callApi('/applicants/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an Applicant
     * Update an Applicant
     * @param {module:model/ApplicantUpdate} applicant 
     * @param {Number} id the applicant identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
     */

  }, {
    key: "updateApplicant",
    value: function updateApplicant(applicant, id) {
      return this.updateApplicantWithHttpInfo(applicant, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ApplicantApi;
}();

exports["default"] = ApplicantApi;