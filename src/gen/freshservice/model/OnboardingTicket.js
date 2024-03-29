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
import OnboardingTicketOnboardingTicketsInner from "./OnboardingTicketOnboardingTicketsInner";

/**
 * The OnboardingTicket model module.
 * @module model/OnboardingTicket
 * @version 2.0.1
 */
class OnboardingTicket {
  /**
   * Constructs a new <code>OnboardingTicket</code>.
   * @alias module:model/OnboardingTicket
   */
  constructor() {
    OnboardingTicket.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>OnboardingTicket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnboardingTicket} obj Optional instance to populate.
   * @return {module:model/OnboardingTicket} The populated <code>OnboardingTicket</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnboardingTicket();

      if (data.hasOwnProperty("onboarding_tickets")) {
        obj["onboarding_tickets"] = ApiClient.convertToType(data["onboarding_tickets"], [
          OnboardingTicketOnboardingTicketsInner
        ]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OnboardingTicketOnboardingTicketsInner>} onboarding_tickets
 */
OnboardingTicket.prototype["onboarding_tickets"] = undefined;

export default OnboardingTicket;
