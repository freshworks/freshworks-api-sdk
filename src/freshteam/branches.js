import { LocationsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Branch } from "./models";

/**
 * @param {Client} client
 */
export default function branches(client) {
  const api = new LocationsApi(client.instance);

  return {
    /**
     * Fetches the list of branches
     *
     * @returns {Branch[]} - Response with branches list in the response body
     */
    async list() {
      return api.getBranches();
    },

    /**
     * Get the details of a branch
     *
     * @param {number} id - Identifier of the branch
     * @returns {Branch} - Response with branch object in the response body
     */
    async get(id) {
      return api.getBranch(id);
    }
  };
}
