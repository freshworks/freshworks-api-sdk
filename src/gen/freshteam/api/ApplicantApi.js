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
import Applicant from "../model/Applicant";
import Applicant1 from "../model/Applicant1";
import ApplicantDetail from "../model/ApplicantDetail";
import ApplicantUpdate from "../model/ApplicantUpdate";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse404 from "../model/InlineResponse404";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";

/**
 * Applicant service.
 * @module api/ApplicantApi
 * @version 1.0.0
 */
export default class ApplicantApi {
  /**
   * Constructs a new ApplicantApi.
   * @alias module:api/ApplicantApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Archive Applicant
   * Archive Applicant
   * @param {Number} id the applicant identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/Applicant} opts.applicant
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
   */
  archiveApplicantWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = opts["applicant"];
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling archiveApplicant");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = ApplicantDetail;
    return this.apiClient.callApi(
      "/applicants/{id}/archive",
      "PUT",
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
   * Archive Applicant
   * Archive Applicant
   * @param {Number} id the applicant identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/Applicant} opts.applicant
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
   */
  archiveApplicant(id, opts) {
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
  getApplicantWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getApplicant");
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
      "/applicants/{id}",
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
   * Get an Applicant
   * Get an Applicant
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
   */
  getApplicant(id) {
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
   * @param {Array.<Number>} opts.followers_id the identifier of followers of applicant, as Id
   * @param {String} opts.candidate_first_name  First Name of candidate to query
   * @param {String} opts.candidate_last_name Last Name of candidate to query
   * @param {String} opts.candidate_email Email of candidate to query
   * @param {Array.<Number>} opts.candidate_source the identifier of source of candidate or source of the candidate's job application, as Id
   * @param {Array.<Number>} opts.candidate_source_category the identifier of source_category of candidate or source_category of the candidate's job application, as Id
   * @param {Array.<Number>} opts.candidate_owner the identifier of owner of candidate, as Id
   * @param {Array.<String>} opts.candidate_city candidate city to query
   * @param {Array.<String>} opts.candidate_country_code candidate country code to query
   * @param {Array.<String>} opts.candidate_tags candidate tags to query
   * @param {Array.<String>} opts.candidate_skills candidate skills to query
   * @param {Array.<String>} opts.candidate_positions_company candidate companies to query
   * @param {Array.<String>} opts.candidate_positions_title candidate positions title to query
   * @param {Array.<module:model/String>} opts.candidate_rating candidate rating to query
   * @param {Array.<Number>} opts.candidate_referred_by the identifier of referred_by of candidate, as Id
   * @param {Boolean} opts.candidate_has_email candidate email exists
   * @param {Boolean} opts.candidate_responded has candidate responded
   * @param {Boolean} opts.candidate_spam blocked candidate
   * @param {Array.<Number>} opts.requisition_id the identifier of requisition of applicants, as Id
   * @param {Date} opts.created_at applicant created_at
   * @param {Date} opts.created_since applicant created_since
   * @param {Date} opts.updated_since applicant updated_since
   * @param {Boolean} opts.deleted the identifier of applicant deleted
   * @param {Number} opts.page page number
   * @param {module:model/String} opts.sort Sort By
   * @param {module:model/String} opts.sort_type Sort Type
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Applicant>} and HTTP response
   */
  getApplicantsWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getApplicants");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {
      status: this.apiClient.buildCollectionParam(opts["status"], "csv"),
      stage: this.apiClient.buildCollectionParam(opts["stage"], "csv"),
      followers_id: this.apiClient.buildCollectionParam(opts["followers_id"], "multi"),
      candidate_first_name: opts["candidate_first_name"],
      candidate_last_name: opts["candidate_last_name"],
      candidate_email: opts["candidate_email"],
      candidate_source: this.apiClient.buildCollectionParam(opts["candidate_source"], "multi"),
      candidate_source_category: this.apiClient.buildCollectionParam(opts["candidate_source_category"], "multi"),
      candidate_owner: this.apiClient.buildCollectionParam(opts["candidate_owner"], "multi"),
      candidate_city: this.apiClient.buildCollectionParam(opts["candidate_city"], "csv"),
      candidate_country_code: this.apiClient.buildCollectionParam(opts["candidate_country_code"], "multi"),
      candidate_tags: this.apiClient.buildCollectionParam(opts["candidate_tags"], "multi"),
      candidate_skills: this.apiClient.buildCollectionParam(opts["candidate_skills"], "multi"),
      candidate_positions_company: this.apiClient.buildCollectionParam(opts["candidate_positions_company"], "multi"),
      candidate_positions_title: this.apiClient.buildCollectionParam(opts["candidate_positions_title"], "multi"),
      candidate_rating: this.apiClient.buildCollectionParam(opts["candidate_rating"], "multi"),
      candidate_referred_by: this.apiClient.buildCollectionParam(opts["candidate_referred_by"], "multi"),
      candidate_has_email: opts["candidate_has_email"],
      candidate_responded: opts["candidate_responded"],
      candidate_spam: opts["candidate_spam"],
      requisition_id: this.apiClient.buildCollectionParam(opts["requisition_id"], "multi"),
      created_at: opts["created_at"],
      created_since: opts["created_since"],
      updated_since: opts["updated_since"],
      deleted: opts["deleted"],
      page: opts["page"],
      sort: opts["sort"],
      sort_type: opts["sort_type"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [Applicant];
    return this.apiClient.callApi(
      "/job_postings/{id}/applicants",
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
   * Applicants List
   * Get all Applicants
   * @param {Number} id the job_posting identifier, as id
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.status the status key
   * @param {Array.<Number>} opts.stage the identifier of Stage of applicants, as Id
   * @param {Array.<Number>} opts.followers_id the identifier of followers of applicant, as Id
   * @param {String} opts.candidate_first_name  First Name of candidate to query
   * @param {String} opts.candidate_last_name Last Name of candidate to query
   * @param {String} opts.candidate_email Email of candidate to query
   * @param {Array.<Number>} opts.candidate_source the identifier of source of candidate or source of the candidate's job application, as Id
   * @param {Array.<Number>} opts.candidate_source_category the identifier of source_category of candidate or source_category of the candidate's job application, as Id
   * @param {Array.<Number>} opts.candidate_owner the identifier of owner of candidate, as Id
   * @param {Array.<String>} opts.candidate_city candidate city to query
   * @param {Array.<String>} opts.candidate_country_code candidate country code to query
   * @param {Array.<String>} opts.candidate_tags candidate tags to query
   * @param {Array.<String>} opts.candidate_skills candidate skills to query
   * @param {Array.<String>} opts.candidate_positions_company candidate companies to query
   * @param {Array.<String>} opts.candidate_positions_title candidate positions title to query
   * @param {Array.<module:model/String>} opts.candidate_rating candidate rating to query
   * @param {Array.<Number>} opts.candidate_referred_by the identifier of referred_by of candidate, as Id
   * @param {Boolean} opts.candidate_has_email candidate email exists
   * @param {Boolean} opts.candidate_responded has candidate responded
   * @param {Boolean} opts.candidate_spam blocked candidate
   * @param {Array.<Number>} opts.requisition_id the identifier of requisition of applicants, as Id
   * @param {Date} opts.created_at applicant created_at
   * @param {Date} opts.created_since applicant created_since
   * @param {Date} opts.updated_since applicant updated_since
   * @param {Boolean} opts.deleted the identifier of applicant deleted
   * @param {Number} opts.page page number
   * @param {module:model/String} opts.sort Sort By
   * @param {module:model/String} opts.sort_type Sort Type
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Applicant>}
   */
  getApplicants(id, opts) {
    return this.getApplicantsWithHttpInfo(id, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * sub stage update
   * Applicant sub stage update
   * @param {Number} id the applicant identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/Applicant1} opts.applicant
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantDetail} and HTTP response
   */
  moveSubStageWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = opts["applicant"];
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling moveSubStage");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = ApplicantDetail;
    return this.apiClient.callApi(
      "/applicants/{id}/move_sub_stage",
      "PUT",
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
   * sub stage update
   * Applicant sub stage update
   * @param {Number} id the applicant identifier, as id
   * @param {Object} opts Optional parameters
   * @param {module:model/Applicant1} opts.applicant
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
   */
  moveSubStage(id, opts) {
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
  updateApplicantWithHttpInfo(applicant, id) {
    let postBody = applicant;
    // verify the required parameter 'applicant' is set
    if (applicant === undefined || applicant === null) {
      throw new Error("Missing the required parameter 'applicant' when calling updateApplicant");
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling updateApplicant");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = ApplicantDetail;
    return this.apiClient.callApi(
      "/applicants/{id}",
      "PUT",
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
   * Update an Applicant
   * Update an Applicant
   * @param {module:model/ApplicantUpdate} applicant
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantDetail}
   */
  updateApplicant(applicant, id) {
    return this.updateApplicantWithHttpInfo(applicant, id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
