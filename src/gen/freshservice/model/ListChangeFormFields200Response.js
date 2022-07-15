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
import Field from "./Field";

/**
 * The ListChangeFormFields200Response model module.
 * @module model/ListChangeFormFields200Response
 * @version 1.0.0
 */
class ListChangeFormFields200Response {
  /**
   * Constructs a new <code>ListChangeFormFields200Response</code>.
   * @alias module:model/ListChangeFormFields200Response
   */
  constructor() {
    ListChangeFormFields200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListChangeFormFields200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListChangeFormFields200Response} obj Optional instance to populate.
   * @return {module:model/ListChangeFormFields200Response} The populated <code>ListChangeFormFields200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListChangeFormFields200Response();

      if (data.hasOwnProperty("change_fields")) {
        obj["change_fields"] = ApiClient.convertToType(data["change_fields"], [Field]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Field>} change_fields
 */
ListChangeFormFields200Response.prototype["change_fields"] = undefined;

export default ListChangeFormFields200Response;