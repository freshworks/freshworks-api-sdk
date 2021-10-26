import { SubDepartmentsApi } from "../gen/freshteam";
import { Client } from "../http-client";
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
   * @returns {Promise<SubDepartment[]>} - Array of Sub-Departments
   */
  async list() {
    return this._api.getSubDepartments();
  }

  /**
   * Get the details of a sub-department
   *
   * @param {number} id - Identifier of the sub-department
   * @returns {Promise<SubDepartment>} - Sub-department object
   */
  async get(id) {
    return this._api.getSubDepartment(id);
  }
}
