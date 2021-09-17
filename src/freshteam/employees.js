import { EmployeeApi, EmployeeDetail, EmployeeFieldsApi } from "../gen/freshteam";

export default function employees(client) {

  let api = new EmployeeApi();
  let fieldsApi = new EmployeeFieldsApi()

  return {
    /**
     * List all employees
     *
     * @param {object} [query = {}] - Query parameters
     * @returns {Promise<Employee[]>} - Response with array of employees in the response body
     */
    async list(query = {}) {
      return api.getEmployees(query);
    },

    /**
     * Create an employee
     *
     * @param {Employee} data - Request body
     * @returns {Promise<Employee>} - Response with create employee object in the response body
     */
    async create(data) {
      return api.createEmployee(data);
    },

    /**
     * Find the details of an employee by ID
     *
     * @param {number} id - Employee ID
     * @param {object} [query = {}] - Query parameters
     * @returns {Promise<EmployeeDetail>} - Response with an employee object in the response body, if found
     */
    async detail(id, query = {}) {
      return api.getEmployee(id, query);
    },

    /**
     * Update an existing employee data
     *
     * @param {number} id - Employee ID
     * @param {object} data - Request body
     * @returns {module.http-client~Response} - Response with updated employee object in the response body, if found
     */
    async update(id, data) {
      return api.updateEmployee(id, data);
    },

    /**
     * List all employee fields
     *
     * @returns {Promise<T>} - Response with list of employee fields
     */
    async fields() {
      return fieldsApi.getEmployeeFields();
    },

    /**
     * Create employee field
     *
     * @param {object} data - Request body
     * @returns {module.http-client~Response}
     */
    async createField(data) {
      return fieldsApi.createEmployeeFiled(data);
    }
  };
}
