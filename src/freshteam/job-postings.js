import JobApi from "../gen/freshteam/api/JobApi";
import JobFieldsApi from "../gen/freshteam/api/JobFieldsApi";

const jobApiInstance = new JobApi.JobApi();
const jobFieldsApiInstance = new JobFieldsApi.JobFieldsApi();

export default function JobApi() {
  return {
    /**
     * Fetches the list of job postings
     *
     * @param {object} options - Options to filter job postings
     * @returns {module.http-client~Response} - Response with job postings list in the response body
     */
    async list(options) {
      return jobApiInstance.getJobs(options);
    },

    /**
     * Fetches the job posting
     *
     * @param {number} id - Identifier of the job posting
     * @returns {module.http-client~Response} - Response with job posting object in the response body
     */
    async get(id) {
      return jobApiInstance.getJob(id);
    },

    /**
     * Create an applicant for a job posting
     *
     * @param {number} jobPostingId - Identifier of the job posting
     * @param {object} employee - Properties for the applicant
     * @returns {module.http-client~Response} - Response with applicant object in the response body
     */
    async createApplicant(jobPostingId, employee) {
      return jobApiInstance.createApplicant(employee, jobPostingId);
    },

    /**
     * Fetches the lit of job posting fields
     *
     * @returns {module.http-client~Response} - Response with job posting fields list in the response body
     */
    async listFields() {
      return jobFieldsApiInstance.getJobFields();
    },

    /**
     * Fetches the list of applicant fields
     *
     * @param {number} id Identifier of the job posting
     * @returns {module.http-client~Response} - Response with applicant fields list in the response body
     */
    async listApplicantFields(id) {
      return jobApiInstance.getApplicantFields(id);
    }
  };
}
