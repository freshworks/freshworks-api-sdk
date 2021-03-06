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
import SubDepartment from "../model/SubDepartment";

/**
 * SubDepartments service.
 * @module api/SubDepartmentsApi
 * @version 1.0.0
 */
export default class SubDepartmentsApi {
  /**
   * Constructs a new SubDepartmentsApi.
   * @alias module:api/SubDepartmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Get Sub Department Details
   * Get the Details of Sub Department in the Account
   * @param {Number} id the sub department identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubDepartment} and HTTP response
   */
  getSubDepartmentWithHttpInfo(id) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getSubDepartment");
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
    let returnType = SubDepartment;
    return this.apiClient.callApi(
      "/sub_departments/{id}",
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
   * Get Sub Department Details
   * Get the Details of Sub Department in the Account
   * @param {Number} id the sub department identifier, as id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubDepartment}
   */
  getSubDepartment(id) {
    return this.getSubDepartmentWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Sub Departments List
   * List of Sub Departments in the Account
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SubDepartment>} and HTTP response
   */
  getSubDepartmentsWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [SubDepartment];
    return this.apiClient.callApi(
      "/sub_departments",
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
   * Sub Departments List
   * List of Sub Departments in the Account
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SubDepartment>}
   */
  getSubDepartments() {
    return this.getSubDepartmentsWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
