import { SubDepartmentsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
import { SubDepartment } from "./models";

export class SubDepartments {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new SubDepartmentsApi(client.instance);
  }

  /**
   * Fetches the list of sub-departments
   *
   * @returns {Promise<Response<SubDepartment[]>>} - Array of Sub-Departments
   */
  async list() {
    return this._api.getSubDepartmentsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a sub-department
   *
   * @param {number} id - Identifier of the sub-department
   * @returns {Promise<Response<SubDepartment>>} - Sub-department object
   */
  async get(id) {
    return this._api.getSubDepartmentWithHttpInfo(id).then(res => intoResponse(res));
  }
}
