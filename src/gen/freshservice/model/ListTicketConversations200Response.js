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
import Conversation from "./Conversation";

/**
 * The ListTicketConversations200Response model module.
 * @module model/ListTicketConversations200Response
 * @version 2.0.1
 */
class ListTicketConversations200Response {
  /**
   * Constructs a new <code>ListTicketConversations200Response</code>.
   * @alias module:model/ListTicketConversations200Response
   */
  constructor() {
    ListTicketConversations200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListTicketConversations200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListTicketConversations200Response} obj Optional instance to populate.
   * @return {module:model/ListTicketConversations200Response} The populated <code>ListTicketConversations200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListTicketConversations200Response();

      if (data.hasOwnProperty("conversations")) {
        obj["conversations"] = ApiClient.convertToType(data["conversations"], [Conversation]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Conversation>} conversations
 */
ListTicketConversations200Response.prototype["conversations"] = undefined;

export default ListTicketConversations200Response;
