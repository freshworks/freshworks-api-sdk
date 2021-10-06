/**
 * @module freshteam
 */

import { Client } from "../http-client";
import { ApiClient } from "../gen/freshteam";
import * as models from "./models";
import employees from "./employees";
import applicants from "./applicants";

/**
 * Freshteam API client builder
 *
 * @constructor
 * @param {string} domain - Freshteam domain
 * @param {string} apiKey - API Key for the same Freshteam domain
 */
export default function Freshteam(domain, apiKey) {
  const basePath = "/api";
  const instance = ApiClient.instance;
  const client = new Client({ domain, apiKey, basePath, instance });

  return {
    employees: employees(client),
    applicants: applicants(client)
    // == Uncomment below as each feature is updated to use `import` syntax ==
    // branches: require("./branches")(client),
    // business_units: require("./business-units")(client),
    // candidate_sources: require("./candidate-sources")(client),
    // candidates: require("./candidates")(client),
    // departments: require("./departments")(client),
    // employeeFields: require("./employee-fields")(client),
    // job_postings: require("./job-postings")(client),
    // levels: require("./levels")(client),
    // newHires: require("./new-hires")(client),
    // roles: require("./roles")(client),
    // subDepartments: require("./sub-departments")(client),
    // teams: require("./teams")(client),
    // time_offs: require("./time-offs")(client),
    // user_functions: require("./user-functions")(client)
  };
}

/**
 * Export models statically
 */
Freshteam.models = models;
