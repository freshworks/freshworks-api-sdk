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

/**
 * The ServiceRequestUpdate model module.
 * @module model/ServiceRequestUpdate
 * @version 2.0.1
 */
class ServiceRequestUpdate {
  /**
   * Constructs a new <code>ServiceRequestUpdate</code>.
   * @alias module:model/ServiceRequestUpdate
   */
  constructor() {
    ServiceRequestUpdate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ServiceRequestUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceRequestUpdate} obj Optional instance to populate.
   * @return {module:model/ServiceRequestUpdate} The populated <code>ServiceRequestUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ServiceRequestUpdate();

      if (data.hasOwnProperty("requester_email")) {
        obj["requester_email"] = ApiClient.convertToType(data["requester_email"], "String");
      }
      if (data.hasOwnProperty("requested_for_email")) {
        obj["requested_for_email"] = ApiClient.convertToType(data["requested_for_email"], "String");
      }
      if (data.hasOwnProperty("subject")) {
        obj["subject"] = ApiClient.convertToType(data["subject"], "String");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("priority")) {
        obj["priority"] = ApiClient.convertToType(data["priority"], "Number");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("agent_id")) {
        obj["agent_id"] = ApiClient.convertToType(data["agent_id"], "Number");
      }
      if (data.hasOwnProperty("due_by")) {
        obj["due_by"] = ApiClient.convertToType(data["due_by"], "Date");
      }
      if (data.hasOwnProperty("group_id")) {
        obj["group_id"] = ApiClient.convertToType(data["group_id"], "Number");
      }
      if (data.hasOwnProperty("source")) {
        obj["source"] = ApiClient.convertToType(data["source"], "Number");
      }
      if (data.hasOwnProperty("tags")) {
        obj["tags"] = ApiClient.convertToType(data["tags"], ["String"]);
      }
      if (data.hasOwnProperty("custom_fields")) {
        obj["custom_fields"] = ApiClient.convertToType(data["custom_fields"], Object);
      }
    }
    return obj;
  }
}

/**
 * the email id of the requester
 * @member {String} requester_email
 */
ServiceRequestUpdate.prototype["requester_email"] = undefined;

/**
 * the email id of the user for whom this is requested.
 * @member {String} requested_for_email
 */
ServiceRequestUpdate.prototype["requested_for_email"] = undefined;

/**
 * the subject of the ticket
 * @member {String} subject
 */
ServiceRequestUpdate.prototype["subject"] = undefined;

/**
 * the status of the ticket
 * @member {Number} status
 */
ServiceRequestUpdate.prototype["status"] = undefined;

/**
 * the priority of the ticket
 * @member {Number} priority
 */
ServiceRequestUpdate.prototype["priority"] = undefined;

/**
 * the description/body of the ticket
 * @member {String} description
 */
ServiceRequestUpdate.prototype["description"] = undefined;

/**
 * the agent ID to whom the ticket is assigned
 * @member {Number} agent_id
 */
ServiceRequestUpdate.prototype["agent_id"] = undefined;

/**
 * Timestamp that denotes when the ticket is due to be resolved
 * @member {Date} due_by
 */
ServiceRequestUpdate.prototype["due_by"] = undefined;

/**
 * ID of the group to which the ticket has been assigned. The default value is the ID of the group that is associated with the given email_config_id.
 * @member {Number} group_id
 */
ServiceRequestUpdate.prototype["group_id"] = undefined;

/**
 * The channel through which the ticket was created. The default value is 2.
 * @member {Number} source
 */
ServiceRequestUpdate.prototype["source"] = undefined;

/**
 * Tags that have been associated with the ticket.
 * @member {Array.<String>} tags
 */
ServiceRequestUpdate.prototype["tags"] = undefined;

/**
 * Custom fields that are associated with a Freshservice entity
 * @member {Object} custom_fields
 */
ServiceRequestUpdate.prototype["custom_fields"] = undefined;

export default ServiceRequestUpdate;
