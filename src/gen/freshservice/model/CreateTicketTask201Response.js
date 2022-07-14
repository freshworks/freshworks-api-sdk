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
import Task from "./Task";

/**
 * The CreateTicketTask201Response model module.
 * @module model/CreateTicketTask201Response
 * @version 1.0.0
 */
class CreateTicketTask201Response {
  /**
   * Constructs a new <code>CreateTicketTask201Response</code>.
   * @alias module:model/CreateTicketTask201Response
   */
  constructor() {
    CreateTicketTask201Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateTicketTask201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTicketTask201Response} obj Optional instance to populate.
   * @return {module:model/CreateTicketTask201Response} The populated <code>CreateTicketTask201Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTicketTask201Response();

      if (data.hasOwnProperty("task")) {
        obj["task"] = Task.constructFromObject(data["task"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Task} task
 */
CreateTicketTask201Response.prototype["task"] = undefined;

export default CreateTicketTask201Response;
