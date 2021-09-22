import RolesApi from "../gen/freshteam/api/RolesApi";

const rolesApiInstance = new RolesApi.RolesApi();

export default function RolesApi() {
  return {
    /**
     * Fetches the list of roles
     *
     * @returns {module.http-client~Response} - Response with roles list in the response body
     */
    async list() {
      return rolesApiInstance.getRoles();
    },

    /**
     * Get the details of a role
     *
     * @param {number} id - Identifier of the role
     * @returns {module.http-client~Response} - Response with role object in the response body
     */
    async get(id) {
      return rolesApiInstance.getRole(id);
    }
  };
}
