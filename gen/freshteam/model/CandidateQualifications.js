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
 * The CandidateQualifications model module.
 * @module model/CandidateQualifications
 * @version 1.0.0
 */
class CandidateQualifications {
  /**
   * Constructs a new <code>CandidateQualifications</code>.
   * @alias module:model/CandidateQualifications
   */
  constructor() {
    CandidateQualifications.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CandidateQualifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CandidateQualifications} obj Optional instance to populate.
   * @return {module:model/CandidateQualifications} The populated <code>CandidateQualifications</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CandidateQualifications();

      if (data.hasOwnProperty("school_name")) {
        obj["school_name"] = ApiClient.convertToType(data["school_name"], "String");
      }
      if (data.hasOwnProperty("field_of_study")) {
        obj["field_of_study"] = ApiClient.convertToType(data["field_of_study"], "String");
      }
      if (data.hasOwnProperty("degree")) {
        obj["degree"] = ApiClient.convertToType(data["degree"], "String");
      }
      if (data.hasOwnProperty("summary")) {
        obj["summary"] = ApiClient.convertToType(data["summary"], "String");
      }
      if (data.hasOwnProperty("grade")) {
        obj["grade"] = ApiClient.convertToType(data["grade"], "String");
      }
      if (data.hasOwnProperty("start_date")) {
        obj["start_date"] = ApiClient.convertToType(data["start_date"], Object);
      }
      if (data.hasOwnProperty("end_date")) {
        obj["end_date"] = ApiClient.convertToType(data["end_date"], Object);
      }
      if (data.hasOwnProperty("is_current")) {
        obj["is_current"] = ApiClient.convertToType(data["is_current"], "Boolean");
      }
    }
    return obj;
  }
}

/**
 * @member {String} school_name
 */
CandidateQualifications.prototype["school_name"] = undefined;

/**
 * @member {String} field_of_study
 */
CandidateQualifications.prototype["field_of_study"] = undefined;

/**
 * @member {String} degree
 */
CandidateQualifications.prototype["degree"] = undefined;

/**
 * @member {String} summary
 */
CandidateQualifications.prototype["summary"] = undefined;

/**
 * @member {String} grade
 */
CandidateQualifications.prototype["grade"] = undefined;

/**
 * @member {Object} start_date
 */
CandidateQualifications.prototype["start_date"] = undefined;

/**
 * @member {Object} end_date
 */
CandidateQualifications.prototype["end_date"] = undefined;

/**
 * @member {Boolean} is_current
 */
CandidateQualifications.prototype["is_current"] = undefined;

export default CandidateQualifications;
