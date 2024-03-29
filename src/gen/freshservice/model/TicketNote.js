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
 * The TicketNote model module.
 * @module model/TicketNote
 * @version 2.0.1
 */
class TicketNote {
  /**
   * Constructs a new <code>TicketNote</code>.
   * @alias module:model/TicketNote
   */
  constructor() {
    TicketNote.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>TicketNote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TicketNote} obj Optional instance to populate.
   * @return {module:model/TicketNote} The populated <code>TicketNote</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TicketNote();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("private")) {
        obj["private"] = ApiClient.convertToType(data["private"], "Boolean");
      }
      if (data.hasOwnProperty("incoming")) {
        obj["incoming"] = ApiClient.convertToType(data["incoming"], "Boolean");
      }
      if (data.hasOwnProperty("notify_emails")) {
        obj["notify_emails"] = ApiClient.convertToType(data["notify_emails"], ["String"]);
      }
      if (data.hasOwnProperty("body")) {
        obj["body"] = ApiClient.convertToType(data["body"], "String");
      }
      if (data.hasOwnProperty("body_text")) {
        obj["body_text"] = ApiClient.convertToType(data["body_text"], "String");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "String");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "String");
      }
      if (data.hasOwnProperty("attachments")) {
        obj["attachments"] = ApiClient.convertToType(data["attachments"], [Attachment]);
      }
    }
    return obj;
  }
}

/**
 * Unique ID of the note
 * @member {Number} id
 */
TicketNote.prototype["id"] = undefined;

/**
 * Unique ID of the user who created the note
 * @member {Number} user_id
 */
TicketNote.prototype["user_id"] = undefined;

/**
 * Set to true if the note is private. The default value is true.
 * @member {Boolean} private
 */
TicketNote.prototype["private"] = undefined;

/**
 * Set to true if the note should appear as being created from the outside (i.e., not through the web portal)
 * @member {Boolean} incoming
 */
TicketNote.prototype["incoming"] = undefined;

/**
 * Addresses to which the note must be notified to
 * @member {Array.<String>} notify_emails
 */
TicketNote.prototype["notify_emails"] = undefined;

/**
 * The body of the note in HTML format
 * @member {String} body
 */
TicketNote.prototype["body"] = undefined;

/**
 * The body of the note in plain text format
 * @member {String} body_text
 */
TicketNote.prototype["body_text"] = undefined;

/**
 * Date time at which the note was created
 * @member {String} created_at
 */
TicketNote.prototype["created_at"] = undefined;

/**
 * Date time at which the note was updated
 * @member {String} updated_at
 */
TicketNote.prototype["updated_at"] = undefined;

/**
 * @member {Array.<module:model/Attachment>} attachments
 */
TicketNote.prototype["attachments"] = undefined;

export default TicketNote;
