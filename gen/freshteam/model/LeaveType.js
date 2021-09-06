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
 * The LeaveType model module.
 * @module model/LeaveType
 * @version 1.0.0
 */
var LeaveType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LeaveType</code>.
   * @alias module:model/LeaveType
   */
  function LeaveType() {
    _classCallCheck(this, LeaveType);

    LeaveType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LeaveType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LeaveType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaveType} obj Optional instance to populate.
     * @return {module:model/LeaveType} The populated <code>LeaveType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LeaveType();

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

        if (data.hasOwnProperty('applicable_for')) {
          obj['applicable_for'] = _ApiClient["default"].convertToType(data['applicable_for'], 'String');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('auto_approve')) {
          obj['auto_approve'] = _ApiClient["default"].convertToType(data['auto_approve'], 'Boolean');
        }

        if (data.hasOwnProperty('auto_approve_after')) {
          obj['auto_approve_after'] = _ApiClient["default"].convertToType(data['auto_approve_after'], 'Number');
        }

        if (data.hasOwnProperty('auto_approve_limit')) {
          obj['auto_approve_limit'] = _ApiClient["default"].convertToType(data['auto_approve_limit'], 'Number');
        }

        if (data.hasOwnProperty('marital_status')) {
          obj['marital_status'] = _ApiClient["default"].convertToType(data['marital_status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LeaveType;
}();
/**
 * @member {Number} id
 */


LeaveType.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

LeaveType.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

LeaveType.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} deleted
 */

LeaveType.prototype['deleted'] = undefined;
/**
 * @member {String} name
 */

LeaveType.prototype['name'] = undefined;
/**
 * @member {String} description
 */

LeaveType.prototype['description'] = undefined;
/**
 * @member {module:model/LeaveType.ApplicableForEnum} applicable_for
 */

LeaveType.prototype['applicable_for'] = undefined;
/**
 * @member {Boolean} default
 */

LeaveType.prototype['default'] = undefined;
/**
 * @member {Boolean} auto_approve
 */

LeaveType.prototype['auto_approve'] = undefined;
/**
 * @member {Number} auto_approve_after
 */

LeaveType.prototype['auto_approve_after'] = undefined;
/**
 * @member {Number} auto_approve_limit
 */

LeaveType.prototype['auto_approve_limit'] = undefined;
/**
 * @member {module:model/LeaveType.MaritalStatusEnum} marital_status
 */

LeaveType.prototype['marital_status'] = undefined;
/**
 * Allowed values for the <code>applicable_for</code> property.
 * @enum {String}
 * @readonly
 */

LeaveType['ApplicableForEnum'] = {
  /**
   * value: "male"
   * @const
   */
  "male": "male",

  /**
   * value: "female"
   * @const
   */
  "female": "female",

  /**
   * value: "all"
   * @const
   */
  "all": "all"
};
/**
 * Allowed values for the <code>marital_status</code> property.
 * @enum {String}
 * @readonly
 */

LeaveType['MaritalStatusEnum'] = {
  /**
   * value: "single"
   * @const
   */
  "single": "single",

  /**
   * value: "married"
   * @const
   */
  "married": "married",

  /**
   * value: "all"
   * @const
   */
  "all": "all"
};
var _default = LeaveType;
exports["default"] = _default;