import { ApplicantApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Applicant, ApplicantDetail, ApplicantSubStage, ApplicantUpdate, ApplicantListQuery } from "./models";
import { intoResponse } from "./common";
import { Response } from "../http-client";

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
   * Fetches list of applicants
   *
   * ```js
   * const FT = new Freshteam(domain, apiKey);
   * await FT.applicants.list(jobPostingId, query);
   * ```
   *
   * @param {number} jobPostingId - ID of the job posting to search applicants for
   * @param {ApplicantListQuery} query - Options to filter applicants
   * @returns {Promise<Response<Applicant[]>} - Response with applicants list in the response body
   */
  async list(jobPostingId, query) {
    return this._api.getApplicantsWithHttpInfo(jobPostingId, query).then(res => intoResponse(res));
  }

  /**
   * Get an applicant by applicant ID
   *
   * @param {number} id - Identifier of the applicant
   * @returns {Promise<Response<ApplicantDetail>} - Response with applicant object in the response body
   */
  async get(id) {
    return this._api.getApplicantWithHttpInfo(id).then(res => intoResponse(res));
  }

  /**
   * Update an existing applicant
   *
   * @param {number} id - Identifier of the applicant
   * @param {ApplicantUpdate} applicant - Properties for the applicant
   * @returns {Promise<Response<ApplicantDetail>} - Response with applicant object in the response body
   */
  async update(id, applicant) {
    return this._api.updateApplicantWithHttpInfo(applicant, id).then(res => intoResponse(res));
  }

  /**
   * Archive an applicant
   *
   * @param {object} id - Identifier of the applicant
   * @param {Applicant} options - Properties to filter the applicant
   * @returns {Promise<Response<ApplicantDetail>} - Response with applicant fields list in the response body
   */
  async archive(id, options) {
    return this._api.archiveApplicantWithHttpInfo(id, { applicant: options }).then(res => intoResponse(res));
  }

  /**
   * Update sub-stage of an applicant
   *
   * @param {number} id - Identifier of the applicant
   * @param {ApplicantSubStage} options - Properties to update sub stage
   * @returns {Promise<Response<ApplicantDetail>} - Response with applicant fields list in the response body
   */
  async updateSubStage(id, options) {
    return this._api.moveSubStageWithHttpInfo(id, { applicant: options }).then(res => intoResponse(res));
  }
}
