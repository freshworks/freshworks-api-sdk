"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GrantType = _interopRequireDefault(require("./GrantType"));

var _PayRate = _interopRequireDefault(require("./PayRate"));

var _StockGrantReason = _interopRequireDefault(require("./StockGrantReason"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeStock model module.
 * @module model/EmployeeStock
 * @version 1.0.0
 */
var EmployeeStock = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeStock</code>.
   * @alias module:model/EmployeeStock
   */
  function EmployeeStock() {
    _classCallCheck(this, EmployeeStock);

    EmployeeStock.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeStock, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeStock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeStock} obj Optional instance to populate.
     * @return {module:model/EmployeeStock} The populated <code>EmployeeStock</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeStock();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('grant_date')) {
          obj['grant_date'] = _ApiClient["default"].convertToType(data['grant_date'], 'Date');
        }

        if (data.hasOwnProperty('grant_number')) {
          obj['grant_number'] = _ApiClient["default"].convertToType(data['grant_number'], 'Number');
        }

        if (data.hasOwnProperty('expiration_date')) {
          obj['expiration_date'] = _ApiClient["default"].convertToType(data['expiration_date'], 'Date');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('total_stock_units')) {
          obj['total_stock_units'] = _ApiClient["default"].convertToType(data['total_stock_units'], 'Number');
        }

        if (data.hasOwnProperty('exercise_price')) {
          obj['exercise_price'] = _ApiClient["default"].convertToType(data['exercise_price'], 'Number');
        }

        if (data.hasOwnProperty('exercise_price_discount')) {
          obj['exercise_price_discount'] = _ApiClient["default"].convertToType(data['exercise_price_discount'], 'Number');
        }

        if (data.hasOwnProperty('value_per_share')) {
          obj['value_per_share'] = _ApiClient["default"].convertToType(data['value_per_share'], 'Number');
        }

        if (data.hasOwnProperty('with_in_range')) {
          obj['with_in_range'] = _ApiClient["default"].convertToType(data['with_in_range'], 'Boolean');
        }

        if (data.hasOwnProperty('vesting_type')) {
          obj['vesting_type'] = _ApiClient["default"].convertToType(data['vesting_type'], 'Number');
        }

        if (data.hasOwnProperty('effective_date')) {
          obj['effective_date'] = _ApiClient["default"].convertToType(data['effective_date'], 'Date');
        }

        if (data.hasOwnProperty('vesting_period')) {
          obj['vesting_period'] = _ApiClient["default"].convertToType(data['vesting_period'], 'Number');
        }

        if (data.hasOwnProperty('vesting_schedule')) {
          obj['vesting_schedule'] = _ApiClient["default"].convertToType(data['vesting_schedule'], 'String');
        }

        if (data.hasOwnProperty('vesting_rate')) {
          obj['vesting_rate'] = _ApiClient["default"].convertToType(data['vesting_rate'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('grant_reason')) {
          obj['grant_reason'] = _StockGrantReason["default"].constructFromObject(data['grant_reason']);
        }

        if (data.hasOwnProperty('grant_type')) {
          obj['grant_type'] = _GrantType["default"].constructFromObject(data['grant_type']);
        }

        if (data.hasOwnProperty('pay_rate')) {
          obj['pay_rate'] = _PayRate["default"].constructFromObject(data['pay_rate']);
        }
      }

      return obj;
    }
  }]);

  return EmployeeStock;
}();
/**
 * @member {Number} id
 */


EmployeeStock.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeStock.prototype['user_id'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeStock.prototype['deleted'] = undefined;
/**
 * @member {Date} grant_date
 */

EmployeeStock.prototype['grant_date'] = undefined;
/**
 * @member {Number} grant_number
 */

EmployeeStock.prototype['grant_number'] = undefined;
/**
 * @member {Date} expiration_date
 */

EmployeeStock.prototype['expiration_date'] = undefined;
/**
 * @member {String} currency
 */

EmployeeStock.prototype['currency'] = undefined;
/**
 * @member {Number} total_stock_units
 */

EmployeeStock.prototype['total_stock_units'] = undefined;
/**
 * @member {Number} exercise_price
 */

EmployeeStock.prototype['exercise_price'] = undefined;
/**
 * @member {Number} exercise_price_discount
 */

EmployeeStock.prototype['exercise_price_discount'] = undefined;
/**
 * @member {Number} value_per_share
 */

EmployeeStock.prototype['value_per_share'] = undefined;
/**
 * @member {Boolean} with_in_range
 */

EmployeeStock.prototype['with_in_range'] = undefined;
/**
 * @member {Number} vesting_type
 */

EmployeeStock.prototype['vesting_type'] = undefined;
/**
 * @member {Date} effective_date
 */

EmployeeStock.prototype['effective_date'] = undefined;
/**
 * @member {Number} vesting_period
 */

EmployeeStock.prototype['vesting_period'] = undefined;
/**
 * @member {module:model/EmployeeStock.VestingScheduleEnum} vesting_schedule
 */

EmployeeStock.prototype['vesting_schedule'] = undefined;
/**
 * @member {Number} vesting_rate
 */

EmployeeStock.prototype['vesting_rate'] = undefined;
/**
 * @member {String} description
 */

EmployeeStock.prototype['description'] = undefined;
/**
 * @member {module:model/StockGrantReason} grant_reason
 */

EmployeeStock.prototype['grant_reason'] = undefined;
/**
 * @member {module:model/GrantType} grant_type
 */

EmployeeStock.prototype['grant_type'] = undefined;
/**
 * @member {module:model/PayRate} pay_rate
 */

EmployeeStock.prototype['pay_rate'] = undefined;
/**
 * Allowed values for the <code>vesting_schedule</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeStock['VestingScheduleEnum'] = {
  /**
   * value: "years"
   * @const
   */
  "years": "years",

  /**
   * value: "months"
   * @const
   */
  "months": "months",

  /**
   * value: "weeks"
   * @const
   */
  "weeks": "weeks",

  /**
   * value: "days"
   * @const
   */
  "days": "days",

  /**
   * value: "hours"
   * @const
   */
  "hours": "hours"
};
var _default = EmployeeStock;
exports["default"] = _default;