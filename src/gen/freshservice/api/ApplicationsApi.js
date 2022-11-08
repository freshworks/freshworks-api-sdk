/**
 * Freshservice
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ListApplicationInstallations200Response from "../model/ListApplicationInstallations200Response";
import ListApplicationLicenses200Response from "../model/ListApplicationLicenses200Response";
import ListApplications200Response from "../model/ListApplications200Response";
import ListDepartments401Response from "../model/ListDepartments401Response";

/**
 * Applications service.
 * @module api/ApplicationsApi
 * @version 2.0.1
 */
export default class ApplicationsApi {
  /**
   * Constructs a new ApplicationsApi.
   * @alias module:api/ApplicationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Retreive a specific software in Freshservice
   * Retreive a specific software in Freshservice
   * @param {Number} application_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListApplications200Response} and HTTP response
   */
  getApplicationWithHttpInfo(application_id) {
    let postBody = null;
    // verify the required parameter 'application_id' is set
    if (application_id === undefined || application_id === null) {
      throw new Error("Missing the required parameter 'application_id' when calling getApplication");
    }

    let pathParams = {
      application_id: application_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListApplications200Response;
    return this.apiClient.callApi(
      "/api/v2/applications/{application_id}",
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
   * Retreive a specific software in Freshservice
   * Retreive a specific software in Freshservice
   * @param {Number} application_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListApplications200Response}
   */
  getApplication(application_id) {
    return this.getApplicationWithHttpInfo(application_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all devices where the software is installed in
   * Get a list of all the devices where the software is installed in
   * @param {Number} application_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListApplicationInstallations200Response} and HTTP response
   */
  listApplicationInstallationsWithHttpInfo(application_id) {
    let postBody = null;
    // verify the required parameter 'application_id' is set
    if (application_id === undefined || application_id === null) {
      throw new Error("Missing the required parameter 'application_id' when calling listApplicationInstallations");
    }

    let pathParams = {
      application_id: application_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListApplicationInstallations200Response;
    return this.apiClient.callApi(
      "/api/v2/applications/{application_id}/installations",
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
   * List all devices where the software is installed in
   * Get a list of all the devices where the software is installed in
   * @param {Number} application_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListApplicationInstallations200Response}
   */
  listApplicationInstallations(application_id) {
    return this.listApplicationInstallationsWithHttpInfo(application_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all licenses linked to the software
   * Get a list of all the licenses where linked to the software
   * @param {Number} application_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListApplicationLicenses200Response} and HTTP response
   */
  listApplicationLicensesWithHttpInfo(application_id) {
    let postBody = null;
    // verify the required parameter 'application_id' is set
    if (application_id === undefined || application_id === null) {
      throw new Error("Missing the required parameter 'application_id' when calling listApplicationLicenses");
    }

    let pathParams = {
      application_id: application_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListApplicationLicenses200Response;
    return this.apiClient.callApi(
      "/api/v2/applications/{application_id}/licenses",
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
   * List all licenses linked to the software
   * Get a list of all the licenses where linked to the software
   * @param {Number} application_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListApplicationLicenses200Response}
   */
  listApplicationLicenses(application_id) {
    return this.listApplicationLicensesWithHttpInfo(application_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all Software  in Freshservice
   * Get a list of all the Software in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListApplications200Response} and HTTP response
   */
  listApplicationsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      per_page: opts["per_page"],
      page: opts["page"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListApplications200Response;
    return this.apiClient.callApi(
      "/api/v2/applications",
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
   * List all Software  in Freshservice
   * Get a list of all the Software in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListApplications200Response}
   */
  listApplications(opts) {
    return this.listApplicationsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
