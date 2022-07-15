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
import AssetType from "./AssetType";

/**
 * The ListAssetTypes200Response model module.
 * @module model/ListAssetTypes200Response
 * @version 1.0.0
 */
class ListAssetTypes200Response {
  /**
   * Constructs a new <code>ListAssetTypes200Response</code>.
   * @alias module:model/ListAssetTypes200Response
   */
  constructor() {
    ListAssetTypes200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListAssetTypes200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAssetTypes200Response} obj Optional instance to populate.
   * @return {module:model/ListAssetTypes200Response} The populated <code>ListAssetTypes200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListAssetTypes200Response();

      if (data.hasOwnProperty("asset_type")) {
        obj["asset_type"] = AssetType.constructFromObject(data["asset_type"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/AssetType} asset_type
 */
ListAssetTypes200Response.prototype["asset_type"] = undefined;

export default ListAssetTypes200Response;