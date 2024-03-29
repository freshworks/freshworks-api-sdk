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
import Location from "./Location";

/**
 * The ListLocations200Response model module.
 * @module model/ListLocations200Response
 * @version 2.0.1
 */
class ListLocations200Response {
  /**
   * Constructs a new <code>ListLocations200Response</code>.
   * @alias module:model/ListLocations200Response
   */
  constructor() {
    ListLocations200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListLocations200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListLocations200Response} obj Optional instance to populate.
   * @return {module:model/ListLocations200Response} The populated <code>ListLocations200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListLocations200Response();

      if (data.hasOwnProperty("location")) {
        obj["location"] = Location.constructFromObject(data["location"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Location} location
 */
ListLocations200Response.prototype["location"] = undefined;

export default ListLocations200Response;
