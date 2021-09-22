import NewHireApi from "../gen/freshteam/api/NewHireApi.js";

const newHireApiInstance = new NewHireApi.NewHireApi();

export default function newHires() {
  return {
    /**
     * Create a NewHire
     *
     * @param {object} newHire - Details of a NewHire
     * @returns {module.http-client~Response} - Response with candidate object in the response body
     */
    async create(newHire) {
      return newHireApiInstance.createNewHire(newHire);
    },

    /**
     * Get the details of a NewHire
     *
     * @param {number} id - Candidate identifier
     * @param {string[]} include - Additional properties to include
     * @returns {module.http-client~Response} - Response with NewHire object in the response body
     */
    async get(id, include) {
      return candidateApiInstance.getNewHire(id, { include });
    },

    /**
     * Update a NewHire
     *
     * @param {number} id - NewHire identifier
     * @param {object} newHire - NewHire details
     * @returns {module.http-client~Response} - Response with candidate object in the response body
     */
    async update(id, newHire) {
      return candidateApiInstance.updateNewHire(newHire, id);
    }
  };
}
