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
import Release from "./Release";

/**
 * The ListReleases200Response model module.
 * @module model/ListReleases200Response
 * @version 1.0.0
 */
class ListReleases200Response {
  /**
   * Constructs a new <code>ListReleases200Response</code>.
   * @alias module:model/ListReleases200Response
   */
  constructor() {
    ListReleases200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListReleases200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListReleases200Response} obj Optional instance to populate.
   * @return {module:model/ListReleases200Response} The populated <code>ListReleases200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListReleases200Response();

      if (data.hasOwnProperty("releases")) {
        obj["releases"] = ApiClient.convertToType(data["releases"], [Release]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Release>} releases
 */
ListReleases200Response.prototype["releases"] = undefined;

export default ListReleases200Response;