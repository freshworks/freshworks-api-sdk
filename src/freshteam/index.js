import { Client } from "../http-client";
import { ApiClient } from "../gen/freshteam";
import * as models from "./models";
import { Employees } from "./employees";
import { Branches } from "./branches";
import { Departments } from "./departments";
import { SubDepartments } from "./sub-departments";
import { BusinessUnits } from "./business-units";
import { Teams } from "./teams";
import { Levels } from "./levels";
import { TimeOffs } from "./time-offs";
import { Roles } from "./roles";
import { JobPostings } from "./job-postings";
import { CandidateSources } from "./candidate-sources";
import { UserFunctions } from "./user-functions";
import { NewHires } from "./new-hires";
import { Applicants } from "./applicants";

/**
 * Freshteam API client
 */
export class Freshteam {
  /**
   * Create a new instance of Freshteam API client
   *
   * @param {string} domain - Domain of the Freshteam instance
   * @param {string} apiKey - API key for the domain
   *
   * ```js
   * const { Freshteam } = require("@freshworks/freshworks-api-sdk");
   * const FT = new Freshteam(domain, apiKey);
   * ```
   */
  constructor(domain, apiKey) {
    const basePath = "/api";
    const instance = ApiClient.instance;
    const client = new Client({ domain, apiKey, basePath, instance });

    this.employees = new Employees(client);
    this.branches = new Branches(client);
    this.departments = new Departments(client);
    this.subDepartments = new SubDepartments(client);
    this.businessUnits = new BusinessUnits(client);
    this.teams = new Teams(client);
    this.levels = new Levels(client);
    this.timeOffs = new TimeOffs(client);
    this.roles = new Roles(client);
    this.jobPostings = new JobPostings(client);
    this.candidateSources = new CandidateSources(client);
    this.userFunctions = new UserFunctions(client);
    this.newHires = new NewHires(client);
    // -- The apis below here are not documented in REST API docs
    this.applicants = new Applicants(client);
  }
}

/**
 * Export models statically
 */
Freshteam.models = models;
