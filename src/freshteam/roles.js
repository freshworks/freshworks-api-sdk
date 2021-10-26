import { RolesApi } from "../gen/freshteam";
import { Client } from "../http-client";
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
   * @returns {Promise<Role[]>} - Array of roles
   */
  async list() {
    return this._api.getRoles();
  }

  /**
   * Get the details of a role
   *
   * @param {number} id - Identifier of the role
   * @returns {Promise<Role>} - Role object
   */
  async get(id) {
    return this._api.getRole(id);
  }
}
