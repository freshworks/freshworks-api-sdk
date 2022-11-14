import { UserFunctionsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
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
   * @returns {Promise<Response<UserFunction[]>>} Array of user functions
   */
  async list() {
    return this._api.getUserFunctionsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a user function
   *
   * @param {number} id - Identifier of the user function
   * @returns {Promise<Response<UserFunction>>} - User function object
   */
  async get(id) {
    return this._api.getUserFunctionWithHttpInfo(id).then(res => intoResponse(res));
  }
}
