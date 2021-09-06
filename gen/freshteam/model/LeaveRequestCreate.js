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
 * The LeaveRequestCreate model module.
 * @module model/LeaveRequestCreate
 * @version 1.0.0
 */
var LeaveRequestCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LeaveRequestCreate</code>.
   * @alias module:model/LeaveRequestCreate
   * @param startDate {Date} 
   * @param endDate {Date} 
   * @param leaveTypeId {Number} 
   * @param comments {String} 
   */
  function LeaveRequestCreate(startDate, endDate, leaveTypeId, comments) {
    _classCallCheck(this, LeaveRequestCreate);

    LeaveRequestCreate.initialize(this, startDate, endDate, leaveTypeId, comments);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LeaveRequestCreate, null, [{
    key: "initialize",
    value: function initialize(obj, startDate, endDate, leaveTypeId, comments) {
      obj['start_date'] = startDate;
      obj['end_date'] = endDate;
      obj['leave_type_id'] = leaveTypeId;
      obj['comments'] = comments;
    }
    /**
     * Constructs a <code>LeaveRequestCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaveRequestCreate} obj Optional instance to populate.
     * @return {module:model/LeaveRequestCreate} The populated <code>LeaveRequestCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LeaveRequestCreate();

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }

        if (data.hasOwnProperty('optional_leave_days')) {
          obj['optional_leave_days'] = _ApiClient["default"].convertToType(data['optional_leave_days'], ['Date']);
        }

        if (data.hasOwnProperty('notify_to')) {
          obj['notify_to'] = _ApiClient["default"].convertToType(data['notify_to'], ['String']);
        }

        if (data.hasOwnProperty('add_to_calendar')) {
          obj['add_to_calendar'] = _ApiClient["default"].convertToType(data['add_to_calendar'], 'Boolean');
        }

        if (data.hasOwnProperty('auto_decline_events')) {
          obj['auto_decline_events'] = _ApiClient["default"].convertToType(data['auto_decline_events'], 'Boolean');
        }

        if (data.hasOwnProperty('leave_type_id')) {
          obj['leave_type_id'] = _ApiClient["default"].convertToType(data['leave_type_id'], 'Number');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LeaveRequestCreate;
}();
/**
 * @member {Date} start_date
 */


LeaveRequestCreate.prototype['start_date'] = undefined;
/**
 * @member {Date} end_date
 */

LeaveRequestCreate.prototype['end_date'] = undefined;
/**
 * @member {Array.<Date>} optional_leave_days
 */

LeaveRequestCreate.prototype['optional_leave_days'] = undefined;
/**
 * @member {Array.<String>} notify_to
 */

LeaveRequestCreate.prototype['notify_to'] = undefined;
/**
 * @member {Boolean} add_to_calendar
 */

LeaveRequestCreate.prototype['add_to_calendar'] = undefined;
/**
 * @member {Boolean} auto_decline_events
 */

LeaveRequestCreate.prototype['auto_decline_events'] = undefined;
/**
 * @member {Number} leave_type_id
 */

LeaveRequestCreate.prototype['leave_type_id'] = undefined;
/**
 * @member {String} comments
 */

LeaveRequestCreate.prototype['comments'] = undefined;
var _default = LeaveRequestCreate;
exports["default"] = _default;