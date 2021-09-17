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
 * The Role model module.
 * @module model/Role
 * @version 1.0.0
 */
class Role {
  /**
   * Constructs a new <code>Role</code>.
   * @alias module:model/Role
   */
  constructor() {
    Role.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Role} obj Optional instance to populate.
   * @return {module:model/Role} The populated <code>Role</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Role();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("default")) {
        obj["default"] = ApiClient.convertToType(data["default"], "Boolean");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Role.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
Role.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
Role.prototype["updated_at"] = undefined;

/**
 * @member {String} name
 */
Role.prototype["name"] = undefined;

/**
 * @member {String} description
 */
Role.prototype["description"] = undefined;

/**
 * @member {Boolean} default
 */
Role.prototype["default"] = undefined;

export default Role;