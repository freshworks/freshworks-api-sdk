/**
 * @module freshteam
 */

import { Client } from "../http-client";
import { ApiClient } from "../gen/freshteam";
import models from "./models";

/**
 * Freshteam API client builder
 *
 * @param {string} domain - Freshteam domain
 * @param {string} apiKey - API Key for the same Freshteam domain
 */
export default function Freshteam(domain, apiKey) {
  const basePath = "/api";
  const instance = ApiClient.instance
  const client = new Client({ domain, apiKey, basePath, instance });

  return {
    employees: require("./employees")(client),
    time_offs: require("./time-offs")(client),
    job_postings: require("./job-postings")(client)
  };
}

/**
 * Export models statically
 */
Freshteam.models = models;
