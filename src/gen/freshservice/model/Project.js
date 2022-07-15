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
 * The Project model module.
 * @module model/Project
 * @version 1.0.0
 */
class Project {
  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   */
  constructor() {
    Project.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Project();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("title")) {
        obj["title"] = ApiClient.convertToType(data["title"], "String");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("description_text")) {
        obj["description_text"] = ApiClient.convertToType(data["description_text"], "String");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("priority")) {
        obj["priority"] = ApiClient.convertToType(data["priority"], "Number");
      }
      if (data.hasOwnProperty("owner_id")) {
        obj["owner_id"] = ApiClient.convertToType(data["owner_id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("start_date")) {
        obj["start_date"] = ApiClient.convertToType(data["start_date"], "Date");
      }
      if (data.hasOwnProperty("end_date")) {
        obj["end_date"] = ApiClient.convertToType(data["end_date"], "Date");
      }
      if (data.hasOwnProperty("archived")) {
        obj["archived"] = ApiClient.convertToType(data["archived"], "Boolean");
      }
      if (data.hasOwnProperty("closed_at")) {
        obj["closed_at"] = ApiClient.convertToType(data["closed_at"], "Date");
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the project
 * @member {Number} id
 */
Project.prototype["id"] = undefined;

/**
 * Name of the project
 * @member {String} title
 */
Project.prototype["title"] = undefined;

/**
 * Description about the project in HTML format
 * @member {String} description
 */
Project.prototype["description"] = undefined;

/**
 * Description about the project in text format
 * @member {String} description_text
 */
Project.prototype["description_text"] = undefined;

/**
 * Status of the project
 * @member {Number} status
 */
Project.prototype["status"] = undefined;

/**
 * Priority of the project
 * @member {Number} priority
 */
Project.prototype["priority"] = undefined;

/**
 * Owner of the project
 * @member {Number} owner_id
 */
Project.prototype["owner_id"] = undefined;

/**
 * User who created the project
 * @member {Number} user_id
 */
Project.prototype["user_id"] = undefined;

/**
 * Start date of the project
 * @member {Date} start_date
 */
Project.prototype["start_date"] = undefined;

/**
 * End date of the project
 * @member {Date} end_date
 */
Project.prototype["end_date"] = undefined;

/**
 * Project archived status
 * @member {Boolean} archived
 */
Project.prototype["archived"] = undefined;

/**
 * Closed time of the project
 * @member {Date} closed_at
 */
Project.prototype["closed_at"] = undefined;

export default Project;