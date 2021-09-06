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
 * The NewHireCreateCustomFields model module.
 * @module model/NewHireCreateCustomFields
 * @version 1.0.0
 */
var NewHireCreateCustomFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewHireCreateCustomFields</code>.
   * @alias module:model/NewHireCreateCustomFields
   */
  function NewHireCreateCustomFields() {
    _classCallCheck(this, NewHireCreateCustomFields);

    NewHireCreateCustomFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewHireCreateCustomFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewHireCreateCustomFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewHireCreateCustomFields} obj Optional instance to populate.
     * @return {module:model/NewHireCreateCustomFields} The populated <code>NewHireCreateCustomFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewHireCreateCustomFields();

        if (data.hasOwnProperty('column_name')) {
          obj['column_name'] = _ApiClient["default"].convertToType(data['column_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewHireCreateCustomFields;
}();
/**
 * @member {String} column_name
 */


NewHireCreateCustomFields.prototype['column_name'] = undefined;
var _default = NewHireCreateCustomFields;
exports["default"] = _default;