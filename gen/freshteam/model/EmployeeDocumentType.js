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
 * The EmployeeDocumentType model module.
 * @module model/EmployeeDocumentType
 * @version 1.0.0
 */
class EmployeeDocumentType {
  /**
   * Constructs a new <code>EmployeeDocumentType</code>.
   * @alias module:model/EmployeeDocumentType
   */
  constructor() {
    EmployeeDocumentType.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeDocumentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeDocumentType} obj Optional instance to populate.
   * @return {module:model/EmployeeDocumentType} The populated <code>EmployeeDocumentType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeDocumentType();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("value")) {
        obj["value"] = ApiClient.convertToType(data["value"], "String");
      }
      if (data.hasOwnProperty("position")) {
        obj["position"] = ApiClient.convertToType(data["position"], "Number");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
EmployeeDocumentType.prototype["id"] = undefined;

/**
 * @member {String} value
 */
EmployeeDocumentType.prototype["value"] = undefined;

/**
 * @member {Number} position
 */
EmployeeDocumentType.prototype["position"] = undefined;

/**
 * @member {Boolean} deleted
 */
EmployeeDocumentType.prototype["deleted"] = undefined;

export default EmployeeDocumentType;
