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
 * The StockGrantReason model module.
 * @module model/StockGrantReason
 * @version 1.0.0
 */
var StockGrantReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StockGrantReason</code>.
   * @alias module:model/StockGrantReason
   */
  function StockGrantReason() {
    _classCallCheck(this, StockGrantReason);

    StockGrantReason.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StockGrantReason, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StockGrantReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockGrantReason} obj Optional instance to populate.
     * @return {module:model/StockGrantReason} The populated <code>StockGrantReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StockGrantReason();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return StockGrantReason;
}();
/**
 * @member {Number} id
 */


StockGrantReason.prototype['id'] = undefined;
/**
 * @member {String} value
 */

StockGrantReason.prototype['value'] = undefined;
/**
 * @member {Number} position
 */

StockGrantReason.prototype['position'] = undefined;
/**
 * @member {Boolean} deleted
 */

StockGrantReason.prototype['deleted'] = undefined;
var _default = StockGrantReason;
exports["default"] = _default;