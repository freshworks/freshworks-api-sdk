export interface TicketsQuery{

  /**
   * Query param to filter out tickets requester's email id.
   */
  email?: string;
    /**
   * Pre-defined filters
   *
   * Pre-defined filters. The filters available are [new_and_my_open, watching, spam, deleted].
   */
  filter?: string;
  /**
   * Query param to include certain fields in response. 
   * E.g. '?include=stats' Will return the ticket’s closed_at, resolved_at and first_responded_at time. 
   * '?include=requester' Will return the requester's email, id, mobile, name, and phone.
   */
   include?: string;
  /**
   * Query param to sort the list of tickets. Supported values - 'asc' and 'desc'. Default is 'desc'
   */
   order_type?: string;
  /**
   * Query param to filter out tickets created by a particular requester.
   */
   requester_id?: number[];
   /**
    * Query param to filter out tickets based on updated time. E.g. '?updated_since=2015-01-19T02:00:00Z'.
    */
   updated_since?: string;   
}

export interface PaginationQuery{

  /**
   * The page number to retrieve.
   * Default value = 1
   */
   page?: number;


  /**
   * The number of time entries to retrieve in each page of a paginated list.
   * Default value = 30
   */
   per_page?: number;
}


export {
  // Tickets models
  CreateTicket201Response as Ticket,
  ListTickets200Response as Tickets,
  CreateTicketTimeEntry201Response as TimeEntry,
  ListTicketTimeEntries200Response as TimeEntries,
  CreateTicketFieldSource201Response as TicketSource,
  CreateTicketTask201Response as Task,
  ListTicketTasks200Response as Tasks
} from "../gen/freshservice";
