import { UserFunctionsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { UserFunction } from "./models";

export class UserFunctions {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new UserFunctionsApi(client.instance);
  }

  /**
   * Fetches the list of user functions
   *
   * @returns {Promise<UserFunction[]>} Array of user functions
   */
  async list() {
    return this._api.getUserFunctions();
  }

  /**
   * Get the details of a user function
   *
   * @param {number} id - Identifier of the user function
   * @returns {Promise<UserFunction>} - User function object
   */
  async get(id) {
    return this._api.getUserFunction(id);
  }
}
