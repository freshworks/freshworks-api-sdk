import { TeamsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
import { Team } from "./models";

export class Teams {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new TeamsApi(client.instance);
  }

  /**
   * Fetches the list of teams in the account
   *
   * @returns {Promise<Response<Team[]>>} - Response with teams list in the response body
   */
  async list() {
    return this._api.getTeamsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a team
   *
   * @param {number} id - Identifier of the team
   * @returns {Promise<Response<Team>} - Response with Team object in the response body
   */
  async get(id) {
    return this._api.getTeamWithHttpInfo(id).then(res => intoResponse(res));
  }
}
