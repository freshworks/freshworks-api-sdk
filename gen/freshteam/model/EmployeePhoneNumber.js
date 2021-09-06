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
 * The EmployeePhoneNumber model module.
 * @module model/EmployeePhoneNumber
 * @version 1.0.0
 */
var EmployeePhoneNumber = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeePhoneNumber</code>.
   * @alias module:model/EmployeePhoneNumber
   */
  function EmployeePhoneNumber() {
    _classCallCheck(this, EmployeePhoneNumber);

    EmployeePhoneNumber.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeePhoneNumber, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeePhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeePhoneNumber} obj Optional instance to populate.
     * @return {module:model/EmployeePhoneNumber} The populated <code>EmployeePhoneNumber</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeePhoneNumber();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmployeePhoneNumber;
}();
/**
 * @member {module:model/EmployeePhoneNumber.NameEnum} name
 */


EmployeePhoneNumber.prototype['name'] = undefined;
/**
 * @member {String} number
 */

EmployeePhoneNumber.prototype['number'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

EmployeePhoneNumber['NameEnum'] = {
  /**
   * value: "Home"
   * @const
   */
  "Home": "Home",

  /**
   * value: "Main"
   * @const
   */
  "Main": "Main",

  /**
   * value: "Others"
   * @const
   */
  "Others": "Others",

  /**
   * value: "Mobile"
   * @const
   */
  "Mobile": "Mobile"
};
var _default = EmployeePhoneNumber;
exports["default"] = _default;