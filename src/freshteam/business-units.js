import BusinessUnitsApi from "../gen/freshteam/api/BusinessUnitsApi";

const businessUnitsApiInstance = new BusinessUnitsApi.BusinessUnitsApi();

export default function businessUnits() {
  return {
    /**
     * Fetches the list of business units in the account
     *
     * @returns {module.http-client~Response} - Response with business units list in the response body
     */
    async list() {
      return businessUnitsApiInstance.getBusinessUnits();
    },

    /**
     * Get the details of a business unit
     *
     * @param {number} id - Identifier of the business unit
     * @returns {module.http-client~Response} - Response with business unit object in the response body
     */
    async get(id) {
      return teamsApiInstance.getBusinessUnit(id);
    }
  };
}
