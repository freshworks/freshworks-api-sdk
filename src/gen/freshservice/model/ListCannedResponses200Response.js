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
import CannedResponse from "./CannedResponse";

/**
 * The ListCannedResponses200Response model module.
 * @module model/ListCannedResponses200Response
 * @version 1.0.0
 */
class ListCannedResponses200Response {
  /**
   * Constructs a new <code>ListCannedResponses200Response</code>.
   * @alias module:model/ListCannedResponses200Response
   */
  constructor() {
    ListCannedResponses200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListCannedResponses200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCannedResponses200Response} obj Optional instance to populate.
   * @return {module:model/ListCannedResponses200Response} The populated <code>ListCannedResponses200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListCannedResponses200Response();

      if (data.hasOwnProperty("canned_responses")) {
        obj["canned_responses"] = ApiClient.convertToType(data["canned_responses"], [CannedResponse]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CannedResponse>} canned_responses
 */
ListCannedResponses200Response.prototype["canned_responses"] = undefined;

export default ListCannedResponses200Response;
