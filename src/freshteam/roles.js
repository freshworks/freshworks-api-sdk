import { RolesApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Role } from "./models";

/**
 * @param {Client} client
 */
export default function Roles(client) {
  const api = new RolesApi(client.instance);

  return {
    /**
     * Fetches the list of roles
     *
     * @returns {Promise<Role[]>} - Array of roles
     */
    async list() {
      return api.getRoles();
    },

    /**
     * Get the details of a role
     *
     * @param {number} id - Identifier of the role
     * @returns {Promise<Role>} - Role object
     */
    async get(id) {
      return api.getRole(id);
    }
  };
}
