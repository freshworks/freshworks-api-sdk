import { TimeoffApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { LeaveType, LeaveRequest, LeaveRequestCreate, LeaveRequestReject, TimeOffsListQuery } from "./models";

export class TimeOffs {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new TimeoffApi(client.instance);
  }

  /**
   * Fetches the list of time off types in the account
   *
   * @returns {Promise<LeaveType[]>} - Array of time off types
   */
  async types() {
    return this._api.getTimeoffTypes();
  }

  /**
   * Fetches the time off request type by ID
   *
   * @param {number} id - Identifier of the time off type
   * @returns {Promise<LeaveType>} - The time off type
   */
  async type(id) {
    return this._api.getTimeoffType(id);
  }

  /**
   * Fetches the list of time off requests of employees in the account
   *
   * @param {TimeOffsListQuery} [query = {}] - Query parameters
   * @returns {Promise<LeaveRequest>} - Response with time off requests list in the response body
   */
  async list(query = {}) {
    return this._api.getTimeoffs(query);
  }

  /**
   * Create a leave request
   *
   * @param {LeaveRequestCreate} leaveRequest - A leave request object
   * @returns {Promise<LeaveRequest>} - A leave request object
   */
  async create(leaveRequest) {
    return this._api.createTimeOff(leaveRequest);
  }

  /**
   * Fetches a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @returns {Promise<LeaveRequest>} - A leave request object
   */
  async get(id) {
    return this._api.getTimeoff(id);
  }

  /**
   * Cancels a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @returns {Promise<null>} - Returns null if successful
   */
  async cancel(id) {
    return this._api.cancelTimeoff(id);
  }

  /**
   * Approve a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @param {LeaveRequest} options - Additional properties to approve the time off request
   * @returns {Promise<null>} - Returns null if successful
   */
  async approve(id, options = {}) {
    return this._api.cancelTimeoff(id, {
      leave_request: options
    });
  }

  /**
   * Reject a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @param {LeaveRequestReject} options - Additional properties to reject the time off request
   * @returns {Promise<null>} - Returns null if successful
   */
  async reject(id, options = {}) {
    return this._api.rejectTimeoff(id, {
      leave_request: options
    });
  }
}
