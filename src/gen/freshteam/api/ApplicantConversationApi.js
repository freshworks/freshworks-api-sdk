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
import ApplicantConversation from "../model/ApplicantConversation";
import ApplicantConversationCreate from "../model/ApplicantConversationCreate";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";

/**
 * ApplicantConversation service.
 * @module api/ApplicantConversationApi
 * @version 1.0.0
 */
export default class ApplicantConversationApi {
  /**
   * Constructs a new ApplicantConversationApi.
   * @alias module:api/ApplicantConversationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create an Applicant Conversation
   * Create an Applicant Conversation
   * @param {module:model/ApplicantConversationCreate} applicantConversation
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantConversation} and HTTP response
   */
  createApplicantConversationWithHttpInfo(applicantConversation, id) {
    let postBody = applicantConversation;
    // verify the required parameter 'applicantConversation' is set
    if (applicantConversation === undefined || applicantConversation === null) {
      throw new Error(
        "Missing the required parameter 'applicantConversation' when calling createApplicantConversation"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling createApplicantConversation");
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
    let returnType = ApplicantConversation;
    return this.apiClient.callApi(
      "/applicants/{id}/conversations",
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
   * Create an Applicant Conversation
   * Create an Applicant Conversation
   * @param {module:model/ApplicantConversationCreate} applicantConversation
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantConversation}
   */
  createApplicantConversation(applicantConversation, id) {
    return this.createApplicantConversationWithHttpInfo(applicantConversation, id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}