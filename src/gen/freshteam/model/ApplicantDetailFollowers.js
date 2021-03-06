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
 * The ApplicantDetailFollowers model module.
 * @module model/ApplicantDetailFollowers
 * @version 1.0.0
 */
class ApplicantDetailFollowers {
  /**
   * Constructs a new <code>ApplicantDetailFollowers</code>.
   * @alias module:model/ApplicantDetailFollowers
   */
  constructor() {
    ApplicantDetailFollowers.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ApplicantDetailFollowers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicantDetailFollowers} obj Optional instance to populate.
   * @return {module:model/ApplicantDetailFollowers} The populated <code>ApplicantDetailFollowers</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicantDetailFollowers();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
ApplicantDetailFollowers.prototype["id"] = undefined;

/**
 * @member {Number} user_id
 */
ApplicantDetailFollowers.prototype["user_id"] = undefined;

/**
 * @member {String} name
 */
ApplicantDetailFollowers.prototype["name"] = undefined;

/**
 * @member {String} email
 */
ApplicantDetailFollowers.prototype["email"] = undefined;

export default ApplicantDetailFollowers;
