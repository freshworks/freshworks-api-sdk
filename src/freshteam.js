/**
 * @module freshteam
 */

import { Client } from "./http-client";
import employeeFn from "./_freshteam/employee";
import jobPostings from "./_freshteam/job-postings";
import timeOffs from "./_freshteam/time-offs";

/**
 * Freshteam API client builder
 *
 * @param {string} domain - Freshteam domain
 * @param {string} apiKey - API Key for the same Freshteam domain
 */
export default function Freshteam(domain, apiKey) {
  const client = new Client(domain, apiKey);
  return {
    employee: employeeFn(client),
    time_offs: timeOffs(client),
    job_postings: jobPostings(client)
  };
}
