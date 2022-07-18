---
title: Freshservice
prev: /get-started
next: /freshservice/Tickets
---

## Quick start

Follow [installation instructions](/get-started.md#install) to install the API SDK, and then bring the `Freshservice` class into scope.

```js
// import Freshservice API-SDK
const { Freshservice } = require("@freshworks/api-sdk");

// Define access credentials - Recommended to pass them externally
const domain = "********.freshservice.com";
const apiKey = "************";

// Create new Freshservice instance
const fs = new Freshservice(domain, apiKey);
```

Call a method, e.g., list all tickets from Freshservice:

```js
// Call method using the Freshservice instance
const tickets = await fs.tickets.list();
```

## Models

The `Freshservice` class includes a static property called `models`. All models used by the API methods below can be accessed from there.

For example:

```js
// Create a child ticket for a given parent ticket ID
const parent_ticket_id = 9999999;
const newChildTicket = new Freshservice.models.Ticket({
        "cc_emails": [
        ],
        ...
        ...
        "tags": [
        ...
        ]
      });
const childTicket = await fs.tickets.createChildTicket(newChildTicket, parent_ticket_id);
```

## API methods

API methods are the methods you'd interact primarily with. Each method is `async` and returns a `Promise`. So, you can either chain the method calls with `.then()` or call them using `async/await` syntax.

[Tickets](tickets.md)
