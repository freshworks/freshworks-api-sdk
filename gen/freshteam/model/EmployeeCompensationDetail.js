"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompensationReason = _interopRequireDefault(require("./CompensationReason"));

var _CostCenter = _interopRequireDefault(require("./CostCenter"));

var _PayGroup = _interopRequireDefault(require("./PayGroup"));

var _PayMethod = _interopRequireDefault(require("./PayMethod"));

var _PayRate = _interopRequireDefault(require("./PayRate"));

var _PaySchedule = _interopRequireDefault(require("./PaySchedule"));

var _VariablePayFrequency = _interopRequireDefault(require("./VariablePayFrequency"));

var _WorkHourRate = _interopRequireDefault(require("./WorkHourRate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeCompensationDetail model module.
 * @module model/EmployeeCompensationDetail
 * @version 1.0.0
 */
var EmployeeCompensationDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeCompensationDetail</code>.
   * @alias module:model/EmployeeCompensationDetail
   */
  function EmployeeCompensationDetail() {
    _classCallCheck(this, EmployeeCompensationDetail);

    EmployeeCompensationDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeCompensationDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeCompensationDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeCompensationDetail} obj Optional instance to populate.
     * @return {module:model/EmployeeCompensationDetail} The populated <code>EmployeeCompensationDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeCompensationDetail();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('current')) {
          obj['current'] = _ApiClient["default"].convertToType(data['current'], 'Boolean');
        }

        if (data.hasOwnProperty('effective_date')) {
          obj['effective_date'] = _ApiClient["default"].convertToType(data['effective_date'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('annual_amount')) {
          obj['annual_amount'] = _ApiClient["default"].convertToType(data['annual_amount'], 'String');
        }

        if (data.hasOwnProperty('pay_rate_value')) {
          obj['pay_rate_value'] = _ApiClient["default"].convertToType(data['pay_rate_value'], 'Number');
        }

        if (data.hasOwnProperty('eligible_work_hours')) {
          obj['eligible_work_hours'] = _ApiClient["default"].convertToType(data['eligible_work_hours'], 'Number');
        }

        if (data.hasOwnProperty('other_components')) {
          obj['other_components'] = _ApiClient["default"].convertToType(data['other_components'], 'String');
        }

        if (data.hasOwnProperty('variable_pay')) {
          obj['variable_pay'] = _ApiClient["default"].convertToType(data['variable_pay'], 'Number');
        }

        if (data.hasOwnProperty('variable_pay_details')) {
          obj['variable_pay_details'] = _ApiClient["default"].convertToType(data['variable_pay_details'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _CompensationReason["default"].constructFromObject(data['reason']);
        }

        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _CostCenter["default"].constructFromObject(data['cost_center']);
        }

        if (data.hasOwnProperty('pay_group')) {
          obj['pay_group'] = _PayGroup["default"].constructFromObject(data['pay_group']);
        }

        if (data.hasOwnProperty('pay_method')) {
          obj['pay_method'] = _PayMethod["default"].constructFromObject(data['pay_method']);
        }

        if (data.hasOwnProperty('work_hour_rate')) {
          obj['work_hour_rate'] = _WorkHourRate["default"].constructFromObject(data['work_hour_rate']);
        }

        if (data.hasOwnProperty('pay_rate')) {
          obj['pay_rate'] = _PayRate["default"].constructFromObject(data['pay_rate']);
        }

        if (data.hasOwnProperty('pay_schedule')) {
          obj['pay_schedule'] = _PaySchedule["default"].constructFromObject(data['pay_schedule']);
        }

        if (data.hasOwnProperty('variable_pay_frequency')) {
          obj['variable_pay_frequency'] = _VariablePayFrequency["default"].constructFromObject(data['variable_pay_frequency']);
        }

        if (data.hasOwnProperty('pay_factor')) {
          obj['pay_factor'] = _ApiClient["default"].convertToType(data['pay_factor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmployeeCompensationDetail;
}();
/**
 * @member {Number} id
 */


EmployeeCompensationDetail.prototype['id'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeCompensationDetail.prototype['deleted'] = undefined;
/**
 * @member {Boolean} current
 */

EmployeeCompensationDetail.prototype['current'] = undefined;
/**
 * @member {String} effective_date
 */

EmployeeCompensationDetail.prototype['effective_date'] = undefined;
/**
 * @member {String} currency
 */

EmployeeCompensationDetail.prototype['currency'] = undefined;
/**
 * @member {String} annual_amount
 */

EmployeeCompensationDetail.prototype['annual_amount'] = undefined;
/**
 * @member {Number} pay_rate_value
 */

EmployeeCompensationDetail.prototype['pay_rate_value'] = undefined;
/**
 * @member {Number} eligible_work_hours
 */

EmployeeCompensationDetail.prototype['eligible_work_hours'] = undefined;
/**
 * @member {String} other_components
 */

EmployeeCompensationDetail.prototype['other_components'] = undefined;
/**
 * @member {Number} variable_pay
 */

EmployeeCompensationDetail.prototype['variable_pay'] = undefined;
/**
 * @member {String} variable_pay_details
 */

EmployeeCompensationDetail.prototype['variable_pay_details'] = undefined;
/**
 * @member {String} description
 */

EmployeeCompensationDetail.prototype['description'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeCompensationDetail.prototype['user_id'] = undefined;
/**
 * @member {module:model/CompensationReason} reason
 */

EmployeeCompensationDetail.prototype['reason'] = undefined;
/**
 * @member {module:model/CostCenter} cost_center
 */

EmployeeCompensationDetail.prototype['cost_center'] = undefined;
/**
 * @member {module:model/PayGroup} pay_group
 */

EmployeeCompensationDetail.prototype['pay_group'] = undefined;
/**
 * @member {module:model/PayMethod} pay_method
 */

EmployeeCompensationDetail.prototype['pay_method'] = undefined;
/**
 * @member {module:model/WorkHourRate} work_hour_rate
 */

EmployeeCompensationDetail.prototype['work_hour_rate'] = undefined;
/**
 * @member {module:model/PayRate} pay_rate
 */

EmployeeCompensationDetail.prototype['pay_rate'] = undefined;
/**
 * @member {module:model/PaySchedule} pay_schedule
 */

EmployeeCompensationDetail.prototype['pay_schedule'] = undefined;
/**
 * @member {module:model/VariablePayFrequency} variable_pay_frequency
 */

EmployeeCompensationDetail.prototype['variable_pay_frequency'] = undefined;
/**
 * @member {String} pay_factor
 */

EmployeeCompensationDetail.prototype['pay_factor'] = undefined;
var _default = EmployeeCompensationDetail;
exports["default"] = _default;