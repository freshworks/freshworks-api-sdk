/**
 * Freshservice
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Error from "./Error";

/**
 * The ListDepartments401Response model module.
 * @module model/ListDepartments401Response
 * @version 2.0.1
 */
class ListDepartments401Response {
  /**
   * Constructs a new <code>ListDepartments401Response</code>.
   * @alias module:model/ListDepartments401Response
   */
  constructor() {
    ListDepartments401Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListDepartments401Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListDepartments401Response} obj Optional instance to populate.
   * @return {module:model/ListDepartments401Response} The populated <code>ListDepartments401Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListDepartments401Response();

      if (data.hasOwnProperty("errors")) {
        obj["errors"] = ApiClient.convertToType(data["errors"], [Error]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Error>} errors
 */
ListDepartments401Response.prototype["errors"] = undefined;

export default ListDepartments401Response;
