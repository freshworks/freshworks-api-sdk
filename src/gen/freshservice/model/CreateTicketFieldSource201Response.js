/**
 * Freshservice APIs
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import TicketSource from "./TicketSource";

/**
 * The CreateTicketFieldSource201Response model module.
 * @module model/CreateTicketFieldSource201Response
 * @version 1.0.0
 */
class CreateTicketFieldSource201Response {
  /**
   * Constructs a new <code>CreateTicketFieldSource201Response</code>.
   * @alias module:model/CreateTicketFieldSource201Response
   */
  constructor() {
    CreateTicketFieldSource201Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateTicketFieldSource201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTicketFieldSource201Response} obj Optional instance to populate.
   * @return {module:model/CreateTicketFieldSource201Response} The populated <code>CreateTicketFieldSource201Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTicketFieldSource201Response();

      if (data.hasOwnProperty("source")) {
        obj["source"] = TicketSource.constructFromObject(data["source"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/TicketSource} source
 */
CreateTicketFieldSource201Response.prototype["source"] = undefined;

export default CreateTicketFieldSource201Response;