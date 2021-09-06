"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantCreate = _interopRequireDefault(require("../model/ApplicantCreate"));

var _ApplicantDetail = _interopRequireDefault(require("../model/ApplicantDetail"));

var _ApplicantField = _interopRequireDefault(require("../model/ApplicantField"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse500"));

var _Job = _interopRequireDefault(require("../model/Job"));

var _JobDetail = _interopRequireDefault(require("../model/JobDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Job service.
* @module api/JobApi
* @version 1.0.0
*/
var JobApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JobApi. 
  * @alias module:api/JobApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JobApi(apiClient) {
    _classCallCheck(this, JobApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create an Applicant
   * Create an Applicant
   * @param {module:model/ApplicantCreate} employee 
   * @param {Number} id the job_posting identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
   */


  _createClass(JobApi, [{
    key: "createApplicantWithHttpInfo",
    value: function createApplicantWithHttpInfo(employee, id) {
      var postBody = employee; // verify the required parameter 'employee' is set

      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling createApplicant");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createApplicant");
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
      return this.apiClient.callApi('/job_postings/{id}/applicants', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an Applicant
     * Create an Applicant
     * @param {module:model/ApplicantCreate} employee 
     * @param {Number} id the job_posting identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
     */

  }, {
    key: "createApplicant",
    value: function createApplicant(employee, id) {
      return this.createApplicantWithHttpInfo(employee, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Applicant Fields List
     * List of active applicant fields in the form
     * @param {Number} id the job_posting identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ApplicantField>} and HTTP response
     */

  }, {
    key: "getApplicantFieldsWithHttpInfo",
    value: function getApplicantFieldsWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getApplicantFields");
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
      var returnType = [_ApplicantField["default"]];
      return this.apiClient.callApi('/job_postings/{id}/applicant_fields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Applicant Fields List
     * List of active applicant fields in the form
     * @param {Number} id the job_posting identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ApplicantField>}
     */

  }, {
    key: "getApplicantFields",
    value: function getApplicantFields(id) {
      return this.getApplicantFieldsWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Details of Job
     * Get the Details of Job
     * @param {Number} id the job identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobDetail} and HTTP response
     */

  }, {
    key: "getJobWithHttpInfo",
    value: function getJobWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getJob");
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
      var returnType = _JobDetail["default"];
      return this.apiClient.callApi('/job_postings/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Details of Job
     * Get the Details of Job
     * @param {Number} id the job identifier, as id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobDetail}
     */

  }, {
    key: "getJob",
    value: function getJob(id) {
      return this.getJobWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Jobs List
     * List of jobs
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {String} opts.title Title of jobs to query
     * @param {String} opts.type type of jobs to query
     * @param {Array.<Number>} opts.department the identifier of jobs department to query, as id
     * @param {Array.<Number>} opts.location the identifier of jobs location to query, as id
     * @param {Array.<Boolean>} opts.remote remote flag of jobs to query
     * @param {Array.<String>} opts.locationCity jobs city to query
     * @param {Array.<String>} opts.locationCountry jobs country to query
     * @param {Array.<String>} opts.locationState jobs state to query
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Job>} and HTTP response
     */

  }, {
    key: "getJobsWithHttpInfo",
    value: function getJobsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': this.apiClient.buildCollectionParam(opts['status'], 'csv'),
        'title': opts['title'],
        'type': opts['type'],
        'department': this.apiClient.buildCollectionParam(opts['department'], 'csv'),
        'location': this.apiClient.buildCollectionParam(opts['location'], 'csv'),
        'remote': this.apiClient.buildCollectionParam(opts['remote'], 'csv'),
        'location_city': this.apiClient.buildCollectionParam(opts['locationCity'], 'csv'),
        'location_country': this.apiClient.buildCollectionParam(opts['locationCountry'], 'csv'),
        'location_state': this.apiClient.buildCollectionParam(opts['locationState'], 'csv')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Job["default"]];
      return this.apiClient.callApi('/job_postings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Jobs List
     * List of jobs
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.status the status key
     * @param {String} opts.title Title of jobs to query
     * @param {String} opts.type type of jobs to query
     * @param {Array.<Number>} opts.department the identifier of jobs department to query, as id
     * @param {Array.<Number>} opts.location the identifier of jobs location to query, as id
     * @param {Array.<Boolean>} opts.remote remote flag of jobs to query
     * @param {Array.<String>} opts.locationCity jobs city to query
     * @param {Array.<String>} opts.locationCountry jobs country to query
     * @param {Array.<String>} opts.locationState jobs state to query
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Job>}
     */

  }, {
    key: "getJobs",
    value: function getJobs(opts) {
      return this.getJobsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return JobApi;
}();

exports["default"] = JobApi;