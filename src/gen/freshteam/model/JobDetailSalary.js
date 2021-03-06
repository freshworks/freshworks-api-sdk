/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
 * The JobDetailSalary model module.
 * @module model/JobDetailSalary
 * @version 1.0.0
 */
class JobDetailSalary {
  /**
   * Constructs a new <code>JobDetailSalary</code>.
   * @alias module:model/JobDetailSalary
   */
  constructor() {
    JobDetailSalary.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>JobDetailSalary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDetailSalary} obj Optional instance to populate.
   * @return {module:model/JobDetailSalary} The populated <code>JobDetailSalary</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobDetailSalary();

      if (data.hasOwnProperty("min")) {
        obj["min"] = ApiClient.convertToType(data["min"], "Number");
      }
      if (data.hasOwnProperty("max")) {
        obj["max"] = ApiClient.convertToType(data["max"], "Number");
      }
      if (data.hasOwnProperty("currency")) {
        obj["currency"] = ApiClient.convertToType(data["currency"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} min
 */
JobDetailSalary.prototype["min"] = undefined;

/**
 * @member {Number} max
 */
JobDetailSalary.prototype["max"] = undefined;

/**
 * @member {String} currency
 */
JobDetailSalary.prototype["currency"] = undefined;

export default JobDetailSalary;
