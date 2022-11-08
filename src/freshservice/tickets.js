import { TicketsApi } from "../gen/freshservice";
import { Client } from "../http-client";
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
   * @param {TicketsQuery} query - Options to filter applicants
   * @returns {Promise<Tickets>} - Response with applicants list in the response body
   */
  async list(query) {
    return this._api.listTickets(query);
  }

  /**
   * Create a new Ticket in Freshservice
   * @param {Ticket} ticket - details of the Freshservice Ticket to be created
   * @returns {Promise<Ticket>} - Returns a promise with data of type Freshservice.models.Ticket
   */
  async create(ticket) {
    return this._api.createTicket(ticket);
  }

  /**
   *  View a Ticket - Get the details of a FreshService Ticket
   * @param {Number} id - Identifier of the ticket
   * @param {Object} opts Optional parameters
   * @param {String} opts.include Query param to include certain fields in response. E.g. '?include=stats' Will return the ticket’s closed_at, resolved_at and first_responded_at time. '?include=requester' Will return the requester's email, id, mobile, name, and phone. Supported options - [conversations, requester, problem, stats, assets, change, related_tickets]
   * @returns {Promise<Tickets>} - Response with applicants list in the response body
   */
  async get(id, opts) {
    return this._api.getTicket(id, opts);
  }

  /**
   *
   * @param {Number} id - ID of the ticket to be updated
   * @param {Ticket} ticket - Details of the ticket to be updated
   * @returns {Promise<Ticket>} - Updated ticket information for ticket with given ID
   */
  async update(id, ticket) {
    return this._api.updateTicket(ticket, id);
  }

  /**
   *
   * @param {Number} id - ID of the ticket to be deleted
   * @return {Promise} - returns a Promise
   */
  async delete(id) {
    return this._api.deleteTicket(id);
  }

  /**
   * Restore a deleted Freshservice Ticket
   * @param {Number} id - ID of the ticket to be restored
   * @return {Promise} - returns a Promise
   */
  async restoreTicket(id) {
    return this._api.restoreTicket(id);
  }

  /**
   * Create a new child Ticket on an existing Freshservice Ticket
   * @param {Ticket} ticket - details of child ticket to be created
   * @param {Number} id - ID of ticket request for which child ticket needs to be created (Parent Ticker ID)
   * @returns {Promise<Ticket>} - Returns a promise with data of type Freshservice.models.Ticket
   */
  async createChildTicket(ticket, id) {
    return this._api.createChildTicket(ticket, id);
  }

  /**
   * View a time entry on a ticket with the given ID from Freshservice
   * @param {Number} ticket_id - ID of ticket
   * @param {Number} time_entry_id - ID of the time entry
   * @returns {Promise<TimeEntry>} - Returns a promise with data of type Freshservice.models.TimeEntry
   */
  async timeEntry(ticket_id, time_entry_id) {
    return this._api.getTicketTimeEntry(ticket_id, time_entry_id);
  }

  /**
   * View all time entries on ticket with the given ID from Freshservice
   * @param {Number} ticket_id
   * @param {PaginationQuery} opts - Options to filter TimeEntry results in pagewise manner. Default page is 1 and default number of entries are 30.
   * @returns {Promise<TimeEntries>} -  Returns a promise with data of type Freshservice.models.TimeEntries
   */
  async timeEntries(ticket_id, opts) {
    return this._api.listTicketTimeEntries(ticket_id, opts);
  }

  /**
   * Create a new time entry on a freshservice ticket
   * @param {TimeEntry} time_entry -  details of time entry to be created
   * @param {Number} ticket_id - ID of ticket request for which time entries are to be added
   * @returns {Promise<TimeEntry>} - Returns promise with type Freshservice.models.TimeEntry
   */
  async createTimeEntry(time_entry, ticket_id) {
    return this._api.createTicketTimeEntry(time_entry, ticket_id);
  }

  /**
   * Create a new time entry on a freshservice ticket
   * @param {TimeEntry} time_entry -  details of time entry to be updated
   * @param {Number} ticket_id - ID of ticket request for which time entries are to be retrieved
   * @param {Number} time_entry_id - ID of the time entry to be updated
   * @returns {Promise<TimeEntry>} - Returns promise with type Freshservice.models.TimeEntry
   */
  async updateTimeEntry(time_entry, ticket_id, time_entry_id) {
    return this._api.updateTicketTimeEntry(time_entry, ticket_id, time_entry_id);
  }

  /**
   * Remove a time entry on a freshservice ticket
   * @param {Number} ticket_id - ID of ticket request for which time entries are to be retrieved
   * @param {Number} time_entry_id - ID of the time entry to be updated
   * @returns {Promise} - Returns promise with no content and status 200 OK
   */
  async deleteTimeEntry(ticket_id, time_entry_id) {
    return this._api.deleteTicketTimeEntry(ticket_id, time_entry_id);
  }

  /**
   * Create custom ticket source in Freshservice
   * @param {TicketSource} source
   * @returns {Promise<TicketSource>}
   */
  async source(source) {
    return this._api.createTicketFieldSource(source);
  }

  /**
   * Retrieve the tasks on a ticket request with the given ID from Freshservice
   * @param {Number} ticket_id - ID of ticket request for which tasks are to be retrieved
   * @param {PaginationQuery} opts - optional parameters
   * @returns {Promise<Tasks>} - Returns a promise with data type Freshservice.models.Tasks
   */
  async getTasks(ticket_id, opts) {
    return this._api.listTicketTasks(ticket_id, opts);
  }

  /**
   *
   * @param {Task} task - details of task to be created
   * @param {Number} ticket_id -  ID of ticket request for which tasks are to be created
   * @returns {Promise<Task} - Returns a promise with data type Task
   */
  async createTask(task, ticket_id) {
    return this._api.createTicketTask(task, ticket_id);
  }

  /**
   * Retrieve a task on a ticket with the given ID from Freshservice
   * @param {Number} ticket_id - is a Ticket identifier for which task is to be retrieved
   * @param {Number} task_id - is identifier of the task which is to be retrieved
   * @returns {Promise<Task>} - Returns a promise with data type Task
   */
  async getTask(ticket_id, task_id) {
    return this._api.getTicketTask(ticket_id, task_id);
  }

  /**
   * Update an existing task on an existing ticket request in Freshservice
   * @param {Task} task - details of task to be updated
   * @param {Number} ticket_id - is a Ticket identifier for which task is to be retrieved
   * @param {Number} task_id - is identifier of the task which is to be retrieved
   * @returns {Promise<Task>} - Returns a promise with data type Freshservice.models.Task
   */
  async updateTask(task, ticket_id, task_id) {
    return this._api.updateTicketTask(task, ticket_id, task_id);
  }

  /**
   * Delete the task on a ticket with the given ID from Freshservice
   * @param {Number} ticket_id - is a Ticket identifier for which task is to be deleted
   * @param {Number} task_id - is identifier of the task which is to be deleted
   * @returns {Promise} - Returns a promise
   */
  async deleteTask(ticket_id, task_id) {
    return this._api.deleteTicketTask(ticket_id, task_id);
  }
}
