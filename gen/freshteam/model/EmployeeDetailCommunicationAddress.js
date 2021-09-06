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
 * The EmployeeDetailCommunicationAddress model module.
 * @module model/EmployeeDetailCommunicationAddress
 * @version 1.0.0
 */
var EmployeeDetailCommunicationAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeDetailCommunicationAddress</code>.
   * @alias module:model/EmployeeDetailCommunicationAddress
   */
  function EmployeeDetailCommunicationAddress() {
    _classCallCheck(this, EmployeeDetailCommunicationAddress);

    EmployeeDetailCommunicationAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeDetailCommunicationAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeDetailCommunicationAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeDetailCommunicationAddress} obj Optional instance to populate.
     * @return {module:model/EmployeeDetailCommunicationAddress} The populated <code>EmployeeDetailCommunicationAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeDetailCommunicationAddress();

        if (data.hasOwnProperty('communication_street')) {
          obj['communication_street'] = _ApiClient["default"].convertToType(data['communication_street'], 'String');
        }

        if (data.hasOwnProperty('communication_state')) {
          obj['communication_state'] = _ApiClient["default"].convertToType(data['communication_state'], 'String');
        }

        if (data.hasOwnProperty('communication_city')) {
          obj['communication_city'] = _ApiClient["default"].convertToType(data['communication_city'], 'String');
        }

        if (data.hasOwnProperty('communication_country_code')) {
          obj['communication_country_code'] = _ApiClient["default"].convertToType(data['communication_country_code'], 'String');
        }

        if (data.hasOwnProperty('communication_zip_code')) {
          obj['communication_zip_code'] = _ApiClient["default"].convertToType(data['communication_zip_code'], 'String');
        }

        if (data.hasOwnProperty('same_as_residential')) {
          obj['same_as_residential'] = _ApiClient["default"].convertToType(data['same_as_residential'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeDetailCommunicationAddress;
}();
/**
 * @member {String} communication_street
 */


EmployeeDetailCommunicationAddress.prototype['communication_street'] = undefined;
/**
 * @member {String} communication_state
 */

EmployeeDetailCommunicationAddress.prototype['communication_state'] = undefined;
/**
 * @member {String} communication_city
 */

EmployeeDetailCommunicationAddress.prototype['communication_city'] = undefined;
/**
 * @member {String} communication_country_code
 */

EmployeeDetailCommunicationAddress.prototype['communication_country_code'] = undefined;
/**
 * @member {String} communication_zip_code
 */

EmployeeDetailCommunicationAddress.prototype['communication_zip_code'] = undefined;
/**
 * @member {Boolean} same_as_residential
 */

EmployeeDetailCommunicationAddress.prototype['same_as_residential'] = undefined;
var _default = EmployeeDetailCommunicationAddress;
exports["default"] = _default;