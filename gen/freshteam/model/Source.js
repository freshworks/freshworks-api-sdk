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
 * The Source model module.
 * @module model/Source
 * @version 1.0.0
 */
var Source = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Source</code>.
   * @alias module:model/Source
   */
  function Source() {
    _classCallCheck(this, Source);

    Source.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Source, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Source();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('leads_count')) {
          obj['leads_count'] = _ApiClient["default"].convertToType(data['leads_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Source;
}();
/**
 * @member {Number} id
 */


Source.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Source.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Source.prototype['updated_at'] = undefined;
/**
 * @member {String} label
 */

Source.prototype['label'] = undefined;
/**
 * @member {Boolean} deleted
 */

Source.prototype['deleted'] = undefined;
/**
 * @member {Boolean} default
 */

Source.prototype['default'] = undefined;
/**
 * @member {Number} leads_count
 */

Source.prototype['leads_count'] = undefined;
var _default = Source;
exports["default"] = _default;