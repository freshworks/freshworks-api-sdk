"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("./Branch"));

var _Department = _interopRequireDefault(require("./Department"));

var _InterviewProcess = _interopRequireDefault(require("./InterviewProcess"));

var _JobSalary = _interopRequireDefault(require("./JobSalary"));

var _Requisitions = _interopRequireDefault(require("./Requisitions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Job model module.
 * @module model/Job
 * @version 1.0.0
 */
var Job = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   */
  function Job() {
    _classCallCheck(this, Job);

    Job.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Job, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Job();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('applicant_access_type')) {
          obj['applicant_access_type'] = _ApiClient["default"].convertToType(data['applicant_access_type'], 'String');
        }

        if (data.hasOwnProperty('applicant_apply_link')) {
          obj['applicant_apply_link'] = _ApiClient["default"].convertToType(data['applicant_apply_link'], 'String');
        }

        if (data.hasOwnProperty('show_pursue_as_career')) {
          obj['show_pursue_as_career'] = _ApiClient["default"].convertToType(data['show_pursue_as_career'], 'Boolean');
        }

        if (data.hasOwnProperty('closing_date')) {
          obj['closing_date'] = _ApiClient["default"].convertToType(data['closing_date'], 'String');
        }

        if (data.hasOwnProperty('experience')) {
          obj['experience'] = _ApiClient["default"].convertToType(data['experience'], 'String');
        }

        if (data.hasOwnProperty('remote')) {
          obj['remote'] = _ApiClient["default"].convertToType(data['remote'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('salary')) {
          obj['salary'] = _JobSalary["default"].constructFromObject(data['salary']);
        }

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _Branch["default"].constructFromObject(data['branch']);
        }

        if (data.hasOwnProperty('department')) {
          obj['department'] = _Department["default"].constructFromObject(data['department']);
        }

        if (data.hasOwnProperty('requisitions')) {
          obj['requisitions'] = _ApiClient["default"].convertToType(data['requisitions'], [_Requisitions["default"]]);
        }

        if (data.hasOwnProperty('interview_process')) {
          obj['interview_process'] = _ApiClient["default"].convertToType(data['interview_process'], [_InterviewProcess["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Job;
}();
/**
 * @member {Number} id
 */


Job.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Job.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Job.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Job.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Job.prototype['description'] = undefined;
/**
 * @member {String} status
 */

Job.prototype['status'] = undefined;
/**
 * @member {String} applicant_access_type
 */

Job.prototype['applicant_access_type'] = undefined;
/**
 * @member {String} applicant_apply_link
 */

Job.prototype['applicant_apply_link'] = undefined;
/**
 * @member {Boolean} show_pursue_as_career
 */

Job.prototype['show_pursue_as_career'] = undefined;
/**
 * @member {String} closing_date
 */

Job.prototype['closing_date'] = undefined;
/**
 * @member {String} experience
 */

Job.prototype['experience'] = undefined;
/**
 * @member {Boolean} remote
 */

Job.prototype['remote'] = undefined;
/**
 * @member {String} type
 */

Job.prototype['type'] = undefined;
/**
 * @member {module:model/JobSalary} salary
 */

Job.prototype['salary'] = undefined;
/**
 * @member {module:model/Branch} branch
 */

Job.prototype['branch'] = undefined;
/**
 * @member {module:model/Department} department
 */

Job.prototype['department'] = undefined;
/**
 * @member {Array.<module:model/Requisitions>} requisitions
 */

Job.prototype['requisitions'] = undefined;
/**
 * @member {Array.<module:model/InterviewProcess>} interview_process
 */

Job.prototype['interview_process'] = undefined;
var _default = Job;
exports["default"] = _default;