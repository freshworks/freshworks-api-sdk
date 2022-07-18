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
import AgentGroup from "./AgentGroup";

/**
 * The CreateAgentGroup200Response model module.
 * @module model/CreateAgentGroup200Response
 * @version 1.0.0
 */
class CreateAgentGroup200Response {
  /**
   * Constructs a new <code>CreateAgentGroup200Response</code>.
   * @alias module:model/CreateAgentGroup200Response
   */
  constructor() {
    CreateAgentGroup200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateAgentGroup200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAgentGroup200Response} obj Optional instance to populate.
   * @return {module:model/CreateAgentGroup200Response} The populated <code>CreateAgentGroup200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateAgentGroup200Response();

      if (data.hasOwnProperty("agent_group")) {
        obj["agent_group"] = AgentGroup.constructFromObject(data["agent_group"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/AgentGroup} agent_group
 */
CreateAgentGroup200Response.prototype["agent_group"] = undefined;

export default CreateAgentGroup200Response;
