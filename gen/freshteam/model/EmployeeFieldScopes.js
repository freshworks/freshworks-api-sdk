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
 * The EmployeeFieldScopes model module.
 * @module model/EmployeeFieldScopes
 * @version 1.0.0
 */
var EmployeeFieldScopes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeFieldScopes</code>.
   * @alias module:model/EmployeeFieldScopes
   */
  function EmployeeFieldScopes() {
    _classCallCheck(this, EmployeeFieldScopes);

    EmployeeFieldScopes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeFieldScopes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeFieldScopes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeFieldScopes} obj Optional instance to populate.
     * @return {module:model/EmployeeFieldScopes} The populated <code>EmployeeFieldScopes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeFieldScopes();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('scopable_type')) {
          obj['scopable_type'] = _ApiClient["default"].convertToType(data['scopable_type'], 'String');
        }

        if (data.hasOwnProperty('scopable_id')) {
          obj['scopable_id'] = _ApiClient["default"].convertToType(data['scopable_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmployeeFieldScopes;
}();
/**
 * @member {Number} id
 */


EmployeeFieldScopes.prototype['id'] = undefined;
/**
 * @member {String} scopable_type
 */

EmployeeFieldScopes.prototype['scopable_type'] = undefined;
/**
 * @member {Number} scopable_id
 */

EmployeeFieldScopes.prototype['scopable_id'] = undefined;
var _default = EmployeeFieldScopes;
exports["default"] = _default;