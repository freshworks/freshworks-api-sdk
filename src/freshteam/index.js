/**
 * @module Freshteam
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
 * @name Freshteam
 * @constructor
 * @param {string} domain - Freshteam domain
 * @param {string} apiKey - API Key for the same Freshteam domain
 * @example
 * const { Freshteam } = require("@freshworks/freshworks-api-sdk");
 * const FT = new Freshteam(domain, apiKey);
 */
export default function Freshteam(domain, apiKey) {
  const basePath = "/api";
  const instance = ApiClient.instance;
  const client = new Client({ domain, apiKey, basePath, instance });

  return {
    /**
     * @instance
     * @memberof module:Freshteam#Freshteam
     * @type {module:Freshteam/employees}
     */
    employees: employees(client),
    /**
     * @instance
     * @type {module:Freshteam/branches}
     */
    branches: branches(client),
    /**
     * @instance
     * @type {module:Freshteam/departments}
     */
    departments: departments(client),
    /**
     * @instance
     * @type {module:Freshteam/subDepartments}
     */
    subDepartments: subDepartments(client),
    /**
     * @instance
     * @type {module:Freshteam/businessUnits}
     */
    businessUnits: businessUnits(client),
    /**
     * @instance
     * @type {module:Freshteam/teams}
     */
    teams: teams(client),
    /**
     * @instance
     * @type {module:Freshteam/levels}
     */
    levels: levels(client),
    /**
     * @instance
     * @type {module:Freshteam/timeOffs}
     */
    timeOffs: timeOffs(client),
    /**
     * @instance
     * @type {module:Freshteam/roles}
     */
    roles: roles(client),
    /**
     * @instance
     * @type {module:Freshteam/jobPostings}
     */
    jobPostings: jobPostings(client),
    /**
     * @instance
     * @type {module:Freshteam/candidateSources}
     */
    candidateSources: candidateSources(client),
    /**
     * @instance
     * @type {module:Freshteam/userFunctions}
     */
    userFunctions: userFunctions(client),
    /**
     * @instance
     * @type {module:Freshteam/newHires}
     */
    newHires: newHires(client),
    // -- The apis below here are not documented in REST API docs
    /**
     * @instance
     * @type {module:Freshteam/applicants}
     */
    applicants: applicants(client)
  };
}

/**
 * Export models statically
 *
 * @static
 * @type {module:Freshteam/models}
 */
Freshteam.models = models;
