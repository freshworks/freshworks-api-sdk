/**
 * @module Freshteam/branches
 */

import { LocationsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Branch } from "./models";

/**
 * @param {Client} client
 * @hideconstructor
 */
export default function branches(client) {
  const api = new LocationsApi(client.instance);

  return {
    /**
     * Fetches the list of branches
     *
     * @returns {Promise<Branch[]>} - Response with branches list in the response body
     */
    async list() {
      return api.getBranches();
    },

    /**
     * Get the details of a branch
     *
     * @param {number} id - Identifier of the branch
     * @returns {Promise<Branch>} - Response with branch object in the response body
     */
    async get(id) {
      return api.getBranch(id);
    }
  };
}
