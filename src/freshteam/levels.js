import { LevelsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
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
   * @returns {Promise<Response<Level[]>>} - Response with levels list in the response body
   */
  async list() {
    return this._api.getLevelsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a level
   *
   * @param {number} id - Identifier of the level
   * @returns {Promise<Response<Level>>} - Response with level object in the response body
   */
  async get(id) {
    return this._api.getLevelWithHttpInfo(id).then(res => intoResponse(res));
  }
}
