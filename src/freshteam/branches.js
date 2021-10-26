import { LocationsApi } from "../gen/freshteam";
import { Client } from "../http-client";
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
   * @returns {Promise<Branch[]>} - Response with branches list in the response body
   */
  async list() {
    return this._api.getBranches();
  }

  /**
   * Get the details of a branch
   *
   * @param {number} id - Identifier of the branch
   * @returns {Promise<Branch>} - Response with branch object in the response body
   */
  async get(id) {
    return this._api.getBranch(id);
  }
}
