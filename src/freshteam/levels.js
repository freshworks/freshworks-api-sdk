import { LevelsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Level } from "./models";

export class Levels {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new LevelsApi(client.instance);
  }

  /**
   * Fetches the list of levels
   *
   * @returns {Promise<Level[]>} - Response with levels list in the response body
   */
  async list() {
    return this._api.getLevels();
  }

  /**
   * Get the details of a level
   *
   * @param {number} id - Identifier of the level
   * @returns {Promise<Level>} - Response with level object in the response body
   */
  async get(id) {
    return this._api.getLevel(id);
  }
}
