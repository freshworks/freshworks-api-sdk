---
prev: /freshservice
next: /freshservice/conversations
---

# Tickets

A ticket can be an incident or a service request. An incident is a disruption to an existing service, and a service request is a formal request from a user for something to be provided. Tickets are assigned to agents based on the agent's expertise and on the subject of the ticket.

> **:warning: WARNING:**
> While accessing API references and Object references, kindly open the links in new tab to avoid unexpected site behaviour!

## Ticket

These APIs help to list, retrive, create, update, delete, restore and other operations associated with FreshService tickets. All the methods return response into Response object. The response object has 3 supported elements and 1 method as depicted below

- Use object.json() to access the object elements
- Use object.statusCode to access object HTTP status code returned by the endpoint
- Use object.header to access returned headers.

### List tickets

Fetch the list of all Tickets in Freshservice

```js
// Using with query parameters included
const tickets = await fs.tickets.list();
// use tickets.json() to access object elements
// use tickets.header access returned headers
// use tickets.statusCode access returned HTTP status code
```

```js
// Using without query parameters
const query = {
  email: "******@freshservice.com",
  filter: "watching",
  include: "stats",
  order_type: "asc"
};
const tickets = await fs.tickets.list(query);
// use tickets.json() to access object elements
// use tickets.header access returned headers
// use tickets.statusCode access returned HTTP status code
```

