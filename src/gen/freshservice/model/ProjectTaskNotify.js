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
 * The ProjectTaskNotify model module.
 * @module model/ProjectTaskNotify
 * @version 2.0.1
 */
class ProjectTaskNotify {
  /**
   * Constructs a new <code>ProjectTaskNotify</code>.
   * Task notification details. Allowed range - 15 minutes to 4 weeks
   * @alias module:model/ProjectTaskNotify
   */
  constructor() {
    ProjectTaskNotify.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ProjectTaskNotify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectTaskNotify} obj Optional instance to populate.
   * @return {module:model/ProjectTaskNotify} The populated <code>ProjectTaskNotify</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectTaskNotify();

      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("value")) {
        obj["value"] = ApiClient.convertToType(data["value"], "Number");
      }
      if (data.hasOwnProperty("time_unit")) {
        obj["time_unit"] = ApiClient.convertToType(data["time_unit"], "String");
      }
    }
    return obj;
  }
}

/**
 * Specify whether notification should be sent before start or before end date
 * @member {module:model/ProjectTaskNotify.TypeEnum} type
 */
ProjectTaskNotify.prototype["type"] = undefined;

/**
 * Time period of notification
 * @member {Number} value
 */
ProjectTaskNotify.prototype["value"] = undefined;

/**
 * Time unit
 * @member {module:model/ProjectTaskNotify.TimeUnitEnum} time_unit
 */
ProjectTaskNotify.prototype["time_unit"] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ProjectTaskNotify["TypeEnum"] = {
  /**
   * value: "BEFORE_START_DATE"
   * @const
   */
  START_DATE: "BEFORE_START_DATE",

  /**
   * value: "BEFORE_END_DATE"
   * @const
   */
  END_DATE: "BEFORE_END_DATE"
};

/**
 * Allowed values for the <code>time_unit</code> property.
 * @enum {String}
 * @readonly
 */
ProjectTaskNotify["TimeUnitEnum"] = {
  /**
   * value: "minutes"
   * @const
   */
  minutes: "minutes",

  /**
   * value: "hours"
   * @const
   */
  hours: "hours",

  /**
   * value: "days"
   * @const
   */
  days: "days",

  /**
   * value: "weeks"
   * @const
   */
  weeks: "weeks"
};

export default ProjectTaskNotify;
