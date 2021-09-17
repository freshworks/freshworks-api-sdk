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
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";
import SourceCategory from "../model/SourceCategory";

/**
 * SourceCategories service.
 * @module api/SourceCategoriesApi
 * @version 1.0.0
 */
export default class SourceCategoriesApi {
  /**
   * Constructs a new SourceCategoriesApi.
   * @alias module:api/SourceCategoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * List of source categories
   * List of source categories
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SourceCategory>} and HTTP response
   */
  getSourceCategoriesWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [SourceCategory];
    return this.apiClient.callApi(
      "/candidate_source_categories",
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
   * List of source categories
   * List of source categories
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SourceCategory>}
   */
  getSourceCategories() {
    return this.getSourceCategoriesWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}