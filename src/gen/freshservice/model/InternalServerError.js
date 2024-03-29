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
 * The InternalServerError model module.
 * @module model/InternalServerError
 * @version 2.0.1
 */
class InternalServerError {
  /**
   * Constructs a new <code>InternalServerError</code>.
   * @alias module:model/InternalServerError
   */
  constructor() {
    InternalServerError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>InternalServerError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InternalServerError} obj Optional instance to populate.
   * @return {module:model/InternalServerError} The populated <code>InternalServerError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InternalServerError();

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
 * Error Code
 * @member {String} code
 */
InternalServerError.prototype["code"] = undefined;

/**
 * Error Message
 * @member {String} message
 */
InternalServerError.prototype["message"] = undefined;

export default InternalServerError;
