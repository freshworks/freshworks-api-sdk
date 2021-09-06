"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeBankAccount model module.
 * @module model/EmployeeBankAccount
 * @version 1.0.0
 */
var EmployeeBankAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeBankAccount</code>.
   * @alias module:model/EmployeeBankAccount
   */
  function EmployeeBankAccount() {
    _classCallCheck(this, EmployeeBankAccount);

    EmployeeBankAccount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeBankAccount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeBankAccount} obj Optional instance to populate.
     * @return {module:model/EmployeeBankAccount} The populated <code>EmployeeBankAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeBankAccount();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('account_number')) {
          obj['account_number'] = _ApiClient["default"].convertToType(data['account_number'], 'String');
        }

        if (data.hasOwnProperty('bank_name')) {
          obj['bank_name'] = _ApiClient["default"].convertToType(data['bank_name'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('branch_code')) {
          obj['branch_code'] = _ApiClient["default"].convertToType(data['branch_code'], 'String');
        }

        if (data.hasOwnProperty('current')) {
          obj['current'] = _ApiClient["default"].convertToType(data['current'], 'Boolean');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeBankAccount;
}();
/**
 * @member {Number} id
 */


EmployeeBankAccount.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeBankAccount.prototype['user_id'] = undefined;
/**
 * @member {String} account_number
 */

EmployeeBankAccount.prototype['account_number'] = undefined;
/**
 * @member {String} bank_name
 */

EmployeeBankAccount.prototype['bank_name'] = undefined;
/**
 * @member {String} location
 */

EmployeeBankAccount.prototype['location'] = undefined;
/**
 * @member {String} branch_code
 */

EmployeeBankAccount.prototype['branch_code'] = undefined;
/**
 * @member {Boolean} current
 */

EmployeeBankAccount.prototype['current'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeBankAccount.prototype['deleted'] = undefined;
var _default = EmployeeBankAccount;
exports["default"] = _default;