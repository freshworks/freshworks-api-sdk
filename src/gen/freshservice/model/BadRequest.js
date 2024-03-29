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
import FieldError from "./FieldError";

/**
 * The BadRequest model module.
 * @module model/BadRequest
 * @version 2.0.1
 */
class BadRequest {
  /**
   * Constructs a new <code>BadRequest</code>.
   * @alias module:model/BadRequest
   */
  constructor() {
    BadRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BadRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadRequest} obj Optional instance to populate.
   * @return {module:model/BadRequest} The populated <code>BadRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BadRequest();

      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("errors")) {
        obj["errors"] = ApiClient.convertToType(data["errors"], [FieldError]);
      }
    }
    return obj;
  }
}

/**
 * Error description
 * @member {String} description
 */
BadRequest.prototype["description"] = undefined;

/**
 * @member {Array.<module:model/FieldError>} errors
 */
BadRequest.prototype["errors"] = undefined;

export default BadRequest;
