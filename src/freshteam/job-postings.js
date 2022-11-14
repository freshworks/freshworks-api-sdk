import { JobApi, JobFieldsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
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
   * ```js
   * // Get the first page of list of job postings with default sort order
   * const jobs = await ft.jobPostings.list()
   *
   * // Paginated search. Fetch page 1
   * const page1 = await ft.jobPostings.list({
   *   page: 1
   * });
   *
   * // Get page 2 of the same query as above
   * const page2 = await ft.jobPostings.list({
   *   page: 2
   * });
   * ```
   *
   * @param {JobPostingsListQuery} [query] - Options to filter job postings
   * @returns {Promise<Response<Job[]>>} - Response with job postings list in the response body
   */
  async list(query = {}) {
    return this._jobs.getJobsWithHttpInfo(query).then(res => intoResponse(res));
  }

  /**
   * Fetches the job posting
   *
   * @param {number} id - Identifier of the job posting
   * @returns {Promise<Response<Job>>} - Response with job posting object in the response body
   */
  async get(id) {
    return this._jobs.getJobWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Create an applicant for a job posting
   *
   * @param {number} jobPostingId - Identifier of the job posting
   * @param {ApplicantCreate} applicant - Properties for the applicant
   * @returns {Promise<Response<ApplicantDetail>>} - Response with applicant object in the response body
   */
  async createApplicant(jobPostingId, applicant) {
    return this._jobs.createApplicantWithHttpInfo(applicant, jobPostingId).then(res => intoResponse(res));
  }

  /**
   * Fetches the list of job posting fields
   *
   * @returns {Promise<Response<JobField>>} - Response with job posting fields list in the response body
   */
  async listFields() {
    return this._fields.getJobFieldsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Fetches the list of applicant fields
   *
   * @param {number} jobPostingId Identifier of the job posting
   * @returns {Promise<Response<ApplicantField>>} - Response with applicant fields list in the response body
   */
  async listApplicantFields(jobPostingId) {
    return this._jobs.getApplicantFieldsWithHttpInfo(jobPostingId).then(res => intoResponse(res));
  }
}
