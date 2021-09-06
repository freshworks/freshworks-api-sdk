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
 * The VariablePayFrequency model module.
 * @module model/VariablePayFrequency
 * @version 1.0.0
 */
class VariablePayFrequency {
  /**
   * Constructs a new <code>VariablePayFrequency</code>.
   * @alias module:model/VariablePayFrequency
   */
  constructor() {
    VariablePayFrequency.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>VariablePayFrequency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariablePayFrequency} obj Optional instance to populate.
   * @return {module:model/VariablePayFrequency} The populated <code>VariablePayFrequency</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariablePayFrequency();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("value")) {
        obj["value"] = ApiClient.convertToType(data["value"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
VariablePayFrequency.prototype["id"] = undefined;

/**
 * @member {String} value
 */
VariablePayFrequency.prototype["value"] = undefined;

export default VariablePayFrequency;
