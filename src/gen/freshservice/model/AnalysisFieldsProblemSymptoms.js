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

/**
 * The AnalysisFieldsProblemSymptoms model module.
 * @module model/AnalysisFieldsProblemSymptoms
 * @version 1.0.0
 */
class AnalysisFieldsProblemSymptoms {
  /**
   * Constructs a new <code>AnalysisFieldsProblemSymptoms</code>.
   * @alias module:model/AnalysisFieldsProblemSymptoms
   */
  constructor() {
    AnalysisFieldsProblemSymptoms.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AnalysisFieldsProblemSymptoms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisFieldsProblemSymptoms} obj Optional instance to populate.
   * @return {module:model/AnalysisFieldsProblemSymptoms} The populated <code>AnalysisFieldsProblemSymptoms</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnalysisFieldsProblemSymptoms();

      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("attachments")) {
        obj["attachments"] = ApiClient.convertToType(data["attachments"], ["String"]);
      }
    }
    return obj;
  }
}

/**
 * Symptoms of the Problem
 * @member {String} description
 */
AnalysisFieldsProblemSymptoms.prototype["description"] = undefined;

/**
 * URLs of attachments attached for Problem Symptom
 * @member {Array.<String>} attachments
 */
AnalysisFieldsProblemSymptoms.prototype["attachments"] = undefined;

export default AnalysisFieldsProblemSymptoms;
