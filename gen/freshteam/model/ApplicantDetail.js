"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantDetailCandidate = _interopRequireDefault(require("./ApplicantDetailCandidate"));

var _ApplicantDetailFollowers = _interopRequireDefault(require("./ApplicantDetailFollowers"));

var _NewHireCreateCustomFields = _interopRequireDefault(require("./NewHireCreateCustomFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicantDetail model module.
 * @module model/ApplicantDetail
 * @version 1.0.0
 */
var ApplicantDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantDetail</code>.
   * @alias module:model/ApplicantDetail
   */
  function ApplicantDetail() {
    _classCallCheck(this, ApplicantDetail);

    ApplicantDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantDetail} obj Optional instance to populate.
     * @return {module:model/ApplicantDetail} The populated <code>ApplicantDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantDetail();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'String');
        }

        if (data.hasOwnProperty('sub_stage_id')) {
          obj['sub_stage_id'] = _ApiClient["default"].convertToType(data['sub_stage_id'], 'Number');
        }

        if (data.hasOwnProperty('on_hold_at')) {
          obj['on_hold_at'] = _ApiClient["default"].convertToType(data['on_hold_at'], 'Date');
        }

        if (data.hasOwnProperty('on_hold_till')) {
          obj['on_hold_till'] = _ApiClient["default"].convertToType(data['on_hold_till'], 'Date');
        }

        if (data.hasOwnProperty('rejected_at')) {
          obj['rejected_at'] = _ApiClient["default"].convertToType(data['rejected_at'], 'Date');
        }

        if (data.hasOwnProperty('archived_at')) {
          obj['archived_at'] = _ApiClient["default"].convertToType(data['archived_at'], 'Date');
        }

        if (data.hasOwnProperty('moved_at')) {
          obj['moved_at'] = _ApiClient["default"].convertToType(data['moved_at'], 'Date');
        }

        if (data.hasOwnProperty('job_id')) {
          obj['job_id'] = _ApiClient["default"].convertToType(data['job_id'], 'Number');
        }

        if (data.hasOwnProperty('job_title')) {
          obj['job_title'] = _ApiClient["default"].convertToType(data['job_title'], 'String');
        }

        if (data.hasOwnProperty('requisition_id')) {
          obj['requisition_id'] = _ApiClient["default"].convertToType(data['requisition_id'], 'Number');
        }

        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _NewHireCreateCustomFields["default"].constructFromObject(data['custom_fields']);
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = _ApplicantDetailCandidate["default"].constructFromObject(data['candidate']);
        }

        if (data.hasOwnProperty('followers')) {
          obj['followers'] = _ApiClient["default"].convertToType(data['followers'], [_ApplicantDetailFollowers["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ApplicantDetail;
}();
/**
 * @member {Number} id
 */


ApplicantDetail.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

ApplicantDetail.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ApplicantDetail.prototype['updated_at'] = undefined;
/**
 * @member {module:model/ApplicantDetail.StatusEnum} status
 */

ApplicantDetail.prototype['status'] = undefined;
/**
 * @member {Boolean} deleted
 */

ApplicantDetail.prototype['deleted'] = undefined;
/**
 * @member {module:model/ApplicantDetail.StageEnum} stage
 */

ApplicantDetail.prototype['stage'] = undefined;
/**
 * @member {Number} sub_stage_id
 */

ApplicantDetail.prototype['sub_stage_id'] = undefined;
/**
 * @member {Date} on_hold_at
 */

ApplicantDetail.prototype['on_hold_at'] = undefined;
/**
 * @member {Date} on_hold_till
 */

ApplicantDetail.prototype['on_hold_till'] = undefined;
/**
 * @member {Date} rejected_at
 */

ApplicantDetail.prototype['rejected_at'] = undefined;
/**
 * @member {Date} archived_at
 */

ApplicantDetail.prototype['archived_at'] = undefined;
/**
 * @member {Date} moved_at
 */

ApplicantDetail.prototype['moved_at'] = undefined;
/**
 * @member {Number} job_id
 */

ApplicantDetail.prototype['job_id'] = undefined;
/**
 * @member {String} job_title
 */

ApplicantDetail.prototype['job_title'] = undefined;
/**
 * @member {Number} requisition_id
 */

ApplicantDetail.prototype['requisition_id'] = undefined;
/**
 * @member {module:model/NewHireCreateCustomFields} custom_fields
 */

ApplicantDetail.prototype['custom_fields'] = undefined;
/**
 * @member {module:model/ApplicantDetailCandidate} candidate
 */

ApplicantDetail.prototype['candidate'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailFollowers>} followers
 */

ApplicantDetail.prototype['followers'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ApplicantDetail['StatusEnum'] = {
  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "on_hold"
   * @const
   */
  "on_hold": "on_hold",

  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",

  /**
   * value: "archived"
   * @const
   */
  "archived": "archived",

  /**
   * value: "moved"
   * @const
   */
  "moved": "moved",

  /**
   * value: "dropped"
   * @const
   */
  "dropped": "dropped"
};
/**
 * Allowed values for the <code>stage</code> property.
 * @enum {String}
 * @readonly
 */

ApplicantDetail['StageEnum'] = {
  /**
   * value: "candidature"
   * @const
   */
  "candidature": "candidature",

  /**
   * value: "screening"
   * @const
   */
  "screening": "screening",

  /**
   * value: "on_site"
   * @const
   */
  "on_site": "on_site",

  /**
   * value: "offer"
   * @const
   */
  "offer": "offer",

  /**
   * value: "hire"
   * @const
   */
  "hire": "hire"
};
var _default = ApplicantDetail;
exports["default"] = _default;