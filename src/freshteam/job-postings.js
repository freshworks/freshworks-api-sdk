import { JobApi, JobFieldsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Job, JobField, ApplicantCreate, ApplicantDetail, ApplicantField } from "./models";

/**
 *
 * @param {Client} client
 */
export default function jobPostings(client) {
  const jobs = new JobApi(client.instance);
  const fields = new JobFieldsApi(client.instance);

  return {
    /**
     * Fetches the list of job postings
     *
     * @param {object} options - Options to filter job postings
     * @returns {Promise<Job[]>} - Response with job postings list in the response body
     */
    async list(options) {
      return jobs.getJobs(options);
    },

    /**
     * Fetches the job posting
     *
     * @param {number} id - Identifier of the job posting
     * @returns {Promise<Job>} - Response with job posting object in the response body
     */
    async get(id) {
      return jobs.getJob(id);
    },

    /**
     * Create an applicant for a job posting
     *
     * @param {number} jobPostingId - Identifier of the job posting
     * @param {ApplicantCreate} applicant - Properties for the applicant
     * @returns {Promise<ApplicantDetail>} - Response with applicant object in the response body
     */
    async createApplicant(jobPostingId, applicant) {
      return jobs.createApplicant(applicant, jobPostingId);
    },

    /**
     * Fetches the list of job posting fields
     *
     * @returns {Promise<JobField>} - Response with job posting fields list in the response body
     */
    async listFields() {
      return fields.getJobFields();
    },

    /**
     * Fetches the list of applicant fields
     *
     * @param {number} jobPostingId Identifier of the job posting
     * @returns {Promise<ApplicantField>} - Response with applicant fields list in the response body
     */
    async listApplicantFields(jobPostingId) {
      return jobs.getApplicantFields(jobPostingId);
    }
  };
}
