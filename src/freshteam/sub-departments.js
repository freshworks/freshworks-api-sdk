import { SubDepartmentsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { SubDepartment } from "./models";


/**
 * @param {Client} client
 */
export default function subDepartments(client) {
  const api = new SubDepartmentsApi.SubDepartmentsApi(client.instance);
  
  return {
    /**
     * Fetches the list of sub-departments
     *
     * @returns {Promise.<SubDepartment[]>} - Array of Sub-Departments
     */
    async list() {
      return api.getSubDepartments();
    },

    /**
     * Get the details of a sub-department
     *
     * @param {number} id - Identifier of the sub-department
     * @returns {Promise.<SubDepartment>} - Sub-department object
     */
    async detail(id) {
      return api.getSubDepartment(id);
    }
  };
}
