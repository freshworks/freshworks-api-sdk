import { Client } from "../http-client";
import { ApiClient } from "../gen/freshservice";
import * as models from "./models";
import { Tickets, TicketUtil } from "./tickets";

/**
 * Freshservice API client
 */
export class Freshservice {
  /**
   * Create a new instance of Freshservice API client
   *
   * @param {string} domain - Domain of the Freshservice instance
   * @param {string} apiKey - API key for the domain
   *
   * ```js
   * const { Freshservice } = require("@freshworks/api-sdk");
   * const FS = new Freshservice(domain, apiKey);
   * ```
   */
  constructor(domain, apiKey) {
    const basePath = "";
    const instance = ApiClient.instance;
    const client = new Client({ domain, apiKey, basePath, instance });

    this.tickets = new TicketUtil(client);
  }
}

/**
 * Export models statically
 */
Freshservice.models = models;
