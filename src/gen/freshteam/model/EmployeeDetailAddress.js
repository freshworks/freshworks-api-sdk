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
 * The EmployeeDetailAddress model module.
 * @module model/EmployeeDetailAddress
 * @version 1.0.0
 */
class EmployeeDetailAddress {
  /**
   * Constructs a new <code>EmployeeDetailAddress</code>.
   * @alias module:model/EmployeeDetailAddress
   */
  constructor() {
    EmployeeDetailAddress.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeDetailAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeDetailAddress} obj Optional instance to populate.
   * @return {module:model/EmployeeDetailAddress} The populated <code>EmployeeDetailAddress</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeDetailAddress();

      if (data.hasOwnProperty("street")) {
        obj["street"] = ApiClient.convertToType(data["street"], "String");
      }
      if (data.hasOwnProperty("state")) {
        obj["state"] = ApiClient.convertToType(data["state"], "String");
      }
      if (data.hasOwnProperty("city")) {
        obj["city"] = ApiClient.convertToType(data["city"], "String");
      }
      if (data.hasOwnProperty("country_code")) {
        obj["country_code"] = ApiClient.convertToType(data["country_code"], "String");
      }
      if (data.hasOwnProperty("zip_code")) {
        obj["zip_code"] = ApiClient.convertToType(data["zip_code"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {String} street
 */
EmployeeDetailAddress.prototype["street"] = undefined;

/**
 * @member {String} state
 */
EmployeeDetailAddress.prototype["state"] = undefined;

/**
 * @member {String} city
 */
EmployeeDetailAddress.prototype["city"] = undefined;

/**
 * @member {String} country_code
 */
EmployeeDetailAddress.prototype["country_code"] = undefined;

/**
 * @member {String} zip_code
 */
EmployeeDetailAddress.prototype["zip_code"] = undefined;

export default EmployeeDetailAddress;