- Returns a `Promise` that resolves to an [`Freshservice.models.Tickets`](../api/classes/freshservice_models.Tickets.html) object
- The [query parameters accepted by the REST API](https://api.freshservice.com/#view_all_ticket) are [optional parameters](../api/interfaces/freshservice_models.TicketsQuery.html) accepted.

### Get tickets by ID

Get the details of a Freshservice Ticket

```js
// Using without query parameters included
const ticket_id = 99999;
const ticket = await fs.tickets.get(ticket_id);
// use ticket.json() to access object elements
// use ticket.header access returned headers
// use ticket.statusCode access returned HTTP status code
```

```js
// Using with query parameters included
const ticket_id = 99999;
const include = "stats";
const ticket = await fs.tickets.get(ticket_id, { include });
// use ticket.json() to access object elements
// use ticket.header access returned headers
// use ticket.statusCode access returned HTTP status code
```

- The first argument is the ticket ID - identifier of the ticket to be updated
- The second argument is an optional query param to include certain fields in response.
  - E.g. 'stats' Will return the ticket’s closed_at, resolved_at and first_responded_at time. 'requester' - Will return the requester's email, id, mobile, name, and phone.
  - Supported options - 'conversations', 'requester', 'problem', 'stats', 'assets', 'change', 'related_tickets'
- Returns a `Promise` that resolves to a [`Freshservice.models.Tickets`](../api/classes/freshservice_models.Ticket.html) object

### Create a Ticket

Create a new Ticket in Freshservice

```js
// Example for creating a new ticket with given ticket information
const ticket = {
  "cc_emails": [
    ...
  ],
  "fwd_emails": [
    ...
  ],
  "reply_cc_emails": [
    ...
  ],
  "priority": 2,
  ...
  "custom_fields": {
    ...
  },
  "tags": [
    ...
  ],
  "attachments": [
    {
    ...
    }
  ]
}
const newTicket = await fs.tickets.create(ticket);
// use newTicket.json() to access object elements
// use newTicket.header access returned headers
// use newTicket.statusCode access returned HTTP status code
```

- Returns a `Promise` that resolves to a [`Freshservice.models.Ticket`](../api/classes/freshservice_models.Ticket.html) object

### Update a Ticket

Edit an existing Freshservice Ticket

```js
const updatedTicket = await fs.tickets.update(id, ticket);
// use updatedTicket.json() to access object elements
```

- The first argument is the ticket ID - identifier of the ticket to be updated
- The second argument is an object of type [`Freshservice.models.Ticket`](../api/classes/freshservice_models.Ticket.html) consisting details of the ticket to be updated
- Returns a `Promise` that resolves to a [`Freshservice.models.Ticket`](../api/classes/freshservice_models.Ticket.html) object

### Delete a Ticket

Remove a Freshservice Ticket

```js
// Delete ticket with given ticket ID
const ticket_id = 14000239432;
const delTicket = await fs.tickets.delete(ticket_id);
```

- The first argument is the ticket ID - identifier of the ticket to be deleted
- Returns a `Promise`

### Restore a Ticket

Restore a deleted Freshservice Ticket

```js
// Restore ticket with given ticket ID
const ticket_id = 14000239432;
const restoredTicket = await fs.tickets.restoreTicket(ticket_id);
// use restoredTicket.json() to access object elements
```

- The first argument is the ticket ID - identifier of the ticket to be restored
- Returns a `Promise`

### Create a child Ticket

Create a new child Ticket on an existing Freshservice Ticket

```js
// Create a child ticket for a given parent ticket ID
const ticket_id = 14000239432;
const childTicket = {
  "cc_emails": [
    "test@freshservice.com"
  ],
  "fwd_emails": [
    ...
  ],
  "reply_cc_emails": [
    ...
  ],
  "priority": 2,
  ...
  "custom_fields": {
    ...
  },
  "tags": [
    ...
  ],
  "attachments": [
    {
    ...
    }
  ]
}
const newChildTicket = await fs.tickets.createChildTicket(childTicket, ticket_id);
// use newChildTicket.json() to access object elements

```

- The First argument is an object of type [`Freshservice.models.Ticket`](../api/classes/freshservice_models.Ticket.html) consisting details of the child ticket to be created
- The second argument is the ticket ID - identifier of the parent ticket for which child ticket is to be created
- Returns a `Promise` that resolves to a [`Freshservice.models.Ticket`](../api/classes/freshservice_models.Ticket.html) object

## Time Entries

These APIs help to track exactly how much time an agent has spent on each ticket, start/stop timers and perform a lot of other time tracking and monitoring tasks to ensure that the support team is always performing at its peak efficiency.

### List All Time Entries of a Ticket

View all time entries on a ticket with the given ID from Freshservice

```js
// List all time entries for given ticket ID with default pagination option i.e., page = 1 and per_page = 30
const ticket_id = 14000239432;
const timeEntries = await fs.tickets.timeEntries(ticket_id);
// use timeEntries.json() to access object elements
```

```js
// List all time entries for given ticket ID with pagination option
const ticket_id = 14000239432;
const opts = {
  page: 1,
  per_page: 10
};
const timeEntries = await fs.tickets.timeEntries(ticket_id, opts);
// use timeEntries.json() to access object elements
```

- The First argument is an ID of ticket
- The second argument is an interface of type [`Freshservice.models.PaginationQuery`](../api/interfaces/freshservice_models.PaginationQuery.html). It is used to filter TimeEntry results in pagewise manner. Default values for page is 1 and default number of entries are 30
- Returns a `Promise` that resolves to a [`Freshservice.models.TimeEntries`](../api/classes/freshservice_models.TimeEntries.html) object

### View a Time Entry

View all time entries on ticket with the given ticket ID from Freshservice

```js
// Get time entry for ticket with ticket ID and time entry ID
const ticket_id = 14000239432;
const time_entry_id = 14702899;
const timeEntry = await fs.tickets.timeEntry(ticket_id, time_entry_id);
// use timeEntry.json() to access object elements
```

- The First argument is an ID of ticket
- The second argument is ID of the ticket for which time entries are to be added
- Returns a `Promise` that resolves to a [`Freshservice.models.TimeEntry`](.../api/classes/freshservice_models.TimeEntry.html) object

### Create a time entry

Create a new time entry on a freshservice ticket

```js
const newTimeEntry = await fs.tickets.createTimeEntry(time_entry, ticket_id);
// use newTimeEntry.json() to access object elements
```

- The first argument is an object of type [`Freshservice.models.TimeEntry`](.../api/classes/freshservice_models.TimeEntry.html) containing the details of time entry to be created
- The second argument is ID of the ticket for which time entries are to be added
- Returns a `Promise` that resolves to a [`Freshservice.models.TimeEntry`](.../api/classes/freshservice_models.TimeEntry.html) object

### Update a time entry

Update time entry for ticket with given ticket ID and time entry ID

```js
const updatedTimeEntry = await fs.tickets.updateTimeEntry(time_entry, ticket_id, time_entry_id);
// use updatedTimeEntry.json() to access object elements
```

- The first argument is an object of type [`Freshservice.models.TimeEntry`](.../api/classes/freshservice_models.TimeEntry.html) containing the details of time entry to be updated
- The second argument is ID for the ticket for which time entries are to be updated
- The third argument is ID of the time entry which is to be updated
- Returns a `Promise` that resolves to a [`Freshservice.models.TimeEntry`](.../api/classes/freshservice_models.TimeEntry.html) object

### Delete a Time Entry

Remove a time entry on a freshservice ticket

```js
const deleteTimeEntry = await fs.tickets.deleteTimeEntry(ticket_id, time_entry_id);
// use deleteTimeEntry.json() to access object elements
```

- The first argument is the ticket ID - identifier of the ticket for which time entry is to be deleted
- The second argument is the time entry ID to be deleted
- Returns a `Promise`

### Create a ticket field source

Create a custom ticket source for tickets in Freshservice

```js
const source = {
  name: "Email",
  position: 1
};
const fieldSource = await fs.tickets.source(source);
// use fieldSource.json() to access object elements
```

- The source argument is an object of type [`Freshservice.models.TicketSource`](../api/classes/freshservice_models.TicketSource.html) containing the details of custom ticket source to be created
- Returns a `Promise` that resolves to a [`Freshservice.models.TicketSource`](../api/classes/freshservice_models.TicketSource.html) object

## Tasks

This section lists all API that can be used to create, edit or otherwise manipulate Ticket Tasks.

### Create a Task

Create a new task against a ticket in Freshservice

```js
const ticket_id = 14000239432;
const task = {
  parent_type: "Ticket",
  due_date: "2021-11-24T11:30:00Z",
  notify_before: 3600,
  title: "Renew license",
  description: "Renew Software license",
  start_date: "2021-11-22T16:58:45Z"
};
const newTask = await fs.tickets.createTask(task, ticket_id);
// use newTask.json() to access object elements
```

- The first argument is an object of type [`Freshservice.models.Task`](../api/classes/freshservice_models.Task.html) containing details of task to be created
- The second argument is the ticket ID - identifier of the ticket for which task is to be created
- Returns a `Promise` that resolves to a [`Freshservice.models.Task`](../api/classes/freshservice_models.Task.html) object

### View task on a ticket

Retrieve a task on a ticket request with the given ID from Freshservice

```js
const ticket_id = 14000239432;
const task_id = 48;
const taskDetail = await fs.tickets.getTask(ticket_id, task_id);
// use taskDetail.json() to access object elements
```

- The first argument is a Ticket identifier for which task is to be retrieved
- The second argument is identifier of the task which is to be retrieved
- Returns a `Promise` that resolves to a [`Freshservice.models.Task`](../api/classes/freshservice_models.Task.html) object

### View all tasks on a ticket

Retrieve a task on a ticket request with the given ID from Freshservice

```js
// Retrieve all the tasks for ticket with given ticket ID with optional parameter
const ticket_id = 14000239432;
const opts = {
  page: 1,
  per_page: 10
};
const taskList = await fs.tickets.getTasks(ticket_id, opts);
// use taskList.json() to access object elements
```

```js
// Retrieve all the tasks for ticket with given ticket ID without optional parameter
const ticket_id = 14000239432;
const taskList = await fs.tickets.getTasks(ticket_id);
// use taskList.json() to access object elements
```

- The first argument is a Ticket identifier for which task is to be retrieved
- The second argument is an interface of type [`Freshservice.models.PaginationQuery`](../api/interfaces/freshservice_models.PaginationQuery.html). It is used to filter TimeEntry results in pagewise manner. Default values for page is 1 and default number of entries are 30
- Returns a `Promise` that resolves to a [`Freshservice.models.Task`](../api/classes/freshservice_models.Task.html) object

### Update a task on a ticket

Update an existing task on an existing ticket request in Freshservice

```js
const ticket_id = 14000239432;
const task_id = 48;
const task = {
  parent_type: "Ticket",
  due_date: "2021-11-24T11:30:00Z",
  notify_before: 3600,
  title: "Renew license",
  description: "Renew Software license",
  start_date: "2021-11-22T16:58:45Z"
};
const updateTask = await fs.tickets.updateTask(task, ticket_id, task_id);
// use updateTask.json() to access object elements
```

- The first argument is an object of type [`Freshservice.models.Task`](../api/classes/freshservice_models.Task.html) containing details of task to be updated
- The second argument is the ticket ID - identifier of the ticket for which task is to be updated
- The second argument is identifier of the task which is to be updated
- Returns a `Promise` that resolves to a [`Freshservice.models.Task`](../api/classes/freshservice_models.Task.html) object

### Delete task on a ticket

Delete the task on a ticket request with the given ID from Freshservice

```js
const ticket_id = 14000239432;
const task_id = 48;
const deleteTask = await fs.tickets.deleteTask(ticket_id, task_id);
// use deleteTask.json() to access object elements
```

- The first argument is the ticket ID - identifier of the ticket for which task is to be deleted
- The second argument is the task ID to be deleted
- Returns a `Promise`
