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
   * For valid values of `include` array, see [REST API docs](https://developers.freshteam.com/api/#retrieve_new_hire_information).
   *
   * ```js
   * // Get standalone record
   * const hire = await ft.newHires.get(6000053372);
   *
   * // Include branch and team in response
   * const hireIncludes = await ft.newHires.get(6000053372, ["branch", "team"]);
   * ```
   *
   * @param {number} id - Identifier of the NewHire
   * @param {string[]} [include] - Additional options to add include properties.
   * @returns {Promise<NewHireDetail>} - Response with NewHire object in the response body
   */
  async get(id, include) {
    return this._api.getNewHire(id, include);
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
