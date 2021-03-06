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
 * The EmployeeCommunicationAddress model module.
 * @module model/EmployeeCommunicationAddress
 * @version 1.0.0
 */
class EmployeeCommunicationAddress {
  /**
   * Constructs a new <code>EmployeeCommunicationAddress</code>.
   * @alias module:model/EmployeeCommunicationAddress
   */
  constructor() {
    EmployeeCommunicationAddress.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeCommunicationAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeCommunicationAddress} obj Optional instance to populate.
   * @return {module:model/EmployeeCommunicationAddress} The populated <code>EmployeeCommunicationAddress</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeCommunicationAddress();

      if (data.hasOwnProperty("communication_street")) {
        obj["communication_street"] = ApiClient.convertToType(data["communication_street"], "String");
      }
      if (data.hasOwnProperty("communication_state")) {
        obj["communication_state"] = ApiClient.convertToType(data["communication_state"], "String");
      }
      if (data.hasOwnProperty("communication_city")) {
        obj["communication_city"] = ApiClient.convertToType(data["communication_city"], "String");
      }
      if (data.hasOwnProperty("communication_country_code")) {
        obj["communication_country_code"] = ApiClient.convertToType(data["communication_country_code"], "String");
      }
      if (data.hasOwnProperty("communication_zip_code")) {
        obj["communication_zip_code"] = ApiClient.convertToType(data["communication_zip_code"], "String");
      }
      if (data.hasOwnProperty("same_as_residential")) {
        obj["same_as_residential"] = ApiClient.convertToType(data["same_as_residential"], "Boolean");
      }
    }
    return obj;
  }
}

/**
 * @member {String} communication_street
 */
EmployeeCommunicationAddress.prototype["communication_street"] = undefined;

/**
 * @member {String} communication_state
 */
EmployeeCommunicationAddress.prototype["communication_state"] = undefined;

/**
 * @member {String} communication_city
 */
EmployeeCommunicationAddress.prototype["communication_city"] = undefined;

/**
 * @member {String} communication_country_code
 */
EmployeeCommunicationAddress.prototype["communication_country_code"] = undefined;

/**
 * @member {String} communication_zip_code
 */
EmployeeCommunicationAddress.prototype["communication_zip_code"] = undefined;

/**
 * @member {Boolean} same_as_residential
 */
EmployeeCommunicationAddress.prototype["same_as_residential"] = undefined;

export default EmployeeCommunicationAddress;
