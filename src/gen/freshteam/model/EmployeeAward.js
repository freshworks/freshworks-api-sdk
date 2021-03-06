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
 * The EmployeeAward model module.
 * @module model/EmployeeAward
 * @version 1.0.0
 */
class EmployeeAward {
  /**
   * Constructs a new <code>EmployeeAward</code>.
   * @alias module:model/EmployeeAward
   */
  constructor() {
    EmployeeAward.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeAward</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeAward} obj Optional instance to populate.
   * @return {module:model/EmployeeAward} The populated <code>EmployeeAward</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeAward();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("awarded_by")) {
        obj["awarded_by"] = ApiClient.convertToType(data["awarded_by"], "String");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
EmployeeAward.prototype["id"] = undefined;

/**
 * @member {Number} user_id
 */
EmployeeAward.prototype["user_id"] = undefined;

/**
 * @member {String} name
 */
EmployeeAward.prototype["name"] = undefined;

/**
 * @member {String} awarded_by
 */
EmployeeAward.prototype["awarded_by"] = undefined;

/**
 * @member {Boolean} deleted
 */
EmployeeAward.prototype["deleted"] = undefined;

export default EmployeeAward;
