/**
 * @module Freshteam/departments
 */

import { DepartmentsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Department } from "./models";

/**
 *
 * @param {Client} client
 * @hideconstructor
 */
export default function departments(client) {
  const api = new DepartmentsApi(client.instance);

  return {
    /**
     * Fetches the list of departments
     *
     * @returns {Promise<Department[]>} - Response with departments list in the response body
     */
    async list() {
      return api.getDepartments();
    },

    /**
     * Get the details of a department
     *
     * @param {number} id - Identifier of the department
     * @returns {Promise<Department>} - Response with department object in the response body
     */
    async get(id) {
      return api.getDepartment(id);
    }
  };
}
