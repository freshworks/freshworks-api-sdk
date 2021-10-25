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
import levels from "./levels";
import jobPostings from "./job-postings";
import candidateSources from "./candidate-sources";

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
    levels: levels(client),
    timeOffs: timeOffs(client),
    roles: roles(client),
    jobPostings: jobPostings(client),
    candidateSources: candidateSources(client),
    userFunctions: userFunctions(client),
    newHires: newHires(client),
    // -- The apis below here are not documented in REST API docs
    applicants: applicants(client)
  };
}

/**
 * Export models statically
 */
Freshteam.models = models;
