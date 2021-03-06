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
import EmployeeField from "../model/EmployeeField";
import EmployeeFields from "../model/EmployeeFields";
import InlineResponse400 from "../model/InlineResponse400";
import InlineResponse401 from "../model/InlineResponse401";
import InlineResponse403 from "../model/InlineResponse403";
import InlineResponse404 from "../model/InlineResponse404";
import InlineResponse422 from "../model/InlineResponse422";
import InlineResponse500 from "../model/InlineResponse500";

/**
 * EmployeeFields service.
 * @module api/EmployeeFieldsApi
 * @version 1.0.0
 */
export default class EmployeeFieldsApi {
  /**
   * Constructs a new EmployeeFieldsApi.
   * @alias module:api/EmployeeFieldsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create a Custom Field
   * Create a Custom Field in Employee Form
   * @param {Object} opts Optional parameters
   * @param {module:model/EmployeeFields} opts.employee_fields
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmployeeField} and HTTP response
   */
  createEmployeeFieldWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts["employee_fields"];

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = EmployeeField;
    return this.apiClient.callApi(
      "/employee_fields",
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
   * Create a Custom Field
   * Create a Custom Field in Employee Form
   * @param {Object} opts Optional parameters
   * @param {module:model/EmployeeFields} opts.employee_fields
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmployeeField}
   */
  createEmployeeField(opts) {
    return this.createEmployeeFieldWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Employee Fields List
   * List of active employee fields in the form
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/EmployeeField>} and HTTP response
   */
  getEmployeeFieldsWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [EmployeeField];
    return this.apiClient.callApi(
      "/employee_fields",
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
   * Employee Fields List
   * List of active employee fields in the form
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/EmployeeField>}
   */
  getEmployeeFields() {
    return this.getEmployeeFieldsWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
