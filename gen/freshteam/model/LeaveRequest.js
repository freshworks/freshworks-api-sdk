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
 * The LeaveRequest model module.
 * @module model/LeaveRequest
 * @version 1.0.0
 */
var LeaveRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LeaveRequest</code>.
   * @alias module:model/LeaveRequest
   */
  function LeaveRequest() {
    _classCallCheck(this, LeaveRequest);

    LeaveRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LeaveRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LeaveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaveRequest} obj Optional instance to populate.
     * @return {module:model/LeaveRequest} The populated <code>LeaveRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LeaveRequest();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('leave_units')) {
          obj['leave_units'] = _ApiClient["default"].convertToType(data['leave_units'], 'Number');
        }

        if (data.hasOwnProperty('optional_leave_units')) {
          obj['optional_leave_units'] = _ApiClient["default"].convertToType(data['optional_leave_units'], 'Number');
        }

        if (data.hasOwnProperty('leave_type_id')) {
          obj['leave_type_id'] = _ApiClient["default"].convertToType(data['leave_type_id'], 'Number');
        }

        if (data.hasOwnProperty('status_comments')) {
          obj['status_comments'] = _ApiClient["default"].convertToType(data['status_comments'], 'String');
        }

        if (data.hasOwnProperty('approved_by_id')) {
          obj['approved_by_id'] = _ApiClient["default"].convertToType(data['approved_by_id'], 'Number');
        }

        if (data.hasOwnProperty('applied_by_id')) {
          obj['applied_by_id'] = _ApiClient["default"].convertToType(data['applied_by_id'], 'Number');
        }

        if (data.hasOwnProperty('cancelled_by_id')) {
          obj['cancelled_by_id'] = _ApiClient["default"].convertToType(data['cancelled_by_id'], 'Number');
        }

        if (data.hasOwnProperty('rejected_by_id')) {
          obj['rejected_by_id'] = _ApiClient["default"].convertToType(data['rejected_by_id'], 'Number');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('rejected_at')) {
          obj['rejected_at'] = _ApiClient["default"].convertToType(data['rejected_at'], 'Date');
        }

        if (data.hasOwnProperty('cancelled_at')) {
          obj['cancelled_at'] = _ApiClient["default"].convertToType(data['cancelled_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return LeaveRequest;
}();
/**
 * @member {Number} id
 */


LeaveRequest.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

LeaveRequest.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

LeaveRequest.prototype['updated_at'] = undefined;
/**
 * @member {Number} user_id
 */

LeaveRequest.prototype['user_id'] = undefined;
/**
 * @member {Date} start_date
 */

LeaveRequest.prototype['start_date'] = undefined;
/**
 * @member {Date} end_date
 */

LeaveRequest.prototype['end_date'] = undefined;
/**
 * @member {module:model/LeaveRequest.StatusEnum} status
 */

LeaveRequest.prototype['status'] = undefined;
/**
 * @member {Number} leave_units
 */

LeaveRequest.prototype['leave_units'] = undefined;
/**
 * @member {Number} optional_leave_units
 */

LeaveRequest.prototype['optional_leave_units'] = undefined;
/**
 * @member {Number} leave_type_id
 */

LeaveRequest.prototype['leave_type_id'] = undefined;
/**
 * @member {String} status_comments
 */

LeaveRequest.prototype['status_comments'] = undefined;
/**
 * @member {Number} approved_by_id
 */

LeaveRequest.prototype['approved_by_id'] = undefined;
/**
 * @member {Number} applied_by_id
 */

LeaveRequest.prototype['applied_by_id'] = undefined;
/**
 * @member {Number} cancelled_by_id
 */

LeaveRequest.prototype['cancelled_by_id'] = undefined;
/**
 * @member {Number} rejected_by_id
 */

LeaveRequest.prototype['rejected_by_id'] = undefined;
/**
 * @member {String} comments
 */

LeaveRequest.prototype['comments'] = undefined;
/**
 * @member {Date} rejected_at
 */

LeaveRequest.prototype['rejected_at'] = undefined;
/**
 * @member {Date} cancelled_at
 */

LeaveRequest.prototype['cancelled_at'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

LeaveRequest['StatusEnum'] = {
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "approved"
   * @const
   */
  "approved": "approved",

  /**
   * value: "declined"
   * @const
   */
  "declined": "declined",

  /**
   * value: "cancelled"
   * @const
   */
  "cancelled": "cancelled"
};
var _default = LeaveRequest;
exports["default"] = _default;