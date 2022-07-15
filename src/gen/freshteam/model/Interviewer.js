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
import UserLite from "./UserLite";

/**
 * The Interviewer model module.
 * @module model/Interviewer
 * @version 1.0.0
 */
class Interviewer {
  /**
   * Constructs a new <code>Interviewer</code>.
   * @alias module:model/Interviewer
   */
  constructor() {
    Interviewer.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Interviewer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Interviewer} obj Optional instance to populate.
   * @return {module:model/Interviewer} The populated <code>Interviewer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Interviewer();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
      if (data.hasOwnProperty("interviewer_declined")) {
        obj["interviewer_declined"] = ApiClient.convertToType(data["interviewer_declined"], "Boolean");
      }
      if (data.hasOwnProperty("waiting_for_feedback_at")) {
        obj["waiting_for_feedback_at"] = ApiClient.convertToType(data["waiting_for_feedback_at"], "Date");
      }
      if (data.hasOwnProperty("completed_at")) {
        obj["completed_at"] = ApiClient.convertToType(data["completed_at"], "Date");
      }
      if (data.hasOwnProperty("declined_at")) {
        obj["declined_at"] = ApiClient.convertToType(data["declined_at"], "Date");
      }
      if (data.hasOwnProperty("interviewer_id")) {
        obj["interviewer_id"] = ApiClient.convertToType(data["interviewer_id"], "Number");
      }
      if (data.hasOwnProperty("interviewer")) {
        obj["interviewer"] = UserLite.constructFromObject(data["interviewer"]);
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Interviewer.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
Interviewer.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
Interviewer.prototype["updated_at"] = undefined;

/**
 * @member {String} status
 */
Interviewer.prototype["status"] = undefined;

/**
 * @member {Boolean} interviewer_declined
 */
Interviewer.prototype["interviewer_declined"] = undefined;

/**
 * @member {Date} waiting_for_feedback_at
 */
Interviewer.prototype["waiting_for_feedback_at"] = undefined;

/**
 * @member {Date} completed_at
 */
Interviewer.prototype["completed_at"] = undefined;

/**
 * @member {Date} declined_at
 */
Interviewer.prototype["declined_at"] = undefined;

/**
 * @member {Number} interviewer_id
 */
Interviewer.prototype["interviewer_id"] = undefined;

/**
 * @member {module:model/UserLite} interviewer
 */
Interviewer.prototype["interviewer"] = undefined;

export default Interviewer;