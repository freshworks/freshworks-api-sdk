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
import Conversation from "./Conversation";

/**
 * The UpdateTicketConversation200Response model module.
 * @module model/UpdateTicketConversation200Response
 * @version 1.0.0
 */
class UpdateTicketConversation200Response {
  /**
   * Constructs a new <code>UpdateTicketConversation200Response</code>.
   * @alias module:model/UpdateTicketConversation200Response
   */
  constructor() {
    UpdateTicketConversation200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UpdateTicketConversation200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateTicketConversation200Response} obj Optional instance to populate.
   * @return {module:model/UpdateTicketConversation200Response} The populated <code>UpdateTicketConversation200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateTicketConversation200Response();

      if (data.hasOwnProperty("conversation")) {
        obj["conversation"] = Conversation.constructFromObject(data["conversation"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Conversation} conversation
 */
UpdateTicketConversation200Response.prototype["conversation"] = undefined;

export default UpdateTicketConversation200Response;
