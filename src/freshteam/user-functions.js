import {UserFunctionsApi} from "../gen/freshteam";
import { Client } from "../http-client";
import { UserFunction } from "./models";


/**
 * @param {Client} client
 */
export default function UserFunctionsApi(client) {
  const api = new UserFunctionsApi.UserFunctionsApi(client.instance);
  
  return {
    /**
     * Fetches the list of user functions
     *
     * @returns {Promise<UserFunction[]>} Array of user functions
     */
    async list() {
      return api.getUserFunctions();
    },

    /**
     * Get the details of a user function
     *
     * @param {number} id - Identifier of the user function
     * @returns {Promise<UserFunction>} - User function object
     */
    async detail(id) {
      return api.getUserFunction(id);
    }
  };
}
