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
import GrantType from "./GrantType";
import PayRate from "./PayRate";
import StockGrantReason from "./StockGrantReason";

/**
 * The EmployeeStock model module.
 * @module model/EmployeeStock
 * @version 1.0.0
 */
class EmployeeStock {
  /**
   * Constructs a new <code>EmployeeStock</code>.
   * @alias module:model/EmployeeStock
   */
  constructor() {
    EmployeeStock.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeStock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeStock} obj Optional instance to populate.
   * @return {module:model/EmployeeStock} The populated <code>EmployeeStock</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeStock();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("user_id")) {
        obj["user_id"] = ApiClient.convertToType(data["user_id"], "Number");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
      if (data.hasOwnProperty("grant_date")) {
        obj["grant_date"] = ApiClient.convertToType(data["grant_date"], "Date");
      }
      if (data.hasOwnProperty("grant_number")) {
        obj["grant_number"] = ApiClient.convertToType(data["grant_number"], "Number");
      }
      if (data.hasOwnProperty("expiration_date")) {
        obj["expiration_date"] = ApiClient.convertToType(data["expiration_date"], "Date");
      }
      if (data.hasOwnProperty("currency")) {
        obj["currency"] = ApiClient.convertToType(data["currency"], "String");
      }
      if (data.hasOwnProperty("total_stock_units")) {
        obj["total_stock_units"] = ApiClient.convertToType(data["total_stock_units"], "Number");
      }
      if (data.hasOwnProperty("exercise_price")) {
        obj["exercise_price"] = ApiClient.convertToType(data["exercise_price"], "Number");
      }
      if (data.hasOwnProperty("exercise_price_discount")) {
        obj["exercise_price_discount"] = ApiClient.convertToType(data["exercise_price_discount"], "Number");
      }
      if (data.hasOwnProperty("value_per_share")) {
        obj["value_per_share"] = ApiClient.convertToType(data["value_per_share"], "Number");
      }
      if (data.hasOwnProperty("with_in_range")) {
        obj["with_in_range"] = ApiClient.convertToType(data["with_in_range"], "Boolean");
      }
      if (data.hasOwnProperty("vesting_type")) {
        obj["vesting_type"] = ApiClient.convertToType(data["vesting_type"], "Number");
      }
      if (data.hasOwnProperty("effective_date")) {
        obj["effective_date"] = ApiClient.convertToType(data["effective_date"], "Date");
      }
      if (data.hasOwnProperty("vesting_period")) {
        obj["vesting_period"] = ApiClient.convertToType(data["vesting_period"], "Number");
      }
      if (data.hasOwnProperty("vesting_schedule")) {
        obj["vesting_schedule"] = ApiClient.convertToType(data["vesting_schedule"], "String");
      }
      if (data.hasOwnProperty("vesting_rate")) {
        obj["vesting_rate"] = ApiClient.convertToType(data["vesting_rate"], "Number");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("grant_reason")) {
        obj["grant_reason"] = StockGrantReason.constructFromObject(data["grant_reason"]);
      }
      if (data.hasOwnProperty("grant_type")) {
        obj["grant_type"] = GrantType.constructFromObject(data["grant_type"]);
      }
      if (data.hasOwnProperty("pay_rate")) {
        obj["pay_rate"] = PayRate.constructFromObject(data["pay_rate"]);
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
EmployeeStock.prototype["id"] = undefined;

/**
 * @member {Number} user_id
 */
EmployeeStock.prototype["user_id"] = undefined;

/**
 * @member {Boolean} deleted
 */
EmployeeStock.prototype["deleted"] = undefined;

/**
 * @member {Date} grant_date
 */
EmployeeStock.prototype["grant_date"] = undefined;

/**
 * @member {Number} grant_number
 */
EmployeeStock.prototype["grant_number"] = undefined;

/**
 * @member {Date} expiration_date
 */
EmployeeStock.prototype["expiration_date"] = undefined;

/**
 * @member {String} currency
 */
EmployeeStock.prototype["currency"] = undefined;

/**
 * @member {Number} total_stock_units
 */
EmployeeStock.prototype["total_stock_units"] = undefined;

/**
 * @member {Number} exercise_price
 */
EmployeeStock.prototype["exercise_price"] = undefined;

/**
 * @member {Number} exercise_price_discount
 */
EmployeeStock.prototype["exercise_price_discount"] = undefined;

/**
 * @member {Number} value_per_share
 */
EmployeeStock.prototype["value_per_share"] = undefined;

/**
 * @member {Boolean} with_in_range
 */
EmployeeStock.prototype["with_in_range"] = undefined;

/**
 * @member {Number} vesting_type
 */
EmployeeStock.prototype["vesting_type"] = undefined;

/**
 * @member {Date} effective_date
 */
EmployeeStock.prototype["effective_date"] = undefined;

/**
 * @member {Number} vesting_period
 */
EmployeeStock.prototype["vesting_period"] = undefined;

/**
 * @member {module:model/EmployeeStock.VestingScheduleEnum} vesting_schedule
 */
EmployeeStock.prototype["vesting_schedule"] = undefined;

/**
 * @member {Number} vesting_rate
 */
EmployeeStock.prototype["vesting_rate"] = undefined;

/**
 * @member {String} description
 */
EmployeeStock.prototype["description"] = undefined;

/**
 * @member {module:model/StockGrantReason} grant_reason
 */
EmployeeStock.prototype["grant_reason"] = undefined;

/**
 * @member {module:model/GrantType} grant_type
 */
EmployeeStock.prototype["grant_type"] = undefined;

/**
 * @member {module:model/PayRate} pay_rate
 */
EmployeeStock.prototype["pay_rate"] = undefined;

/**
 * Allowed values for the <code>vesting_schedule</code> property.
 * @enum {String}
 * @readonly
 */
EmployeeStock["VestingScheduleEnum"] = {
  /**
   * value: "years"
   * @const
   */
  years: "years",

  /**
   * value: "months"
   * @const
   */
  months: "months",

  /**
   * value: "weeks"
   * @const
   */
  weeks: "weeks",

  /**
   * value: "days"
   * @const
   */
  days: "days",

  /**
   * value: "hours"
   * @const
   */
  hours: "hours"
};

export default EmployeeStock;
