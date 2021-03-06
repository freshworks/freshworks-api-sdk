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
import ApplicantEmail from "../model/ApplicantEmail";
import ApplicantEmailCreate from "../model/ApplicantEmailCreate";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";

/**
 * ApplicantEmail service.
 * @module api/ApplicantEmailApi
 * @version 1.0.0
 */
export default class ApplicantEmailApi {
  /**
   * Constructs a new ApplicantEmailApi.
   * @alias module:api/ApplicantEmailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create an Applicant Email
   * Create an Applicant Email
   * @param {module:model/ApplicantEmailCreate} applicant_email
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicantEmail} and HTTP response
   */
  createApplicantEmailWithHttpInfo(applicant_email, id) {
    let postBody = applicant_email;
    // verify the required parameter 'applicant_email' is set
    if (applicant_email === undefined || applicant_email === null) {
      throw new Error("Missing the required parameter 'applicant_email' when calling createApplicantEmail");
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling createApplicantEmail");
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
    let returnType = ApplicantEmail;
    return this.apiClient.callApi(
      "/applicants/{id}/emails",
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
   * Create an Applicant Email
   * Create an Applicant Email
   * @param {module:model/ApplicantEmailCreate} applicant_email
   * @param {Number} id the applicant identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicantEmail}
   */
  createApplicantEmail(applicant_email, id) {
    return this.createApplicantEmailWithHttpInfo(applicant_email, id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
