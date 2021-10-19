import { TimeoffApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { LeaveType, LeaveRequest, LeaveRequestCreate, LeaveRequestApprove, LeaveRequestReject } from "./models";

/**
 *
 * @param {Client} client
 */
export default function timeOffs(client) {
  const api = new TimeoffApi(client.instance);

  return {
    /**
     * Fetches the list of time off types in the account
     *
     * @returns {Promise<LeaveType[]>} - Array of time off types
     */
    async types() {
      return api.getTimeoffTypes();
    },

    /**
     * Fetches the time off request type by ID
     *
     * @param {number} id - Identifier of the time off type
     * @returns {Promise<LeaveType>} - The time off type
     */
    async type(id) {
      return api.getTimeoffType(id);
    },

    /**
     * Fetches the list of time off requests of employees in the account
     *
     * @param {object} [query = {}] - Query parameters
     * @returns {Promise<LeaveRequest>} - Response with time off requests list in the response body
     */
    async list(query = {}) {
      return api.getTimeoffs(query);
    },

    /**
     * Create a leave request
     *
     * @param {LeaveRequestCreate} leaveRequest - A leave request object
     * @returns {Promise<LeaveRequest>} - A leave request object
     */
    async create(leaveRequest) {
      return api.createTimeOff(leaveRequest);
    },

    /**
     * Fetches a leave request by id
     *
     * @param {number} id - Identifier of the time off request
     * @returns {Promise<LeaveRequest>} - A leave request object
     */
    async detail(id) {
      return api.getTimeoff(id);
    },

    /**
     * Cancels a leave request by id
     *
     * @param {number} id - Identifier of the time off request
     * @returns {Promise<null>} - Returns null if successful
     */
    async cancel(id) {
      return api.cancelTimeoff(id);
    },

    /**
     * Approve a leave request by id
     *
     * @param {number} id - Identifier of the time off request
     * @param {LeaveRequestApprove} options - Additional properties to approve the time off request
     * @returns {Promise<null>} - Returns null if successful
     */
    async approve(id, options) {
      return api.cancelTimeoff(id, options);
    },

    /**
     * Reject a leave request by id
     *
     * @param {number} id - Identifier of the time off request
     * @param {LeaveRequestReject} options - Additional properties to reject the time off request
     * @returns {Promise<null>} - Returns null if successful
     */
    async reject(id, options) {
      return api.rejectTimeoff(id, options);
    }
  };
}
