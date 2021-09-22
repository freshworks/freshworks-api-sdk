import ApplicantApi from "../gen/freshteam/api/ApplicantApi";

const applicantApiInstance = new ApplicantApi.ApplicantApi();

export default function ApplicantApi() {
  return {
    /**
     * Fetches the list of applicants
     *
     * @param {number} jobPostingId - Identifier of the applicant
     * @param {object} options - Options to filter applicants
     * @returns {module.http-client~Response} - Response with applicants list in the response body
     */
    async list(jobPostingId, options) {
      return applicantApiInstance.getApplicants(jobPostingId, options);
    },

    /**
     * Fetches the applicant
     *
     * @param {number} id - Identifier of the applicant
     * @returns {module.http-client~Response} - Response with applicant object in the response body
     */
    async get(id) {
      return applicantApiInstance.getApplicant(id)
    },

    /**
     * Create an applicant for a applicant
     *
     * @param {number} id - Identifier of the applicant
     * @param {object} applicant - Properties for the applicant
     * @returns {module.http-client~Response} - Response with applicant object in the response body
     */
    async update(id, applicant) {
      return applicantApiInstance.updateApplicant(applicant, id);
    },

    /**
     * Fetches the lit of applicant fields
     *
     * @param {object} id - Identifier of the applicant
     * @param {object} options - Properties to filter the applicant
     * @returns {module.http-client~Response} - Response with applicant fields list in the response body
     */
    async archive(id, options) {
      return applicantApiInstance.archiveApplicant(id, { applicant: options });
    },

    /**
     * Fetches the list of applicant fields
     *
     * @param {number} id - Identifier of the applicant
     * @param {object} options - Properties to update sub stage
     * @returns {module.http-client~Response} - Response with applicant fields list in the response body
     */
    async updateSubStage(id, options) {
      return applicantApiInstance.moveSubStage(id, { applicant: options });
    }
  };
}
