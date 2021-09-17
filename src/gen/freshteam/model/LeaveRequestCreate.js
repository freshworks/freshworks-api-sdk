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
 * The LeaveRequestCreate model module.
 * @module model/LeaveRequestCreate
 * @version 1.0.0
 */
class LeaveRequestCreate {
  /**
   * Constructs a new <code>LeaveRequestCreate</code>.
   * @alias module:model/LeaveRequestCreate
   * @param startDate {Date}
   * @param endDate {Date}
   * @param leaveTypeId {Number}
   * @param comments {String}
   */
  constructor(startDate, endDate, leaveTypeId, comments) {
    LeaveRequestCreate.initialize(this, startDate, endDate, leaveTypeId, comments);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, startDate, endDate, leaveTypeId, comments) {
    obj["start_date"] = startDate;
    obj["end_date"] = endDate;
    obj["leave_type_id"] = leaveTypeId;
    obj["comments"] = comments;
  }

  /**
   * Constructs a <code>LeaveRequestCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeaveRequestCreate} obj Optional instance to populate.
   * @return {module:model/LeaveRequestCreate} The populated <code>LeaveRequestCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LeaveRequestCreate();

      if (data.hasOwnProperty("start_date")) {
        obj["start_date"] = ApiClient.convertToType(data["start_date"], "Date");
      }
      if (data.hasOwnProperty("end_date")) {
        obj["end_date"] = ApiClient.convertToType(data["end_date"], "Date");
      }
      if (data.hasOwnProperty("optional_leave_days")) {
        obj["optional_leave_days"] = ApiClient.convertToType(data["optional_leave_days"], ["Date"]);
      }
      if (data.hasOwnProperty("notify_to")) {
        obj["notify_to"] = ApiClient.convertToType(data["notify_to"], ["String"]);
      }
      if (data.hasOwnProperty("add_to_calendar")) {
        obj["add_to_calendar"] = ApiClient.convertToType(data["add_to_calendar"], "Boolean");
      }
      if (data.hasOwnProperty("auto_decline_events")) {
        obj["auto_decline_events"] = ApiClient.convertToType(data["auto_decline_events"], "Boolean");
      }
      if (data.hasOwnProperty("leave_type_id")) {
        obj["leave_type_id"] = ApiClient.convertToType(data["leave_type_id"], "Number");
      }
      if (data.hasOwnProperty("comments")) {
        obj["comments"] = ApiClient.convertToType(data["comments"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Date} start_date
 */
LeaveRequestCreate.prototype["start_date"] = undefined;

/**
 * @member {Date} end_date
 */
LeaveRequestCreate.prototype["end_date"] = undefined;

/**
 * @member {Array.<Date>} optional_leave_days
 */
LeaveRequestCreate.prototype["optional_leave_days"] = undefined;

/**
 * @member {Array.<String>} notify_to
 */
LeaveRequestCreate.prototype["notify_to"] = undefined;

/**
 * @member {Boolean} add_to_calendar
 */
LeaveRequestCreate.prototype["add_to_calendar"] = undefined;

/**
 * @member {Boolean} auto_decline_events
 */
LeaveRequestCreate.prototype["auto_decline_events"] = undefined;

/**
 * @member {Number} leave_type_id
 */
LeaveRequestCreate.prototype["leave_type_id"] = undefined;

/**
 * @member {String} comments
 */
LeaveRequestCreate.prototype["comments"] = undefined;

export default LeaveRequestCreate;