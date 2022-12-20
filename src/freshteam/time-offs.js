import { TimeoffApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
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
   * @returns {Promise<Response<LeaveType[]>>} - Array of time off types
   */
  async types() {
    return this._api.getTimeoffTypesWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Fetches the time off request type by ID
   *
   * @param {number} id - Identifier of the time off type
   * @returns {Promise<Response<LeaveType>>} - The time off type
   */
  async type(id) {
    return this._api.getTimeoffTypeWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Fetches the list of time off requests of employees in the account
   *
   * @param {TimeOffsListQuery} [query = {}] - Query parameters
   * @returns {Promise<Response<LeaveRequest>>} - Response with time off requests list in the response body
   */
  async list(query = {}) {
    return this._api.getTimeoffsWithHttpInfo(query).then(res => intoResponse(res));
  }

  /**
   * Create a leave request
   *
   * @param {LeaveRequestCreate} leaveRequest - A leave request object
   * @returns {Promise<Response<LeaveRequest>>} - A leave request object
   */
  async create(leaveRequest) {
    return this._api.createTimeOffWithHttpInfo(leaveRequest).then(res => intoResponse(res));
  }

  /**
   * Fetches a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @returns {Promise<Response<LeaveRequest>>} - A leave request object
   */
  async get(id) {
    return this._api.getTimeoffWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Cancels a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @returns {Promise<Response<null>>} - Returns null if successful
   */
  async cancel(id) {
    return this._api.cancelTimeoffWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Approve a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @param {LeaveRequest} options - Additional properties to approve the time off request
   * @returns {Promise<Response<null>>} - Returns null if successful
   */
  async approve(id, options = {}) {
    return this._api
      .cancelTimeoffWithHttpInfo(id, {
        leave_request: options
      })
      .then(res => intoResponse(res));
  }

  /**
   * Reject a leave request by id
   *
   * @param {number} id - Identifier of the time off request
   * @param {LeaveRequestReject} options - Additional properties to reject the time off request
   * @returns {Promise<Response<null>>} - Returns null if successful
   */
  async reject(id, options = {}) {
    return this._api
      .rejectTimeoffWithHttpInfo(id, {
        leave_request: options
      })
      .then(res => intoResponse(res));
  }
}
