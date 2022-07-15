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

/**
 * The BusinessHoursServiceDeskHoursMonday model module.
 * @module model/BusinessHoursServiceDeskHoursMonday
 * @version 1.0.0
 */
class BusinessHoursServiceDeskHoursMonday {
  /**
   * Constructs a new <code>BusinessHoursServiceDeskHoursMonday</code>.
   * @alias module:model/BusinessHoursServiceDeskHoursMonday
   */
  constructor() {
    BusinessHoursServiceDeskHoursMonday.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BusinessHoursServiceDeskHoursMonday</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessHoursServiceDeskHoursMonday} obj Optional instance to populate.
   * @return {module:model/BusinessHoursServiceDeskHoursMonday} The populated <code>BusinessHoursServiceDeskHoursMonday</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BusinessHoursServiceDeskHoursMonday();

      if (data.hasOwnProperty("beginning_of_workday")) {
        obj["beginning_of_workday"] = ApiClient.convertToType(data["beginning_of_workday"], "String");
      }
      if (data.hasOwnProperty("end_of_workday")) {
        obj["end_of_workday"] = ApiClient.convertToType(data["end_of_workday"], "String");
      }
    }
    return obj;
  }
}

/**
 * Start time for the day in the ISO 8601 hh:mm format.
 * @member {String} beginning_of_workday
 */
BusinessHoursServiceDeskHoursMonday.prototype["beginning_of_workday"] = undefined;

/**
 * End time for the day in the ISO 8601 hh:mm format.
 * @member {String} end_of_workday
 */
BusinessHoursServiceDeskHoursMonday.prototype["end_of_workday"] = undefined;

export default BusinessHoursServiceDeskHoursMonday;