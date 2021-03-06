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
 * The EmployeeReference model module.
 * @module model/EmployeeReference
 * @version 1.0.0
 */
class EmployeeReference {
  /**
   * Constructs a new <code>EmployeeReference</code>.
   * @alias module:model/EmployeeReference
   */
  constructor() {
    EmployeeReference.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeReference} obj Optional instance to populate.
   * @return {module:model/EmployeeReference} The populated <code>EmployeeReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeReference();

      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("number")) {
        obj["number"] = ApiClient.convertToType(data["number"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
EmployeeReference.prototype["name"] = undefined;

/**
 * @member {String} number
 */
EmployeeReference.prototype["number"] = undefined;

export default EmployeeReference;
