import EmployeeFieldsApi from "../gen/freshteam/api/EmployeeFieldsApi";

const employeeFieldsApiInstance = new EmployeeFieldsApi.EmployeeFieldsApi();

export default function EmployeeFieldsApi() {
  return {
    /**
     * Fetches the list of employee fields
     *
     * @returns {module.http-client~Response} - Response with employee fields list in the response body
     */
    async list() {
      return employeeFieldsApiInstance.getEmployeeFields();
    },

    /**
     * Create a custom field on employee properties
     *
     * @param {object} employeeField - Properties of the employee custom field
     * @returns {module.http-client~Response} - Response with custom field object in the response body
     */
    async create(employeeField) {
      return employeeFieldsApiInstance.createCandidateSources(employeeField);
    }
  };
}
