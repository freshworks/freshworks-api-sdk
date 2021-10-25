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
import branches from "./branches";
import businessUnits from "./business-units";
import departments from "./departments";

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
    branches: branches(client),
    departments: departments(client),
    sub_departments: subDepartments(client),
    business_units: businessUnits(client),
    // teams: require("./teams")(client),
    // levels: require("./levels")(client),
    time_offs: timeOffs(client),
    roles: roles(client),
    // job_postings: require("./job-postings")(client),
    applicants: applicants(client),
    // candidate_sources: require("./candidate-sources")(client),
    user_functions: userFunctions(client),
    new_hires: newHires(client)
    // candidates: require("./candidates")(client),
  };
}

/**
 * Export models statically
 */
Freshteam.models = models;
