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
 * The FieldChoices model module.
 * @module model/FieldChoices
 * @version 1.0.0
 */
class FieldChoices {
  /**
   * Constructs a new <code>FieldChoices</code>.
   * Options available for selection for the field (available only for dropdown and nested fields)
   * @alias module:model/FieldChoices
   */
  constructor() {
    FieldChoices.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>FieldChoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldChoices} obj Optional instance to populate.
   * @return {module:model/FieldChoices} The populated <code>FieldChoices</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FieldChoices();
    }
    return obj;
  }
}

export default FieldChoices;