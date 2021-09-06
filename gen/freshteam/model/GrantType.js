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
 * The GrantType model module.
 * @module model/GrantType
 * @version 1.0.0
 */
var GrantType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GrantType</code>.
   * @alias module:model/GrantType
   */
  function GrantType() {
    _classCallCheck(this, GrantType);

    GrantType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GrantType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GrantType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GrantType} obj Optional instance to populate.
     * @return {module:model/GrantType} The populated <code>GrantType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GrantType();

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

  return GrantType;
}();
/**
 * @member {Number} id
 */


GrantType.prototype['id'] = undefined;
/**
 * @member {String} value
 */

GrantType.prototype['value'] = undefined;
/**
 * @member {Number} position
 */

GrantType.prototype['position'] = undefined;
/**
 * @member {Boolean} deleted
 */

GrantType.prototype['deleted'] = undefined;
var _default = GrantType;
exports["default"] = _default;