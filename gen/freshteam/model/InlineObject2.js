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
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.0.0
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   * @param label {String} 
   * @param sectionName {String} 
   * @param fieldType {module:model/InlineObject2.FieldTypeEnum} 
   */
  function InlineObject2(label, sectionName, fieldType) {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this, label, sectionName, fieldType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj, label, sectionName, fieldType) {
      obj['label'] = label;
      obj['section_name'] = sectionName;
      obj['field_type'] = fieldType;
    }
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('section_name')) {
          obj['section_name'] = _ApiClient["default"].convertToType(data['section_name'], 'String');
        }

        if (data.hasOwnProperty('field_type')) {
          obj['field_type'] = _ApiClient["default"].convertToType(data['field_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject2;
}();
/**
 * @member {String} label
 */


InlineObject2.prototype['label'] = undefined;
/**
 * @member {Boolean} required
 */

InlineObject2.prototype['required'] = undefined;
/**
 * @member {String} section_name
 */

InlineObject2.prototype['section_name'] = undefined;
/**
 * @member {module:model/InlineObject2.FieldTypeEnum} field_type
 */

InlineObject2.prototype['field_type'] = undefined;
/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject2['FieldTypeEnum'] = {
  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "number"
   * @const
   */
  "number": "number"
};
var _default = InlineObject2;
exports["default"] = _default;