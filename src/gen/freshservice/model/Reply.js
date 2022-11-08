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
import Attachment from "./Attachment";

/**
 * The Reply model module.
 * @module model/Reply
 * @version 2.0.1
 */
class Reply {
  /**
   * Constructs a new <code>Reply</code>.
   * @alias module:model/Reply
   */
  constructor() {
    Reply.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Reply</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reply} obj Optional instance to populate.
   * @return {module:model/Reply} The populated <code>Reply</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Reply();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "String");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "String");
      }
      if (data.hasOwnProperty("body")) {
        obj["body"] = ApiClient.convertToType(data["body"], "String");
      }
      if (data.hasOwnProperty("body_text")) {
        obj["body_text"] = ApiClient.convertToType(data["body_text"], "String");
      }
      if (data.hasOwnProperty("attachments")) {
        obj["attachments"] = ApiClient.convertToType(data["attachments"], [Attachment]);
      }
      if (data.hasOwnProperty("ticket_id")) {
        obj["ticket_id"] = ApiClient.convertToType(data["ticket_id"], "Number");
      }
      if (data.hasOwnProperty("from_email")) {
        obj["from_email"] = ApiClient.convertToType(data["from_email"], "String");
      }
      if (data.hasOwnProperty("to_emails")) {
        obj["to_emails"] = ApiClient.convertToType(data["to_emails"], ["String"]);
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
 * Unique ID of the reply
 * @member {Number} id
 */
Reply.prototype["id"] = undefined;

/**
 * Unique ID of the user who created the reply
 * @member {Number} user_id
 */
Reply.prototype["user_id"] = undefined;

/**
 * Timestamp at which the note is created
 * @member {String} created_at
 */
Reply.prototype["created_at"] = undefined;

/**
 * Timestamp at which the note is updated
 * @member {String} updated_at
 */
Reply.prototype["updated_at"] = undefined;

/**
 * The body of the note in HTML format.
 * @member {String} body
 */
Reply.prototype["body"] = undefined;

/**
 * The body of the note in plain text format
 * @member {String} body_text
 */
Reply.prototype["body_text"] = undefined;

/**
 * @member {Array.<module:model/Attachment>} attachments
 */
Reply.prototype["attachments"] = undefined;

/**
 * Unique ID of the ticket to which the reply belongs
 * @member {Number} ticket_id
 */
Reply.prototype["ticket_id"] = undefined;

/**
 * @member {String} from_email
 */
Reply.prototype["from_email"] = undefined;

/**
 * Addresses to which the conversation must be sent
 * @member {Array.<String>} to_emails
 */
Reply.prototype["to_emails"] = undefined;

/**
 * Addresses which must be copied on while sending the conversation
 * @member {Array.<String>} cc_emails
 */
Reply.prototype["cc_emails"] = undefined;

/**
 * Addresses to which a blind copy must be sent
 * @member {Array.<String>} bcc_emails
 */
Reply.prototype["bcc_emails"] = undefined;

export default Reply;
