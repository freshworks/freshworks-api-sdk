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
 * The BusinessUnit model module.
 * @module model/BusinessUnit
 * @version 1.0.0
 */
class BusinessUnit {
  /**
   * Constructs a new <code>BusinessUnit</code>.
   * @alias module:model/BusinessUnit
   */
  constructor() {
    BusinessUnit.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BusinessUnit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessUnit} obj Optional instance to populate.
   * @return {module:model/BusinessUnit} The populated <code>BusinessUnit</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BusinessUnit();

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
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
BusinessUnit.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
BusinessUnit.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
BusinessUnit.prototype["updated_at"] = undefined;

/**
 * @member {Boolean} deleted
 */
BusinessUnit.prototype["deleted"] = undefined;

/**
 * @member {String} name
 */
BusinessUnit.prototype["name"] = undefined;

/**
 * @member {String} description
 */
BusinessUnit.prototype["description"] = undefined;

export default BusinessUnit;
