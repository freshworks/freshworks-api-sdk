"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BonusType = _interopRequireDefault(require("./BonusType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeBonus model module.
 * @module model/EmployeeBonus
 * @version 1.0.0
 */
var EmployeeBonus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeBonus</code>.
   * @alias module:model/EmployeeBonus
   */
  function EmployeeBonus() {
    _classCallCheck(this, EmployeeBonus);

    EmployeeBonus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeBonus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeBonus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeBonus} obj Optional instance to populate.
     * @return {module:model/EmployeeBonus} The populated <code>EmployeeBonus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeBonus();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('effective_date')) {
          obj['effective_date'] = _ApiClient["default"].convertToType(data['effective_date'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('bonus_type')) {
          obj['bonus_type'] = _BonusType["default"].constructFromObject(data['bonus_type']);
        }

        if (data.hasOwnProperty('additional_details')) {
          obj['additional_details'] = _ApiClient["default"].convertToType(data['additional_details'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeBonus;
}();
/**
 * @member {Number} id
 */


EmployeeBonus.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeBonus.prototype['user_id'] = undefined;
/**
 * @member {String} effective_date
 */

EmployeeBonus.prototype['effective_date'] = undefined;
/**
 * @member {String} value
 */

EmployeeBonus.prototype['value'] = undefined;
/**
 * @member {String} currency
 */

EmployeeBonus.prototype['currency'] = undefined;
/**
 * @member {module:model/BonusType} bonus_type
 */

EmployeeBonus.prototype['bonus_type'] = undefined;
/**
 * @member {String} additional_details
 */

EmployeeBonus.prototype['additional_details'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeBonus.prototype['deleted'] = undefined;
var _default = EmployeeBonus;
exports["default"] = _default;