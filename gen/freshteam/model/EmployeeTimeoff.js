"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeLeaveType = _interopRequireDefault(require("./EmployeeLeaveType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeTimeoff model module.
 * @module model/EmployeeTimeoff
 * @version 1.0.0
 */
var EmployeeTimeoff = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeTimeoff</code>.
   * @alias module:model/EmployeeTimeoff
   */
  function EmployeeTimeoff() {
    _classCallCheck(this, EmployeeTimeoff);

    EmployeeTimeoff.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeTimeoff, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeTimeoff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeTimeoff} obj Optional instance to populate.
     * @return {module:model/EmployeeTimeoff} The populated <code>EmployeeTimeoff</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeTimeoff();

        if (data.hasOwnProperty('leave_type')) {
          obj['leave_type'] = _EmployeeLeaveType["default"].constructFromObject(data['leave_type']);
        }

        if (data.hasOwnProperty('leaves_availed')) {
          obj['leaves_availed'] = _ApiClient["default"].convertToType(data['leaves_availed'], 'Number');
        }

        if (data.hasOwnProperty('leave_credits')) {
          obj['leave_credits'] = _ApiClient["default"].convertToType(data['leave_credits'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmployeeTimeoff;
}();
/**
 * @member {module:model/EmployeeLeaveType} leave_type
 */


EmployeeTimeoff.prototype['leave_type'] = undefined;
/**
 * @member {Number} leaves_availed
 */

EmployeeTimeoff.prototype['leaves_availed'] = undefined;
/**
 * @member {Number} leave_credits
 */

EmployeeTimeoff.prototype['leave_credits'] = undefined;
var _default = EmployeeTimeoff;
exports["default"] = _default;