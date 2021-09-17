/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ApplicantDetailCandidateLocation from "./ApplicantDetailCandidateLocation";
import ApplicantDetailCandidateProfileLinks from "./ApplicantDetailCandidateProfileLinks";
import ApplicantDetailCandidateResumes from "./ApplicantDetailCandidateResumes";
import CandidatePositions from "./CandidatePositions";
import CandidateQualifications from "./CandidateQualifications";

/**
 * The Candidate model module.
 * @module model/Candidate
 * @version 1.0.0
 */
class Candidate {
  /**
   * Constructs a new <code>Candidate</code>.
   * @alias module:model/Candidate
   */
  constructor() {
    Candidate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Candidate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Candidate} obj Optional instance to populate.
   * @return {module:model/Candidate} The populated <code>Candidate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Candidate();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("first_name")) {
        obj["first_name"] = ApiClient.convertToType(data["first_name"], "String");
      }
      if (data.hasOwnProperty("middle_name")) {
        obj["middle_name"] = ApiClient.convertToType(data["middle_name"], "String");
      }
      if (data.hasOwnProperty("last_name")) {
        obj["last_name"] = ApiClient.convertToType(data["last_name"], "String");
      }
      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
      if (data.hasOwnProperty("mobile")) {
        obj["mobile"] = ApiClient.convertToType(data["mobile"], "String");
      }
      if (data.hasOwnProperty("phone")) {
        obj["phone"] = ApiClient.convertToType(data["phone"], "String");
      }
      if (data.hasOwnProperty("date_of_birth")) {
        obj["date_of_birth"] = ApiClient.convertToType(data["date_of_birth"], "Date");
      }
      if (data.hasOwnProperty("gender")) {
        obj["gender"] = ApiClient.convertToType(data["gender"], "String");
      }
      if (data.hasOwnProperty("owner_id")) {
        obj["owner_id"] = ApiClient.convertToType(data["owner_id"], "Number");
      }
      if (data.hasOwnProperty("skype_id")) {
        obj["skype_id"] = ApiClient.convertToType(data["skype_id"], "String");
      }
      if (data.hasOwnProperty("source_id")) {
        obj["source_id"] = ApiClient.convertToType(data["source_id"], "Number");
      }
      if (data.hasOwnProperty("source_category_id")) {
        obj["source_category_id"] = ApiClient.convertToType(data["source_category_id"], "Number");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
      if (data.hasOwnProperty("spam")) {
        obj["spam"] = ApiClient.convertToType(data["spam"], "Boolean");
      }
      if (data.hasOwnProperty("total_experience_in_months")) {
        obj["total_experience_in_months"] = ApiClient.convertToType(data["total_experience_in_months"], "Number");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("tags")) {
        obj["tags"] = ApiClient.convertToType(data["tags"], ["String"]);
      }
      if (data.hasOwnProperty("skills")) {
        obj["skills"] = ApiClient.convertToType(data["skills"], ["String"]);
      }
      if (data.hasOwnProperty("cool_off_date")) {
        obj["cool_off_date"] = ApiClient.convertToType(data["cool_off_date"], "Date");
      }
      if (data.hasOwnProperty("profile_links")) {
        obj["profile_links"] = ApiClient.convertToType(data["profile_links"], [ApplicantDetailCandidateProfileLinks]);
      }
      if (data.hasOwnProperty("location")) {
        obj["location"] = ApplicantDetailCandidateLocation.constructFromObject(data["location"]);
      }
      if (data.hasOwnProperty("qualifications")) {
        obj["qualifications"] = ApiClient.convertToType(data["qualifications"], [CandidateQualifications]);
      }
      if (data.hasOwnProperty("positions")) {
        obj["positions"] = ApiClient.convertToType(data["positions"], [CandidatePositions]);
      }
      if (data.hasOwnProperty("resumes")) {
        obj["resumes"] = ApiClient.convertToType(data["resumes"], [ApplicantDetailCandidateResumes]);
      }
      if (data.hasOwnProperty("cover_letters")) {
        obj["cover_letters"] = ApiClient.convertToType(data["cover_letters"], [ApplicantDetailCandidateResumes]);
      }
      if (data.hasOwnProperty("portfolios")) {
        obj["portfolios"] = ApiClient.convertToType(data["portfolios"], [ApplicantDetailCandidateResumes]);
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Candidate.prototype["id"] = undefined;

/**
 * @member {String} first_name
 */
Candidate.prototype["first_name"] = undefined;

/**
 * @member {String} middle_name
 */
Candidate.prototype["middle_name"] = undefined;

/**
 * @member {String} last_name
 */
Candidate.prototype["last_name"] = undefined;

/**
 * @member {String} email
 */
Candidate.prototype["email"] = undefined;

/**
 * @member {String} mobile
 */
Candidate.prototype["mobile"] = undefined;

/**
 * @member {String} phone
 */
Candidate.prototype["phone"] = undefined;

/**
 * @member {Date} date_of_birth
 */
Candidate.prototype["date_of_birth"] = undefined;

/**
 * @member {module:model/Candidate.GenderEnum} gender
 */
Candidate.prototype["gender"] = undefined;

/**
 * @member {Number} owner_id
 */
Candidate.prototype["owner_id"] = undefined;

/**
 * @member {String} skype_id
 */
Candidate.prototype["skype_id"] = undefined;

/**
 * @member {Number} source_id
 */
Candidate.prototype["source_id"] = undefined;

/**
 * @member {Number} source_category_id
 */
Candidate.prototype["source_category_id"] = undefined;

/**
 * @member {Boolean} deleted
 */
Candidate.prototype["deleted"] = undefined;

/**
 * @member {Boolean} spam
 */
Candidate.prototype["spam"] = undefined;

/**
 * @member {Number} total_experience_in_months
 */
Candidate.prototype["total_experience_in_months"] = undefined;

/**
 * @member {String} description
 */
Candidate.prototype["description"] = undefined;

/**
 * @member {Array.<String>} tags
 */
Candidate.prototype["tags"] = undefined;

/**
 * @member {Array.<String>} skills
 */
Candidate.prototype["skills"] = undefined;

/**
 * @member {Date} cool_off_date
 */
Candidate.prototype["cool_off_date"] = undefined;

/**
 * @member {Array.<module:model/ApplicantDetailCandidateProfileLinks>} profile_links
 */
Candidate.prototype["profile_links"] = undefined;

/**
 * @member {module:model/ApplicantDetailCandidateLocation} location
 */
Candidate.prototype["location"] = undefined;

/**
 * @member {Array.<module:model/CandidateQualifications>} qualifications
 */
Candidate.prototype["qualifications"] = undefined;

/**
 * @member {Array.<module:model/CandidatePositions>} positions
 */
Candidate.prototype["positions"] = undefined;

/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} resumes
 */
Candidate.prototype["resumes"] = undefined;

/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} cover_letters
 */
Candidate.prototype["cover_letters"] = undefined;

/**
 * @member {Array.<module:model/ApplicantDetailCandidateResumes>} portfolios
 */
Candidate.prototype["portfolios"] = undefined;

/**
 * @member {Date} created_at
 */
Candidate.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
Candidate.prototype["updated_at"] = undefined;

/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
Candidate["GenderEnum"] = {
  /**
   * value: "male"
   * @const
   */
  male: "male",

  /**
   * value: "female"
   * @const
   */
  female: "female"
};

export default Candidate;