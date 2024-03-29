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
import AgentField from "./AgentField";

/**
 * The ListAgentFields200Response model module.
 * @module model/ListAgentFields200Response
 * @version 2.0.1
 */
class ListAgentFields200Response {
  /**
   * Constructs a new <code>ListAgentFields200Response</code>.
   * @alias module:model/ListAgentFields200Response
   */
  constructor() {
    ListAgentFields200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListAgentFields200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAgentFields200Response} obj Optional instance to populate.
   * @return {module:model/ListAgentFields200Response} The populated <code>ListAgentFields200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListAgentFields200Response();

      if (data.hasOwnProperty("requester_fields")) {
        obj["requester_fields"] = ApiClient.convertToType(data["requester_fields"], [AgentField]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/AgentField>} requester_fields
 */
ListAgentFields200Response.prototype["requester_fields"] = undefined;

export default ListAgentFields200Response;
