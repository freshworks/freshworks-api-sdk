/**
 * Freshservice
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
 * The PlanningFieldsImpact model module.
 * @module model/PlanningFieldsImpact
 * @version 2.0.1
 */
class PlanningFieldsImpact {
  /**
   * Constructs a new <code>PlanningFieldsImpact</code>.
   * @alias module:model/PlanningFieldsImpact
   */
  constructor() {
    PlanningFieldsImpact.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>PlanningFieldsImpact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanningFieldsImpact} obj Optional instance to populate.
   * @return {module:model/PlanningFieldsImpact} The populated <code>PlanningFieldsImpact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlanningFieldsImpact();

      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("description_text")) {
        obj["description_text"] = ApiClient.convertToType(data["description_text"], "String");
      }
    }
    return obj;
  }
}

/**
 * Impact
 * @member {String} description
 */
PlanningFieldsImpact.prototype["description"] = undefined;

/**
 * Impact in plain text format
 * @member {String} description_text
 */
PlanningFieldsImpact.prototype["description_text"] = undefined;

export default PlanningFieldsImpact;
