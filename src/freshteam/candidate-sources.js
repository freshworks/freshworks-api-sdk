import { SourceApi, SourcesApi, SourceCategoriesApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Source, SourceCreate, SourceCategory } from "./models";

/**
 *
 * @param {Client} client
 */
export default function candidateSources(client) {
  const sourceApi = new SourceApi(client.instance);
  const sourcesApi = new SourcesApi(client.instance); // IKR?
  const categoriesApi = new SourceCategoriesApi(client.instance);

  return {
    /**
     * Fetches the list of candidate sources
     *
     * @returns {Promise<Source>} - Response with candidate sources list in the response body
     */
    async list() {
      return sourcesApi.getCandidateSources();
    },

    /**
     * Create a candidate source
     *
     * @param {SourceCreate} candidateSource - Properties of candidate source
     * @returns {Promise<Source>} - Response with candidate source object in the response body
     */
    async create(candidateSource) {
      return sourceApi.createCandidateSources(candidateSource);
    },

    /**
     * Fetches the list of candidate source categories
     *
     * @returns {Promise<SourceCategory[]>} - Response with candidate source categories list in the response body
     */
    async listCategories() {
      return categoriesApi.getSourceCategories();
    }
  };
}
