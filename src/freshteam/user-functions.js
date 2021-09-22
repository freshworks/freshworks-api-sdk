import UserFunctionsApi from "../gen/freshteam/api/UserFunctionsApi";

const userFunctionsApiInstance = new UserFunctionsApi.UserFunctionsApi();

export default function UserFunctionsApi() {
  return {
    /**
     * Fetches the list of user functions
     *
     * @returns {module.http-client~Response} - Response with user functions list in the response body
     */
    async list() {
      return userFunctionsApiInstance.getUserFunctions();
    },

    /**
     * Get the details of a user function
     *
     * @param {number} id - Identifier of the user function
     * @returns {module.http-client~Response} - Response with user function object in the response body
     */
    async get(id) {
      return userFunctionsApiInstance.getUserFunction(id);
    }
  };
}
