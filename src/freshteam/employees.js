import { EmployeeApi, EmployeeFieldsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Employee, EmployeeCreate, EmployeeDetail, EmployeeField } from "./models";

export class Employees {
  /**
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new EmployeeApi(client.instance);
    /**
     * @private
     */
    this._fieldsApi = new EmployeeFieldsApi(client.instance);
  }
  /**
   * List all employees
   *
   * @public
   * @param {object} [query = {}] - Query parameters
   * @returns {Promise<Employee[]>} - Response with array of employees in the response body
   */
  async list(query = {}) {
    return this._api.getEmployees(query);
  }

  /**
   * Find the details of an employee by ID
   *
   * @param {number} id - Employee ID
   * @param {object} [query = {}] - Query parameters
   * @returns {Promise<EmployeeDetail>} - Response with an employee object in the response body, if found
   */
  async get(id, query = {}) {
    return this._api.getEmployee(id, query);
  }

  /**
   * Create an employee
   *
   * @param {EmployeeCreate} employee - An Employee object
   * @returns {Promise<Employee>} - Response with create employee object in the response body
   */
  async create(employee) {
    return this._api.createEmployee(employee);
  }
  /**
   * Update an existing employee data
   *
   * @param {number} id - Employee ID
   * @param {Employee} employee - Employee to update
   * @returns {Promise<Employee>} - Response with updated employee object in the response body, if found
   */
  async update(id, employee) {
    return this._api.updateEmployee(id, employee);
  }

  /**
   * List all employee fields
   *
   * @returns {Promise<EmployeeField[]>} - Response with list of employee fields
   */
  async fields() {
    return this._fieldsApi.getEmployeeFields();
  }

  /**
   * Create employee field
   *
   * @param {EmployeeFieldCreate} field - Request body
   * @returns {Promise<EmployeeField>}
   */
  async createField(field) {
    return this._fieldsApi.createEmployeeFiled(field); // It's a typo in the spec
  }
}
