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
import ProjectTaskNotify from "./ProjectTaskNotify";

/**
 * The ProjectTask model module.
 * @module model/ProjectTask
 * @version 2.0.1
 */
class ProjectTask {
  /**
   * Constructs a new <code>ProjectTask</code>.
   * @alias module:model/ProjectTask
   */
  constructor() {
    ProjectTask.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ProjectTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectTask} obj Optional instance to populate.
   * @return {module:model/ProjectTask} The populated <code>ProjectTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectTask();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("project_id")) {
        obj["project_id"] = ApiClient.convertToType(data["project_id"], "Number");
      }
      if (data.hasOwnProperty("title")) {
        obj["title"] = ApiClient.convertToType(data["title"], "String");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("owner_id")) {
        obj["owner_id"] = ApiClient.convertToType(data["owner_id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("closed_at")) {
        obj["closed_at"] = ApiClient.convertToType(data["closed_at"], "Date");
      }
      if (data.hasOwnProperty("start_date")) {
        obj["start_date"] = ApiClient.convertToType(data["start_date"], "Date");
      }
      if (data.hasOwnProperty("end_date")) {
        obj["end_date"] = ApiClient.convertToType(data["end_date"], "Date");
      }
      if (data.hasOwnProperty("parent_id")) {
        obj["parent_id"] = ApiClient.convertToType(data["parent_id"], "Number");
      }
      if (data.hasOwnProperty("root_id")) {
        obj["root_id"] = ApiClient.convertToType(data["root_id"], "Number");
      }
      if (data.hasOwnProperty("has_subtasks")) {
        obj["has_subtasks"] = ApiClient.convertToType(data["has_subtasks"], "Boolean");
      }
      if (data.hasOwnProperty("notification_needed")) {
        obj["notification_needed"] = ApiClient.convertToType(data["notification_needed"], "Boolean");
      }
      if (data.hasOwnProperty("notify")) {
        obj["notify"] = ProjectTaskNotify.constructFromObject(data["notify"]);
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the task
 * @member {Number} id
 */
ProjectTask.prototype["id"] = undefined;

/**
 * Unique identifier of the project
 * @member {Number} project_id
 */
ProjectTask.prototype["project_id"] = undefined;

/**
 * Name of the task
 * @member {String} title
 */
ProjectTask.prototype["title"] = undefined;

/**
 * Description about the task
 * @member {String} description
 */
ProjectTask.prototype["description"] = undefined;

/**
 * Status of the task
 * @member {Number} status
 */
ProjectTask.prototype["status"] = undefined;

/**
 * Owner of the task
 * @member {Number} owner_id
 */
ProjectTask.prototype["owner_id"] = undefined;

/**
 * Agent who created the task
 * @member {Number} user_id
 */
ProjectTask.prototype["user_id"] = undefined;

/**
 * Closed time of the task
 * @member {Date} closed_at
 */
ProjectTask.prototype["closed_at"] = undefined;

/**
 * Start date of the task
 * @member {Date} start_date
 */
ProjectTask.prototype["start_date"] = undefined;

/**
 * End date of the task
 * @member {Date} end_date
 */
ProjectTask.prototype["end_date"] = undefined;

/**
 * Immediate parent of the task
 * @member {Number} parent_id
 */
ProjectTask.prototype["parent_id"] = undefined;

/**
 * Root parent of the task
 * @member {Number} root_id
 */
ProjectTask.prototype["root_id"] = undefined;

/**
 * States if the task has subtasks
 * @member {Boolean} has_subtasks
 */
ProjectTask.prototype["has_subtasks"] = undefined;

/**
 * Specify if needed to be notified
 * @member {Boolean} notification_needed
 */
ProjectTask.prototype["notification_needed"] = undefined;

/**
 * @member {module:model/ProjectTaskNotify} notify
 */
ProjectTask.prototype["notify"] = undefined;

export default ProjectTask;
