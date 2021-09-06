/**
 * @module freshteam
 */

import { Client } from "../http-client";
import "./models";

/**
 * Freshteam API client builder
 *
 * @param {string} domain - Freshteam domain
 * @param {string} apiKey - API Key for the same Freshteam domain
 */
export default function Freshteam(domain, apiKey) {
  const basePath = "/api";
  const client = new Client({ domain, apiKey, basePath });

  return {
    models,
    employees: require("./employees")(client),
    time_offs: require("./time-offs")(client),
    job_postings: require("./job-postings")(client)
  };
}
