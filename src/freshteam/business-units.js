import { BusinessUnitsApi } from "../gen/freshteam";
import { Client } from "../http-client";
import { BusinessUnit } from "./models";

/**
 * @param {Client} client
 */
export default function businessUnits(client) {
  const api = new BusinessUnitsApi(client.instance);

  return {
    /**
     * Fetches the list of business units in the account
     *
     * @returns {BusinessUnit[]} - Response with business units list in the response body
     */
    async list() {
      return api.getBusinessUnits();
    },

    /**
     * Get the details of a business unit
     *
     * @param {number} id - Identifier of the business unit
     * @returns {BusinessUnit} - Response with business unit object in the response body
     */
    async get(id) {
      return api.getBusinessUnit(id);
    }
  };
}
