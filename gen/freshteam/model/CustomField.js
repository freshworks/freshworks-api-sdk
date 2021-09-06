"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomRadioFields = _interopRequireDefault(require("./CustomRadioFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomField model module.
 * @module model/CustomField
 * @version 1.0.0
 */
var CustomField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomField</code>.
   * @alias module:model/CustomField
   */
  function CustomField() {
    _classCallCheck(this, CustomField);

    CustomField.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomField, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomField} obj Optional instance to populate.
     * @return {module:model/CustomField} The populated <code>CustomField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomField();

        if (data.hasOwnProperty('text_fields')) {
          obj['text_fields'] = _ApiClient["default"].convertToType(data['text_fields'], 'String');
        }

        if (data.hasOwnProperty('radio_or_dropdown_fields')) {
          obj['radio_or_dropdown_fields'] = _CustomRadioFields["default"].constructFromObject(data['radio_or_dropdown_fields']);
        }
      }

      return obj;
    }
  }]);

  return CustomField;
}();
/**
 * @member {String} text_fields
 */


CustomField.prototype['text_fields'] = undefined;
/**
 * @member {module:model/CustomRadioFields} radio_or_dropdown_fields
 */

CustomField.prototype['radio_or_dropdown_fields'] = undefined;
var _default = CustomField;
exports["default"] = _default;