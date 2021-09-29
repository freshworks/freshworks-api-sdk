import ApplicantApi from "../gen/freshteam/api/ApplicantApi";
import { Client } from "../http-client";
import { Applicant, ApplicantArchive, ApplicantDetail, ApplicantSubStage, ApplicantUpdate } from "./models";

/**
 * @param {Client} _client
 */
export default function applicants(_client) {
  const applicantApiInstance = new ApplicantApi.ApplicantApi();

  return {
    /**
     * Fetches the list of applicants
     *
     * @param {number} jobPostingId - ID of the job posting to search applicants for
     * @param {object} query - Options to filter applicants
     * @returns {Promise<Applicant[]>} - Response with applicants list in the response body
     */
    async list(jobPostingId, query) {
      return applicantApiInstance.getApplicants(jobPostingId, query);
    },

    /**
     * Fetches the applicant
     *
     * @param {number} id - Identifier of the applicant
     * @returns {Promise<ApplicantDetail>} - Response with applicant object in the response body
     */
    async detail(id) {
      return applicantApiInstance.getApplicant(id);
    },

    /**
     * Create an applicant for a applicant
     *
     * @param {number} id - Identifier of the applicant
     * @param {ApplicantUpdate} applicant - Properties for the applicant
     * @returns {Promise<ApplicantDetail>} - Response with applicant object in the response body
     */
    async update(id, applicant) {
      return applicantApiInstance.updateApplicant(applicant, id);
    },

    /**
     * Fetches the lit of applicant fields
     *
     * @param {object} id - Identifier of the applicant
     * @param {ApplicantArchive} options - Properties to filter the applicant
     * @returns {Promise<ApplicantDetail>} - Response with applicant fields list in the response body
     */
    async archive(id, options) {
      return applicantApiInstance.archiveApplicant(id, { applicant: options });
    },

    /**
     * Fetches the list of applicant fields
     *
     * @param {number} id - Identifier of the applicant
     * @param {ApplicantSubStage} options - Properties to update sub stage
     * @returns {Promise<ApplicantDetail>} - Response with applicant fields list in the response body
     */
    async updateSubStage(id, options) {
      return applicantApiInstance.moveSubStage(id, { applicant: options });
    }
  };
}
