"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantDetailCandidateLocation = _interopRequireDefault(require("./ApplicantDetailCandidateLocation"));

var _ApplicantDetailCandidateProfileLinks = _interopRequireDefault(require("./ApplicantDetailCandidateProfileLinks"));

var _ApplicantDetailCandidateResumes = _interopRequireDefault(require("./ApplicantDetailCandidateResumes"));

var _CandidatePositions = _interopRequireDefault(require("./CandidatePositions"));

var _CandidateQualifications = _interopRequireDefault(require("./CandidateQualifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Candidate model module.
 * @module model/Candidate
 * @version 1.0.0
 */
var Candidate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Candidate</code>.
   * @alias module:model/Candidate
   */
  function Candidate() {
    _classCallCheck(this, Candidate);

    Candidate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Candidate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Candidate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Candidate} obj Optional instance to populate.
     * @return {module:model/Candidate} The populated <code>Candidate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Candidate();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
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

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('mobile')) {
          obj['mobile'] = _ApiClient["default"].convertToType(data['mobile'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'Number');
        }

        if (data.hasOwnProperty('skype_id')) {
          obj['skype_id'] = _ApiClient["default"].convertToType(data['skype_id'], 'String');
        }

        if (data.hasOwnProperty('source_id')) {
          obj['source_id'] = _ApiClient["default"].convertToType(data['source_id'], 'Number');
        }

        if (data.hasOwnProperty('source_category_id')) {
          obj['source_category_id'] = _ApiClient["default"].convertToType(data['source_category_id'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('spam')) {
          obj['spam'] = _ApiClient["default"].convertToType(data['spam'], 'Boolean');
        }

        if (data.hasOwnProperty('total_experience_in_months')) {
          obj['total_experience_in_months'] = _ApiClient["default"].convertToType(data['total_experience_in_months'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('skills')) {
          obj['skills'] = _ApiClient["default"].convertToType(data['skills'], ['String']);
        }

        if (data.hasOwnProperty('cool_off_date')) {
          obj['cool_off_date'] = _ApiClient["default"].convertToType(data['cool_off_date'], 'Date');
        }

        if (data.hasOwnProperty('profile_links')) {
          obj['profile_links'] = _ApiClient["default"].convertToType(data['profile_links'], [_ApplicantDetailCandidateProfileLinks["default"]]);
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApplicantDetailCandidateLocation["default"].constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('qualifications')) {
          obj['qualifications'] = _ApiClient["default"].convertToType(data['qualifications'], [_CandidateQualifications["default"]]);
        }

        if (data.hasOwnProperty('positions')) {
          obj['positions'] = _ApiClient["default"].convertToType(data['positions'], [_CandidatePositions["default"]]);
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

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Candidate;
}();
/**
 * @member {Number} id
 */


Candidate.prototype['id'] = undefined;
/**
 * @member {String} first_name
 */

Candidate.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

Candidate.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

Candidate.prototype['last_name'] = undefined;
/**
 * @member {String} email
 */

Candidate.prototype['email'] = undefined;
/**
 * @member {String} mobile
 */

Candidate.prototype['mobile'] = undefined;
/**
 * @member {String} phone
 */

Candidate.prototype['phone'] = undefined;
/**
 * @member {Date} date_of_birth
 */

Candidate.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/Candidate.GenderEnum} gender
 */

Candidate.prototype['gender'] = undefined;
/**
 * @member {Number} owner_id
 */

Candidate.prototype['owner_id'] = undefined;
/**
 * @member {String} skype_id
 */

Candidate.prototype['skype_id'] = undefined;
/**
 * @member {Number} source_id
 */

Candidate.prototype['source_id'] = undefined;
/**
 * @member {Number} source_category_id
 */

Candidate.prototype['source_category_id'] = undefined;
/**
 * @member {Boolean} deleted
 */

Candidate.prototype['deleted'] = undefined;
/**
 * @member {Boolean} spam
 */

Candidate.prototype['spam'] = undefined;
/**
 * @member {Number} total_experience_in_months
 */

Candidate.prototype['total_experience_in_months'] = undefined;
/**
 * @member {String} description
 */

Candidate.prototype['description'] = undefined;
/**
 * @member {Array.<String>} tags
 */

Candidate.prototype['tags'] = undefined;
/**
 * @member {Array.<String>} skills
 */

Candidate.prototype['skills'] = undefined;
/**
 * @member {Date} cool_off_date
 */

Candidate.prototype['cool_off_date'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateProfileLinks>} profile_links
 */

Candidate.prototype['profile_links'] = undefined;
/**
 * @member {module:model/ApplicantDetailCandidateLocation} location
 */

Candidate.prototype['location'] = undefined;
/**
 * @member {Array.<module:model/CandidateQualifications>} qualifications
 */

Candidate.prototype['qualifications'] = undefined;
/**
 * @member {Array.<module:model/CandidatePositions>} positions
 */

Candidate.prototype['positions'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} resumes
 */

Candidate.prototype['resumes'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} cover_letters
 */

Candidate.prototype['cover_letters'] = undefined;
/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} portfolios
 */

Candidate.prototype['portfolios'] = undefined;
/**
 * @member {Date} created_at
 */

Candidate.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Candidate.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

Candidate['GenderEnum'] = {
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
var _default = Candidate;
exports["default"] = _default;