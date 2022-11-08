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
import Component from "./Component";

/**
 * The ListAssetComponents200Response model module.
 * @module model/ListAssetComponents200Response
 * @version 2.0.1
 */
class ListAssetComponents200Response {
  /**
   * Constructs a new <code>ListAssetComponents200Response</code>.
   * @alias module:model/ListAssetComponents200Response
   */
  constructor() {
    ListAssetComponents200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListAssetComponents200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAssetComponents200Response} obj Optional instance to populate.
   * @return {module:model/ListAssetComponents200Response} The populated <code>ListAssetComponents200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListAssetComponents200Response();

      if (data.hasOwnProperty("component")) {
        obj["component"] = Component.constructFromObject(data["component"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Component} component
 */
ListAssetComponents200Response.prototype["component"] = undefined;

export default ListAssetComponents200Response;
