/**
 * Freshservice
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import TimeEntry from "./TimeEntry";

/**
 * The ListTicketTimeEntries200Response model module.
 * @module model/ListTicketTimeEntries200Response
 * @version 2.0.1
 */
class ListTicketTimeEntries200Response {
  /**
   * Constructs a new <code>ListTicketTimeEntries200Response</code>.
   * @alias module:model/ListTicketTimeEntries200Response
   */
  constructor() {
    ListTicketTimeEntries200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListTicketTimeEntries200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListTicketTimeEntries200Response} obj Optional instance to populate.
   * @return {module:model/ListTicketTimeEntries200Response} The populated <code>ListTicketTimeEntries200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListTicketTimeEntries200Response();

      if (data.hasOwnProperty("time_entries")) {
        obj["time_entries"] = ApiClient.convertToType(data["time_entries"], [TimeEntry]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TimeEntry>} time_entries
 */
ListTicketTimeEntries200Response.prototype["time_entries"] = undefined;

export default ListTicketTimeEntries200Response;
