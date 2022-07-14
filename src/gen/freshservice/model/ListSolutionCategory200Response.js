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
import SolutionCategory from "./SolutionCategory";

/**
 * The ListSolutionCategory200Response model module.
 * @module model/ListSolutionCategory200Response
 * @version 1.0.0
 */
class ListSolutionCategory200Response {
  /**
   * Constructs a new <code>ListSolutionCategory200Response</code>.
   * @alias module:model/ListSolutionCategory200Response
   */
  constructor() {
    ListSolutionCategory200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListSolutionCategory200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSolutionCategory200Response} obj Optional instance to populate.
   * @return {module:model/ListSolutionCategory200Response} The populated <code>ListSolutionCategory200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListSolutionCategory200Response();

      if (data.hasOwnProperty("solution_categories")) {
        obj["solution_categories"] = ApiClient.convertToType(data["solution_categories"], [SolutionCategory]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/SolutionCategory>} solution_categories
 */
ListSolutionCategory200Response.prototype["solution_categories"] = undefined;

export default ListSolutionCategory200Response;
