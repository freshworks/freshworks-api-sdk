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
 * The CreateDepartment200Response model module.
 * @module model/CreateDepartment200Response
 * @version 1.0.0
 */
class CreateDepartment200Response {
  /**
   * Constructs a new <code>CreateDepartment200Response</code>.
   * @alias module:model/CreateDepartment200Response
   */
  constructor() {
    CreateDepartment200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateDepartment200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDepartment200Response} obj Optional instance to populate.
   * @return {module:model/CreateDepartment200Response} The populated <code>CreateDepartment200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateDepartment200Response();

      if (data.hasOwnProperty("department")) {
        obj["department"] = Department.constructFromObject(data["department"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Department} department
 */
CreateDepartment200Response.prototype["department"] = undefined;

export default CreateDepartment200Response;
