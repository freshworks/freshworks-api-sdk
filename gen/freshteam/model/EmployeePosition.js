"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeReference = _interopRequireDefault(require("./EmployeeReference"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeePosition model module.
 * @module model/EmployeePosition
 * @version 1.0.0
 */
var EmployeePosition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeePosition</code>.
   * @alias module:model/EmployeePosition
   */
  function EmployeePosition() {
    _classCallCheck(this, EmployeePosition);

    EmployeePosition.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeePosition, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeePosition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeePosition} obj Optional instance to populate.
     * @return {module:model/EmployeePosition} The populated <code>EmployeePosition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeePosition();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'String');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'String');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('salary_value')) {
          obj['salary_value'] = _ApiClient["default"].convertToType(data['salary_value'], 'String');
        }

        if (data.hasOwnProperty('other_salary_components')) {
          obj['other_salary_components'] = _ApiClient["default"].convertToType(data['other_salary_components'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('refernces')) {
          obj['refernces'] = _ApiClient["default"].convertToType(data['refernces'], [_EmployeeReference["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EmployeePosition;
}();
/**
 * @member {Number} id
 */


EmployeePosition.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeePosition.prototype['user_id'] = undefined;
/**
 * @member {String} company
 */

EmployeePosition.prototype['company'] = undefined;
/**
 * @member {String} start_date
 */

EmployeePosition.prototype['start_date'] = undefined;
/**
 * @member {String} end_date
 */

EmployeePosition.prototype['end_date'] = undefined;
/**
 * @member {String} role
 */

EmployeePosition.prototype['role'] = undefined;
/**
 * @member {String} salary_value
 */

EmployeePosition.prototype['salary_value'] = undefined;
/**
 * @member {String} other_salary_components
 */

EmployeePosition.prototype['other_salary_components'] = undefined;
/**
 * @member {String} description
 */

EmployeePosition.prototype['description'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeePosition.prototype['deleted'] = undefined;
/**
 * @member {Array.<module:model/EmployeeReference>} refernces
 */

EmployeePosition.prototype['refernces'] = undefined;
var _default = EmployeePosition;
exports["default"] = _default;