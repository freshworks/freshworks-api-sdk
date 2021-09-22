import TeamsApi from "../gen/freshteam/api/TeamsApi";

const teamsApiInstance = new TeamsApi.TeamsApi();

export default function teams() {
  return {
    /**
     * Fetches the list of teams in the account
     *
     * @returns {module.http-client~Response} - Response with teams list in the response body
     */
    async list() {
      return teamsApiInstance.getTeams();
    },

    /**
     * Get the details of a team
     *
     * @param {number} id - Identifier of the team
     * @returns {module.http-client~Response} - Response with Team object in the response body
     */
    async get(id) {
      return teamsApiInstance.getTeam(id);
    }
  };
}
