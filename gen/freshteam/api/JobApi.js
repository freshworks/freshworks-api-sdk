/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ApplicantCreate from "../model/ApplicantCreate";
import ApplicantDetail from "../model/ApplicantDetail";
import ApplicantField from "../model/ApplicantField";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse404 from "../model/InlineResponse404";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";
import Job from "../model/Job";
import JobDetail from "../model/JobDetail";

/**
 * Job service.
 * @module api/JobApi
 * @version 1.0.0
 */
export default class JobApi {
  /**
   * Constructs a new JobApi.
   * @alias module:api/JobApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create an Applicant
   * Create an Applicant
   * @param {module:model/ApplicantCreate} employee
   * @param {Number} id the job_posting identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
   */
  createApplicantWithHttpInfo(employee, id) {
    let postBody = employee;
    // verify the required parameter 'employee' is set
    if (employee === undefined || employee === null) {
      throw new Error("Missing the required parameter 'employee' when calling createApplicant");
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling createApplicant");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ApplicantDetail;
    return this.apiClient.callApi(
      "/job_postings/{id}/applicants",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create an Applicant
   * Create an Applicant
   * @param {module:model/ApplicantCreate} employee
   * @param {Number} id the job_posting identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
   */
  createApplicant(employee, id) {
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
  getApplicantFieldsWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getApplicantFields");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [ApplicantField];
    return this.apiClient.callApi(
      "/job_postings/{id}/applicant_fields",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Applicant Fields List
   * List of active applicant fields in the form
   * @param {Number} id the job_posting identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ApplicantField>}
   */
  getApplicantFields(id) {
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
  getJobWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getJob");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = JobDetail;
    return this.apiClient.callApi(
      "/job_postings/{id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Details of Job
   * Get the Details of Job
   * @param {Number} id the job identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobDetail}
   */
  getJob(id) {
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
  getJobsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      status: this.apiClient.buildCollectionParam(opts["status"], "csv"),
      title: opts["title"],
      type: opts["type"],
      department: this.apiClient.buildCollectionParam(opts["department"], "csv"),
      location: this.apiClient.buildCollectionParam(opts["location"], "csv"),
      remote: this.apiClient.buildCollectionParam(opts["remote"], "csv"),
      location_city: this.apiClient.buildCollectionParam(opts["locationCity"], "csv"),
      location_country: this.apiClient.buildCollectionParam(opts["locationCountry"], "csv"),
      location_state: this.apiClient.buildCollectionParam(opts["locationState"], "csv")
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [Job];
    return this.apiClient.callApi(
      "/job_postings",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
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
  getJobs(opts) {
    return this.getJobsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
