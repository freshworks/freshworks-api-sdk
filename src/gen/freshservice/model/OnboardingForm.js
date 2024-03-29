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
import OnboardingFormFieldsInner from "./OnboardingFormFieldsInner";

/**
 * The OnboardingForm model module.
 * @module model/OnboardingForm
 * @version 2.0.1
 */
class OnboardingForm {
  /**
   * Constructs a new <code>OnboardingForm</code>.
   * @alias module:model/OnboardingForm
   */
  constructor() {
    OnboardingForm.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>OnboardingForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnboardingForm} obj Optional instance to populate.
   * @return {module:model/OnboardingForm} The populated <code>OnboardingForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnboardingForm();

      if (data.hasOwnProperty("fields")) {
        obj["fields"] = ApiClient.convertToType(data["fields"], [OnboardingFormFieldsInner]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OnboardingFormFieldsInner>} fields
 */
OnboardingForm.prototype["fields"] = undefined;

export default OnboardingForm;
