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
import Model401Error from "./Model401Error";

/**
 * The InlineResponse401 model module.
 * @module model/InlineResponse401
 * @version 1.0.0
 */
class InlineResponse401 {
  /**
   * Constructs a new <code>InlineResponse401</code>.
   * @alias module:model/InlineResponse401
   */
  constructor() {
    InlineResponse401.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>InlineResponse401</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse401} obj Optional instance to populate.
   * @return {module:model/InlineResponse401} The populated <code>InlineResponse401</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse401();

      if (data.hasOwnProperty("errors")) {
        obj["errors"] = ApiClient.convertToType(data["errors"], [Model401Error]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Model401Error>} errors
 */
InlineResponse401.prototype["errors"] = undefined;

export default InlineResponse401;
