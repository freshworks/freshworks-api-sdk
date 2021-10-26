/**
 * @module Freshteam/levels
 */

import { LevelsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Level } from "./models";

/**
 *
 * @param {Client} client
 * @hideconstructor
 */
export default function levels(client) {
  const api = new LevelsApi(client.instance);

  return {
    /**
     * Fetches the list of levels
     *
     * @returns {Promise<Level[]>} - Response with levels list in the response body
     */
    async list() {
      return api.getLevels();
    },

    /**
     * Get the details of a level
     *
     * @param {number} id - Identifier of the level
     * @returns {Promise<Level>} - Response with level object in the response body
     */
    async get(id) {
      return api.getLevel(id);
    }
  };
}
