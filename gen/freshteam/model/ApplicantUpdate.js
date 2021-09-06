/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import NewHireCreateCustomFields from "./NewHireCreateCustomFields";

/**
 * The ApplicantUpdate model module.
 * @module model/ApplicantUpdate
 * @version 1.0.0
 */
class ApplicantUpdate {
  /**
   * Constructs a new <code>ApplicantUpdate</code>.
   * @alias module:model/ApplicantUpdate
   */
  constructor() {
    ApplicantUpdate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ApplicantUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicantUpdate} obj Optional instance to populate.
   * @return {module:model/ApplicantUpdate} The populated <code>ApplicantUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicantUpdate();

      if (data.hasOwnProperty("custom_fields")) {
        obj["custom_fields"] = NewHireCreateCustomFields.constructFromObject(data["custom_fields"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/NewHireCreateCustomFields} custom_fields
 */
ApplicantUpdate.prototype["custom_fields"] = undefined;

export default ApplicantUpdate;
