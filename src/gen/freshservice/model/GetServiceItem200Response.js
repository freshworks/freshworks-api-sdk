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
import ServiceItem from "./ServiceItem";

/**
 * The GetServiceItem200Response model module.
 * @module model/GetServiceItem200Response
 * @version 1.0.0
 */
class GetServiceItem200Response {
  /**
   * Constructs a new <code>GetServiceItem200Response</code>.
   * @alias module:model/GetServiceItem200Response
   */
  constructor() {
    GetServiceItem200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetServiceItem200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetServiceItem200Response} obj Optional instance to populate.
   * @return {module:model/GetServiceItem200Response} The populated <code>GetServiceItem200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetServiceItem200Response();

      if (data.hasOwnProperty("service_item")) {
        obj["service_item"] = ApiClient.convertToType(data["service_item"], [ServiceItem]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ServiceItem>} service_item
 */
GetServiceItem200Response.prototype["service_item"] = undefined;

export default GetServiceItem200Response;