import LocationsApi from "../gen/freshteam/api/LocationsApi";
import { Client } from "../http-client";

/**
 * @param {Client} _client
 */
export default function branches(_client) {
  const branchesApiInstance = new LocationsApi.LocationsApi();

  return {
    /**
     * Fetches the list of branches
     *
     * @returns {module.http-client~Response} - Response with branches list in the response body
     */
    async list() {
      return branchesApiInstance.getBranches();
    },

    /**
     * Get the details of a branch
     *
     * @param {number} id - Identifier of the branch
     * @returns {module.http-client~Response} - Response with branch object in the response body
     */
    async get(id) {
      return branchesApiInstance.getBranch(id);
    }
  };
}
