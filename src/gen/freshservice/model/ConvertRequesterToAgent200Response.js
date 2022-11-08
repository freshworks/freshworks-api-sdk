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
import Agent from "./Agent";

/**
 * The ConvertRequesterToAgent200Response model module.
 * @module model/ConvertRequesterToAgent200Response
 * @version 2.0.1
 */
class ConvertRequesterToAgent200Response {
  /**
   * Constructs a new <code>ConvertRequesterToAgent200Response</code>.
   * @alias module:model/ConvertRequesterToAgent200Response
   */
  constructor() {
    ConvertRequesterToAgent200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ConvertRequesterToAgent200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvertRequesterToAgent200Response} obj Optional instance to populate.
   * @return {module:model/ConvertRequesterToAgent200Response} The populated <code>ConvertRequesterToAgent200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConvertRequesterToAgent200Response();

      if (data.hasOwnProperty("agent")) {
        obj["agent"] = Agent.constructFromObject(data["agent"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Agent} agent
 */
ConvertRequesterToAgent200Response.prototype["agent"] = undefined;

export default ConvertRequesterToAgent200Response;
