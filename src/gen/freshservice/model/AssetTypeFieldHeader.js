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
import AssetTypeField from "./AssetTypeField";

/**
 * The AssetTypeFieldHeader model module.
 * @module model/AssetTypeFieldHeader
 * @version 1.0.0
 */
class AssetTypeFieldHeader {
  /**
   * Constructs a new <code>AssetTypeFieldHeader</code>.
   * @alias module:model/AssetTypeFieldHeader
   */
  constructor() {
    AssetTypeFieldHeader.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AssetTypeFieldHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetTypeFieldHeader} obj Optional instance to populate.
   * @return {module:model/AssetTypeFieldHeader} The populated <code>AssetTypeFieldHeader</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AssetTypeFieldHeader();

      if (data.hasOwnProperty("field_header")) {
        obj["field_header"] = ApiClient.convertToType(data["field_header"], "String");
      }
      if (data.hasOwnProperty("fields")) {
        obj["fields"] = ApiClient.convertToType(data["fields"], [AssetTypeField]);
      }
    }
    return obj;
  }
}

/**
 * section header that is used to group fields
 * @member {String} field_header
 */
AssetTypeFieldHeader.prototype["field_header"] = undefined;

/**
 * @member {Array.<module:model/AssetTypeField>} fields
 */
AssetTypeFieldHeader.prototype["fields"] = undefined;

export default AssetTypeFieldHeader;
