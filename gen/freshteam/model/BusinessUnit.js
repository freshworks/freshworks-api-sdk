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
 * The BusinessUnit model module.
 * @module model/BusinessUnit
 * @version 1.0.0
 */
var BusinessUnit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BusinessUnit</code>.
   * @alias module:model/BusinessUnit
   */
  function BusinessUnit() {
    _classCallCheck(this, BusinessUnit);

    BusinessUnit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BusinessUnit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BusinessUnit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BusinessUnit} obj Optional instance to populate.
     * @return {module:model/BusinessUnit} The populated <code>BusinessUnit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BusinessUnit();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BusinessUnit;
}();
/**
 * @member {Number} id
 */


BusinessUnit.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

BusinessUnit.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

BusinessUnit.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} deleted
 */

BusinessUnit.prototype['deleted'] = undefined;
/**
 * @member {String} name
 */

BusinessUnit.prototype['name'] = undefined;
/**
 * @member {String} description
 */

BusinessUnit.prototype['description'] = undefined;
var _default = BusinessUnit;
exports["default"] = _default;