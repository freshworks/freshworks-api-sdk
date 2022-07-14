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
import Department from "./Department";

/**
 * The ListDepartments200Response model module.
 * @module model/ListDepartments200Response
 * @version 1.0.0
 */
class ListDepartments200Response {
  /**
   * Constructs a new <code>ListDepartments200Response</code>.
   * @alias module:model/ListDepartments200Response
   */
  constructor() {
    ListDepartments200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListDepartments200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListDepartments200Response} obj Optional instance to populate.
   * @return {module:model/ListDepartments200Response} The populated <code>ListDepartments200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListDepartments200Response();

      if (data.hasOwnProperty("departments")) {
        obj["departments"] = ApiClient.convertToType(data["departments"], [Department]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Department>} departments
 */
ListDepartments200Response.prototype["departments"] = undefined;

export default ListDepartments200Response;
