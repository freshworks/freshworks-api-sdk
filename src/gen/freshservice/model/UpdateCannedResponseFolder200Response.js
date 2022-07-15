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
import CannedResponseFolder from "./CannedResponseFolder";

/**
 * The UpdateCannedResponseFolder200Response model module.
 * @module model/UpdateCannedResponseFolder200Response
 * @version 1.0.0
 */
class UpdateCannedResponseFolder200Response {
  /**
   * Constructs a new <code>UpdateCannedResponseFolder200Response</code>.
   * @alias module:model/UpdateCannedResponseFolder200Response
   */
  constructor() {
    UpdateCannedResponseFolder200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UpdateCannedResponseFolder200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateCannedResponseFolder200Response} obj Optional instance to populate.
   * @return {module:model/UpdateCannedResponseFolder200Response} The populated <code>UpdateCannedResponseFolder200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateCannedResponseFolder200Response();

      if (data.hasOwnProperty("canned response")) {
        obj["canned response"] = CannedResponseFolder.constructFromObject(data["canned response"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/CannedResponseFolder} canned response
 */
UpdateCannedResponseFolder200Response.prototype["canned response"] = undefined;

export default UpdateCannedResponseFolder200Response;