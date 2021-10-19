/**
 * @module freshteam
 */

import { Client } from "../http-client";
import { ApiClient } from "../gen/freshteam";
import * as models from "./models";
import employees from "./employees";
import applicants from "./applicants";
import timeOffs from "./time-offs";
import userFunctions from "./user-functions";
import subDepartments from "./sub-departments";
import roles from "./roles";
import newHires from "./new-hires";

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
    applicants: applicants(client),
    time_offs: timeOffs(client),
    user_functions: userFunctions(client),
    sub_departments: subDepartments(client),
    roles: roles(client),
    new_hires: newHires(client)
    // == Uncomment below as each feature is updated to use `import` syntax ==
    // branches: require("./branches")(client),
    // business_units: require("./business-units")(client),
    // candidate_sources: require("./candidate-sources")(client),
    // candidates: require("./candidates")(client),
    // departments: require("./departments")(client),
    // job_postings: require("./job-postings")(client),
    // levels: require("./levels")(client),
    // teams: require("./teams")(client),
  };
}

/**
 * Export models statically
 */
Freshteam.models = models;
