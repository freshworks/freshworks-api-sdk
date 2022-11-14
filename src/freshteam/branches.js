import { LocationsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
import { Branch } from "./models";

export class Branches {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new LocationsApi(client.instance);
  }

  /**
   * Fetches the list of branches
   *
   * @returns {Promise<Response<Branch[]>} - Response with branches list in the response body
   */
  async list() {
    return this._api.getBranchesWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a branch
   *
   * @param {number} id - Identifier of the branch
   * @returns {Promise<Response<Branch>>} - Response with branch object in the response body
   */
  async get(id) {
    return this._api.getBranchWithHttpInfo(id).then(res => intoResponse(res));
  }
}
