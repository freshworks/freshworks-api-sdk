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
 * The EmployeeLicense model module.
 * @module model/EmployeeLicense
 * @version 1.0.0
 */
var EmployeeLicense = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeLicense</code>.
   * @alias module:model/EmployeeLicense
   */
  function EmployeeLicense() {
    _classCallCheck(this, EmployeeLicense);

    EmployeeLicense.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeLicense, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeLicense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeLicense} obj Optional instance to populate.
     * @return {module:model/EmployeeLicense} The populated <code>EmployeeLicense</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeLicense();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('license_name')) {
          obj['license_name'] = _ApiClient["default"].convertToType(data['license_name'], 'String');
        }

        if (data.hasOwnProperty('license_id')) {
          obj['license_id'] = _ApiClient["default"].convertToType(data['license_id'], 'String');
        }

        if (data.hasOwnProperty('restrictions')) {
          obj['restrictions'] = _ApiClient["default"].convertToType(data['restrictions'], 'String');
        }

        if (data.hasOwnProperty('expiry_date')) {
          obj['expiry_date'] = _ApiClient["default"].convertToType(data['expiry_date'], 'Date');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeLicense;
}();
/**
 * @member {Number} id
 */


EmployeeLicense.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeLicense.prototype['user_id'] = undefined;
/**
 * @member {String} license_name
 */

EmployeeLicense.prototype['license_name'] = undefined;
/**
 * @member {String} license_id
 */

EmployeeLicense.prototype['license_id'] = undefined;
/**
 * @member {String} restrictions
 */

EmployeeLicense.prototype['restrictions'] = undefined;
/**
 * @member {Date} expiry_date
 */

EmployeeLicense.prototype['expiry_date'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeLicense.prototype['deleted'] = undefined;
var _default = EmployeeLicense;
exports["default"] = _default;