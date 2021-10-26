import { SourceApi, SourcesApi, SourceCategoriesApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { Source, SourceCreate, SourceCategory } from "./models";

export class CandidateSources {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._sourceApi = new SourceApi(client.instance);
    /**
     * @private
     */
    this._sourcesApi = new SourcesApi(client.instance); // IKR?
    /**
     * @private
     */
    this._categoriesApi = new SourceCategoriesApi(client.instance);
  }

  /**
   * Fetches the list of candidate sources
   *
   * @returns {Promise<Source>} - Response with candidate sources list in the response body
   */
  async list() {
    return this._sourcesApi.getCandidateSources();
  }

  /**
   * Create a candidate source
   *
   * @param {SourceCreate} candidateSource - Properties of candidate source
   * @returns {Promise<Source>} - Response with candidate source object in the response body
   */
  async create(candidateSource) {
    return this._sourceApi.createCandidateSources(candidateSource);
  }

  /**
   * Fetches the list of candidate source categories
   *
   * @returns {Promise<SourceCategory[]>} - Response with candidate source categories list in the response body
   */
  async listCategories() {
    return this._categoriesApi.getSourceCategories();
  }
}
