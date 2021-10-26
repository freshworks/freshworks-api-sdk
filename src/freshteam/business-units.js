import { BusinessUnitsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { BusinessUnit } from "./models";

export class BusinessUnits {
  /**
   *
   * @param {Client} client
   * @hidden
   */
  constructor(client) {
    /**
     * @private
     */
    this._api = new BusinessUnitsApi(client.instance);
  }

  /**
   * Fetches the list of business units in the account
   *
   * @returns {Promise<BusinessUnit[]>} - Response with business units list in the response body
   */
  async list() {
    return this._api.getBusinessUnits();
  }

  /**
   * Get the details of a business unit
   *
   * @param {number} id - Identifier of the business unit
   * @returns {Promise<BusinessUnit>} - Response with business unit object in the response body
   */
  async get(id) {
    return this._api.getBusinessUnit(id);
  }
}
