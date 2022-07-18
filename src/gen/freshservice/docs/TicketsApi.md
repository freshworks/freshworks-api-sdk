# FreshserviceApiSdkCodegen.TicketsApi

All URIs are relative to *https://api.freshservice.com*

| Method                                                                 | HTTP request                                                           | Description                          |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------ |
| [**createChildTicket**](TicketsApi.md#createChildTicket)               | **POST** /api/v2/tickets/{ticket_id}/create_child_ticket               | ~ Create child ticket for a ticket   |
| [**createTicket**](TicketsApi.md#createTicket)                         | **POST** /api/v2/tickets                                               | ~ Create a Ticket                    |
| [**createTicketFieldSource**](TicketsApi.md#createTicketFieldSource)   | **POST** /api/v2/ticket_fields/sources                                 | Create source                        |
| [**createTicketNote**](TicketsApi.md#createTicketNote)                 | **POST** /api/v2/tickets/{ticket_id}/notes                             | ~ Create a Note on a ticket          |
| [**createTicketReply**](TicketsApi.md#createTicketReply)               | **POST** /api/v2/tickets/{ticket_id}/reply                             | ~ Create a Reply on a ticket         |
| [**createTicketTask**](TicketsApi.md#createTicketTask)                 | **POST** /api/v2/tickets/{ticket_id}/tasks                             | Create Task on a ticket              |
| [**createTicketTimeEntry**](TicketsApi.md#createTicketTimeEntry)       | **POST** /api/v2/tickets/{ticket_id}/time_entries                      | Create time entry on a ticket        |
| [**deleteTicket**](TicketsApi.md#deleteTicket)                         | **DELETE** /api/v2/tickets/{ticket_id}                                 | ~ Delete a ticket                    |
| [**deleteTicketConversation**](TicketsApi.md#deleteTicketConversation) | **DELETE** /api/v2/tickets/{ticket_id}/conversations/{conversation_id} | ~ Delete a conversation on a ticket  |
| [**deleteTicketTask**](TicketsApi.md#deleteTicketTask)                 | **DELETE** /api/v2/tickets/{ticket_id}/tasks/{task_id}                 | Delete task on a ticket              |
| [**deleteTicketTimeEntry**](TicketsApi.md#deleteTicketTimeEntry)       | **DELETE** /api/v2/tickets/{ticket_id}/time_entries/{time_entry_id}    | Delete a time entry on a ticket      |
| [**getTicket**](TicketsApi.md#getTicket)                               | **GET** /api/v2/tickets/{ticket_id}                                    | ~ View a Ticket                      |
| [**getTicketTask**](TicketsApi.md#getTicketTask)                       | **GET** /api/v2/tickets/{ticket_id}/tasks/{task_id}                    | View task on a ticket                |
| [**getTicketTimeEntry**](TicketsApi.md#getTicketTimeEntry)             | **GET** /api/v2/tickets/{ticket_id}/time_entries/{time_entry_id}       | View time entry on a ticket          |
| [**listTicketConversations**](TicketsApi.md#listTicketConversations)   | **GET** /api/v2/tickets/{ticket_id}/conversations                      | ~ List all conversations on a Ticket |
| [**listTicketTasks**](TicketsApi.md#listTicketTasks)                   | **GET** /api/v2/tickets/{ticket_id}/tasks                              | View all tasks on ticket             |
| [**listTicketTimeEntries**](TicketsApi.md#listTicketTimeEntries)       | **GET** /api/v2/tickets/{ticket_id}/time_entries                       | View all time entries on ticket      |
| [**listTickets**](TicketsApi.md#listTickets)                           | **GET** /api/v2/tickets                                                | ~ List all Tickets                   |
| [**restoreTicket**](TicketsApi.md#restoreTicket)                       | **GET** /api/v2/tickets/{ticket_id}/restore                            | ~ Restore a ticket                   |
| [**updateTicket**](TicketsApi.md#updateTicket)                         | **PUT** /api/v2/tickets/{ticket_id}                                    | ~ Update a ticket                    |
| [**updateTicketConversation**](TicketsApi.md#updateTicketConversation) | **PUT** /api/v2/tickets/{ticket_id}/conversations/{conversation_id}    | ~ Update a conversation on a ticket  |
| [**updateTicketTask**](TicketsApi.md#updateTicketTask)                 | **PUT** /api/v2/tickets/{ticket_id}/tasks/{task_id}                    | Update a task on a ticket            |
| [**updateTicketTimeEntry**](TicketsApi.md#updateTicketTimeEntry)       | **PUT** /api/v2/tickets/{ticket_id}/time_entries/{time_entry_id}       | Update a time entry on a ticket      |

## createChildTicket

> CreateTicket201Response createChildTicket(ticket, ticket_id)

~ Create child ticket for a ticket

Create a new child Ticket on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket = new FreshserviceApiSdkCodegen.Ticket(); // Ticket | details of child ticket to be created
let ticket_id = 789; // Number | ID of ticket request for which child ticket needs to be created
apiInstance.createChildTicket(ticket, ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                    | Description                                                     | Notes |
| ------------- | ----------------------- | --------------------------------------------------------------- | ----- |
| **ticket**    | [**Ticket**](Ticket.md) | details of child ticket to be created                           |
| **ticket_id** | **Number**              | ID of ticket request for which child ticket needs to be created |

### Return type

[**CreateTicket201Response**](CreateTicket201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createTicket

> CreateTicket201Response createTicket(ticket)

~ Create a Ticket

Create a new Ticket in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket = new FreshserviceApiSdkCodegen.Ticket(); // Ticket | details of the Freshservice Ticket to be created
apiInstance.createTicket(ticket).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name       | Type                    | Description                                      | Notes |
| ---------- | ----------------------- | ------------------------------------------------ | ----- |
| **ticket** | [**Ticket**](Ticket.md) | details of the Freshservice Ticket to be created |

### Return type

[**CreateTicket201Response**](CreateTicket201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createTicketFieldSource

> CreateTicketFieldSource201Response createTicketFieldSource(source)

Create source

Create a custom ticket source in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let source = new FreshserviceApiSdkCodegen.TicketSource(); // TicketSource | Custom ticket source that needs to be created
apiInstance.createTicketFieldSource(source).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name       | Type                                | Description                                   | Notes |
| ---------- | ----------------------------------- | --------------------------------------------- | ----- |
| **source** | [**TicketSource**](TicketSource.md) | Custom ticket source that needs to be created |

### Return type

[**CreateTicketFieldSource201Response**](CreateTicketFieldSource201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createTicketNote

> CreateTicketNote201Response createTicketNote(note, ticket_id)

~ Create a Note on a ticket

Post a new Note on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let note = new FreshserviceApiSdkCodegen.TicketNote(); // TicketNote | details of the note to be posted
let ticket_id = 789; // Number | ID of the ticket for which note has to be added
apiInstance.createTicketNote(note, ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                            | Description                                     | Notes |
| ------------- | ------------------------------- | ----------------------------------------------- | ----- |
| **note**      | [**TicketNote**](TicketNote.md) | details of the note to be posted                |
| **ticket_id** | **Number**                      | ID of the ticket for which note has to be added |

### Return type

[**CreateTicketNote201Response**](CreateTicketNote201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createTicketReply

> CreateTicketReply201Response createTicketReply(reply, ticket_id)

~ Create a Reply on a ticket

Post a new Reply on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let reply = new FreshserviceApiSdkCodegen.Reply(); // Reply | details of the Reply to be posted
let ticket_id = 789; // Number | ID of ticket for which reply has to be created
apiInstance.createTicketReply(reply, ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                  | Description                                    | Notes |
| ------------- | --------------------- | ---------------------------------------------- | ----- |
| **reply**     | [**Reply**](Reply.md) | details of the Reply to be posted              |
| **ticket_id** | **Number**            | ID of ticket for which reply has to be created |

### Return type

[**CreateTicketReply201Response**](CreateTicketReply201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createTicketTask

> CreateTicketTask201Response createTicketTask(task, ticket_id)

Create Task on a ticket

Create a new task on a ticket request in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | details of task to be created
let ticket_id = 789; // Number | ID of ticket request for which tasks are to be retrieved
apiInstance.createTicketTask(task, ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                | Description                                              | Notes |
| ------------- | ------------------- | -------------------------------------------------------- | ----- |
| **task**      | [**Task**](Task.md) | details of task to be created                            |
| **ticket_id** | **Number**          | ID of ticket request for which tasks are to be retrieved |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createTicketTimeEntry

> CreateTicketTimeEntry201Response createTicketTimeEntry(time_entry, ticket_id)

Create time entry on a ticket

Create a new time entry on a ticket request in freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | details of time entry to be created
let ticket_id = 789; // Number | ID of ticket request for which time entries are to be retrieved
apiInstance.createTicketTimeEntry(time_entry, ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                          | Description                                                     | Notes |
| -------------- | ----------------------------- | --------------------------------------------------------------- | ----- |
| **time_entry** | [**TimeEntry**](TimeEntry.md) | details of time entry to be created                             |
| **ticket_id**  | **Number**                    | ID of ticket request for which time entries are to be retrieved |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteTicket

> deleteTicket(ticket_id)

~ Delete a ticket

Remove a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of the ticket to be deleted
apiInstance.deleteTicket(ticket_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                    | Notes |
| ------------- | ---------- | ------------------------------ | ----- |
| **ticket_id** | **Number** | ID of the ticket to be deleted |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteTicketConversation

> deleteTicketConversation(ticket_id, conversation_id)

~ Delete a conversation on a ticket

Remove a conversation on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of the ticket for which conversation has to be added
let conversation_id = 789; // Number | ID of the reply or note that needs to be deleted
apiInstance.deleteTicketConversation(ticket_id, conversation_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type       | Description                                             | Notes |
| ------------------- | ---------- | ------------------------------------------------------- | ----- |
| **ticket_id**       | **Number** | ID of the ticket for which conversation has to be added |
| **conversation_id** | **Number** | ID of the reply or note that needs to be deleted        |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteTicketTask

> deleteTicketTask(ticket_id, task_id)

Delete task on a ticket

Delete the task on a ticket request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of ticket
let task_id = 789; // Number | ID of task
apiInstance.deleteTicketTask(ticket_id, task_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description  | Notes |
| ------------- | ---------- | ------------ | ----- |
| **ticket_id** | **Number** | ID of ticket |
| **task_id**   | **Number** | ID of task   |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## deleteTicketTimeEntry

> deleteTicketTimeEntry(ticket_id, time_entry_id)

Delete a time entry on a ticket

Delete the time entry on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of ticket
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.deleteTicketTimeEntry(ticket_id, time_entry_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description          | Notes |
| ----------------- | ---------- | -------------------- | ----- |
| **ticket_id**     | **Number** | ID of ticket         |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

## getTicket

> ListTickets200Response getTicket(ticket_id, opts)

~ View a Ticket

Get the details of a FreshService Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of the ticket to be fetched
let opts = {
  include: "include_example" // String | Query param to include certain fields in response. E.g. '?include=stats' Will return the ticket’s closed_at, resolved_at and first_responded_at time. '?include=requester' Will return the requester's email, id, mobile, name, and phone. Supported options - [conversations, requester, problem, stats, assets, change, related_tickets]
};
apiInstance.getTicket(ticket_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                                                                                                                                                                                                                                                                                                                              | Notes      |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **ticket_id** | **Number** | ID of the ticket to be fetched                                                                                                                                                                                                                                                                                                                                           |
| **include**   | **String** | Query param to include certain fields in response. E.g. &#39;?include&#x3D;stats&#39; Will return the ticket’s closed_at, resolved_at and first_responded_at time. &#39;?include&#x3D;requester&#39; Will return the requester&#39;s email, id, mobile, name, and phone. Supported options - [conversations, requester, problem, stats, assets, change, related_tickets] | [optional] |

### Return type

[**ListTickets200Response**](ListTickets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTicketTask

> CreateTicketTask201Response getTicketTask(ticket_id, task_id)

View task on a ticket

Retrieve a task on a ticket request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of ticket request
let task_id = 789; // Number | ID of the task
apiInstance.getTicketTask(ticket_id, task_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description          | Notes |
| ------------- | ---------- | -------------------- | ----- |
| **ticket_id** | **Number** | ID of ticket request |
| **task_id**   | **Number** | ID of the task       |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTicketTimeEntry

> CreateTicketTimeEntry201Response getTicketTimeEntry(ticket_id, time_entry_id)

View time entry on a ticket

Retrieve a time entry on a ticket request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of ticket request
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.getTicketTimeEntry(ticket_id, time_entry_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description          | Notes |
| ----------------- | ---------- | -------------------- | ----- |
| **ticket_id**     | **Number** | ID of ticket request |
| **time_entry_id** | **Number** | ID of the time entry |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTicketConversations

> ListTicketConversations200Response listTicketConversations(ticket_id)

~ List all conversations on a Ticket

Fetch the list of all conversations on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of the ticket for which conversations has to be fetched
apiInstance.listTicketConversations(ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                | Notes |
| ------------- | ---------- | ---------------------------------------------------------- | ----- |
| **ticket_id** | **Number** | ID of the ticket for which conversations has to be fetched |

### Return type

[**ListTicketConversations200Response**](ListTicketConversations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTicketTasks

> ListTicketTasks200Response listTicketTasks(ticket_id, opts)

View all tasks on ticket

Retrieve the tasks on a ticket request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of ticket request for which tasks are to be retrieved
let opts = {
  per_page: 30, // Number | The number of tasks to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listTicketTasks(ticket_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                       | Notes                      |
| ------------- | ---------- | ----------------------------------------------------------------- | -------------------------- |
| **ticket_id** | **Number** | ID of ticket request for which tasks are to be retrieved          |
| **per_page**  | **Number** | The number of tasks to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**      | **Number** | The page number to retrieve.                                      | [optional] [default to 1]  |

### Return type

[**ListTicketTasks200Response**](ListTicketTasks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTicketTimeEntries

> ListTicketTimeEntries200Response listTicketTimeEntries(ticket_id, opts)

View all time entries on ticket

Retrieve the time entries on a ticket request with the given ID from Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of ticket request for which time entries are to be retrieved
let opts = {
  per_page: 30, // Number | The number of time entries to retrieve in each page of a paginated list.
  page: 1 // Number | The page number to retrieve.
};
apiInstance.listTicketTimeEntries(ticket_id, opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                                                              | Notes                      |
| ------------- | ---------- | ------------------------------------------------------------------------ | -------------------------- |
| **ticket_id** | **Number** | ID of ticket request for which time entries are to be retrieved          |
| **per_page**  | **Number** | The number of time entries to retrieve in each page of a paginated list. | [optional] [default to 30] |
| **page**      | **Number** | The page number to retrieve.                                             | [optional] [default to 1]  |

### Return type

[**ListTicketTimeEntries200Response**](ListTicketTimeEntries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTickets

> ListTickets200Response listTickets(opts)

~ List all Tickets

Fetch the list of all Tickets in FreshService

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let opts = {
  filter: "filter_example", // String | Pre-defined filters. The filters available are [new_and_my_open, watching, spam, deleted].
  email: "email_example", // String | Query param to filter out tickets requester's email id.
  requester_id: 56, // Number | Query param to filter out tickets created by a particular requester.
  updated_since: "updated_since_example", // String | Query param to filter out tickets based on updated time. E.g. '?updated_since=2015-01-19T02:00:00Z'.
  include: "include_example", // String | Query param to include certain fields in response. E.g. '?include=stats' Will return the ticket’s closed_at, resolved_at and first_responded_at time. '?include=requester' Will return the requester's email, id, mobile, name, and phone.
  order_type: "order_type_example" // String | Query param to sort the list of tickets. Supported values - 'asc' and 'desc'. Default is 'desc'
};
apiInstance.listTickets(opts).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type       | Description                                                                                                                                                                                                                                                              | Notes      |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **filter**        | **String** | Pre-defined filters. The filters available are [new_and_my_open, watching, spam, deleted].                                                                                                                                                                               | [optional] |
| **email**         | **String** | Query param to filter out tickets requester&#39;s email id.                                                                                                                                                                                                              | [optional] |
| **requester_id**  | **Number** | Query param to filter out tickets created by a particular requester.                                                                                                                                                                                                     | [optional] |
| **updated_since** | **String** | Query param to filter out tickets based on updated time. E.g. &#39;?updated_since&#x3D;2015-01-19T02:00:00Z&#39;.                                                                                                                                                        | [optional] |
| **include**       | **String** | Query param to include certain fields in response. E.g. &#39;?include&#x3D;stats&#39; Will return the ticket’s closed_at, resolved_at and first_responded_at time. &#39;?include&#x3D;requester&#39; Will return the requester&#39;s email, id, mobile, name, and phone. | [optional] |
| **order_type**    | **String** | Query param to sort the list of tickets. Supported values - &#39;asc&#39; and &#39;desc&#39;. Default is &#39;desc&#39;                                                                                                                                                  | [optional] |

### Return type

[**ListTickets200Response**](ListTickets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## restoreTicket

> restoreTicket(ticket_id)

~ Restore a ticket

Restore a deleted Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket_id = 789; // Number | ID of the ticket to be restored
apiInstance.restoreTicket(ticket_id).then(
  () => {
    console.log("API called successfully.");
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type       | Description                     | Notes |
| ------------- | ---------- | ------------------------------- | ----- |
| **ticket_id** | **Number** | ID of the ticket to be restored |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateTicket

> CreateTicket201Response updateTicket(ticket, ticket_id)

~ Update a ticket

Edit a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let ticket = new FreshserviceApiSdkCodegen.Ticket(); // Ticket | Details of the ticket to be updated
let ticket_id = 789; // Number | ID of the ticket to be updated
apiInstance.updateTicket(ticket, ticket_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                    | Description                         | Notes |
| ------------- | ----------------------- | ----------------------------------- | ----- |
| **ticket**    | [**Ticket**](Ticket.md) | Details of the ticket to be updated |
| **ticket_id** | **Number**              | ID of the ticket to be updated      |

### Return type

[**CreateTicket201Response**](CreateTicket201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTicketConversation

> UpdateTicketConversation200Response updateTicketConversation(conversation, ticket_id, conversation_id)

~ Update a conversation on a ticket

Edit the conversation on a Freshservice Ticket

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let conversation = new FreshserviceApiSdkCodegen.Conversation(); // Conversation | details of the conversation to be updated
let ticket_id = 789; // Number | ID of the ticket for which conversation has to be deleted
let conversation_id = 789; // Number | ID of the reply or note that needs to be updated
apiInstance.updateTicketConversation(conversation, ticket_id, conversation_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type                                | Description                                               | Notes |
| ------------------- | ----------------------------------- | --------------------------------------------------------- | ----- |
| **conversation**    | [**Conversation**](Conversation.md) | details of the conversation to be updated                 |
| **ticket_id**       | **Number**                          | ID of the ticket for which conversation has to be deleted |
| **conversation_id** | **Number**                          | ID of the reply or note that needs to be updated          |

### Return type

[**UpdateTicketConversation200Response**](UpdateTicketConversation200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTicketTask

> CreateTicketTask201Response updateTicketTask(task, ticket_id, task_id)

Update a task on a ticket

Update an existing task on an existing ticket request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let task = new FreshserviceApiSdkCodegen.Task(); // Task | tassk details that needs to be updated
let ticket_id = 789; // Number | ID of ticket request
let task_id = 789; // Number | ID of the task
apiInstance.updateTicketTask(task, ticket_id, task_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name          | Type                | Description                            | Notes |
| ------------- | ------------------- | -------------------------------------- | ----- |
| **task**      | [**Task**](Task.md) | tassk details that needs to be updated |
| **ticket_id** | **Number**          | ID of ticket request                   |
| **task_id**   | **Number**          | ID of the task                         |

### Return type

[**CreateTicketTask201Response**](CreateTicketTask201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTicketTimeEntry

> CreateTicketTimeEntry201Response updateTicketTimeEntry(time_entry, ticket_id, time_entry_id)

Update a time entry on a ticket

Update an existing time entry on an existing ticket request in Freshservice

### Example

```javascript
import FreshserviceApiSdkCodegen from "freshservice-api-sdk-codegen";

let apiInstance = new FreshserviceApiSdkCodegen.TicketsApi();
let time_entry = new FreshserviceApiSdkCodegen.TimeEntry(); // TimeEntry | time entry details that needs to be updated
let ticket_id = 789; // Number | ID of ticket request
let time_entry_id = 789; // Number | ID of the time entry
apiInstance.updateTicketTimeEntry(time_entry, ticket_id, time_entry_id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                          | Description                                 | Notes |
| ----------------- | ----------------------------- | ------------------------------------------- | ----- |
| **time_entry**    | [**TimeEntry**](TimeEntry.md) | time entry details that needs to be updated |
| **ticket_id**     | **Number**                    | ID of ticket request                        |
| **time_entry_id** | **Number**                    | ID of the time entry                        |

### Return type

[**CreateTicketTimeEntry201Response**](CreateTicketTimeEntry201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
