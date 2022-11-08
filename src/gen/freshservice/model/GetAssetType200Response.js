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
import AssetType from "./AssetType";

/**
 * The GetAssetType200Response model module.
 * @module model/GetAssetType200Response
 * @version 2.0.1
 */
class GetAssetType200Response {
  /**
   * Constructs a new <code>GetAssetType200Response</code>.
   * @alias module:model/GetAssetType200Response
   */
  constructor() {
    GetAssetType200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetAssetType200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAssetType200Response} obj Optional instance to populate.
   * @return {module:model/GetAssetType200Response} The populated <code>GetAssetType200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAssetType200Response();

      if (data.hasOwnProperty("vendor")) {
        obj["vendor"] = AssetType.constructFromObject(data["vendor"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/AssetType} vendor
 */
GetAssetType200Response.prototype["vendor"] = undefined;

export default GetAssetType200Response;
