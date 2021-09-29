import SourcesApi from "../gen/freshteam/api/SourcesApi";
import SourceApi from "../gen/freshteam/api/SourceApi";
import SourceCategoriesApi from "../gen/freshteam/api/SourceCategoriesApi";

const candidateSourcesApiInstance = new SourcesApi.SourcesApi();
const candidateSourceApiInstance = new SourceApi.SourceApi();
const candidateSourceCategoriesApiInstance = new SourceCategoriesApi.SourceCategoriesApi();

export default function candidateSourcesApi() {
  return {
    /**
     * Fetches the list of candidate sources
     *
     * @returns {module.http-client~Response} - Response with candidate sources list in the response body
     */
    async list() {
      return candidateSourcesApiInstance.getCandidateSources();
    },

    /**
     * Create a candidate source
     *
     * @param {object} candidateSource - Properties of candidate source
     * @returns {module.http-client~Response} - Response with candidate source object in the response body
     */
    async create(candidateSource) {
      return candidateSourceApiInstance.createCandidateSources(candidateSource);
    },

    /**
     * Fetches the list of candidate source categories
     *
     * @returns {module.http-client~Response} - Response with candidate source categories list in the response body
     */
    async listCategories() {
      return candidateSourceCategoriesApiInstance.getSourceCategories();
    }
  };
}
