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
import AnalysisFields from "./AnalysisFields";
import Asset from "./Asset";

/**
 * The Problem model module.
 * @module model/Problem
 * @version 2.0.1
 */
class Problem {
  /**
   * Constructs a new <code>Problem</code>.
   * @alias module:model/Problem
   */
  constructor() {
    Problem.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Problem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Problem} obj Optional instance to populate.
   * @return {module:model/Problem} The populated <code>Problem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Problem();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("agent_id")) {
        obj["agent_id"] = ApiClient.convertToType(data["agent_id"], "Number");
      }
      if (data.hasOwnProperty("requester_id")) {
        obj["requester_id"] = ApiClient.convertToType(data["requester_id"], "Number");
      }
      if (data.hasOwnProperty("group_id")) {
        obj["group_id"] = ApiClient.convertToType(data["group_id"], "Number");
      }
      if (data.hasOwnProperty("priority")) {
        obj["priority"] = ApiClient.convertToType(data["priority"], "Number");
      }
      if (data.hasOwnProperty("impact")) {
        obj["impact"] = ApiClient.convertToType(data["impact"], "Number");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("subject")) {
        obj["subject"] = ApiClient.convertToType(data["subject"], "String");
      }
      if (data.hasOwnProperty("due_by")) {
        obj["due_by"] = ApiClient.convertToType(data["due_by"], "Date");
      }
      if (data.hasOwnProperty("department_id")) {
        obj["department_id"] = ApiClient.convertToType(data["department_id"], "Number");
      }
      if (data.hasOwnProperty("category")) {
        obj["category"] = ApiClient.convertToType(data["category"], "String");
      }
      if (data.hasOwnProperty("sub_category")) {
        obj["sub_category"] = ApiClient.convertToType(data["sub_category"], "String");
      }
      if (data.hasOwnProperty("item_category")) {
        obj["item_category"] = ApiClient.convertToType(data["item_category"], "String");
      }
      if (data.hasOwnProperty("known_error")) {
        obj["known_error"] = ApiClient.convertToType(data["known_error"], "Boolean");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("assets")) {
        obj["assets"] = ApiClient.convertToType(data["assets"], [Asset]);
      }
      if (data.hasOwnProperty("attachments")) {
        obj["attachments"] = ApiClient.convertToType(data["attachments"], ["String"]);
      }
      if (data.hasOwnProperty("custom_fields")) {
        obj["custom_fields"] = ApiClient.convertToType(data["custom_fields"], { String: "String" });
      }
      if (data.hasOwnProperty("analysis_fields")) {
        obj["analysis_fields"] = AnalysisFields.constructFromObject(data["analysis_fields"]);
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the Problem
 * @member {Number} id
 */
Problem.prototype["id"] = undefined;

/**
 * Unique identifier of the agent to whom the Problem is assigned
 * @member {Number} agent_id
 */
Problem.prototype["agent_id"] = undefined;

/**
 * Unique identifier of the user who raised the Problem
 * @member {Number} requester_id
 */
Problem.prototype["requester_id"] = undefined;

/**
 * Unique identifier of the agent group to which the Problem is assigned
 * @member {Number} group_id
 */
Problem.prototype["group_id"] = undefined;

/**
 * Priority of the Problem 1-Low, 2-Medium, 3-High, 4-Urgent
 * @member {module:model/Problem.PriorityEnum} priority
 */
Problem.prototype["priority"] = undefined;

/**
 * Impact of the Problem 1-Low, 2-Medium, 3-High
 * @member {module:model/Problem.ImpactEnum} impact
 */
Problem.prototype["impact"] = undefined;

/**
 * Status identifier of the Problem. Open -> 1, Change Requested -> 2, Closed -> 3
 * @member {Number} status
 */
Problem.prototype["status"] = undefined;

/**
 * Subject of the Problem
 * @member {String} subject
 */
Problem.prototype["subject"] = undefined;

/**
 * Timestamp at which Problem's resolution is due
 * @member {Date} due_by
 */
Problem.prototype["due_by"] = undefined;

/**
 * Unique ID of the department initiating the Problem
 * @member {Number} department_id
 */
Problem.prototype["department_id"] = undefined;

/**
 * Category of the Problem
 * @member {String} category
 */
Problem.prototype["category"] = undefined;

/**
 * Sub-category of the Problem
 * @member {String} sub_category
 */
Problem.prototype["sub_category"] = undefined;

/**
 * Item of the Problem
 * @member {String} item_category
 */
Problem.prototype["item_category"] = undefined;

/**
 * true if the Problem is a known error, false otherwise
 * @member {Boolean} known_error
 */
Problem.prototype["known_error"] = undefined;

/**
 * Timestamp at which Problem was created
 * @member {Date} created_at
 */
Problem.prototype["created_at"] = undefined;

/**
 * Timestamp at which Problem was last updated
 * @member {Date} updated_at
 */
Problem.prototype["updated_at"] = undefined;

/**
 * Assets associated with the Ticket
 * @member {Array.<module:model/Asset>} assets
 */
Problem.prototype["assets"] = undefined;

/**
 * URLs of attachments attached to the Problem request
 * @member {Array.<String>} attachments
 */
Problem.prototype["attachments"] = undefined;

/**
 * Key value pairs containing the names and values of custom fields
 * @member {Object.<String, String>} custom_fields
 */
Problem.prototype["custom_fields"] = undefined;

/**
 * @member {module:model/AnalysisFields} analysis_fields
 */
Problem.prototype["analysis_fields"] = undefined;

/**
 * Allowed values for the <code>priority</code> property.
 * @enum {Number}
 * @readonly
 */
Problem["PriorityEnum"] = {
  /**
   * value: 1
   * @const
   */
  1: 1,

  /**
   * value: 2
   * @const
   */
  2: 2,

  /**
   * value: 3
   * @const
   */
  3: 3,

  /**
   * value: 4
   * @const
   */
  4: 4
};

/**
 * Allowed values for the <code>impact</code> property.
 * @enum {Number}
 * @readonly
 */
Problem["ImpactEnum"] = {
  /**
   * value: 1
   * @const
   */
  1: 1,

  /**
   * value: 2
   * @const
   */
  2: 2,

  /**
   * value: 3
   * @const
   */
  3: 3
};

export default Problem;
