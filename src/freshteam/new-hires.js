import { NewHireApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { NewHire, NewHireCreate, NewHireDetail } from "./models";

export class NewHires {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new NewHireApi(client.instance);
  }
  /**
   * Creates a NewHire
   *
   * @param {NewHireCreate} newHire - Details of a NewHire
   * @returns {Promise<NewHire>} - New Hire object
   */
  async create(newHire) {
    return this._api.createNewHire(newHire);
  }

  /**
   * Gets the details of a NewHire
   *
   * @param {number} id - Identifier of the NewHire
   * @param {object} options - Additional options to add include properties
   * @returns {Promise<NewHireDetail>} - Response with NewHire object in the response body
   */
  async get(id, options) {
    return this._api.getNewHire(id, options);
  }

  /**
   * Update a NewHire
   *
   * @param {number} id - Identifier of the NewHire
   * @param {NewHireCreate} newHire - NewHire details
   * @returns {Promise<NewHire>} - NewHire object
   */
  async update(id, newHire) {
    return this._api.updateNewHire(newHire, id);
  }
}
