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
 * The Department model module.
 * @module model/Department
 * @version 1.0.0
 */
class Department {
  /**
   * Constructs a new <code>Department</code>.
   * @alias module:model/Department
   */
  constructor() {
    Department.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Department</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Department} obj Optional instance to populate.
   * @return {module:model/Department} The populated <code>Department</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Department();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Department.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
Department.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
Department.prototype["updated_at"] = undefined;

/**
 * @member {Boolean} deleted
 */
Department.prototype["deleted"] = undefined;

/**
 * @member {String} name
 */
Department.prototype["name"] = undefined;

export default Department;
