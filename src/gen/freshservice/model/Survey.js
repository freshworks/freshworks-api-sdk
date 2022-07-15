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
import SurveyOptions from "./SurveyOptions";

/**
 * The Survey model module.
 * @module model/Survey
 * @version 1.0.0
 */
class Survey {
  /**
   * Constructs a new <code>Survey</code>.
   * @alias module:model/Survey
   */
  constructor() {
    Survey.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Survey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Survey} obj Optional instance to populate.
   * @return {module:model/Survey} The populated <code>Survey</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Survey();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("active")) {
        obj["active"] = ApiClient.convertToType(data["active"], "Boolean");
      }
      if (data.hasOwnProperty("survey_trigger_event")) {
        obj["survey_trigger_event"] = ApiClient.convertToType(data["survey_trigger_event"], "String");
      }
      if (data.hasOwnProperty("question")) {
        obj["question"] = ApiClient.convertToType(data["question"], "String");
      }
      if (data.hasOwnProperty("order_of_options")) {
        obj["order_of_options"] = ApiClient.convertToType(data["order_of_options"], "String");
      }
      if (data.hasOwnProperty("options")) {
        obj["options"] = SurveyOptions.constructFromObject(data["options"]);
      }
      if (data.hasOwnProperty("thank_you_message")) {
        obj["thank_you_message"] = ApiClient.convertToType(data["thank_you_message"], "String");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the Customer Satisfaction Survey
 * @member {Number} id
 */
Survey.prototype["id"] = undefined;

/**
 * Name of the Survey
 * @member {String} name
 */
Survey.prototype["name"] = undefined;

/**
 * State of the survey. For an activated survey, active = true. For a deactivated survey, active = false.
 * @member {Boolean} active
 */
Survey.prototype["active"] = undefined;

/**
 * Field to capture when the survey should be sent.
 * @member {module:model/Survey.SurveyTriggerEventEnum} survey_trigger_event
 */
Survey.prototype["survey_trigger_event"] = undefined;

/**
 * Question that will be asked to the requester to capture the service experience
 * @member {String} question
 */
Survey.prototype["question"] = undefined;

/**
 * Gradient order of the options displayed
 * @member {module:model/Survey.OrderOfOptionsEnum} order_of_options
 */
Survey.prototype["order_of_options"] = undefined;

/**
 * @member {module:model/SurveyOptions} options
 */
Survey.prototype["options"] = undefined;

/**
 * The final \\\"Thank you\\\" message that gets displayed to the requester upon completion of the survey
 * @member {String} thank_you_message
 */
Survey.prototype["thank_you_message"] = undefined;

/**
 * Unique identifier of the agent who last modified this survey
 * @member {Number} user_id
 */
Survey.prototype["user_id"] = undefined;

/**
 * Timestamp at which the survey was created
 * @member {Date} created_at
 */
Survey.prototype["created_at"] = undefined;

/**
 * Timestamp at which the survey was last modified
 * @member {Date} updated_at
 */
Survey.prototype["updated_at"] = undefined;

/**
 * Allowed values for the <code>survey_trigger_event</code> property.
 * @enum {String}
 * @readonly
 */
Survey["SurveyTriggerEventEnum"] = {
  /**
   * value: "Ticket Closure"
   * @const
   */
  "Ticket Closure": "Ticket Closure",

  /**
   * value: "Ticket Resolution"
   * @const
   */
  "Ticket Resolution": "Ticket Resolution",

  /**
   * value: "All Replies"
   * @const
   */
  "All Replies": "All Replies",

  /**
   * value: "Agent Specified Emails"
   * @const
   */
  "Agent Specified Emails": "Agent Specified Emails"
};

/**
 * Allowed values for the <code>order_of_options</code> property.
 * @enum {String}
 * @readonly
 */
Survey["OrderOfOptionsEnum"] = {
  /**
   * value: "Good to Bad"
   * @const
   */
  "Good to Bad": "Good to Bad",

  /**
   * value: "Bad to Good"
   * @const
   */
  "Bad to Good": "Bad to Good"
};

export default Survey;