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
import teams from "./teams";

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
    subDepartments: subDepartments(client),
    businessUnits: businessUnits(client),
    teams: teams(client),
    // levels: require("./levels")(client),
    timeOffs: timeOffs(client),
    roles: roles(client),
    // jobPostings: require("./job-postings")(client),
    applicants: applicants(client), // Can be grouped under jobPostings
    // candidateSources: require("./candidate-sources")(client),
    userFunctions: userFunctions(client),
    newHires: newHires(client)
    // candidates: require("./candidates")(client) // Not documented in REST API docs
  };
}

/**
 * Export models statically
 */
Freshteam.models = models;
