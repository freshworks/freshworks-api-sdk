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
 * The InlineObject4 model module.
 * @module model/InlineObject4
 * @version 1.0.0
 */
var InlineObject4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject4</code>.
   * @alias module:model/InlineObject4
   */
  function InlineObject4() {
    _classCallCheck(this, InlineObject4);

    InlineObject4.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject4, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject4} obj Optional instance to populate.
     * @return {module:model/InlineObject4} The populated <code>InlineObject4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject4();

        if (data.hasOwnProperty('sub_stage_id')) {
          obj['sub_stage_id'] = _ApiClient["default"].convertToType(data['sub_stage_id'], 'Number');
        }

        if (data.hasOwnProperty('decline_reason_id')) {
          obj['decline_reason_id'] = _ApiClient["default"].convertToType(data['decline_reason_id'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('date_of_joining')) {
          obj['date_of_joining'] = _ApiClient["default"].convertToType(data['date_of_joining'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return InlineObject4;
}();
/**
 * @member {Number} sub_stage_id
 */


InlineObject4.prototype['sub_stage_id'] = undefined;
/**
 * @member {Number} decline_reason_id
 */

InlineObject4.prototype['decline_reason_id'] = undefined;
/**
 * @member {String} comment
 */

InlineObject4.prototype['comment'] = undefined;
/**
 * @member {Date} date_of_joining
 */

InlineObject4.prototype['date_of_joining'] = undefined;
var _default = InlineObject4;
exports["default"] = _default;