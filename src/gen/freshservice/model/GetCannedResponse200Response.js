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
import CannedResponse from "./CannedResponse";

/**
 * The GetCannedResponse200Response model module.
 * @module model/GetCannedResponse200Response
 * @version 2.0.1
 */
class GetCannedResponse200Response {
  /**
   * Constructs a new <code>GetCannedResponse200Response</code>.
   * @alias module:model/GetCannedResponse200Response
   */
  constructor() {
    GetCannedResponse200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetCannedResponse200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCannedResponse200Response} obj Optional instance to populate.
   * @return {module:model/GetCannedResponse200Response} The populated <code>GetCannedResponse200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetCannedResponse200Response();

      if (data.hasOwnProperty("canned_response")) {
        obj["canned_response"] = CannedResponse.constructFromObject(data["canned_response"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/CannedResponse} canned_response
 */
GetCannedResponse200Response.prototype["canned_response"] = undefined;

export default GetCannedResponse200Response;
