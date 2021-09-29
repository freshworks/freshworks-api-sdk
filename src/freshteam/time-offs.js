import TimeOffsApi from "../gen/freshteam/api/TimeOffsApi";

const timeOffsApiInstance = new TimeOffsApi.TimeOffsApi();

export default function TimeOffsApi() {
  return {
    /**
     * Fetches the list of time off types in the account
     *
     * @returns {module.http-client~Response} - Response with time off types list in the response body
     */
    async listTypes() {
      return timeOffsApiInstance.getTimeoffTypes();
    },

    /**
     * Fetches the time off request type
     *
     * @param {number} id - Identifier of the time off type
     * @returns {module.http-client~Response} - Response with time off type in the response body
     */
    async getType(id) {
      return timeOffsApiInstance.getTimeoffType(id);
    },

    /**
     * Fetches the list of time off requests of employees in the account
     *
     * @param {object} options - Options to get time off requests based on it
     * @returns {module.http-client~Response} - Response with time off requests list in the response body
     */
    async list(options) {
      return timeOffsApiInstance.getTimeoffs(options);
    },

    /**
     * Create a leave request
     *
     * @param {object} leaveRequest - Properties of the leave request
     * @returns {module.http-client~Response} - Response with leave request object in the response body
     */
    async create(leaveRequest) {
      return timeOffsApiInstance.createTimeOff({ leave_request: leaveRequest });
    },

    /**
     *
     * @param {number} id - Identifier of the time off request
     * @returns {module.http-client~Response} - Response with time off request object in the response body
     */
    async get(id) {
      return timeOffsApiInstance.getTimeoff(id);
    },

    /**
     *
     * @param {number} id - Identifier of the time off request
     * @returns {module.http-client~Response} - Response with an empty response body
     */
    async cancel(id) {
      return timeOffsApiInstance.cancelTimeoff(id);
    },

    /**
     *
     * @param {number} id - Identifier of the time off request
     * @param {object} options - Additional properties to approve the time off request
     * @returns {module.http-client~Response} - Response with an empty response body
     */
    async approve(id, options) {
      return timeOffsApiInstance.cancelTimeoff(id, { leaveRequest: options });
    },

    /**
     *
     * @param {number} id - Identifier of the time off request
     * @param {object} options - Additional properties to approve the time off request
     * @returns {module.http-client~Response} - Response with an empty response body
     */
    async reject(id, options) {
      return timeOffsApiInstance.rejectTimeoff(id, { leaveRequest: options });
    }
  };
}
