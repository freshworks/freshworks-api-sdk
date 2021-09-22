import LevelsApi from "../gen/freshteam/api/LevelsApi";

const levelsApiInstance = new LevelsApi.LevelsApi();

export default function LevelsApi() {
  return {
    /**
     * Fetches the list of levels
     *
     * @returns {module.http-client~Response} - Response with levels list in the response body
     */
    async list() {
      return levelsApiInstance.getLevels();
    },

    /**
     * Get the details of a level
     *
     * @param {number} id - Identifier of the level
     * @returns {module.http-client~Response} - Response with level object in the response body
     */
    async get(id) {
      return levelsApiInstance.getLevel(id);
    }
  };
}
