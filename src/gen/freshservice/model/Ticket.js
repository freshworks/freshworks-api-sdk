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
 * The Ticket model module.
 * @module model/Ticket
 * @version 2.0.1
 */
class Ticket {
  /**
   * Constructs a new <code>Ticket</code>.
   * @alias module:model/Ticket
   */
  constructor() {
    Ticket.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Ticket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ticket} obj Optional instance to populate.
   * @return {module:model/Ticket} The populated <code>Ticket</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Ticket();

      if (data.hasOwnProperty("cc_emails")) {
        obj["cc_emails"] = ApiClient.convertToType(data["cc_emails"], ["String"]);
      }
      if (data.hasOwnProperty("fwd_emails")) {
        obj["fwd_emails"] = ApiClient.convertToType(data["fwd_emails"], ["String"]);
      }
      if (data.hasOwnProperty("reply_cc_emails")) {
        obj["reply_cc_emails"] = ApiClient.convertToType(data["reply_cc_emails"], ["String"]);
      }
      if (data.hasOwnProperty("fr_escalated")) {
        obj["fr_escalated"] = ApiClient.convertToType(data["fr_escalated"], "Boolean");
      }
      if (data.hasOwnProperty("spam")) {
        obj["spam"] = ApiClient.convertToType(data["spam"], "Boolean");
      }
      if (data.hasOwnProperty("priority")) {
        obj["priority"] = ApiClient.convertToType(data["priority"], "Number");
      }
      if (data.hasOwnProperty("requester_id")) {
        obj["requester_id"] = ApiClient.convertToType(data["requester_id"], "Number");
      }
      if (data.hasOwnProperty("source")) {
        obj["source"] = ApiClient.convertToType(data["source"], "Number");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("subject")) {
        obj["subject"] = ApiClient.convertToType(data["subject"], "String");
      }
      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("due_by")) {
        obj["due_by"] = ApiClient.convertToType(data["due_by"], "String");
      }
      if (data.hasOwnProperty("fr_due_by")) {
        obj["fr_due_by"] = ApiClient.convertToType(data["fr_due_by"], "String");
      }
      if (data.hasOwnProperty("is_escalated")) {
        obj["is_escalated"] = ApiClient.convertToType(data["is_escalated"], "Boolean");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("description_text")) {
        obj["description_text"] = ApiClient.convertToType(data["description_text"], "String");
      }
      if (data.hasOwnProperty("custom_fields")) {
        obj["custom_fields"] = ApiClient.convertToType(data["custom_fields"], { String: "String" });
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "String");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "String");
      }
      if (data.hasOwnProperty("tags")) {
        obj["tags"] = ApiClient.convertToType(data["tags"], ["String"]);
      }
      if (data.hasOwnProperty("attachments")) {
        obj["attachments"] = ApiClient.convertToType(data["attachments"], [Attachment]);
      }
    }
    return obj;
  }
}

/**
 * Email addresses added in the 'cc' field of the incoming ticket email
 * @member {Array.<String>} cc_emails
 */
Ticket.prototype["cc_emails"] = undefined;

/**
 * Email addresses added while forwarding a ticket
 * @member {Array.<String>} fwd_emails
 */
Ticket.prototype["fwd_emails"] = undefined;

/**
 * Email addresses added while replying to a ticket
 * @member {Array.<String>} reply_cc_emails
 */
Ticket.prototype["reply_cc_emails"] = undefined;

/**
 * Set to 'true' if the ticket has been escalated as a result of the first response time being breached
 * @member {Boolean} fr_escalated
 */
Ticket.prototype["fr_escalated"] = undefined;

/**
 * Set to 'true' if the ticket has been marked as spam
 * @member {Boolean} spam
 */
Ticket.prototype["spam"] = undefined;

/**
 * Priority of the Freshservice Ticket. Low -> 1. Medium -> 2. High -> 3. Urgent -> 4.
 * @member {Number} priority
 */
Ticket.prototype["priority"] = undefined;

/**
 * User ID of the requester.
 * @member {Number} requester_id
 */
Ticket.prototype["requester_id"] = undefined;

/**
 * The channel through which the ticket was created. Email -> 1 Portal -> 2 Phone -> 3 Chat -> 4 Feedback widget -> 5 Yammer -> 6 AWS Cloudwatch -> 7 Pagerduty -> 8 Walkup -> 9 Slack -> 10
 * @member {Number} source
 */
Ticket.prototype["source"] = undefined;

/**
 * Status of the Ticket. Open -> 2 Pending -> 3 Resolved -> 4 Closed -> 5
 * @member {Number} status
 */
Ticket.prototype["status"] = undefined;

/**
 * Subject of the Ticket
 * @member {String} subject
 */
Ticket.prototype["subject"] = undefined;

/**
 * Unique ID of the ticket
 * @member {Number} id
 */
Ticket.prototype["id"] = undefined;

/**
 * Helps categorize the ticket according to the different kinds of issues your support team deals with. [Support for only type ‘incident’ as of now]
 * @member {String} type
 */
Ticket.prototype["type"] = undefined;

/**
 * Timestamp that denotes when the ticket is due to be resolved
 * @member {String} due_by
 */
Ticket.prototype["due_by"] = undefined;

/**
 * Timestamp that denotes when the first response is due
 * @member {String} fr_due_by
 */
Ticket.prototype["fr_due_by"] = undefined;

/**
 * @member {Boolean} is_escalated
 */
Ticket.prototype["is_escalated"] = undefined;

/**
 * @member {String} description
 */
Ticket.prototype["description"] = undefined;

/**
 * Content of the ticket in plain text
 * @member {String} description_text
 */
Ticket.prototype["description_text"] = undefined;

/**
 * Key value pairs containing the names and values of custom fields
 * @member {Object.<String, String>} custom_fields
 */
Ticket.prototype["custom_fields"] = undefined;

/**
 * Timestamp at which the ticket was created
 * @member {String} created_at
 */
Ticket.prototype["created_at"] = undefined;

/**
 * Timestamp at which the ticket was last updated
 * @member {String} updated_at
 */
Ticket.prototype["updated_at"] = undefined;

/**
 * Tags that have been associated with the ticket
 * @member {Array.<String>} tags
 */
Ticket.prototype["tags"] = undefined;

/**
 * Ticket attachments. The total size of these attachments cannot exceed 15MB
 * @member {Array.<module:model/Attachment>} attachments
 */
Ticket.prototype["attachments"] = undefined;

export default Ticket;
