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
import Problem from "./Problem";

/**
 * The CreateProblem201Response model module.
 * @module model/CreateProblem201Response
 * @version 2.0.1
 */
class CreateProblem201Response {
  /**
   * Constructs a new <code>CreateProblem201Response</code>.
   * @alias module:model/CreateProblem201Response
   */
  constructor() {
    CreateProblem201Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateProblem201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateProblem201Response} obj Optional instance to populate.
   * @return {module:model/CreateProblem201Response} The populated <code>CreateProblem201Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateProblem201Response();

      if (data.hasOwnProperty("problem")) {
        obj["problem"] = Problem.constructFromObject(data["problem"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Problem} problem
 */
CreateProblem201Response.prototype["problem"] = undefined;

export default CreateProblem201Response;
