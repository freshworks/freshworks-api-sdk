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
 * The EmployeeLiteModel model module.
 * @module model/EmployeeLiteModel
 * @version 1.0.0
 */
class EmployeeLiteModel {
  /**
   * Constructs a new <code>EmployeeLiteModel</code>.
   * @alias module:model/EmployeeLiteModel
   */
  constructor() {
    EmployeeLiteModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeLiteModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeLiteModel} obj Optional instance to populate.
   * @return {module:model/EmployeeLiteModel} The populated <code>EmployeeLiteModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeLiteModel();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("first_name")) {
        obj["first_name"] = ApiClient.convertToType(data["first_name"], "String");
      }
      if (data.hasOwnProperty("last_name")) {
        obj["last_name"] = ApiClient.convertToType(data["last_name"], "String");
      }
      if (data.hasOwnProperty("official_email")) {
        obj["official_email"] = ApiClient.convertToType(data["official_email"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
EmployeeLiteModel.prototype["id"] = undefined;

/**
 * @member {String} first_name
 */
EmployeeLiteModel.prototype["first_name"] = undefined;

/**
 * @member {String} last_name
 */
EmployeeLiteModel.prototype["last_name"] = undefined;

/**
 * @member {String} official_email
 */
EmployeeLiteModel.prototype["official_email"] = undefined;

export default EmployeeLiteModel;
