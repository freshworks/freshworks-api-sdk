import { Freshservice } from "../../src";
import nock from "nock";
import ticketsResponse from "./responses/ticket/ticketsResponse";
import createTimeEntry from "./requests/createTimeEntry";
import timeEntries200 from "./responses/ticket/timeEntries200";
import createTicket from "./requests/createTicket";
import ticketSource201 from "./responses/ticket/ticketSource201";
import updateTicket200 from "./responses/ticket/updateTicket200";
import updateTicket from "./requests/updateTicket";
import updatedTask from "./requests/updatedTask";
import tasks200 from "./responses/ticket/tasks200";
import timeEntry200 from "./responses/ticket/timeEntry200";
import { options } from "superagent";
import { TicketSource } from "../../src/gen/freshservice";

//const FS_DOMAIN = "devrel.freshservice.com";
//const FS_API_KEY = "yMLFs4Ni9qGOqF4BRKQ3";
const FS_DOMAIN = "stoplight.io/mocks/freshworks/freshservice/15247970";
const FS_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FS_DOMAIN}`);


describe("Tickets API Test Suite", function () {
  const fs = new Freshservice(FS_DOMAIN, FS_API_KEY);

  describe("Ticket Create, update and delete tests : /api/v2/tickets", function () {
    it("Creating new ticket", async function () {
      mock.post(`/api/v2/tickets`, createTicket).reply(201, ticketsResponse);
      const newTicket = await fs.tickets.create(createTicket);
      // console.log(newTicket);
      expect(newTicket).toBeInstanceOf(Freshservice.models.Ticket);
    });

    it("Updating an existing ticket", async function () {
      const ticket_id = 14000239432;
      mock.put(`/api/v2/tickets/${ticket_id}`).reply(200, updateTicket200);
      const updTicket = await fs.tickets.update(ticket_id, updateTicket);
      expect(updTicket).toBeInstanceOf(Freshservice.models.Ticket);
      expect(updTicket.ticket.id).toEqual(ticket_id);
    });

    it("Deleting an existing ticket", async function () {
      const ticket_id = 14000239432;
      mock.delete(`/api/v2/tickets/${ticket_id}`).reply(204);
      const delTicket = await fs.tickets.delete(ticket_id);
      expect(delTicket).toBeNull;
    });

  });
  
  describe("Tickets retrieval with filter params tests", function () {
    it("Running get ticket by ID test - without include param", async function () {
      const ticket_id = 1;
      mock.get(`/api/v2/tickets/${ticket_id}`).reply(200, ticketsResponse);
      const ticket = await fs.tickets.get(ticket_id);
      expect(ticket).toBeInstanceOf(Freshservice.models.Tickets);
    });

    it("Running get ticket by ID test - include stats", async function () {
      const include = "stats";
      const ticket_id = 1;
      mock.get(`/api/v2/tickets/${ticket_id}?include=${include}`).reply(200, ticketsResponse);
      const ticket = await fs.tickets.get(ticket_id, { include });
      expect(ticket).toBeInstanceOf(Freshservice.models.Tickets);
    });

    it("running ticket list test", async function () {
      mock.get(`/api/v2/tickets`).reply(200, ticketsResponse);
      const tickets = await fs.tickets.list();
      expect(tickets).toBeInstanceOf(Freshservice.models.Tickets);
    });

    it("running ticket list test with filter param", async function () {
      const query = {
        "email" : "andrea@freshservice.com",
        "filter" : "watching",
        "include" : "stats",
        "order_type" : "asc"
      }
      mock.get(`/api/v2/tickets?filter=${query.filter}&email=${query.email}&include=${query.include}&order_type=${query.order_type}`).reply(200, ticketsResponse);
      const tickets = await fs.tickets.list(query);
      expect(tickets).toBeInstanceOf(Freshservice.models.Tickets);
    });
  });

  describe("Restore Ticket test : /api/v2/tickets/{ticket_id}/restore", function () {
    it("Restoring a ticket with given ticket ID", async function () {
      const ticket_id = 14000239432;
      mock.get(`/api/v2/tickets/${ticket_id}/restore`).reply(204);
      const restoredTicket = await fs.tickets.restoreTicket(ticket_id);
      expect(restoredTicket).toBeNull;
    });
  });
  
  describe("Create a child Ticket test : /api/v2/tickets/{ticket_id}/create_child_ticket", function () {
    it("Create a child ticket for a given parent ticket ID", async function () {
      const parent_ticket_id = 14000239432;
      mock.post(`/api/v2/tickets/${parent_ticket_id}/create_child_ticket`).reply(201, ticketsResponse);
      const childTicket = await fs.tickets.createChildTicket(createTicket, parent_ticket_id);
      expect(childTicket).toBeInstanceOf(Freshservice.models.Ticket);
    });
  });
  
  describe("Time entry test suite : /api/v2/tickets/{ticket_id}/time_entries", function () {
    it("Get time entry for ticket with ticket ID and time entry ID", async function () {
      const ticket_id = 14000239432;
      const time_entry_id = 14702899;
      mock.get(`/api/v2/tickets/${ticket_id}/time_entries/${time_entry_id}`).reply(200, timeEntry200);
      const timeEntry = await fs.tickets.timeEntry(ticket_id, time_entry_id);
      expect(timeEntry).toBeInstanceOf(Freshservice.models.TimeEntry);
    });

    it("List all time entries for given ticket ID with pagination", async function () {
      const ticket_id = 14000239432;
      const opts = {
        "page" : 1,
        "per_page" : 10
      }
      mock.get(`/api/v2/tickets/${ticket_id}/time_entries?per_page=${opts.per_page}&page=${opts.page}`).reply(200, timeEntries200);
      const timeEntries = await fs.tickets.timeEntries(ticket_id, opts);
      expect(timeEntries).toBeInstanceOf(Freshservice.models.TimeEntries);
    });

    it("List all time entries for given ticket ID with default pagination", async function () {
      const ticket_id = 14000239432;
      mock.get(`/api/v2/tickets/${ticket_id}/time_entries`).reply(200, timeEntries200);
      const timeEntries = await fs.tickets.timeEntries(ticket_id);
      expect(timeEntries).toBeInstanceOf(Freshservice.models.TimeEntries);
    });

    it("Create time entry for ticket with given ticket ID", async function () {
      const ticket_id = 14000239432;
      mock.post(`/api/v2/tickets/${ticket_id}/time_entries`).reply(201, timeEntry200);
      const newTimeEntry = await fs.tickets.createTimeEntry(createTimeEntry,ticket_id);
      expect(newTimeEntry).toBeInstanceOf(Freshservice.models.TimeEntry);
    });

    it("Update time entry for ticket with given ticket ID and time entry ID", async function () {
      const ticket_id = 14000239432;
      const time_entry_id = 14702899;
      mock.put(`/api/v2/tickets/${ticket_id}/time_entries/${time_entry_id}`).reply(200, timeEntry200);
      const updTimeEntry = await fs.tickets.updateTimeEntry(createTimeEntry,ticket_id, time_entry_id);
      expect(updTimeEntry).toBeInstanceOf(Freshservice.models.TimeEntry);
    });

    it("Delete time entry for ticket with given ticket ID and time entry ID", async function () {
      const ticket_id = 14000239432;
      const time_entry_id = 14702899;
      mock.delete(`/api/v2/tickets/${ticket_id}/time_entries/${time_entry_id}`).reply(200);
      const delTimeEntry = await fs.tickets.deleteTimeEntry(ticket_id, time_entry_id);
      expect(delTimeEntry).toBeNull;
    });

    it("Create a ticket field source", async function () {
      const source = {
        "name": "Email",
        "position": 1
      };
      mock.post(`/api/v2/ticket_fields/sources`).reply(201, ticketSource201);
      const newSource = await fs.tickets.source(source);
      expect(newSource).toBeInstanceOf(Freshservice.models.TicketSource);
    });

  });
  
  describe("Tasks test suite : /api/v2/tickets/{ticket_id}/tasks", function () {

    it("Retrieve all the tasks for ticket with given ticket ID with optional parameter", async function () {
      const ticket_id = 14000239432;
      const opts = {
        "page" : 1,
        "per_page" : 10
      }
      mock.get(`/api/v2/tickets/${ticket_id}/tasks?per_page=${opts.per_page}&page=${opts.page}`).reply(200, tasks200);
      const taskList = await fs.tickets.getTasks(ticket_id, opts);
      expect(taskList).toBeInstanceOf(Freshservice.models.Tasks);
    });

    it("Retrieve all the tasks for ticket with given ticket ID without query parameters", async function () {
      const ticket_id = 14000239432;
      mock.get(`/api/v2/tickets/${ticket_id}/tasks`).reply(200, tasks200);
      const taskList = await fs.tickets.getTasks(ticket_id);
      expect(taskList).toBeInstanceOf(Freshservice.models.Tasks);
    });

    it("Create tasks for ticket with given ticket ID", async function () {
      const ticket_id = 14000239432;
      const task = {
        "parent_type": "Ticket",
        "due_date": "2021-11-24T11:30:00Z",
        "notify_before": 3600,
        "title": "Renew license",
        "description": "Renew Software license",
        "start_date": "2021-11-22T16:58:45Z"
      }
      mock.post(`/api/v2/tickets/${ticket_id}/tasks`).reply(201, tasks200);
      const newTask = await fs.tickets.createTask(task, ticket_id);
      expect(newTask).toBeInstanceOf(Freshservice.models.Task);
    });

    it("View task on a ticket with given ticket ID with given task ID", async function () {
      const ticket_id = 14000239432;
      const task_id = 48;
      mock.get(`/api/v2/tickets/${ticket_id}/tasks/${task_id}`).reply(200, tasks200);
      const taskDetail = await fs.tickets.getTask(ticket_id, task_id);
      expect(taskDetail).toBeInstanceOf(Freshservice.models.Task);
    });

    it("Update task on a ticket with given ticket ID and task ID", async function () {
      const ticket_id = 14000239432;
      const task_id = 48;
      const updateTsk = {
        "parent_type": "Ticket",
        "due_date": "2021-11-24T11:30:00Z",
        "notify_before": 3600,
        "title": "Renew license",
        "description": "Renew Software license",
        "start_date": "2021-11-22T16:58:45Z"
      }
      mock.put(`/api/v2/tickets/${ticket_id}/tasks/${task_id}`).reply(200, tasks200);
      const uptask = await fs.tickets.updateTask(updateTsk, ticket_id, task_id);
      expect(uptask).toBeInstanceOf(Freshservice.models.Task);
    });

    it("Delete task on a ticket with given ticket ID and task ID", async function () {
      const ticket_id = 14000239432;
      const task_id = 48;
      mock.delete(`/api/v2/tickets/${ticket_id}/tasks/${task_id}`).reply(200);
      const delTask = await fs.tickets.deleteTask(ticket_id, task_id);
      expect(delTask).toBeNull;
    });

  });

  //test suite end
});