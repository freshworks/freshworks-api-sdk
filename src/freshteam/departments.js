import { DepartmentsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
import { Department } from "./models";

export class Departments {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new DepartmentsApi(client.instance);
  }

  /**
   * Fetches the list of departments
   *
   * @returns {Promise<Response<Department[]>>} - Response with departments list in the response body
   */
  async list() {
    return this._api.getDepartmentsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a department
   *
   * @param {number} id - Identifier of the department
   * @returns {Promise<Response<Department>>} - Response with department object in the response body
   */
  async get(id) {
    return this._api.getDepartmentWithHttpInfo(id).then(res => intoResponse(res));
  }
}
