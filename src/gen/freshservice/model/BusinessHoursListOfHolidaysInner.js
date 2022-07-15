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
 * The BusinessHoursListOfHolidaysInner model module.
 * @module model/BusinessHoursListOfHolidaysInner
 * @version 1.0.0
 */
class BusinessHoursListOfHolidaysInner {
  /**
   * Constructs a new <code>BusinessHoursListOfHolidaysInner</code>.
   * @alias module:model/BusinessHoursListOfHolidaysInner
   */
  constructor() {
    BusinessHoursListOfHolidaysInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BusinessHoursListOfHolidaysInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessHoursListOfHolidaysInner} obj Optional instance to populate.
   * @return {module:model/BusinessHoursListOfHolidaysInner} The populated <code>BusinessHoursListOfHolidaysInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BusinessHoursListOfHolidaysInner();

      if (data.hasOwnProperty("holiday_date")) {
        obj["holiday_date"] = ApiClient.convertToType(data["holiday_date"], "String");
      }
      if (data.hasOwnProperty("holiday_name")) {
        obj["holiday_name"] = ApiClient.convertToType(data["holiday_name"], "String");
      }
    }
    return obj;
  }
}

/**
 * Date the holiday falls in the ISO --MM-DD format.
 * @member {String} holiday_date
 */
BusinessHoursListOfHolidaysInner.prototype["holiday_date"] = undefined;

/**
 * Name of the holiday.
 * @member {String} holiday_name
 */
BusinessHoursListOfHolidaysInner.prototype["holiday_name"] = undefined;

export default BusinessHoursListOfHolidaysInner;