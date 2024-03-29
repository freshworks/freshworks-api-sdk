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
import OnboardingRequest from "./OnboardingRequest";

/**
 * The CreateOnboardingRequest201Response model module.
 * @module model/CreateOnboardingRequest201Response
 * @version 2.0.1
 */
class CreateOnboardingRequest201Response {
  /**
   * Constructs a new <code>CreateOnboardingRequest201Response</code>.
   * @alias module:model/CreateOnboardingRequest201Response
   */
  constructor() {
    CreateOnboardingRequest201Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateOnboardingRequest201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOnboardingRequest201Response} obj Optional instance to populate.
   * @return {module:model/CreateOnboardingRequest201Response} The populated <code>CreateOnboardingRequest201Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOnboardingRequest201Response();

      if (data.hasOwnProperty("onboarding_request")) {
        obj["onboarding_request"] = OnboardingRequest.constructFromObject(data["onboarding_request"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/OnboardingRequest} onboarding_request
 */
CreateOnboardingRequest201Response.prototype["onboarding_request"] = undefined;

export default CreateOnboardingRequest201Response;
