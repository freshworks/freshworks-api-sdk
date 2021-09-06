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
import UserFunction from "../model/UserFunction";

/**
 * UserFunctions service.
 * @module api/UserFunctionsApi
 * @version 1.0.0
 */
export default class UserFunctionsApi {
  /**
   * Constructs a new UserFunctionsApi.
   * @alias module:api/UserFunctionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Get user function details
   * get user function details
   * @param {Number} id the user function identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserFunction} and HTTP response
   */
  getUserFunctionWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getUserFunction");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = UserFunction;
    return this.apiClient.callApi(
      "/user_functions/{id}",
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
   * Get user function details
   * get user function details
   * @param {Number} id the user function identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserFunction}
   */
  getUserFunction(id) {
    return this.getUserFunctionWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List of user functions
   * List of User Functions
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/UserFunction>} and HTTP response
   */
  getUserFunctionsWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [UserFunction];
    return this.apiClient.callApi(
      "/user_functions",
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
   * List of user functions
   * List of User Functions
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/UserFunction>}
   */
  getUserFunctions() {
    return this.getUserFunctionsWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
