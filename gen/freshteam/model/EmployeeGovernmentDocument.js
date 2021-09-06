"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeDocumentType = _interopRequireDefault(require("./EmployeeDocumentType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeGovernmentDocument model module.
 * @module model/EmployeeGovernmentDocument
 * @version 1.0.0
 */
var EmployeeGovernmentDocument = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeGovernmentDocument</code>.
   * @alias module:model/EmployeeGovernmentDocument
   */
  function EmployeeGovernmentDocument() {
    _classCallCheck(this, EmployeeGovernmentDocument);

    EmployeeGovernmentDocument.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeGovernmentDocument, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeGovernmentDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeGovernmentDocument} obj Optional instance to populate.
     * @return {module:model/EmployeeGovernmentDocument} The populated <code>EmployeeGovernmentDocument</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeGovernmentDocument();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('document_type')) {
          obj['document_type'] = _EmployeeDocumentType["default"].constructFromObject(data['document_type']);
        }

        if (data.hasOwnProperty('document_name')) {
          obj['document_name'] = _ApiClient["default"].convertToType(data['document_name'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('issuing_authority')) {
          obj['issuing_authority'] = _ApiClient["default"].convertToType(data['issuing_authority'], 'String');
        }

        if (data.hasOwnProperty('issuing_date')) {
          obj['issuing_date'] = _ApiClient["default"].convertToType(data['issuing_date'], 'Date');
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

  return EmployeeGovernmentDocument;
}();
/**
 * @member {Number} id
 */


EmployeeGovernmentDocument.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeGovernmentDocument.prototype['user_id'] = undefined;
/**
 * @member {module:model/EmployeeDocumentType} document_type
 */

EmployeeGovernmentDocument.prototype['document_type'] = undefined;
/**
 * @member {String} document_name
 */

EmployeeGovernmentDocument.prototype['document_name'] = undefined;
/**
 * @member {String} number
 */

EmployeeGovernmentDocument.prototype['number'] = undefined;
/**
 * @member {String} country_code
 */

EmployeeGovernmentDocument.prototype['country_code'] = undefined;
/**
 * @member {String} issuing_authority
 */

EmployeeGovernmentDocument.prototype['issuing_authority'] = undefined;
/**
 * @member {Date} issuing_date
 */

EmployeeGovernmentDocument.prototype['issuing_date'] = undefined;
/**
 * @member {Date} expiry_date
 */

EmployeeGovernmentDocument.prototype['expiry_date'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeGovernmentDocument.prototype['deleted'] = undefined;
var _default = EmployeeGovernmentDocument;
exports["default"] = _default;