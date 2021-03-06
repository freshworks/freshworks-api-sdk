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
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse404 from "../model/InlineResponse404";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";
import InterviewDetail from "../model/InterviewDetail";

/**
 * Interview service.
 * @module api/InterviewApi
 * @version 1.0.0
 */
export default class InterviewApi {
  /**
   * Constructs a new InterviewApi.
   * @alias module:api/InterviewApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Details of Interview
   * Get the Details of an Interview
   * @param {Number} id the interview identifier, as id
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InterviewDetail} and HTTP response
   */
  getInterviewWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getInterview");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {
      include: this.apiClient.buildCollectionParam(opts["include"], "csv")
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = InterviewDetail;
    return this.apiClient.callApi(
      "/interviews/{id}",
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
   * Details of Interview
   * Get the Details of an Interview
   * @param {Number} id the interview identifier, as id
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.include Additional Properties to include in response
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InterviewDetail}
   */
  getInterview(id, opts) {
    return this.getInterviewWithHttpInfo(id, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
