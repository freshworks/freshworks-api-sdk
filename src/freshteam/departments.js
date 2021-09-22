import DepartmentsApi from "../gen/freshteam/api/DepartmentsApi";

const departmentsApiInstance = new DepartmentsApi.DepartmentsApi();

export default function DepartmentsApi() {
  return {
    /**
     * Fetches the list of departments
     *
     * @returns {module.http-client~Response} - Response with departments list in the response body
     */
    async list() {
      return departmentsApiInstance.getDepartments();
    },

    /**
     * Get the details of a department
     *
     * @param {number} id - Identifier of the department
     * @returns {module.http-client~Response} - Response with department object in the response body
     */
    async get(id) {
      return departmentsApiInstance.getDepartment(id);
    }
  };
}
