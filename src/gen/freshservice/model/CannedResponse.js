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
import Attachment from "./Attachment";

/**
 * The CannedResponse model module.
 * @module model/CannedResponse
 * @version 1.0.0
 */
class CannedResponse {
  /**
   * Constructs a new <code>CannedResponse</code>.
   * @alias module:model/CannedResponse
   */
  constructor() {
    CannedResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CannedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CannedResponse} obj Optional instance to populate.
   * @return {module:model/CannedResponse} The populated <code>CannedResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CannedResponse();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("title")) {
        obj["title"] = ApiClient.convertToType(data["title"], "String");
      }
      if (data.hasOwnProperty("folder_id")) {
        obj["folder_id"] = ApiClient.convertToType(data["folder_id"], "Number");
      }
      if (data.hasOwnProperty("content")) {
        obj["content"] = ApiClient.convertToType(data["content"], "String");
      }
      if (data.hasOwnProperty("content_html")) {
        obj["content_html"] = ApiClient.convertToType(data["content_html"], "String");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("attachments")) {
        obj["attachments"] = ApiClient.convertToType(data["attachments"], [Attachment]);
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
CannedResponse.prototype["id"] = undefined;

/**
 * @member {String} title
 */
CannedResponse.prototype["title"] = undefined;

/**
 * @member {Number} folder_id
 */
CannedResponse.prototype["folder_id"] = undefined;

/**
 * @member {String} content
 */
CannedResponse.prototype["content"] = undefined;

/**
 * @member {String} content_html
 */
CannedResponse.prototype["content_html"] = undefined;

/**
 * @member {Date} created_at
 */
CannedResponse.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
CannedResponse.prototype["updated_at"] = undefined;

/**
 * @member {Array.<module:model/Attachment>} attachments
 */
CannedResponse.prototype["attachments"] = undefined;

export default CannedResponse;
