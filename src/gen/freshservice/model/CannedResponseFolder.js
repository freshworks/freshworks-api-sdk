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

/**
 * The CannedResponseFolder model module.
 * @module model/CannedResponseFolder
 * @version 1.0.0
 */
class CannedResponseFolder {
  /**
   * Constructs a new <code>CannedResponseFolder</code>.
   * @alias module:model/CannedResponseFolder
   */
  constructor() {
    CannedResponseFolder.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CannedResponseFolder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CannedResponseFolder} obj Optional instance to populate.
   * @return {module:model/CannedResponseFolder} The populated <code>CannedResponseFolder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CannedResponseFolder();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("responses_count")) {
        obj["responses_count"] = ApiClient.convertToType(data["responses_count"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
CannedResponseFolder.prototype["id"] = undefined;

/**
 * @member {String} name
 */
CannedResponseFolder.prototype["name"] = undefined;

/**
 * @member {String} type
 */
CannedResponseFolder.prototype["type"] = undefined;

/**
 * @member {Number} responses_count
 */
CannedResponseFolder.prototype["responses_count"] = undefined;

/**
 * @member {Date} created_at
 */
CannedResponseFolder.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
CannedResponseFolder.prototype["updated_at"] = undefined;

export default CannedResponseFolder;
