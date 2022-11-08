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
import BusinessHours from "./BusinessHours";

/**
 * The ListBusinessHoursConfigs200Response model module.
 * @module model/ListBusinessHoursConfigs200Response
 * @version 2.0.1
 */
class ListBusinessHoursConfigs200Response {
  /**
   * Constructs a new <code>ListBusinessHoursConfigs200Response</code>.
   * @alias module:model/ListBusinessHoursConfigs200Response
   */
  constructor() {
    ListBusinessHoursConfigs200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListBusinessHoursConfigs200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBusinessHoursConfigs200Response} obj Optional instance to populate.
   * @return {module:model/ListBusinessHoursConfigs200Response} The populated <code>ListBusinessHoursConfigs200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListBusinessHoursConfigs200Response();

      if (data.hasOwnProperty("business_hours")) {
        obj["business_hours"] = ApiClient.convertToType(data["business_hours"], [BusinessHours]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/BusinessHours>} business_hours
 */
ListBusinessHoursConfigs200Response.prototype["business_hours"] = undefined;

export default ListBusinessHoursConfigs200Response;
