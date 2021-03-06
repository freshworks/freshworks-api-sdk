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
 * The LeaveType model module.
 * @module model/LeaveType
 * @version 1.0.0
 */
class LeaveType {
  /**
   * Constructs a new <code>LeaveType</code>.
   * @alias module:model/LeaveType
   */
  constructor() {
    LeaveType.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>LeaveType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeaveType} obj Optional instance to populate.
   * @return {module:model/LeaveType} The populated <code>LeaveType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LeaveType();

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
      if (data.hasOwnProperty("applicable_for")) {
        obj["applicable_for"] = ApiClient.convertToType(data["applicable_for"], "String");
      }
      if (data.hasOwnProperty("default")) {
        obj["default"] = ApiClient.convertToType(data["default"], "Boolean");
      }
      if (data.hasOwnProperty("auto_approve")) {
        obj["auto_approve"] = ApiClient.convertToType(data["auto_approve"], "Boolean");
      }
      if (data.hasOwnProperty("auto_approve_after")) {
        obj["auto_approve_after"] = ApiClient.convertToType(data["auto_approve_after"], "Number");
      }
      if (data.hasOwnProperty("auto_approve_limit")) {
        obj["auto_approve_limit"] = ApiClient.convertToType(data["auto_approve_limit"], "Number");
      }
      if (data.hasOwnProperty("marital_status")) {
        obj["marital_status"] = ApiClient.convertToType(data["marital_status"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
LeaveType.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
LeaveType.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
LeaveType.prototype["updated_at"] = undefined;

/**
 * @member {Boolean} deleted
 */
LeaveType.prototype["deleted"] = undefined;

/**
 * @member {String} name
 */
LeaveType.prototype["name"] = undefined;

/**
 * @member {String} description
 */
LeaveType.prototype["description"] = undefined;

/**
 * @member {module:model/LeaveType.ApplicableForEnum} applicable_for
 */
LeaveType.prototype["applicable_for"] = undefined;

/**
 * @member {Boolean} default
 */
LeaveType.prototype["default"] = undefined;

/**
 * @member {Boolean} auto_approve
 */
LeaveType.prototype["auto_approve"] = undefined;

/**
 * @member {Number} auto_approve_after
 */
LeaveType.prototype["auto_approve_after"] = undefined;

/**
 * @member {Number} auto_approve_limit
 */
LeaveType.prototype["auto_approve_limit"] = undefined;

/**
 * @member {module:model/LeaveType.MaritalStatusEnum} marital_status
 */
LeaveType.prototype["marital_status"] = undefined;

/**
 * Allowed values for the <code>applicable_for</code> property.
 * @enum {String}
 * @readonly
 */
LeaveType["ApplicableForEnum"] = {
  /**
   * value: "male"
   * @const
   */
  male: "male",

  /**
   * value: "female"
   * @const
   */
  female: "female",

  /**
   * value: "all"
   * @const
   */
  all: "all"
};

/**
 * Allowed values for the <code>marital_status</code> property.
 * @enum {String}
 * @readonly
 */
LeaveType["MaritalStatusEnum"] = {
  /**
   * value: "single"
   * @const
   */
  single: "single",

  /**
   * value: "married"
   * @const
   */
  married: "married",

  /**
   * value: "all"
   * @const
   */
  all: "all"
};

export default LeaveType;
