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
 * The EmployeeDocumentType model module.
 * @module model/EmployeeDocumentType
 * @version 1.0.0
 */
var EmployeeDocumentType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeDocumentType</code>.
   * @alias module:model/EmployeeDocumentType
   */
  function EmployeeDocumentType() {
    _classCallCheck(this, EmployeeDocumentType);

    EmployeeDocumentType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeDocumentType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeDocumentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeDocumentType} obj Optional instance to populate.
     * @return {module:model/EmployeeDocumentType} The populated <code>EmployeeDocumentType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeDocumentType();

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

  return EmployeeDocumentType;
}();
/**
 * @member {Number} id
 */


EmployeeDocumentType.prototype['id'] = undefined;
/**
 * @member {String} value
 */

EmployeeDocumentType.prototype['value'] = undefined;
/**
 * @member {Number} position
 */

EmployeeDocumentType.prototype['position'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeDocumentType.prototype['deleted'] = undefined;
var _default = EmployeeDocumentType;
exports["default"] = _default;