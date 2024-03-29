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
 * The AgentField model module.
 * @module model/AgentField
 * @version 2.0.1
 */
class AgentField {
  /**
   * Constructs a new <code>AgentField</code>.
   * @alias module:model/AgentField
   */
  constructor() {
    AgentField.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AgentField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentField} obj Optional instance to populate.
   * @return {module:model/AgentField} The populated <code>AgentField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AgentField();

      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("label_for_admins")) {
        obj["label_for_admins"] = ApiClient.convertToType(data["label_for_admins"], "String");
      }
      if (data.hasOwnProperty("placeholder_for_admins")) {
        obj["placeholder_for_admins"] = ApiClient.convertToType(data["placeholder_for_admins"], "String");
      }
      if (data.hasOwnProperty("mandatory_for_admins")) {
        obj["mandatory_for_admins"] = ApiClient.convertToType(data["mandatory_for_admins"], "Boolean");
      }
      if (data.hasOwnProperty("label_for_agents")) {
        obj["label_for_agents"] = ApiClient.convertToType(data["label_for_agents"], "String");
      }
      if (data.hasOwnProperty("placeholder_for_agents")) {
        obj["placeholder_for_agents"] = ApiClient.convertToType(data["placeholder_for_agents"], "String");
      }
      if (data.hasOwnProperty("visible_to_agents")) {
        obj["visible_to_agents"] = ApiClient.convertToType(data["visible_to_agents"], "Boolean");
      }
      if (data.hasOwnProperty("editable_by_agents")) {
        obj["editable_by_agents"] = ApiClient.convertToType(data["editable_by_agents"], "Boolean");
      }
      if (data.hasOwnProperty("mandatory_for_agents")) {
        obj["mandatory_for_agents"] = ApiClient.convertToType(data["mandatory_for_agents"], "Boolean");
      }
      if (data.hasOwnProperty("position")) {
        obj["position"] = ApiClient.convertToType(data["position"], "Number");
      }
      if (data.hasOwnProperty("type")) {
        obj["type"] = ApiClient.convertToType(data["type"], "String");
      }
      if (data.hasOwnProperty("choices")) {
        obj["choices"] = ApiClient.convertToType(data["choices"], Object);
      }
    }
    return obj;
  }
}

/**
 * Name of the requester field
 * @member {String} name
 */
AgentField.prototype["name"] = undefined;

/**
 * Field label shown to admins when editing an agent's profile
 * @member {String} label_for_admins
 */
AgentField.prototype["label_for_admins"] = undefined;

/**
 * Placeholder text shown to admins when editing an agent's profile
 * @member {String} placeholder_for_admins
 */
AgentField.prototype["placeholder_for_admins"] = undefined;

/**
 * Signifies whether the field is mandatory for an admin when they are creating an agent, or editing an agent's profile
 * @member {Boolean} mandatory_for_admins
 */
AgentField.prototype["mandatory_for_admins"] = undefined;

/**
 * Field label shown to agents when editing their own profile
 * @member {String} label_for_agents
 */
AgentField.prototype["label_for_agents"] = undefined;

/**
 * Placeholder text shown to agents when editing their own profile
 * @member {String} placeholder_for_agents
 */
AgentField.prototype["placeholder_for_agents"] = undefined;

/**
 * Signifies whether the field is visible to agents when they are editing their own profile
 * @member {Boolean} visible_to_agents
 */
AgentField.prototype["visible_to_agents"] = undefined;

/**
 * Signifies whether the field is editable by agents when they are editing their own profile
 * @member {Boolean} editable_by_agents
 */
AgentField.prototype["editable_by_agents"] = undefined;

/**
 * Signifies whether the field is mandatory for agents when they are editing their own profile
 * @member {Boolean} mandatory_for_agents
 */
AgentField.prototype["mandatory_for_agents"] = undefined;

/**
 * Relative display position of the agent field
 * @member {Number} position
 */
AgentField.prototype["position"] = undefined;

/**
 * For custom fields, this signifies the type of value associated with the field (custom_date, custom_text)
 * @member {String} type
 */
AgentField.prototype["type"] = undefined;

/**
 * Options available for selection for the field (available only for dropdown and nested fields)
 * @member {Object} choices
 */
AgentField.prototype["choices"] = undefined;

export default AgentField;
