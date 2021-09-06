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
 * The Branch model module.
 * @module model/Branch
 * @version 1.0.0
 */
var Branch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Branch</code>.
   * @alias module:model/Branch
   */
  function Branch() {
    _classCallCheck(this, Branch);

    Branch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Branch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Branch} obj Optional instance to populate.
     * @return {module:model/Branch} The populated <code>Branch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Branch();

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

        if (data.hasOwnProperty('street')) {
          obj['street'] = _ApiClient["default"].convertToType(data['street'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('zip')) {
          obj['zip'] = _ApiClient["default"].convertToType(data['zip'], 'String');
        }

        if (data.hasOwnProperty('time_zone')) {
          obj['time_zone'] = _ApiClient["default"].convertToType(data['time_zone'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('main_office')) {
          obj['main_office'] = _ApiClient["default"].convertToType(data['main_office'], 'Boolean');
        }

        if (data.hasOwnProperty('contact_info')) {
          obj['contact_info'] = _ApiClient["default"].convertToType(data['contact_info'], 'String');
        }

        if (data.hasOwnProperty('date_format')) {
          obj['date_format'] = _ApiClient["default"].convertToType(data['date_format'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Branch;
}();
/**
 * @member {Number} id
 */


Branch.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Branch.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Branch.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} deleted
 */

Branch.prototype['deleted'] = undefined;
/**
 * @member {String} name
 */

Branch.prototype['name'] = undefined;
/**
 * @member {String} street
 */

Branch.prototype['street'] = undefined;
/**
 * @member {String} state
 */

Branch.prototype['state'] = undefined;
/**
 * @member {String} city
 */

Branch.prototype['city'] = undefined;
/**
 * @member {String} country_code
 */

Branch.prototype['country_code'] = undefined;
/**
 * @member {String} zip
 */

Branch.prototype['zip'] = undefined;
/**
 * @member {String} time_zone
 */

Branch.prototype['time_zone'] = undefined;
/**
 * @member {String} currency
 */

Branch.prototype['currency'] = undefined;
/**
 * @member {String} language
 */

Branch.prototype['language'] = undefined;
/**
 * @member {Boolean} main_office
 */

Branch.prototype['main_office'] = undefined;
/**
 * @member {String} contact_info
 */

Branch.prototype['contact_info'] = undefined;
/**
 * @member {String} date_format
 */

Branch.prototype['date_format'] = undefined;
var _default = Branch;
exports["default"] = _default;