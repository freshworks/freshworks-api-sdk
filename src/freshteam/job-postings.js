import { JobApi, JobFieldsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Job, JobField, ApplicantCreate, ApplicantDetail, ApplicantField, JobPostingsListQuery } from "./models";

export class JobPostings {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._jobs = new JobApi(client.instance);
    /**
     * @private
     */
    this._fields = new JobFieldsApi(client.instance);
  }

  /**
   * Fetches the list of job postings
   *
   * @param {JobPostingsListQuery} [query] - Options to filter job postings
   * @returns {Promise<Job[]>} - Response with job postings list in the response body
   */
  async list(query = {}) {
    return this._jobs.getJobs(query);
  }

  /**
   * Fetches the job posting
   *
   * @param {number} id - Identifier of the job posting
   * @returns {Promise<Job>} - Response with job posting object in the response body
   */
  async get(id) {
    return this._jobs.getJob(id);
  }

  /**
   * Create an applicant for a job posting
   *
   * @param {number} jobPostingId - Identifier of the job posting
   * @param {ApplicantCreate} applicant - Properties for the applicant
   * @returns {Promise<ApplicantDetail>} - Response with applicant object in the response body
   */
  async createApplicant(jobPostingId, applicant) {
    return this._jobs.createApplicant(applicant, jobPostingId);
  }

  /**
   * Fetches the list of job posting fields
   *
   * @returns {Promise<JobField>} - Response with job posting fields list in the response body
   */
  async listFields() {
    return this._fields.getJobFields();
  }

  /**
   * Fetches the list of applicant fields
   *
   * @param {number} jobPostingId Identifier of the job posting
   * @returns {Promise<ApplicantField>} - Response with applicant fields list in the response body
   */
  async listApplicantFields(jobPostingId) {
    return this._jobs.getApplicantFields(jobPostingId);
  }
}
