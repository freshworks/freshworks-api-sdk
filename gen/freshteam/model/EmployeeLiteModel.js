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
 * The EmployeeLiteModel model module.
 * @module model/EmployeeLiteModel
 * @version 1.0.0
 */
var EmployeeLiteModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeLiteModel</code>.
   * @alias module:model/EmployeeLiteModel
   */
  function EmployeeLiteModel() {
    _classCallCheck(this, EmployeeLiteModel);

    EmployeeLiteModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeLiteModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeLiteModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeLiteModel} obj Optional instance to populate.
     * @return {module:model/EmployeeLiteModel} The populated <code>EmployeeLiteModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeLiteModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('official_email')) {
          obj['official_email'] = _ApiClient["default"].convertToType(data['official_email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmployeeLiteModel;
}();
/**
 * @member {Number} id
 */


EmployeeLiteModel.prototype['id'] = undefined;
/**
 * @member {String} first_name
 */

EmployeeLiteModel.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */

EmployeeLiteModel.prototype['last_name'] = undefined;
/**
 * @member {String} official_email
 */

EmployeeLiteModel.prototype['official_email'] = undefined;
var _default = EmployeeLiteModel;
exports["default"] = _default;