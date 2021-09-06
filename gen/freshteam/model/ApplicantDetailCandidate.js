"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantDetailCandidateLocation = _interopRequireDefault(require("./ApplicantDetailCandidateLocation"));

var _ApplicantDetailCandidateProfileLinks = _interopRequireDefault(require("./ApplicantDetailCandidateProfileLinks"));

var _ApplicantDetailCandidateReferrals = _interopRequireDefault(require("./ApplicantDetailCandidateReferrals"));

var _ApplicantDetailCandidateResumes = _interopRequireDefault(require("./ApplicantDetailCandidateResumes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicantDetailCandidate model module.
 * @module model/ApplicantDetailCandidate
 * @version 1.0.0
 */
var ApplicantDetailCandidate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantDetailCandidate</code>.
   * @alias module:model/ApplicantDetailCandidate
   */
  function ApplicantDetailCandidate() {
    _classCallCheck(this, ApplicantDetailCandidate);

    ApplicantDetailCandidate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantDetailCandidate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantDetailCandidate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantDetailCandidate} obj Optional instance to populate.
     * @return {module:model/ApplicantDetailCandidate} The populated <code>ApplicantDetailCandidate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantDetailCandidate();

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient["default"].convertToType(data['middle_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('mobile')) {
          obj['mobile'] = _ApiClient["default"].convertToType(data['mobile'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'Number');
        }

        if (data.hasOwnProperty('source_id')) {
          obj['source_id'] = _ApiClient["default"].convertToType(data['source_id'], 'Number');
        }

        if (data.hasOwnProperty('source_category_id')) {
          obj['source_category_id'] = _ApiClient["default"].convertToType(data['source_category_id'], 'Number');
        }

        if (data.hasOwnProperty('referred_by_id')) {
          obj['referred_by_id'] = _ApiClient["default"].convertToType(data['referred_by_id'], 'Number');
        }

        if (data.hasOwnProperty('profile_links')) {
          obj['profile_links'] = _ApiClient["default"].convertToType(data['profile_links'], [_ApplicantDetailCandidateProfileLinks["default"]]);
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApplicantDetailCandidateLocation["default"].constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('skype_id')) {
          obj['skype_id'] = _ApiClient["default"].convertToType(data['skype_id'], 'String');
        }

        if (data.hasOwnProperty('eeo_ethnicity')) {
          obj['eeo_ethnicity'] = _ApiClient["default"].convertToType(data['eeo_ethnicity'], 'String');
        }

        if (data.hasOwnProperty('eeo_gender')) {
          obj['eeo_gender'] = _ApiClient["default"].convertToType(data['eeo_gender'], 'String');
        }

        if (data.hasOwnProperty('eeo_veteran')) {
          obj['eeo_veteran'] = _ApiClient["default"].convertToType(data['eeo_veteran'], 'String');
        }

        if (data.hasOwnProperty('eeo_disabled')) {
          obj['eeo_disabled'] = _ApiClient["default"].convertToType(data['eeo_disabled'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('skills')) {
          obj['skills'] = _ApiClient["default"].convertToType(data['skills'], ['String']);
        }

        if (data.hasOwnProperty('referrals')) {
          obj['referrals'] = _ApiClient["default"].convertToType(data['referrals'], [_ApplicantDetailCandidateReferrals["default"]]);
        }

        if (data.hasOwnProperty('resumes')) {
          obj['resumes'] = _ApiClient["default"].convertToType(data['resumes'], [_ApplicantDetailCandidateResumes["default"]]);
        }

        if (data.hasOwnProperty('cover_letters')) {
          obj['cover_letters'] = _ApiClient["default"].convertToType(data['cover_letters'], [_ApplicantDetailCandidateResumes["default"]]);
        }

        if (data.hasOwnProperty('portfolios')) {
          obj['portfolios'] = _ApiClient["default"].convertToType(data['portfolios'], [_ApplicantDetailCandidateResumes["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ApplicantDetailCandidate;
}();
/**
 * @member {Date} date_of_birth
 */


ApplicantDetailCandidate.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/ApplicantDetailCandidate.GenderEnum} gender
 */

ApplicantDetailCandidate.prototype['gender'] = undefined;
/**
 * @member {String} first_name
 */

ApplicantDetailCandidate.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

ApplicantDetailCandidate.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

ApplicantDetailCandidate.prototype['last_name'] = undefined;
/**
 * @member {String} mobile
 */

ApplicantDetailCandidate.prototype['mobile'] = undefined;
/**
 * @member {String} phone
 */

ApplicantDetailCandidate.prototype['phone'] = undefined;
/**
 * @member {String} email
 */

ApplicantDetailCandidate.prototype['email'] = undefined;
/**
 * @member {Number} owner_id
 */

ApplicantDetailCandidate.prototype['owner_id'] = undefined;
/**
 * @member {Number} source_id
 */

ApplicantDetailCandidate.prototype['source_id'] = undefined;
/**
 * @member {Number} source_category_id
 */

ApplicantDetailCandidate.prototype['source_category_id'] = undefined;
/**
 * @member {Number} referred_by_id
 */

ApplicantDetailCandidate.prototype['referred_by_id'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateProfileLinks>} profile_links
 */

ApplicantDetailCandidate.prototype['profile_links'] = undefined;
/**
 * @member {module:model/ApplicantDetailCandidateLocation} location
 */

ApplicantDetailCandidate.prototype['location'] = undefined;
/**
 * @member {String} skype_id
 */

ApplicantDetailCandidate.prototype['skype_id'] = undefined;
/**
 * @member {String} eeo_ethnicity
 */

ApplicantDetailCandidate.prototype['eeo_ethnicity'] = undefined;
/**
 * @member {String} eeo_gender
 */

ApplicantDetailCandidate.prototype['eeo_gender'] = undefined;
/**
 * @member {String} eeo_veteran
 */

ApplicantDetailCandidate.prototype['eeo_veteran'] = undefined;
/**
 * @member {String} eeo_disabled
 */

ApplicantDetailCandidate.prototype['eeo_disabled'] = undefined;
/**
 * @member {Array.<String>} tags
 */

ApplicantDetailCandidate.prototype['tags'] = undefined;
/**
 * @member {Array.<String>} skills
 */

ApplicantDetailCandidate.prototype['skills'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateReferrals>} referrals
 */

ApplicantDetailCandidate.prototype['referrals'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} resumes
 */

ApplicantDetailCandidate.prototype['resumes'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} cover_letters
 */

ApplicantDetailCandidate.prototype['cover_letters'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} portfolios
 */

ApplicantDetailCandidate.prototype['portfolios'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

ApplicantDetailCandidate['GenderEnum'] = {
  /**
   * value: "male"
   * @const
   */
  "male": "male",

  /**
   * value: "female"
   * @const
   */
  "female": "female"
};
var _default = ApplicantDetailCandidate;
exports["default"] = _default;