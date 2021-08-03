module.exports = function (client) {
  return {
    /**
     * List all employees
     *
     * @param {object} [query = {}] - Query parameters
     * @returns {module.http-client~Response} - Response with array of employees in the response body
     */
    async list(query = {}) {
      return client.get("/employees", query);
    },

    /**
     * Create an employee
     *
     * @param {object} data - Request body
     * @returns {module.http-client~Response} - Response with create employee object in the response body
     */
    async create(data) {
      return client.post("/employees", data);
    },

    /**
     * Find an employee by ID
     *
     * @param {number} id - Employee ID
     * @param {object} [query = {}] - Query parameters
     * @returns {module.http-client~Response} - Response with an employee object in the response body, if found
     */
    async find(id, query = {}) {
      return client.get(`/employees/${id}`, query);
    },

    /**
     * Update an existing employee data
     *
     * @param {number} id - Employee ID
     * @param {object} data - Request body
     * @returns {module.http-client~Response} - Response with updated employee object in the response body, if found
     */
    async update(id, data) {
      return client.post(`/employees/${id}`, data);
    },

    /**
     * List all employee fields
     *
     * @returns {module.http-client~Response} - Response with list of employee fields
     */
    async fields() {
      return client.get("/employee_fields");
    },

    /**
     * Create employee field
     *
     * @param {object} data - Request body
     * @returns {module.http-client~Response}
     */
    async createField(data) {
      return client.post("/employee_fields", data);
    }
  };
};
