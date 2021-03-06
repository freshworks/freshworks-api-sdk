/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
 * The ApplicantEmail model module.
 * @module model/ApplicantEmail
 * @version 1.0.0
 */
class ApplicantEmail {
  /**
   * Constructs a new <code>ApplicantEmail</code>.
   * @alias module:model/ApplicantEmail
   */
  constructor() {
    ApplicantEmail.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ApplicantEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicantEmail} obj Optional instance to populate.
   * @return {module:model/ApplicantEmail} The populated <code>ApplicantEmail</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicantEmail();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("body")) {
        obj["body"] = ApiClient.convertToType(data["body"], "String");
      }
      if (data.hasOwnProperty("body_text")) {
        obj["body_text"] = ApiClient.convertToType(data["body_text"], "String");
      }
      if (data.hasOwnProperty("private")) {
        obj["private"] = ApiClient.convertToType(data["private"], "Boolean");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("subject")) {
        obj["subject"] = ApiClient.convertToType(data["subject"], "String");
      }
      if (data.hasOwnProperty("from")) {
        obj["from"] = ApiClient.convertToType(data["from"], "String");
      }
      if (data.hasOwnProperty("reply_to")) {
        obj["reply_to"] = ApiClient.convertToType(data["reply_to"], "String");
      }
      if (data.hasOwnProperty("message_id")) {
        obj["message_id"] = ApiClient.convertToType(data["message_id"], "String");
      }
      if (data.hasOwnProperty("cc_emails")) {
        obj["cc_emails"] = ApiClient.convertToType(data["cc_emails"], ["String"]);
      }
      if (data.hasOwnProperty("bcc_emails")) {
        obj["bcc_emails"] = ApiClient.convertToType(data["bcc_emails"], ["String"]);
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
ApplicantEmail.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
ApplicantEmail.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
ApplicantEmail.prototype["updated_at"] = undefined;

/**
 * @member {String} body
 */
ApplicantEmail.prototype["body"] = undefined;

/**
 * @member {String} body_text
 */
ApplicantEmail.prototype["body_text"] = undefined;

/**
 * @member {Boolean} private
 */
ApplicantEmail.prototype["private"] = undefined;

/**
 * @member {Number} user_id
 */
ApplicantEmail.prototype["user_id"] = undefined;

/**
 * @member {String} subject
 */
ApplicantEmail.prototype["subject"] = undefined;

/**
 * @member {String} from
 */
ApplicantEmail.prototype["from"] = undefined;

/**
 * @member {String} reply_to
 */
ApplicantEmail.prototype["reply_to"] = undefined;

/**
 * @member {String} message_id
 */
ApplicantEmail.prototype["message_id"] = undefined;

/**
 * @member {Array.<String>} cc_emails
 */
ApplicantEmail.prototype["cc_emails"] = undefined;

/**
 * @member {Array.<String>} bcc_emails
 */
ApplicantEmail.prototype["bcc_emails"] = undefined;

export default ApplicantEmail;
