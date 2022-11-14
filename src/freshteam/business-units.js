import { BusinessUnitsApi } from "../gen/freshteam";
import { Client, Response } from "../http-client";
import { intoResponse } from "./common";
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
   * @returns {Promise<Response<BusinessUnit[]>>} - Response with business units list in the response body
   */
  async list() {
    return this._api.getBusinessUnitsWithHttpInfo().then(res => intoResponse(res));
  }

  /**
   * Get the details of a business unit
   *
   * @param {number} id - Identifier of the business unit
   * @returns {Promise<Response<BusinessUnit>} - Response with business unit object in the response body
   */
  async get(id) {
    return this._api.getBusinessUnitWithHttpInfo(id).then(res => intoResponse(res));
  }
}
