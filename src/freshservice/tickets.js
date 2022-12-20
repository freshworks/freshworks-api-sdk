import { intoResponse } from "../freshteam/common";
import { TicketsApi } from "../gen/freshservice";
import { Client, Response } from "../http-client";
import { TicketsQuery, TimeEntry, PaginationQuery, Tickets, Ticket, TicketSource, Task, Tasks } from "./models";

export class TicketUtil {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new TicketsApi(client.instance);
  }

  /**
   * List all Tickets - Fetch the list of all Tickets in FreshService
   * @param {TicketsQuery} [query] - Options to filter applicants
   * @returns {Promise<Response<Tickets>>} - Response with applicants list in the response body
   */
  async list(query = {}) {
    return this._api.listTicketsWithHttpInfo(query).then(res => intoResponse(res));
  }

  /**
   * Create a new Ticket in Freshservice
   * @param {Ticket} ticket - details of the Freshservice Ticket to be created
   * @returns {Promise<Response<Ticket>>} - Returns a promise with data of type Freshservice.models.Ticket
   */
  async create(ticket) {
    return this._api.createTicketWithHttpInfo(ticket).then(res => intoResponse(res));
  }

  /**
   *  View a Ticket - Get the details of a FreshService Ticket
   * @param {Number} id - Identifier of the ticket
   * @param {Object} [opts] Optional parameters
   * @param {String} [opts.include] Query param to include certain fields in response. E.g. '?include=stats' Will return the ticket’s closed_at, resolved_at and first_responded_at time. '?include=requester' Will return the requester's email, id, mobile, name, and phone. Supported options - [conversations, requester, problem, stats, assets, change, related_tickets]
   * @returns {Promise<Response<Tickets>>} - Response with applicants list in the response body
   */
  async get(id, opts = {}) {
    return this._api.getTicketWithHttpInfo(id, opts).then(res => intoResponse(res));
  }

  /**
   *
   * @param {Number} id - ID of the ticket to be updated
   * @param {Ticket} ticket - Details of the ticket to be updated
   * @returns {Promise<Response<Ticket>>} - Updated ticket information for ticket with given ID
   */
  async update(id, ticket) {
    return this._api.updateTicketWithHttpInfo(ticket, id).then(res => intoResponse(res));
  }

  /**
   *
   * @param {Number} id - ID of the ticket to be deleted
   * @return {Promise<Response>} - returns a Promise
   */
  async delete(id) {
    return this._api.deleteTicketWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Restore a deleted Freshservice Ticket
   * @param {Number} id - ID of the ticket to be restored
   * @return {Promise<Response>} - returns a Promise
   */
  async restoreTicket(id) {
    return this._api.restoreTicketWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Create a new child Ticket on an existing Freshservice Ticket
   * @param {Number} parentId - ID of ticket request for which child ticket needs to be created (Parent Ticket ID)
   * @param {Ticket} childTicket - details of child ticket to be created
   * @returns {Promise<Response<Ticket>>} - Returns a promise with data of type Freshservice.models.Ticket
   */
  async createChildTicket(parentId, childTicket) {
    return this._api.createChildTicketWithHttpInfo(childTicket, parentId).then(res => intoResponse(res));
  }

  /**
   * View a time entry on a ticket with the given ID from Freshservice
   * @param {Number} ticketId - ID of ticket
   * @param {Number} timeEntryId - ID of the time entry
   * @returns {Promise<Response<TimeEntry>>} - Returns a promise with data of type Freshservice.models.TimeEntry
   */
  async timeEntry(ticketId, timeEntryId) {
    return this._api.getTicketTimeEntryWithHttpInfo(ticketId, timeEntryId).then(res => intoResponse(res));
  }

  /**
   * View all time entries on ticket with the given ID from Freshservice
   * @param {Number} ticketId
   * @param {PaginationQuery} [opts] - Options to filter TimeEntry results in pagewise manner. Default page is 1 and default number of entries are 30.
   * @returns {Promise<Response<TimeEntries>>} -  Returns a promise with data of type Freshservice.models.TimeEntries
   */
  async timeEntries(ticketId, opts = {}) {
    return this._api.listTicketTimeEntriesWithHttpInfo(ticketId, opts).then(res => intoResponse(res));
  }

  /**
   * Create a new time entry on a freshservice ticket
   * @param {Number} ticketId - ID of ticket request for which time entries are to be added
   * @param {TimeEntry} timeEntry -  details of time entry to be created
   * @returns {Promise<Response<TimeEntry>>} - Returns promise with type Freshservice.models.TimeEntry
   */
  async createTimeEntry(ticketId, timeEntry) {
    return this._api.createTicketTimeEntryWithHttpInfo(timeEntry, ticketId).then(res => intoResponse(res));
  }

  /**
   * Create a new time entry on a freshservice ticket
   * @param {Number} ticketId - ID of ticket request for which time entries are to be retrieved
   * @param {Number} timeEntryId - ID of the time entry to be updated
   * @param {TimeEntry} timeEntry -  details of time entry to be updated
   * @returns {Promise<Response<TimeEntry>>} - Returns promise with type Freshservice.models.TimeEntry
   */
  async updateTimeEntry(ticketId, timeEntryId, timeEntry) {
    return this._api.updateTicketTimeEntryWithHttpInfo(timeEntry, ticketId, timeEntryId).then(res => intoResponse(res));
  }

  /**
   * Remove a time entry on a freshservice ticket
   * @param {Number} ticketId - ID of ticket request for which time entries are to be retrieved
   * @param {Number} timeEntryId - ID of the time entry to be updated
   * @returns {Promise<Response>} - Returns promise with no content and status 200 OK
   */
  async deleteTimeEntry(ticketId, timeEntryId) {
    return this._api.deleteTicketTimeEntryWithHttpInfo(ticketId, timeEntryId).then(res => intoResponse(res));
  }

  /**
   * Create custom ticket source in Freshservice
   * @param {TicketSource} source
   * @returns {Promise<Response<TicketSource>>}
   */
  async createSource(source) {
    return this._api.createTicketFieldSourceWithHttpInfo(source).then(res => intoResponse(res));
  }

  /**
   * Retrieve the tasks on a ticket request with the given ID from Freshservice
   * @param {Number} ticketId - ID of ticket request for which tasks are to be retrieved
   * @param {PaginationQuery} opts - optional parameters
   * @returns {Promise<Response<Tasks>>} - Returns a promise with data type Freshservice.models.Tasks
   */
  async getTasks(ticketId, opts = {}) {
    return this._api.listTicketTasksWithHttpInfo(ticketId, opts).then(res => intoResponse(res));
  }

  /**
   *
   * @param {Number} ticketId -  ID of ticket request for which tasks are to be created
   * @param {Task} task - details of task to be created
   * @returns {Promise<Response<Task>} - Returns a promise with data type Task
   */
  async createTask(ticketId, task) {
    return this._api.createTicketTaskWithHttpInfo(task, ticketId).then(res => intoResponse(res));
  }

  /**
   * Retrieve a task on a ticket with the given ID from Freshservice
   * @param {Number} ticketId - is a Ticket identifier for which task is to be retrieved
   * @param {Number} taskId - is identifier of the task which is to be retrieved
   * @returns {Promise<Response<Task>>} - Returns a promise with data type Task
   */
  async getTask(ticketId, taskId) {
    return this._api.getTicketTaskWithHttpInfo(ticketId, taskId).then(res => intoResponse(res));
  }

  /**
   * Update an existing task on an existing ticket request in Freshservice
   * @param {Number} ticketId - is a Ticket identifier for which task is to be retrieved
   * @param {Number} taskId - is identifier of the task which is to be retrieved
   * @param {Task} task - details of task to be updated
   * @returns {Promise<Response<Task>>} - Returns a promise with data type Freshservice.models.Task
   */
  async updateTask(ticketId, taskId, task) {
    return this._api.updateTicketTaskWithHttpInfo(task, ticketId, taskId).then(res => intoResponse(res));
  }

  /**
   * Delete the task on a ticket with the given ID from Freshservice
   * @param {Number} ticketId - is a Ticket identifier for which task is to be deleted
   * @param {Number} taskId - is identifier of the task which is to be deleted
   * @returns {Promise<Response>} - Returns a promise
   */
  async deleteTask(ticketId, taskId) {
    return this._api.deleteTicketTaskWithHttpInfo(ticketId, taskId).then(res => intoResponse(res));
  }
}
