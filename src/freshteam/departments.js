import { DepartmentsApi } from "../gen/freshteam";
import { Client } from "../http-client";
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
   * @returns {Promise<Department[]>} - Response with departments list in the response body
   */
  async list() {
    return this._api.getDepartments();
  }

  /**
   * Get the details of a department
   *
   * @param {number} id - Identifier of the department
   * @returns {Promise<Department>} - Response with department object in the response body
   */
  async get(id) {
    return this._api.getDepartment(id);
  }
}
