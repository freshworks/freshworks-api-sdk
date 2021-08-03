/**
 * @module freshteam
 */

import { Client } from "../http-client";
import employeeFn from "./employee";
import jobPostings from "./job-postings";
import timeOffs from "./time-offs";

/**
 * Freshteam API entrypoint
 *
 * @param client - HTTP Client instance
 * @constructor
 */
export default function Freshteam(client: Client) {
  return {
    employee: employeeFn(client),
    time_offs: timeOffs(client),
    job_postings: jobPostings(client)
  }
}
