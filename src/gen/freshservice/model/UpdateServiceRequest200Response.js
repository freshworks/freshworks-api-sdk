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
 * The UpdateServiceRequest200Response model module.
 * @module model/UpdateServiceRequest200Response
 * @version 1.0.0
 */
class UpdateServiceRequest200Response {
  /**
   * Constructs a new <code>UpdateServiceRequest200Response</code>.
   * @alias module:model/UpdateServiceRequest200Response
   */
  constructor() {
    UpdateServiceRequest200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UpdateServiceRequest200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateServiceRequest200Response} obj Optional instance to populate.
   * @return {module:model/UpdateServiceRequest200Response} The populated <code>UpdateServiceRequest200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateServiceRequest200Response();

      if (data.hasOwnProperty("department")) {
        obj["department"] = ServiceItem.constructFromObject(data["department"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/ServiceItem} department
 */
UpdateServiceRequest200Response.prototype["department"] = undefined;

export default UpdateServiceRequest200Response;