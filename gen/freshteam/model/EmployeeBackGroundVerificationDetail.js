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
 * The EmployeeBackGroundVerificationDetail model module.
 * @module model/EmployeeBackGroundVerificationDetail
 * @version 1.0.0
 */
var EmployeeBackGroundVerificationDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeBackGroundVerificationDetail</code>.
   * @alias module:model/EmployeeBackGroundVerificationDetail
   */
  function EmployeeBackGroundVerificationDetail() {
    _classCallCheck(this, EmployeeBackGroundVerificationDetail);

    EmployeeBackGroundVerificationDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeBackGroundVerificationDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeBackGroundVerificationDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeBackGroundVerificationDetail} obj Optional instance to populate.
     * @return {module:model/EmployeeBackGroundVerificationDetail} The populated <code>EmployeeBackGroundVerificationDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeBackGroundVerificationDetail();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('vendor')) {
          obj['vendor'] = _ApiClient["default"].convertToType(data['vendor'], 'String');
        }

        if (data.hasOwnProperty('initiation_date')) {
          obj['initiation_date'] = _ApiClient["default"].convertToType(data['initiation_date'], 'Date');
        }

        if (data.hasOwnProperty('completion_date')) {
          obj['completion_date'] = _ApiClient["default"].convertToType(data['completion_date'], 'Date');
        }

        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeBackGroundVerificationDetail;
}();
/**
 * @member {Number} id
 */


EmployeeBackGroundVerificationDetail.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeBackGroundVerificationDetail.prototype['user_id'] = undefined;
/**
 * @member {module:model/EmployeeBackGroundVerificationDetail.StatusEnum} status
 */

EmployeeBackGroundVerificationDetail.prototype['status'] = undefined;
/**
 * @member {String} vendor
 */

EmployeeBackGroundVerificationDetail.prototype['vendor'] = undefined;
/**
 * @member {Date} initiation_date
 */

EmployeeBackGroundVerificationDetail.prototype['initiation_date'] = undefined;
/**
 * @member {Date} completion_date
 */

EmployeeBackGroundVerificationDetail.prototype['completion_date'] = undefined;
/**
 * @member {String} notes
 */

EmployeeBackGroundVerificationDetail.prototype['notes'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeBackGroundVerificationDetail.prototype['deleted'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeBackGroundVerificationDetail['StatusEnum'] = {
  /**
   * value: "not_initiated"
   * @const
   */
  "not_initiated": "not_initiated",

  /**
   * value: "initiated"
   * @const
   */
  "initiated": "initiated",

  /**
   * value: "in_progress"
   * @const
   */
  "in_progress": "in_progress",

  /**
   * value: "completed"
   * @const
   */
  "completed": "completed",

  /**
   * value: "cancelled"
   * @const
   */
  "cancelled": "cancelled"
};
var _default = EmployeeBackGroundVerificationDetail;
exports["default"] = _default;