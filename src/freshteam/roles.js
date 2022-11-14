import { RolesApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
import { Role } from "./models";

export class Roles {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new RolesApi(client.instance);
  }

  /**
   * Fetches the list of roles
   *
   * @returns {Promise<Response<Role[]>>} - Array of roles
   */
  async list() {
    return this._api.getRolesWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a role
   *
   * @param {number} id - Identifier of the role
   * @returns {Promise<Response<Role>>} - Role object
   */
  async get(id) {
    return this._api.getRoleWithHttpInfo(id).then(res => intoResponse(res));
  }
}
