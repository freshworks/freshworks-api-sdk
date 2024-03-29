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
import AgentScope from "./AgentScope";
import RoleAssignment from "./RoleAssignment";

/**
 * The Agent model module.
 * @module model/Agent
 * @version 2.0.1
 */
class Agent {
  /**
   * Constructs a new <code>Agent</code>.
   * @alias module:model/Agent
   * @param first_name {String} First Name of the agent
   * @param email {String} Email address of the agent
   * @param role_ids {Array.<Number>} (DEPRECATED) Unique IDs of the agent roles associated with the agent
   */
  constructor(first_name, email, role_ids) {
    Agent.initialize(this, first_name, email, role_ids);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, first_name, email, role_ids) {
    obj["first_name"] = first_name;
    obj["email"] = email;
    obj["role_ids"] = role_ids;
  }

  /**
   * Constructs a <code>Agent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Agent} obj Optional instance to populate.
   * @return {module:model/Agent} The populated <code>Agent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Agent();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("first_name")) {
        obj["first_name"] = ApiClient.convertToType(data["first_name"], "String");
      }
      if (data.hasOwnProperty("occasional")) {
        obj["occasional"] = ApiClient.convertToType(data["occasional"], "Boolean");
      }
      if (data.hasOwnProperty("last_name")) {
        obj["last_name"] = ApiClient.convertToType(data["last_name"], "String");
      }
      if (data.hasOwnProperty("job_title")) {
        obj["job_title"] = ApiClient.convertToType(data["job_title"], "String");
      }
      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
      if (data.hasOwnProperty("work_phone_number")) {
        obj["work_phone_number"] = ApiClient.convertToType(data["work_phone_number"], "String");
      }
      if (data.hasOwnProperty("mobile_phone_number")) {
        obj["mobile_phone_number"] = ApiClient.convertToType(data["mobile_phone_number"], "String");
      }
      if (data.hasOwnProperty("reporting_manager_id")) {
        obj["reporting_manager_id"] = ApiClient.convertToType(data["reporting_manager_id"], "Number");
      }
      if (data.hasOwnProperty("time_zone")) {
        obj["time_zone"] = ApiClient.convertToType(data["time_zone"], "String");
      }
      if (data.hasOwnProperty("language")) {
        obj["language"] = ApiClient.convertToType(data["language"], "String");
      }
      if (data.hasOwnProperty("location_id")) {
        obj["location_id"] = ApiClient.convertToType(data["location_id"], "Number");
      }
      if (data.hasOwnProperty("scoreboard_level_id")) {
        obj["scoreboard_level_id"] = ApiClient.convertToType(data["scoreboard_level_id"], "Number");
      }
      if (data.hasOwnProperty("scope")) {
        obj["scope"] = AgentScope.constructFromObject(data["scope"]);
      }
      if (data.hasOwnProperty("group_ids")) {
        obj["group_ids"] = ApiClient.convertToType(data["group_ids"], ["Number"]);
      }
      if (data.hasOwnProperty("member_of")) {
        obj["member_of"] = ApiClient.convertToType(data["member_of"], ["Number"]);
      }
      if (data.hasOwnProperty("observer_of")) {
        obj["observer_of"] = ApiClient.convertToType(data["observer_of"], ["Number"]);
      }
      if (data.hasOwnProperty("role_ids")) {
        obj["role_ids"] = ApiClient.convertToType(data["role_ids"], ["Number"]);
      }
      if (data.hasOwnProperty("roles")) {
        obj["roles"] = ApiClient.convertToType(data["roles"], [RoleAssignment]);
      }
      if (data.hasOwnProperty("last_login_at")) {
        obj["last_login_at"] = ApiClient.convertToType(data["last_login_at"], "Date");
      }
      if (data.hasOwnProperty("active")) {
        obj["active"] = ApiClient.convertToType(data["active"], "Boolean");
      }
      if (data.hasOwnProperty("has_logged_in")) {
        obj["has_logged_in"] = ApiClient.convertToType(data["has_logged_in"], "Boolean");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the agent
 * @member {Number} id
 */
Agent.prototype["id"] = undefined;

/**
 * First Name of the agent
 * @member {String} first_name
 */
Agent.prototype["first_name"] = undefined;

/**
 * True if the agent is an occasional agent, and false if full-time agent.
 * @member {Boolean} occasional
 */
Agent.prototype["occasional"] = undefined;

/**
 * Last Name of the agent
 * @member {String} last_name
 */
Agent.prototype["last_name"] = undefined;

/**
 * Job Title of the agent
 * @member {String} job_title
 */
Agent.prototype["job_title"] = undefined;

/**
 * Email address of the agent
 * @member {String} email
 */
Agent.prototype["email"] = undefined;

/**
 * Work phone number of the agent
 * @member {String} work_phone_number
 */
Agent.prototype["work_phone_number"] = undefined;

/**
 * Mobile phone number of the agent
 * @member {String} mobile_phone_number
 */
Agent.prototype["mobile_phone_number"] = undefined;

/**
 * Unique identifier of the agent's reporting manager
 * @member {Number} reporting_manager_id
 */
Agent.prototype["reporting_manager_id"] = undefined;

/**
 * Time zone of the agent
 * @member {String} time_zone
 */
Agent.prototype["time_zone"] = undefined;

/**
 * Language used by the agent
 * @member {String} language
 */
Agent.prototype["language"] = undefined;

/**
 * Unique identifier of the location associated with the agent
 * @member {Number} location_id
 */
Agent.prototype["location_id"] = undefined;

/**
 * Unique ID of the level of the agent in the Arcade. Possible values: * 1 - Beginner * 2 - Intermediate * 3 - Professional * 4 - Expert * 5 - Master * 6 - Guru
 * @member {module:model/Agent.ScoreboardLevelIdEnum} scoreboard_level_id
 */
Agent.prototype["scoreboard_level_id"] = undefined;

/**
 * @member {module:model/AgentScope} scope
 */
Agent.prototype["scope"] = undefined;

/**
 * <DEPRECATED> Unique IDs of the agent groups associated with the agent
 * @member {Array.<Number>} group_ids
 */
Agent.prototype["group_ids"] = undefined;

/**
 * Unique IDs of the agent groups that the agent is a member of
 * @member {Array.<Number>} member_of
 */
Agent.prototype["member_of"] = undefined;

/**
 * Unique IDs of the agent groups that the agent is an observer of
 * @member {Array.<Number>} observer_of
 */
Agent.prototype["observer_of"] = undefined;

/**
 * (DEPRECATED) Unique IDs of the agent roles associated with the agent
 * @member {Array.<Number>} role_ids
 */
Agent.prototype["role_ids"] = undefined;

/**
 * @member {Array.<module:model/RoleAssignment>} roles
 */
Agent.prototype["roles"] = undefined;

/**
 * Timestamp of the agent's last successful login
 * @member {Date} last_login_at
 */
Agent.prototype["last_login_at"] = undefined;

/**
 * true if the user is active, and false if the user account has been deactivated.
 * @member {Boolean} active
 */
Agent.prototype["active"] = undefined;

/**
 * true if the user has logged in to Freshservice at least once, and false otherwise.
 * @member {Boolean} has_logged_in
 */
Agent.prototype["has_logged_in"] = undefined;

/**
 * Timestamp at which the agent was created
 * @member {Date} created_at
 */
Agent.prototype["created_at"] = undefined;

/**
 * Timestamp at which the agent was last modified
 * @member {Date} updated_at
 */
Agent.prototype["updated_at"] = undefined;

/**
 * Allowed values for the <code>scoreboard_level_id</code> property.
 * @enum {Number}
 * @readonly
 */
Agent["ScoreboardLevelIdEnum"] = {
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
  4: 4,

  /**
   * value: 5
   * @const
   */
  5: 5,

  /**
   * value: 6
   * @const
   */
  6: 6
};

export default Agent;
