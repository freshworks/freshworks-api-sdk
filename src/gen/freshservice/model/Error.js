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
 * The Error model module.
 * @module model/Error
 * @version 2.0.1
 */
class Error {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   */
  constructor() {
    Error.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();

      if (data.hasOwnProperty("field")) {
        obj["field"] = ApiClient.convertToType(data["field"], "String");
      }
      if (data.hasOwnProperty("code")) {
        obj["code"] = ApiClient.convertToType(data["code"], "String");
      }
      if (data.hasOwnProperty("message")) {
        obj["message"] = ApiClient.convertToType(data["message"], "String");
      }
    }
    return obj;
  }
}

/**
 * The request field that triggered this error. Applicable to HTTP 400 errors only.
 * @member {String} field
 */
Error.prototype["field"] = undefined;

/**
 * Custom error code that is machine-parseable.
 * @member {module:model/Error.CodeEnum} code
 */
Error.prototype["code"] = undefined;

/**
 * Detailed error message.
 * @member {String} message
 */
Error.prototype["message"] = undefined;

/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
Error["CodeEnum"] = {
  /**
   * value: "missing_field"
   * @const
   */
  missing_field: "missing_field",

  /**
   * value: "invalid_value"
   * @const
   */
  invalid_value: "invalid_value",

  /**
   * value: "duplicate_value"
   * @const
   */
  duplicate_value: "duplicate_value",

  /**
   * value: "datatype_mismatch"
   * @const
   */
  datatype_mismatch: "datatype_mismatch",

  /**
   * value: "invalid_field"
   * @const
   */
  invalid_field: "invalid_field",

  /**
   * value: "invalid_json"
   * @const
   */
  invalid_json: "invalid_json",

  /**
   * value: "invalid_credentials"
   * @const
   */
  invalid_credentials: "invalid_credentials",

  /**
   * value: "access_denied"
   * @const
   */
  access_denied: "access_denied",

  /**
   * value: "require_feature"
   * @const
   */
  require_feature: "require_feature",

  /**
   * value: "account_suspended"
   * @const
   */
  account_suspended: "account_suspended",

  /**
   * value: "ssl_required"
   * @const
   */
  ssl_required: "ssl_required",

  /**
   * value: "readonly_field"
   * @const
   */
  readonly_field: "readonly_field",

  /**
   * value: "password_lockout"
   * @const
   */
  password_lockout: "password_lockout",

  /**
   * value: "password_expired"
   * @const
   */
  password_expired: "password_expired",

  /**
   * value: "no_content_required"
   * @const
   */
  no_content_required: "no_content_required",

  /**
   * value: "inaccessible_field"
   * @const
   */
  inaccessible_field: "inaccessible_field",

  /**
   * value: "incompatible_field"
   * @const
   */
  incompatible_field: "incompatible_field"
};

export default Error;
