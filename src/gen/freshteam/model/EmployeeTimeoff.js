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
import EmployeeLeaveType from "./EmployeeLeaveType";

/**
 * The EmployeeTimeoff model module.
 * @module model/EmployeeTimeoff
 * @version 1.0.0
 */
class EmployeeTimeoff {
  /**
   * Constructs a new <code>EmployeeTimeoff</code>.
   * @alias module:model/EmployeeTimeoff
   */
  constructor() {
    EmployeeTimeoff.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeTimeoff</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeTimeoff} obj Optional instance to populate.
   * @return {module:model/EmployeeTimeoff} The populated <code>EmployeeTimeoff</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeTimeoff();

      if (data.hasOwnProperty("leave_type")) {
        obj["leave_type"] = EmployeeLeaveType.constructFromObject(data["leave_type"]);
      }
      if (data.hasOwnProperty("leaves_availed")) {
        obj["leaves_availed"] = ApiClient.convertToType(data["leaves_availed"], "Number");
      }
      if (data.hasOwnProperty("leave_credits")) {
        obj["leave_credits"] = ApiClient.convertToType(data["leave_credits"], "Number");
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/EmployeeLeaveType} leave_type
 */
EmployeeTimeoff.prototype["leave_type"] = undefined;

/**
 * @member {Number} leaves_availed
 */
EmployeeTimeoff.prototype["leaves_availed"] = undefined;

/**
 * @member {Number} leave_credits
 */
EmployeeTimeoff.prototype["leave_credits"] = undefined;

export default EmployeeTimeoff;