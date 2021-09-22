import SubDepartmentsApi from "../gen/freshteam/api/SubDepartmentsApi";

const subDepartmentsApiInstance = new SubDepartmentsApi.SubDepartmentsApi();

export default function subDepartments() {
  return {
    /**
     * Fetches the list of sub-departments
     *
     * @returns {module.http-client~Response} - Response with sub-departments list in the response body
     */
    async list() {
      return subDepartmentsApiInstance.getSubDepartments();
    },

    /**
     * Get the details of a sub-department
     *
     * @param {number} id - Identifier of the sub-department
     * @returns {module.http-client~Response} - Response with sub-department object in the response body
     */
    async get(id) {
      return subDepartmentsApiInstance.getSubDepartment(id);
    }
  };
}
