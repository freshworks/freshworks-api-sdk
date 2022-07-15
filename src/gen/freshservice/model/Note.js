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
 * The Note model module.
 * @module model/Note
 * @version 1.0.0
 */
class Note {
  /**
   * Constructs a new <code>Note</code>.
   * @alias module:model/Note
   */
  constructor() {
    Note.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Note} obj Optional instance to populate.
   * @return {module:model/Note} The populated <code>Note</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Note();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
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
    }
    return obj;
  }
}

/**
 * Unique ID of the note
 * @member {Number} id
 */
Note.prototype["id"] = undefined;

/**
 * Unique ID of the user who created the note
 * @member {Number} user_id
 */
Note.prototype["user_id"] = undefined;

/**
 * Addresses to which the note must be notified to
 * @member {Array.<String>} notify_emails
 */
Note.prototype["notify_emails"] = undefined;

/**
 * The body of the note in HTML format
 * @member {String} body
 */
Note.prototype["body"] = undefined;

/**
 * The body of the note in plain text format
 * @member {String} body_text
 */
Note.prototype["body_text"] = undefined;

/**
 * Date time at which the note was created
 * @member {String} created_at
 */
Note.prototype["created_at"] = undefined;

/**
 * Date time at which the note was updated
 * @member {String} updated_at
 */
Note.prototype["updated_at"] = undefined;

export default Note;