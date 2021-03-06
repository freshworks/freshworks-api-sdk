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

/**
 * The Branch model module.
 * @module model/Branch
 * @version 1.0.0
 */
class Branch {
  /**
   * Constructs a new <code>Branch</code>.
   * @alias module:model/Branch
   */
  constructor() {
    Branch.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Branch} obj Optional instance to populate.
   * @return {module:model/Branch} The populated <code>Branch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Branch();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("street")) {
        obj["street"] = ApiClient.convertToType(data["street"], "String");
      }
      if (data.hasOwnProperty("state")) {
        obj["state"] = ApiClient.convertToType(data["state"], "String");
      }
      if (data.hasOwnProperty("city")) {
        obj["city"] = ApiClient.convertToType(data["city"], "String");
      }
      if (data.hasOwnProperty("country_code")) {
        obj["country_code"] = ApiClient.convertToType(data["country_code"], "String");
      }
      if (data.hasOwnProperty("zip")) {
        obj["zip"] = ApiClient.convertToType(data["zip"], "String");
      }
      if (data.hasOwnProperty("time_zone")) {
        obj["time_zone"] = ApiClient.convertToType(data["time_zone"], "String");
      }
      if (data.hasOwnProperty("currency")) {
        obj["currency"] = ApiClient.convertToType(data["currency"], "String");
      }
      if (data.hasOwnProperty("language")) {
        obj["language"] = ApiClient.convertToType(data["language"], "String");
      }
      if (data.hasOwnProperty("main_office")) {
        obj["main_office"] = ApiClient.convertToType(data["main_office"], "Boolean");
      }
      if (data.hasOwnProperty("contact_info")) {
        obj["contact_info"] = ApiClient.convertToType(data["contact_info"], "String");
      }
      if (data.hasOwnProperty("date_format")) {
        obj["date_format"] = ApiClient.convertToType(data["date_format"], "String");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Branch.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
Branch.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
Branch.prototype["updated_at"] = undefined;

/**
 * @member {Boolean} deleted
 */
Branch.prototype["deleted"] = undefined;

/**
 * @member {String} name
 */
Branch.prototype["name"] = undefined;

/**
 * @member {String} street
 */
Branch.prototype["street"] = undefined;

/**
 * @member {String} state
 */
Branch.prototype["state"] = undefined;

/**
 * @member {String} city
 */
Branch.prototype["city"] = undefined;

/**
 * @member {String} country_code
 */
Branch.prototype["country_code"] = undefined;

/**
 * @member {String} zip
 */
Branch.prototype["zip"] = undefined;

/**
 * @member {String} time_zone
 */
Branch.prototype["time_zone"] = undefined;

/**
 * @member {String} currency
 */
Branch.prototype["currency"] = undefined;

/**
 * @member {String} language
 */
Branch.prototype["language"] = undefined;

/**
 * @member {Boolean} main_office
 */
Branch.prototype["main_office"] = undefined;

/**
 * @member {String} contact_info
 */
Branch.prototype["contact_info"] = undefined;

/**
 * @member {String} date_format
 */
Branch.prototype["date_format"] = undefined;

export default Branch;
