import CandidateApi from "./../gen/freshteam/api/CandidateApi";

const candidateApiInstance = new CandidateApi.CandidateApi();

export default function candidate() {
  return {
    /**
     * Get the details of a candidate
     *
     * @param {number} id - Candidate identifier
     * @param {string[]} include - Additional options to include - skills, qualifications, positions
     * @returns {module.http-client~Response} - Response with candidate object in the response body
     */
    async get(id, include) {
      return candidateApiInstance.getCandidate(id, { include });
    },

    /**
     * Update a candidate
     *
     * @param {number} id - Candidate identifier
     * @param {object} candidate - candidate details
     * @returns {module.http-client~Response} - Response with candidate object in the response body
     */
    async update(id, candidate) {
      return candidateApiInstance.updateCandidate(candidate, id);
    }
  };
}
