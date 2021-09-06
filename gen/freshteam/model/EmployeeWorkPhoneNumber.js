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
 * The EmployeeWorkPhoneNumber model module.
 * @module model/EmployeeWorkPhoneNumber
 * @version 1.0.0
 */
var EmployeeWorkPhoneNumber = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeWorkPhoneNumber</code>.
   * @alias module:model/EmployeeWorkPhoneNumber
   */
  function EmployeeWorkPhoneNumber() {
    _classCallCheck(this, EmployeeWorkPhoneNumber);

    EmployeeWorkPhoneNumber.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeWorkPhoneNumber, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeWorkPhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeWorkPhoneNumber} obj Optional instance to populate.
     * @return {module:model/EmployeeWorkPhoneNumber} The populated <code>EmployeeWorkPhoneNumber</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeWorkPhoneNumber();

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

  return EmployeeWorkPhoneNumber;
}();
/**
 * @member {module:model/EmployeeWorkPhoneNumber.NameEnum} name
 */


EmployeeWorkPhoneNumber.prototype['name'] = undefined;
/**
 * @member {String} number
 */

EmployeeWorkPhoneNumber.prototype['number'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeWorkPhoneNumber['NameEnum'] = {
  /**
   * value: "Mobile"
   * @const
   */
  "Mobile": "Mobile",

  /**
   * value: "Fax"
   * @const
   */
  "Fax": "Fax",

  /**
   * value: "Others"
   * @const
   */
  "Others": "Others",

  /**
   * value: "Work"
   * @const
   */
  "Work": "Work"
};
var _default = EmployeeWorkPhoneNumber;
exports["default"] = _default;