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
 * The RateLimitError model module.
 * @module model/RateLimitError
 * @version 2.0.1
 */
class RateLimitError {
  /**
   * Constructs a new <code>RateLimitError</code>.
   * @alias module:model/RateLimitError
   */
  constructor() {
    RateLimitError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>RateLimitError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateLimitError} obj Optional instance to populate.
   * @return {module:model/RateLimitError} The populated <code>RateLimitError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RateLimitError();

      if (data.hasOwnProperty("message")) {
        obj["message"] = ApiClient.convertToType(data["message"], "String");
      }
    }
    return obj;
  }
}

/**
 * Error Message
 * @member {String} message
 */
RateLimitError.prototype["message"] = undefined;

export default RateLimitError;
