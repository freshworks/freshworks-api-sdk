import { TeamsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Team } from "./models";

/**
 *
 * @param {Client} client
 * @returns
 */
export default function teams(client) {
  const api = new TeamsApi(client.instance);

  return {
    /**
     * Fetches the list of teams in the account
     *
     * @returns {Promise<Team[]>} - Response with teams list in the response body
     */
    async list() {
      return api.getTeams();
    },

    /**
     * Get the details of a team
     *
     * @param {number} id - Identifier of the team
     * @returns {Promise<Team>} - Response with Team object in the response body
     */
    async get(id) {
      return api.getTeam(id);
    }
  };
}
