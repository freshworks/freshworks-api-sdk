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

/**
 * The Requester model module.
 * @module model/Requester
 * @version 2.0.1
 */
class Requester {
  /**
   * Constructs a new <code>Requester</code>.
   * @alias module:model/Requester
   */
  constructor() {
    Requester.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Requester</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Requester} obj Optional instance to populate.
   * @return {module:model/Requester} The populated <code>Requester</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Requester();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("first_name")) {
        obj["first_name"] = ApiClient.convertToType(data["first_name"], "String");
      }
      if (data.hasOwnProperty("last_name")) {
        obj["last_name"] = ApiClient.convertToType(data["last_name"], "String");
      }
      if (data.hasOwnProperty("job_title")) {
        obj["job_title"] = ApiClient.convertToType(data["job_title"], "String");
      }
      if (data.hasOwnProperty("primary_email")) {
        obj["primary_email"] = ApiClient.convertToType(data["primary_email"], "String");
      }
      if (data.hasOwnProperty("secondary_emails")) {
        obj["secondary_emails"] = ApiClient.convertToType(data["secondary_emails"], ["String"]);
      }
      if (data.hasOwnProperty("work_phone_number")) {
        obj["work_phone_number"] = ApiClient.convertToType(data["work_phone_number"], "String");
      }
      if (data.hasOwnProperty("mobile_phone_number")) {
        obj["mobile_phone_number"] = ApiClient.convertToType(data["mobile_phone_number"], "String");
      }
      if (data.hasOwnProperty("department_ids")) {
        obj["department_ids"] = ApiClient.convertToType(data["department_ids"], ["Number"]);
      }
      if (data.hasOwnProperty("can_see_all_tickets_from_associated_departments")) {
        obj["can_see_all_tickets_from_associated_departments"] = ApiClient.convertToType(
          data["can_see_all_tickets_from_associated_departments"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("reporting_manager_id")) {
        obj["reporting_manager_id"] = ApiClient.convertToType(data["reporting_manager_id"], "Number");
      }
      if (data.hasOwnProperty("address")) {
        obj["address"] = ApiClient.convertToType(data["address"], "String");
      }
      if (data.hasOwnProperty("time_zone")) {
        obj["time_zone"] = ApiClient.convertToType(data["time_zone"], "String");
      }
      if (data.hasOwnProperty("language")) {
        obj["language"] = ApiClient.convertToType(data["language"], "String");
      }
      if (data.hasOwnProperty("location_id")) {
        obj["location_id"] = ApiClient.convertToType(data["location_id"], "Number");
      }
      if (data.hasOwnProperty("background_information")) {
        obj["background_information"] = ApiClient.convertToType(data["background_information"], "String");
      }
      if (data.hasOwnProperty("active")) {
        obj["active"] = ApiClient.convertToType(data["active"], "Boolean");
      }
      if (data.hasOwnProperty("has_logged_in")) {
        obj["has_logged_in"] = ApiClient.convertToType(data["has_logged_in"], "Boolean");
      }
      if (data.hasOwnProperty("created_time")) {
        obj["created_time"] = ApiClient.convertToType(data["created_time"], "Date");
      }
      if (data.hasOwnProperty("updated_time")) {
        obj["updated_time"] = ApiClient.convertToType(data["updated_time"], "Date");
      }
      if (data.hasOwnProperty("custom_fields")) {
        obj["custom_fields"] = ApiClient.convertToType(data["custom_fields"], Object);
      }
    }
    return obj;
  }
}

/**
 * Unique identifier of the requester
 * @member {Number} id
 */
Requester.prototype["id"] = undefined;

/**
 * First Name of the requester
 * @member {String} first_name
 */
Requester.prototype["first_name"] = undefined;

/**
 * Last Name of the requester
 * @member {String} last_name
 */
Requester.prototype["last_name"] = undefined;

/**
 * Job Title of the requester
 * @member {String} job_title
 */
Requester.prototype["job_title"] = undefined;

/**
 * Primary email address of the requester
 * @member {String} primary_email
 */
Requester.prototype["primary_email"] = undefined;

/**
 * Secondary email addresses of the requester
 * @member {Array.<String>} secondary_emails
 */
Requester.prototype["secondary_emails"] = undefined;

/**
 * Work phone number of the requester
 * @member {String} work_phone_number
 */
Requester.prototype["work_phone_number"] = undefined;

/**
 * Mobile phone number of the requester
 * @member {String} mobile_phone_number
 */
Requester.prototype["mobile_phone_number"] = undefined;

/**
 * Unique IDs of the departments associated with the requester
 * @member {Array.<Number>} department_ids
 */
Requester.prototype["department_ids"] = undefined;

/**
 * Set to true if the requester must be allowed to view tickets filed by other members of the department, and false otherwise
 * @member {Boolean} can_see_all_tickets_from_associated_departments
 */
Requester.prototype["can_see_all_tickets_from_associated_departments"] = undefined;

/**
 * Unique identifier of the requester's reporting manager
 * @member {Number} reporting_manager_id
 */
Requester.prototype["reporting_manager_id"] = undefined;

/**
 * Address of the requester
 * @member {String} address
 */
Requester.prototype["address"] = undefined;

/**
 * Time zone of the requester
 * @member {String} time_zone
 */
Requester.prototype["time_zone"] = undefined;

/**
 * Language used by the requester
 * @member {String} language
 */
Requester.prototype["language"] = undefined;

/**
 * Unique identifier of the location associated with the requester
 * @member {Number} location_id
 */
Requester.prototype["location_id"] = undefined;

/**
 * Address of the requester
 * @member {String} background_information
 */
Requester.prototype["background_information"] = undefined;

/**
 * true if the user is active, and false if the user account has been deactivated.
 * @member {Boolean} active
 */
Requester.prototype["active"] = undefined;

/**
 * true if the user has logged in to Freshservice at least once, and false otherwise.
 * @member {Boolean} has_logged_in
 */
Requester.prototype["has_logged_in"] = undefined;

/**
 * Timestamp at which the requester was created
 * @member {Date} created_time
 */
Requester.prototype["created_time"] = undefined;

/**
 * Timestamp at which the requester was last modified
 * @member {Date} updated_time
 */
Requester.prototype["updated_time"] = undefined;

/**
 * Custom fields that are associated with a Freshservice entity
 * @member {Object} custom_fields
 */
Requester.prototype["custom_fields"] = undefined;

export default Requester;
