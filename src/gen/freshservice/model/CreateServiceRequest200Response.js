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
 * The CreateServiceRequest200Response model module.
 * @module model/CreateServiceRequest200Response
 * @version 1.0.0
 */
class CreateServiceRequest200Response {
  /**
   * Constructs a new <code>CreateServiceRequest200Response</code>.
   * @alias module:model/CreateServiceRequest200Response
   */
  constructor() {
    CreateServiceRequest200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateServiceRequest200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateServiceRequest200Response} obj Optional instance to populate.
   * @return {module:model/CreateServiceRequest200Response} The populated <code>CreateServiceRequest200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateServiceRequest200Response();

      if (data.hasOwnProperty("service_item")) {
        obj["service_item"] = ServiceItem.constructFromObject(data["service_item"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/ServiceItem} service_item
 */
CreateServiceRequest200Response.prototype["service_item"] = undefined;

export default CreateServiceRequest200Response;
