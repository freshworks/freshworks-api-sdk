"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("./Branch"));

var _CustomField = _interopRequireDefault(require("./CustomField"));

var _Department = _interopRequireDefault(require("./Department"));

var _JobDetailSalary = _interopRequireDefault(require("./JobDetailSalary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobDetail model module.
 * @module model/JobDetail
 * @version 1.0.0
 */
var JobDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobDetail</code>.
   * @alias module:model/JobDetail
   */
  function JobDetail() {
    _classCallCheck(this, JobDetail);

    JobDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobDetail} obj Optional instance to populate.
     * @return {module:model/JobDetail} The populated <code>JobDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobDetail();

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

        if (data.hasOwnProperty('show_pursue_as_career')) {
          obj['show_pursue_as_career'] = _ApiClient["default"].convertToType(data['show_pursue_as_career'], 'Boolean');
        }

        if (data.hasOwnProperty('applicant_apply_link')) {
          obj['applicant_apply_link'] = _ApiClient["default"].convertToType(data['applicant_apply_link'], 'String');
        }

        if (data.hasOwnProperty('closing_date')) {
          obj['closing_date'] = _ApiClient["default"].convertToType(data['closing_date'], 'Date');
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
          obj['salary'] = _JobDetailSalary["default"].constructFromObject(data['salary']);
        }

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _Branch["default"].constructFromObject(data['branch']);
        }

        if (data.hasOwnProperty('department')) {
          obj['department'] = _Department["default"].constructFromObject(data['department']);
        }

        if (data.hasOwnProperty('custom_field_values')) {
          obj['custom_field_values'] = _CustomField["default"].constructFromObject(data['custom_field_values']);
        }

        if (data.hasOwnProperty('skills')) {
          obj['skills'] = _ApiClient["default"].convertToType(data['skills'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return JobDetail;
}();
/**
 * @member {Number} id
 */


JobDetail.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

JobDetail.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

JobDetail.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

JobDetail.prototype['title'] = undefined;
/**
 * @member {String} description
 */

JobDetail.prototype['description'] = undefined;
/**
 * @member {String} status
 */

JobDetail.prototype['status'] = undefined;
/**
 * @member {String} applicant_access_type
 */

JobDetail.prototype['applicant_access_type'] = undefined;
/**
 * @member {Boolean} show_pursue_as_career
 */

JobDetail.prototype['show_pursue_as_career'] = undefined;
/**
 * @member {String} applicant_apply_link
 */

JobDetail.prototype['applicant_apply_link'] = undefined;
/**
 * @member {Date} closing_date
 */

JobDetail.prototype['closing_date'] = undefined;
/**
 * @member {String} experience
 */

JobDetail.prototype['experience'] = undefined;
/**
 * @member {Boolean} remote
 */

JobDetail.prototype['remote'] = undefined;
/**
 * @member {String} type
 */

JobDetail.prototype['type'] = undefined;
/**
 * @member {module:model/JobDetailSalary} salary
 */

JobDetail.prototype['salary'] = undefined;
/**
 * @member {module:model/Branch} branch
 */

JobDetail.prototype['branch'] = undefined;
/**
 * @member {module:model/Department} department
 */

JobDetail.prototype['department'] = undefined;
/**
 * @member {module:model/CustomField} custom_field_values
 */

JobDetail.prototype['custom_field_values'] = undefined;
/**
 * @member {Array.<String>} skills
 */

JobDetail.prototype['skills'] = undefined;
var _default = JobDetail;
exports["default"] = _default;