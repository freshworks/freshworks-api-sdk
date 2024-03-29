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
 * The OnboardingRequest model module.
 * @module model/OnboardingRequest
 * @version 2.0.1
 */
class OnboardingRequest {
  /**
   * Constructs a new <code>OnboardingRequest</code>.
   * @alias module:model/OnboardingRequest
   */
  constructor() {
    OnboardingRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>OnboardingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnboardingRequest} obj Optional instance to populate.
   * @return {module:model/OnboardingRequest} The populated <code>OnboardingRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnboardingRequest();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "Number");
      }
      if (data.hasOwnProperty("subject")) {
        obj["subject"] = ApiClient.convertToType(data["subject"], "String");
      }
      if (data.hasOwnProperty("ticket_id")) {
        obj["ticket_id"] = ApiClient.convertToType(data["ticket_id"], "Number");
      }
      if (data.hasOwnProperty("actors")) {
        obj["actors"] = ApiClient.convertToType(data["actors"], { String: Object });
      }
      if (data.hasOwnProperty("fields")) {
        obj["fields"] = ApiClient.convertToType(data["fields"], Object);
      }
      if (data.hasOwnProperty("lookup_values")) {
        obj["lookup_values"] = ApiClient.convertToType(data["lookup_values"], { String: Object });
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the Onboarding Request created
 * @member {Number} id
 */
OnboardingRequest.prototype["id"] = undefined;

/**
 * Status of the onboarding request
 * @member {Number} status
 */
OnboardingRequest.prototype["status"] = undefined;

/**
 * subject of the onboarding request
 * @member {String} subject
 */
OnboardingRequest.prototype["subject"] = undefined;

/**
 * Unique identifier of the Ticket created
 * @member {Number} ticket_id
 */
OnboardingRequest.prototype["ticket_id"] = undefined;

/**
 * @member {Object.<String, Object>} actors
 */
OnboardingRequest.prototype["actors"] = undefined;

/**
 * @member {Object} fields
 */
OnboardingRequest.prototype["fields"] = undefined;

/**
 * @member {Object.<String, Object>} lookup_values
 */
OnboardingRequest.prototype["lookup_values"] = undefined;

export default OnboardingRequest;
