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
import CreateDepartment200Response from "../model/CreateDepartment200Response";
import Department from "../model/Department";
import ListDepartmentFields200Response from "../model/ListDepartmentFields200Response";
import ListDepartments200Response from "../model/ListDepartments200Response";
import ListDepartments401Response from "../model/ListDepartments401Response";

/**
 * Departments service.
 * @module api/DepartmentsApi
 * @version 2.0.1
 */
export default class DepartmentsApi {
  /**
   * Constructs a new DepartmentsApi.
   * @alias module:api/DepartmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Department
   * Create a new Department (or Company in MSP Mode) in Freshservice
   * @param {module:model/Department} department Department that needs to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateDepartment200Response} and HTTP response
   */
  createDepartmentWithHttpInfo(department) {
    let postBody = department;
    // verify the required parameter 'department' is set
    if (department === undefined || department === null) {
      throw new Error("Missing the required parameter 'department' when calling createDepartment");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateDepartment200Response;
    return this.apiClient.callApi(
      "/api/v2/departments",
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
   * Create Department
   * Create a new Department (or Company in MSP Mode) in Freshservice
   * @param {module:model/Department} department Department that needs to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateDepartment200Response}
   */
  createDepartment(department) {
    return this.createDepartmentWithHttpInfo(department).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete Department
   * Delete the Department (or Company in MSP Mode) with the given ID from Freshservice
   * @param {Number} department_id ID of department to delete
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteDepartmentWithHttpInfo(department_id) {
    let postBody = null;
    // verify the required parameter 'department_id' is set
    if (department_id === undefined || department_id === null) {
      throw new Error("Missing the required parameter 'department_id' when calling deleteDepartment");
    }

    let pathParams = {
      department_id: department_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["*/*"];
    let returnType = null;
    return this.apiClient.callApi(
      "/api/v2/departments/{department_id}",
      "DELETE",
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
   * Delete Department
   * Delete the Department (or Company in MSP Mode) with the given ID from Freshservice
   * @param {Number} department_id ID of department to delete
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteDepartment(department_id) {
    return this.deleteDepartmentWithHttpInfo(department_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * View Department
   * Retrieve the Department (or Company in MSP Mode) with the given ID from Freshservice
   * @param {Number} department_id ID of department to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateDepartment200Response} and HTTP response
   */
  getDepartmentWithHttpInfo(department_id) {
    let postBody = null;
    // verify the required parameter 'department_id' is set
    if (department_id === undefined || department_id === null) {
      throw new Error("Missing the required parameter 'department_id' when calling getDepartment");
    }

    let pathParams = {
      department_id: department_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = CreateDepartment200Response;
    return this.apiClient.callApi(
      "/api/v2/departments/{department_id}",
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
   * View Department
   * Retrieve the Department (or Company in MSP Mode) with the given ID from Freshservice
   * @param {Number} department_id ID of department to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateDepartment200Response}
   */
  getDepartment(department_id) {
    return this.getDepartmentWithHttpInfo(department_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List Department Fields
   * Retrieve the Department Fields (or Company Fields in MSP Mode) from Freshservice. The fields will be returned in the sequence that they are displayed on the UI.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDepartmentFields200Response} and HTTP response
   */
  listDepartmentFieldsWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListDepartmentFields200Response;
    return this.apiClient.callApi(
      "/api/v2/department_fields",
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
   * List Department Fields
   * Retrieve the Department Fields (or Company Fields in MSP Mode) from Freshservice. The fields will be returned in the sequence that they are displayed on the UI.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDepartmentFields200Response}
   */
  listDepartmentFields() {
    return this.listDepartmentFieldsWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List All Departments
   * Retrieve a list of all Departments (or Companies in MSP Mode) in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDepartments200Response} and HTTP response
   */
  listDepartmentsWithHttpInfo(opts) {
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
    let returnType = ListDepartments200Response;
    return this.apiClient.callApi(
      "/api/v2/departments",
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
   * List All Departments
   * Retrieve a list of all Departments (or Companies in MSP Mode) in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDepartments200Response}
   */
  listDepartments(opts) {
    return this.listDepartmentsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update Department
   * Update an existing Department (or Company in MSP Mode) in Freshservice
   * @param {module:model/Department} department Department that needs to be created
   * @param {Number} department_id ID of department to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateDepartment200Response} and HTTP response
   */
  updateDepartmentWithHttpInfo(department, department_id) {
    let postBody = department;
    // verify the required parameter 'department' is set
    if (department === undefined || department === null) {
      throw new Error("Missing the required parameter 'department' when calling updateDepartment");
    }
    // verify the required parameter 'department_id' is set
    if (department_id === undefined || department_id === null) {
      throw new Error("Missing the required parameter 'department_id' when calling updateDepartment");
    }

    let pathParams = {
      department_id: department_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = CreateDepartment200Response;
    return this.apiClient.callApi(
      "/api/v2/departments/{department_id}",
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
   * Update Department
   * Update an existing Department (or Company in MSP Mode) in Freshservice
   * @param {module:model/Department} department Department that needs to be created
   * @param {Number} department_id ID of department to retrieve
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateDepartment200Response}
   */
  updateDepartment(department, department_id) {
    return this.updateDepartmentWithHttpInfo(department, department_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
