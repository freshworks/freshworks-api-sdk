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
 * The EmployeeCreateCustomFields model module.
 * @module model/EmployeeCreateCustomFields
 * @version 1.0.0
 */
var EmployeeCreateCustomFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeCreateCustomFields</code>.
   * @alias module:model/EmployeeCreateCustomFields
   */
  function EmployeeCreateCustomFields() {
    _classCallCheck(this, EmployeeCreateCustomFields);

    EmployeeCreateCustomFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeCreateCustomFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeCreateCustomFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeCreateCustomFields} obj Optional instance to populate.
     * @return {module:model/EmployeeCreateCustomFields} The populated <code>EmployeeCreateCustomFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeCreateCustomFields();

        if (data.hasOwnProperty('column_name')) {
          obj['column_name'] = _ApiClient["default"].convertToType(data['column_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmployeeCreateCustomFields;
}();
/**
 * @member {String} column_name
 */


EmployeeCreateCustomFields.prototype['column_name'] = undefined;
var _default = EmployeeCreateCustomFields;
exports["default"] = _default;