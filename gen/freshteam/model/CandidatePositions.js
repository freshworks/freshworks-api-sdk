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
 * The CandidatePositions model module.
 * @module model/CandidatePositions
 * @version 1.0.0
 */
class CandidatePositions {
  /**
   * Constructs a new <code>CandidatePositions</code>.
   * @alias module:model/CandidatePositions
   */
  constructor() {
    CandidatePositions.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CandidatePositions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CandidatePositions} obj Optional instance to populate.
   * @return {module:model/CandidatePositions} The populated <code>CandidatePositions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CandidatePositions();

      if (data.hasOwnProperty("company")) {
        obj["company"] = ApiClient.convertToType(data["company"], "String");
      }
      if (data.hasOwnProperty("title")) {
        obj["title"] = ApiClient.convertToType(data["title"], "String");
      }
      if (data.hasOwnProperty("summary")) {
        obj["summary"] = ApiClient.convertToType(data["summary"], "String");
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
 * @member {String} company
 */
CandidatePositions.prototype["company"] = undefined;

/**
 * @member {String} title
 */
CandidatePositions.prototype["title"] = undefined;

/**
 * @member {String} summary
 */
CandidatePositions.prototype["summary"] = undefined;

/**
 * @member {Object} start_date
 */
CandidatePositions.prototype["start_date"] = undefined;

/**
 * @member {Object} end_date
 */
CandidatePositions.prototype["end_date"] = undefined;

/**
 * @member {Boolean} is_current
 */
CandidatePositions.prototype["is_current"] = undefined;

export default CandidatePositions;
