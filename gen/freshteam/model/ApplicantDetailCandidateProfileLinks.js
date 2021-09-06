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

/**
 * The ApplicantDetailCandidateProfileLinks model module.
 * @module model/ApplicantDetailCandidateProfileLinks
 * @version 1.0.0
 */
class ApplicantDetailCandidateProfileLinks {
  /**
   * Constructs a new <code>ApplicantDetailCandidateProfileLinks</code>.
   * @alias module:model/ApplicantDetailCandidateProfileLinks
   */
  constructor() {
    ApplicantDetailCandidateProfileLinks.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ApplicantDetailCandidateProfileLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicantDetailCandidateProfileLinks} obj Optional instance to populate.
   * @return {module:model/ApplicantDetailCandidateProfileLinks} The populated <code>ApplicantDetailCandidateProfileLinks</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicantDetailCandidateProfileLinks();

      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("url")) {
        obj["url"] = ApiClient.convertToType(data["url"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
ApplicantDetailCandidateProfileLinks.prototype["name"] = undefined;

/**
 * @member {String} url
 */
ApplicantDetailCandidateProfileLinks.prototype["url"] = undefined;

export default ApplicantDetailCandidateProfileLinks;
