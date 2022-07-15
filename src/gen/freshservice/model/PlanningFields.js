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
import PlanningFieldsBackoutPlan from "./PlanningFieldsBackoutPlan";
import PlanningFieldsImpact from "./PlanningFieldsImpact";
import PlanningFieldsReasonForChange from "./PlanningFieldsReasonForChange";
import PlanningFieldsRolloutPlan from "./PlanningFieldsRolloutPlan";

/**
 * The PlanningFields model module.
 * @module model/PlanningFields
 * @version 1.0.0
 */
class PlanningFields {
  /**
   * Constructs a new <code>PlanningFields</code>.
   * @alias module:model/PlanningFields
   */
  constructor() {
    PlanningFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>PlanningFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanningFields} obj Optional instance to populate.
   * @return {module:model/PlanningFields} The populated <code>PlanningFields</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlanningFields();

      if (data.hasOwnProperty("reason_for_change")) {
        obj["reason_for_change"] = PlanningFieldsReasonForChange.constructFromObject(data["reason_for_change"]);
      }
      if (data.hasOwnProperty("impact")) {
        obj["impact"] = PlanningFieldsImpact.constructFromObject(data["impact"]);
      }
      if (data.hasOwnProperty("rollout_plan")) {
        obj["rollout_plan"] = PlanningFieldsRolloutPlan.constructFromObject(data["rollout_plan"]);
      }
      if (data.hasOwnProperty("backout_plan")) {
        obj["backout_plan"] = PlanningFieldsBackoutPlan.constructFromObject(data["backout_plan"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/PlanningFieldsReasonForChange} reason_for_change
 */
PlanningFields.prototype["reason_for_change"] = undefined;

/**
 * @member {module:model/PlanningFieldsImpact} impact
 */
PlanningFields.prototype["impact"] = undefined;

/**
 * @member {module:model/PlanningFieldsRolloutPlan} rollout_plan
 */
PlanningFields.prototype["rollout_plan"] = undefined;

/**
 * @member {module:model/PlanningFieldsBackoutPlan} backout_plan
 */
PlanningFields.prototype["backout_plan"] = undefined;

export default PlanningFields;