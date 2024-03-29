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
import SolutionArticle from "./SolutionArticle";

/**
 * The ListSolutionArticle200Response model module.
 * @module model/ListSolutionArticle200Response
 * @version 2.0.1
 */
class ListSolutionArticle200Response {
  /**
   * Constructs a new <code>ListSolutionArticle200Response</code>.
   * @alias module:model/ListSolutionArticle200Response
   */
  constructor() {
    ListSolutionArticle200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListSolutionArticle200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSolutionArticle200Response} obj Optional instance to populate.
   * @return {module:model/ListSolutionArticle200Response} The populated <code>ListSolutionArticle200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListSolutionArticle200Response();

      if (data.hasOwnProperty("solution_articles")) {
        obj["solution_articles"] = ApiClient.convertToType(data["solution_articles"], [SolutionArticle]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/SolutionArticle>} solution_articles
 */
ListSolutionArticle200Response.prototype["solution_articles"] = undefined;

export default ListSolutionArticle200Response;
