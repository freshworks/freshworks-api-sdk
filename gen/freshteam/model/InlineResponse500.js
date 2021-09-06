"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Model500Error = _interopRequireDefault(require("./Model500Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse500 model module.
 * @module model/InlineResponse500
 * @version 1.0.0
 */
var InlineResponse500 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse500</code>.
   * @alias module:model/InlineResponse500
   */
  function InlineResponse500() {
    _classCallCheck(this, InlineResponse500);

    InlineResponse500.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse500, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse500</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse500} obj Optional instance to populate.
     * @return {module:model/InlineResponse500} The populated <code>InlineResponse500</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse500();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_Model500Error["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse500;
}();
/**
 * @member {Array.<module:model/Model500Error>} errors
 */


InlineResponse500.prototype['errors'] = undefined;
var _default = InlineResponse500;
exports["default"] = _default;