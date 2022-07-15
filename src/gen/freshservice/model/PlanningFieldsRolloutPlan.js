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
 * The PlanningFieldsRolloutPlan model module.
 * @module model/PlanningFieldsRolloutPlan
 * @version 1.0.0
 */
class PlanningFieldsRolloutPlan {
  /**
   * Constructs a new <code>PlanningFieldsRolloutPlan</code>.
   * @alias module:model/PlanningFieldsRolloutPlan
   */
  constructor() {
    PlanningFieldsRolloutPlan.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>PlanningFieldsRolloutPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanningFieldsRolloutPlan} obj Optional instance to populate.
   * @return {module:model/PlanningFieldsRolloutPlan} The populated <code>PlanningFieldsRolloutPlan</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlanningFieldsRolloutPlan();

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
 * Rollout Plan
 * @member {String} description
 */
PlanningFieldsRolloutPlan.prototype["description"] = undefined;

/**
 * Rollout plan in plain text format
 * @member {String} description_text
 */
PlanningFieldsRolloutPlan.prototype["description_text"] = undefined;

export default PlanningFieldsRolloutPlan;