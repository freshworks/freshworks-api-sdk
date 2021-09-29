import { EmployeeApi, EmployeeCreate, EmployeeFieldsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Employee, EmployeeDetail, EmployeeField } from "./models";

/**
 * @param {Client} _client
 */
export default function employees(_client) {
  let api = new EmployeeApi();
  let fieldsApi = new EmployeeFieldsApi();

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
     * Create an employee
     *
     * @param {EmployeeCreate} employee - Request body
     * @returns {Promise<Employee>} - Response with create employee object in the response body
     */
    async create(employee) {
      return api.createEmployee(employee);
    },

    /**
     * Update an existing employee data
     *
     * @param {number} id - Employee ID
     * @param {Employee} employee - Employee to update
     * @returns {Promise<Employee>} - Response with updated employee object in the response body, if found
     */
    async update(id, employee) {
      return api.updateEmployee(id, employee);
    },

    /**
     * List all employee fields
     *
     * @returns {Promise<EmployeeField[]>} - Response with list of employee fields
     */
    async fields() {
      return fieldsApi.getEmployeeFields();
    },

    /**
     * Create employee field
     *
     * @param {EmployeeFieldCreate} field - Request body
     * @returns {Promise<EmployeeField>}
     */
    async createField(field) {
      return fieldsApi.createEmployeeFiled(field); // It's a typo in the spec
    }
  };
}
