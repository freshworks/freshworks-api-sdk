import { TeamsApi } from "../gen/freshteam";
import { Client } from "../http-client";
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
   * @returns {Promise<Team[]>} - Response with teams list in the response body
   */
  async list() {
    return this._api.getTeams();
  }

  /**
   * Get the details of a team
   *
   * @param {number} id - Identifier of the team
   * @returns {Promise<Team>} - Response with Team object in the response body
   */
  async get(id) {
    return this._api.getTeam(id);
  }
}
