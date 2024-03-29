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
 * The Location model module.
 * @module model/Location
 * @version 2.0.1
 */
class Location {
  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   */
  constructor() {
    Location.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Location();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("parent_location_id")) {
        obj["parent_location_id"] = ApiClient.convertToType(data["parent_location_id"], "Number");
      }
      if (data.hasOwnProperty("primary_contact_id")) {
        obj["primary_contact_id"] = ApiClient.convertToType(data["primary_contact_id"], "Number");
      }
      if (data.hasOwnProperty("address_line1")) {
        obj["address_line1"] = ApiClient.convertToType(data["address_line1"], "String");
      }
      if (data.hasOwnProperty("address_line2")) {
        obj["address_line2"] = ApiClient.convertToType(data["address_line2"], "String");
      }
      if (data.hasOwnProperty("address_city")) {
        obj["address_city"] = ApiClient.convertToType(data["address_city"], "String");
      }
      if (data.hasOwnProperty("address_state")) {
        obj["address_state"] = ApiClient.convertToType(data["address_state"], "String");
      }
      if (data.hasOwnProperty("address_country")) {
        obj["address_country"] = ApiClient.convertToType(data["address_country"], "String");
      }
      if (data.hasOwnProperty("address_zipcode")) {
        obj["address_zipcode"] = ApiClient.convertToType(data["address_zipcode"], "String");
      }
    }
    return obj;
  }
}

/**
 * Unique ID of the location
 * @member {Number} id
 */
Location.prototype["id"] = undefined;

/**
 * Name of the location
 * @member {String} name
 */
Location.prototype["name"] = undefined;

/**
 * Unique ID of the parent location
 * @member {Number} parent_location_id
 */
Location.prototype["parent_location_id"] = undefined;

/**
 * Unique ID of the primary contact (Primary contact is a requester. The primary contact name, email and phone number will be referenced from the requester details)
 * @member {Number} primary_contact_id
 */
Location.prototype["primary_contact_id"] = undefined;

/**
 * Address Line 1
 * @member {String} address_line1
 */
Location.prototype["address_line1"] = undefined;

/**
 * Address Line 2
 * @member {String} address_line2
 */
Location.prototype["address_line2"] = undefined;

/**
 * City
 * @member {String} address_city
 */
Location.prototype["address_city"] = undefined;

/**
 * State
 * @member {String} address_state
 */
Location.prototype["address_state"] = undefined;

/**
 * Country
 * @member {String} address_country
 */
Location.prototype["address_country"] = undefined;

/**
 * Zip Code of the Location
 * @member {String} address_zipcode
 */
Location.prototype["address_zipcode"] = undefined;

export default Location;
