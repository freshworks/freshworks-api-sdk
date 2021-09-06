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
 * The EmployeeFieldPicklistValues model module.
 * @module model/EmployeeFieldPicklistValues
 * @version 1.0.0
 */
var EmployeeFieldPicklistValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeFieldPicklistValues</code>.
   * @alias module:model/EmployeeFieldPicklistValues
   */
  function EmployeeFieldPicklistValues() {
    _classCallCheck(this, EmployeeFieldPicklistValues);

    EmployeeFieldPicklistValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeFieldPicklistValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeFieldPicklistValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeFieldPicklistValues} obj Optional instance to populate.
     * @return {module:model/EmployeeFieldPicklistValues} The populated <code>EmployeeFieldPicklistValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeFieldPicklistValues();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('pickable_type')) {
          obj['pickable_type'] = _ApiClient["default"].convertToType(data['pickable_type'], 'String');
        }

        if (data.hasOwnProperty('pickable_id')) {
          obj['pickable_id'] = _ApiClient["default"].convertToType(data['pickable_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmployeeFieldPicklistValues;
}();
/**
 * @member {Number} id
 */


EmployeeFieldPicklistValues.prototype['id'] = undefined;
/**
 * @member {String} value
 */

EmployeeFieldPicklistValues.prototype['value'] = undefined;
/**
 * @member {Number} position
 */

EmployeeFieldPicklistValues.prototype['position'] = undefined;
/**
 * @member {String} pickable_type
 */

EmployeeFieldPicklistValues.prototype['pickable_type'] = undefined;
/**
 * @member {Number} pickable_id
 */

EmployeeFieldPicklistValues.prototype['pickable_id'] = undefined;
var _default = EmployeeFieldPicklistValues;
exports["default"] = _default;