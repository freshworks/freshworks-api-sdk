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
 * The EmployeePhoneNumber model module.
 * @module model/EmployeePhoneNumber
 * @version 1.0.0
 */
class EmployeePhoneNumber {
  /**
   * Constructs a new <code>EmployeePhoneNumber</code>.
   * @alias module:model/EmployeePhoneNumber
   */
  constructor() {
    EmployeePhoneNumber.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeePhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeePhoneNumber} obj Optional instance to populate.
   * @return {module:model/EmployeePhoneNumber} The populated <code>EmployeePhoneNumber</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeePhoneNumber();

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
 * @member {module:model/EmployeePhoneNumber.NameEnum} name
 */
EmployeePhoneNumber.prototype["name"] = undefined;

/**
 * @member {String} number
 */
EmployeePhoneNumber.prototype["number"] = undefined;

/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
EmployeePhoneNumber["NameEnum"] = {
  /**
   * value: "Home"
   * @const
   */
  Home: "Home",

  /**
   * value: "Main"
   * @const
   */
  Main: "Main",

  /**
   * value: "Others"
   * @const
   */
  Others: "Others",

  /**
   * value: "Mobile"
   * @const
   */
  Mobile: "Mobile"
};

export default EmployeePhoneNumber;
