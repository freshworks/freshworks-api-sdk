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
 * The ListAgentGroups200Response model module.
 * @module model/ListAgentGroups200Response
 * @version 1.0.0
 */
class ListAgentGroups200Response {
  /**
   * Constructs a new <code>ListAgentGroups200Response</code>.
   * @alias module:model/ListAgentGroups200Response
   */
  constructor() {
    ListAgentGroups200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListAgentGroups200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAgentGroups200Response} obj Optional instance to populate.
   * @return {module:model/ListAgentGroups200Response} The populated <code>ListAgentGroups200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListAgentGroups200Response();

      if (data.hasOwnProperty("departments")) {
        obj["departments"] = ApiClient.convertToType(data["departments"], [AgentGroup]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/AgentGroup>} departments
 */
ListAgentGroups200Response.prototype["departments"] = undefined;

export default ListAgentGroups200Response;
