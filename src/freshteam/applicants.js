import { ApplicantApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Applicant, ApplicantArchive, ApplicantDetail, ApplicantSubStage, ApplicantUpdate } from "./models";

export class Applicants {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new ApplicantApi(client.instance);
  }

  /**
   * Fetches the list of applicants
   *
   * ```js
   * const FT = new Freshteam(domain, apiKey);
   * await FT.applicants.list(jobPostingId, query);
   * ```
   *
   * @param {number} jobPostingId - ID of the job posting to search applicants for
   * @param {object} query - Options to filter applicants
   * @returns {Promise<Applicant[]>} - Response with applicants list in the response body
   */
  async list(jobPostingId, query) {
    return this._api.getApplicants(jobPostingId, query);
  }

  /**
   * Fetches the applicant
   *
   * @param {number} id - Identifier of the applicant
   * @returns {Promise<ApplicantDetail>} - Response with applicant object in the response body
   */
  async get(id) {
    return this._api.getApplicant(id);
  }

  /**
   * Create an applicant for a applicant
   *
   * @param {number} id - Identifier of the applicant
   * @param {ApplicantUpdate} applicant - Properties for the applicant
   * @returns {Promise<ApplicantDetail>} - Response with applicant object in the response body
   */
  async update(id, applicant) {
    return this._api.updateApplicant(applicant, id);
  }

  /**
   * Fetches the lit of applicant fields
   *
   * @param {object} id - Identifier of the applicant
   * @param {ApplicantArchive} options - Properties to filter the applicant
   * @returns {Promise<ApplicantDetail>} - Response with applicant fields list in the response body
   */
  async archive(id, options) {
    return this._api.archiveApplicant(id, { applicant: options });
  }

  /**
   * Fetches the list of applicant fields
   *
   * @param {number} id - Identifier of the applicant
   * @param {ApplicantSubStage} options - Properties to update sub stage
   * @returns {Promise<ApplicantDetail>} - Response with applicant fields list in the response body
   */
  async updateSubStage(id, options) {
    return this._api.moveSubStage(id, { applicant: options });
  }
}
