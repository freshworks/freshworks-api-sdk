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
 * The EmployeeAward model module.
 * @module model/EmployeeAward
 * @version 1.0.0
 */
var EmployeeAward = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeAward</code>.
   * @alias module:model/EmployeeAward
   */
  function EmployeeAward() {
    _classCallCheck(this, EmployeeAward);

    EmployeeAward.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeAward, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeAward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeAward} obj Optional instance to populate.
     * @return {module:model/EmployeeAward} The populated <code>EmployeeAward</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeAward();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('awarded_by')) {
          obj['awarded_by'] = _ApiClient["default"].convertToType(data['awarded_by'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeAward;
}();
/**
 * @member {Number} id
 */


EmployeeAward.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeAward.prototype['user_id'] = undefined;
/**
 * @member {String} name
 */

EmployeeAward.prototype['name'] = undefined;
/**
 * @member {String} awarded_by
 */

EmployeeAward.prototype['awarded_by'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeAward.prototype['deleted'] = undefined;
var _default = EmployeeAward;
exports["default"] = _default;