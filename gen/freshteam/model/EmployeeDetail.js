"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("./Branch"));

var _BusinessUnit = _interopRequireDefault(require("./BusinessUnit"));

var _CustomField = _interopRequireDefault(require("./CustomField"));

var _Department = _interopRequireDefault(require("./Department"));

var _EmployeeAward = _interopRequireDefault(require("./EmployeeAward"));

var _EmployeeBackGroundVerificationDetail = _interopRequireDefault(require("./EmployeeBackGroundVerificationDetail"));

var _EmployeeBankAccount = _interopRequireDefault(require("./EmployeeBankAccount"));

var _EmployeeBonus = _interopRequireDefault(require("./EmployeeBonus"));

var _EmployeeCertificate = _interopRequireDefault(require("./EmployeeCertificate"));

var _EmployeeCompensationDetail = _interopRequireDefault(require("./EmployeeCompensationDetail"));

var _EmployeeDependent = _interopRequireDefault(require("./EmployeeDependent"));

var _EmployeeDetailAddress = _interopRequireDefault(require("./EmployeeDetailAddress"));

var _EmployeeDetailCommunicationAddress = _interopRequireDefault(require("./EmployeeDetailCommunicationAddress"));

var _EmployeeEmergencyContact = _interopRequireDefault(require("./EmployeeEmergencyContact"));

var _EmployeeGovernmentDocument = _interopRequireDefault(require("./EmployeeGovernmentDocument"));

var _EmployeeHonor = _interopRequireDefault(require("./EmployeeHonor"));

var _EmployeeLicense = _interopRequireDefault(require("./EmployeeLicense"));

var _EmployeeLiteModel = _interopRequireDefault(require("./EmployeeLiteModel"));

var _EmployeePhoneNumber = _interopRequireDefault(require("./EmployeePhoneNumber"));

var _EmployeePosition = _interopRequireDefault(require("./EmployeePosition"));

var _EmployeeQualification = _interopRequireDefault(require("./EmployeeQualification"));

var _EmployeeSocialProfiles = _interopRequireDefault(require("./EmployeeSocialProfiles"));

var _EmployeeStock = _interopRequireDefault(require("./EmployeeStock"));

var _EmployeeTimeoff = _interopRequireDefault(require("./EmployeeTimeoff"));

var _EmployeeWorkPhoneNumber = _interopRequireDefault(require("./EmployeeWorkPhoneNumber"));

var _FieldOption = _interopRequireDefault(require("./FieldOption"));

var _Level = _interopRequireDefault(require("./Level"));

var _Role = _interopRequireDefault(require("./Role"));

var _SubDepartment = _interopRequireDefault(require("./SubDepartment"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeDetail model module.
 * @module model/EmployeeDetail
 * @version 1.0.0
 */
var EmployeeDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeDetail</code>.
   * @alias module:model/EmployeeDetail
   */
  function EmployeeDetail() {
    _classCallCheck(this, EmployeeDetail);

    EmployeeDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeDetail} obj Optional instance to populate.
     * @return {module:model/EmployeeDetail} The populated <code>EmployeeDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeDetail();

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

        if (data.hasOwnProperty('eeo_veteran')) {
          obj['eeo_veteran'] = _ApiClient["default"].convertToType(data['eeo_veteran'], 'String');
        }

        if (data.hasOwnProperty('eeo_ethnicity')) {
          obj['eeo_ethnicity'] = _ApiClient["default"].convertToType(data['eeo_ethnicity'], 'String');
        }

        if (data.hasOwnProperty('eeo_disabled')) {
          obj['eeo_disabled'] = _ApiClient["default"].convertToType(data['eeo_disabled'], 'String');
        }

        if (data.hasOwnProperty('eeo_job_category')) {
          obj['eeo_job_category'] = _ApiClient["default"].convertToType(data['eeo_job_category'], 'String');
        }

        if (data.hasOwnProperty('eeo_company_code')) {
          obj['eeo_company_code'] = _ApiClient["default"].convertToType(data['eeo_company_code'], 'String');
        }

        if (data.hasOwnProperty('hire_reason')) {
          obj['hire_reason'] = _ApiClient["default"].convertToType(data['hire_reason'], 'String');
        }

        if (data.hasOwnProperty('id_card_details')) {
          obj['id_card_details'] = _ApiClient["default"].convertToType(data['id_card_details'], 'String');
        }

        if (data.hasOwnProperty('workstation_number')) {
          obj['workstation_number'] = _ApiClient["default"].convertToType(data['workstation_number'], 'String');
        }

        if (data.hasOwnProperty('secondary_business_email')) {
          obj['secondary_business_email'] = _ApiClient["default"].convertToType(data['secondary_business_email'], 'String');
        }

        if (data.hasOwnProperty('work_numbers')) {
          obj['work_numbers'] = _ApiClient["default"].convertToType(data['work_numbers'], [_EmployeeWorkPhoneNumber["default"]]);
        }

        if (data.hasOwnProperty('nick_name')) {
          obj['nick_name'] = _ApiClient["default"].convertToType(data['nick_name'], 'String');
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('marital_status')) {
          obj['marital_status'] = _ApiClient["default"].convertToType(data['marital_status'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('blood_group')) {
          obj['blood_group'] = _ApiClient["default"].convertToType(data['blood_group'], 'String');
        }

        if (data.hasOwnProperty('emergency_contacts')) {
          obj['emergency_contacts'] = _ApiClient["default"].convertToType(data['emergency_contacts'], [_EmployeeEmergencyContact["default"]]);
        }

        if (data.hasOwnProperty('social_profiles')) {
          obj['social_profiles'] = _ApiClient["default"].convertToType(data['social_profiles'], [_EmployeeSocialProfiles["default"]]);
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _EmployeeDetailAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('communication_address')) {
          obj['communication_address'] = _EmployeeDetailCommunicationAddress["default"].constructFromObject(data['communication_address']);
        }

        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], [_EmployeePhoneNumber["default"]]);
        }

        if (data.hasOwnProperty('secondary_last_name')) {
          obj['secondary_last_name'] = _ApiClient["default"].convertToType(data['secondary_last_name'], 'String');
        }

        if (data.hasOwnProperty('heriditary_last_name')) {
          obj['heriditary_last_name'] = _ApiClient["default"].convertToType(data['heriditary_last_name'], 'String');
        }

        if (data.hasOwnProperty('legal_name')) {
          obj['legal_name'] = _ApiClient["default"].convertToType(data['legal_name'], 'String');
        }

        if (data.hasOwnProperty('previous_name')) {
          obj['previous_name'] = _ApiClient["default"].convertToType(data['previous_name'], 'String');
        }

        if (data.hasOwnProperty('previous_name_change_date')) {
          obj['previous_name_change_date'] = _ApiClient["default"].convertToType(data['previous_name_change_date'], 'Date');
        }

        if (data.hasOwnProperty('place_of_birth')) {
          obj['place_of_birth'] = _ApiClient["default"].convertToType(data['place_of_birth'], Object);
        }

        if (data.hasOwnProperty('im_address')) {
          obj['im_address'] = _ApiClient["default"].convertToType(data['im_address'], Object);
        }

        if (data.hasOwnProperty('country_of_birth')) {
          obj['country_of_birth'] = _ApiClient["default"].convertToType(data['country_of_birth'], 'String');
        }

        if (data.hasOwnProperty('flsa_required')) {
          obj['flsa_required'] = _ApiClient["default"].convertToType(data['flsa_required'], 'Boolean');
        }

        if (data.hasOwnProperty('designation')) {
          obj['designation'] = _ApiClient["default"].convertToType(data['designation'], 'String');
        }

        if (data.hasOwnProperty('joining_date')) {
          obj['joining_date'] = _ApiClient["default"].convertToType(data['joining_date'], 'Date');
        }

        if (data.hasOwnProperty('probation_start_date')) {
          obj['probation_start_date'] = _ApiClient["default"].convertToType(data['probation_start_date'], 'Date');
        }

        if (data.hasOwnProperty('probation_end_date')) {
          obj['probation_end_date'] = _ApiClient["default"].convertToType(data['probation_end_date'], 'Date');
        }

        if (data.hasOwnProperty('job_code')) {
          obj['job_code'] = _ApiClient["default"].convertToType(data['job_code'], 'String');
        }

        if (data.hasOwnProperty('job_exempt')) {
          obj['job_exempt'] = _ApiClient["default"].convertToType(data['job_exempt'], 'String');
        }

        if (data.hasOwnProperty('scheduled_weekly_hours')) {
          obj['scheduled_weekly_hours'] = _ApiClient["default"].convertToType(data['scheduled_weekly_hours'], 'Number');
        }

        if (data.hasOwnProperty('work_hours')) {
          obj['work_hours'] = _ApiClient["default"].convertToType(data['work_hours'], 'Number');
        }

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'String');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'String');
        }

        if (data.hasOwnProperty('employment_end_date')) {
          obj['employment_end_date'] = _ApiClient["default"].convertToType(data['employment_end_date'], 'Date');
        }

        if (data.hasOwnProperty('retirement_eligibility_date')) {
          obj['retirement_eligibility_date'] = _ApiClient["default"].convertToType(data['retirement_eligibility_date'], 'Date');
        }

        if (data.hasOwnProperty('expected_retirement_date')) {
          obj['expected_retirement_date'] = _ApiClient["default"].convertToType(data['expected_retirement_date'], 'Date');
        }

        if (data.hasOwnProperty('actual_retirement_date')) {
          obj['actual_retirement_date'] = _ApiClient["default"].convertToType(data['actual_retirement_date'], 'Date');
        }

        if (data.hasOwnProperty('termination_date')) {
          obj['termination_date'] = _ApiClient["default"].convertToType(data['termination_date'], 'Date');
        }

        if (data.hasOwnProperty('termination_reason')) {
          obj['termination_reason'] = _ApiClient["default"].convertToType(data['termination_reason'], 'String');
        }

        if (data.hasOwnProperty('notice_period')) {
          obj['notice_period'] = _ApiClient["default"].convertToType(data['notice_period'], 'String');
        }

        if (data.hasOwnProperty('notice_start_date')) {
          obj['notice_start_date'] = _ApiClient["default"].convertToType(data['notice_start_date'], 'Date');
        }

        if (data.hasOwnProperty('notice_end_date')) {
          obj['notice_end_date'] = _ApiClient["default"].convertToType(data['notice_end_date'], 'Date');
        }

        if (data.hasOwnProperty('custom_field_values')) {
          obj['custom_field_values'] = _CustomField["default"].constructFromObject(data['custom_field_values']);
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

        if (data.hasOwnProperty('employee_id')) {
          obj['employee_id'] = _ApiClient["default"].convertToType(data['employee_id'], 'String');
        }

        if (data.hasOwnProperty('employee_type')) {
          obj['employee_type'] = _ApiClient["default"].convertToType(data['employee_type'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('official_email')) {
          obj['official_email'] = _ApiClient["default"].convertToType(data['official_email'], 'String');
        }

        if (data.hasOwnProperty('personal_email')) {
          obj['personal_email'] = _ApiClient["default"].convertToType(data['personal_email'], 'String');
        }

        if (data.hasOwnProperty('time_off')) {
          obj['time_off'] = _EmployeeTimeoff["default"].constructFromObject(data['time_off']);
        }

        if (data.hasOwnProperty('branch_id')) {
          obj['branch_id'] = _ApiClient["default"].convertToType(data['branch_id'], 'Number');
        }

        if (data.hasOwnProperty('department_id')) {
          obj['department_id'] = _ApiClient["default"].convertToType(data['department_id'], 'Number');
        }

        if (data.hasOwnProperty('sub_department_id')) {
          obj['sub_department_id'] = _ApiClient["default"].convertToType(data['sub_department_id'], 'Number');
        }

        if (data.hasOwnProperty('team_id')) {
          obj['team_id'] = _ApiClient["default"].convertToType(data['team_id'], 'Number');
        }

        if (data.hasOwnProperty('business_unit_id')) {
          obj['business_unit_id'] = _ApiClient["default"].convertToType(data['business_unit_id'], 'Number');
        }

        if (data.hasOwnProperty('hr_incharge_id')) {
          obj['hr_incharge_id'] = _ApiClient["default"].convertToType(data['hr_incharge_id'], 'Number');
        }

        if (data.hasOwnProperty('level_id')) {
          obj['level_id'] = _ApiClient["default"].convertToType(data['level_id'], 'Number');
        }

        if (data.hasOwnProperty('shift_id')) {
          obj['shift_id'] = _ApiClient["default"].convertToType(data['shift_id'], 'Number');
        }

        if (data.hasOwnProperty('reporting_to_id')) {
          obj['reporting_to_id'] = _ApiClient["default"].convertToType(data['reporting_to_id'], 'Number');
        }

        if (data.hasOwnProperty('cost_center_id')) {
          obj['cost_center_id'] = _ApiClient["default"].convertToType(data['cost_center_id'], 'Number');
        }

        if (data.hasOwnProperty('user_title_id')) {
          obj['user_title_id'] = _ApiClient["default"].convertToType(data['user_title_id'], 'Number');
        }

        if (data.hasOwnProperty('user_suffix_name_id')) {
          obj['user_suffix_name_id'] = _ApiClient["default"].convertToType(data['user_suffix_name_id'], 'Number');
        }

        if (data.hasOwnProperty('user_honorary_suffix_id')) {
          obj['user_honorary_suffix_id'] = _ApiClient["default"].convertToType(data['user_honorary_suffix_id'], 'Number');
        }

        if (data.hasOwnProperty('user_professional_suffix_id')) {
          obj['user_professional_suffix_id'] = _ApiClient["default"].convertToType(data['user_professional_suffix_id'], 'Number');
        }

        if (data.hasOwnProperty('user_academic_suffix_id')) {
          obj['user_academic_suffix_id'] = _ApiClient["default"].convertToType(data['user_academic_suffix_id'], 'Number');
        }

        if (data.hasOwnProperty('citizenship_status_id')) {
          obj['citizenship_status_id'] = _ApiClient["default"].convertToType(data['citizenship_status_id'], 'Number');
        }

        if (data.hasOwnProperty('retirement_status_id')) {
          obj['retirement_status_id'] = _ApiClient["default"].convertToType(data['retirement_status_id'], 'Number');
        }

        if (data.hasOwnProperty('termination_category_id')) {
          obj['termination_category_id'] = _ApiClient["default"].convertToType(data['termination_category_id'], 'Number');
        }

        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _FieldOption["default"].constructFromObject(data['cost_center']);
        }

        if (data.hasOwnProperty('user_title')) {
          obj['user_title'] = _FieldOption["default"].constructFromObject(data['user_title']);
        }

        if (data.hasOwnProperty('user_suffix_name')) {
          obj['user_suffix_name'] = _FieldOption["default"].constructFromObject(data['user_suffix_name']);
        }

        if (data.hasOwnProperty('user_honorary_suffix')) {
          obj['user_honorary_suffix'] = _FieldOption["default"].constructFromObject(data['user_honorary_suffix']);
        }

        if (data.hasOwnProperty('user_professional_suffix')) {
          obj['user_professional_suffix'] = _FieldOption["default"].constructFromObject(data['user_professional_suffix']);
        }

        if (data.hasOwnProperty('user_academic_suffix')) {
          obj['user_academic_suffix'] = _FieldOption["default"].constructFromObject(data['user_academic_suffix']);
        }

        if (data.hasOwnProperty('citizenship_status')) {
          obj['citizenship_status'] = _FieldOption["default"].constructFromObject(data['citizenship_status']);
        }

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _Branch["default"].constructFromObject(data['branch']);
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = _Team["default"].constructFromObject(data['team']);
        }

        if (data.hasOwnProperty('business_unit')) {
          obj['business_unit'] = _BusinessUnit["default"].constructFromObject(data['business_unit']);
        }

        if (data.hasOwnProperty('sub_department')) {
          obj['sub_department'] = _SubDepartment["default"].constructFromObject(data['sub_department']);
        }

        if (data.hasOwnProperty('department')) {
          obj['department'] = _Department["default"].constructFromObject(data['department']);
        }

        if (data.hasOwnProperty('reporting_to')) {
          obj['reporting_to'] = _EmployeeLiteModel["default"].constructFromObject(data['reporting_to']);
        }

        if (data.hasOwnProperty('hr_incharge')) {
          obj['hr_incharge'] = _EmployeeLiteModel["default"].constructFromObject(data['hr_incharge']);
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _Level["default"].constructFromObject(data['level']);
        }

        if (data.hasOwnProperty('shift')) {
          obj['shift'] = _FieldOption["default"].constructFromObject(data['shift']);
        }

        if (data.hasOwnProperty('user_function')) {
          obj['user_function'] = _FieldOption["default"].constructFromObject(data['user_function']);
        }

        if (data.hasOwnProperty('retirement_status')) {
          obj['retirement_status'] = _FieldOption["default"].constructFromObject(data['retirement_status']);
        }

        if (data.hasOwnProperty('termination_category')) {
          obj['termination_category'] = _FieldOption["default"].constructFromObject(data['termination_category']);
        }

        if (data.hasOwnProperty('awards')) {
          obj['awards'] = _ApiClient["default"].convertToType(data['awards'], [_EmployeeAward["default"]]);
        }

        if (data.hasOwnProperty('honors')) {
          obj['honors'] = _ApiClient["default"].convertToType(data['honors'], [_EmployeeHonor["default"]]);
        }

        if (data.hasOwnProperty('certificates')) {
          obj['certificates'] = _ApiClient["default"].convertToType(data['certificates'], [_EmployeeCertificate["default"]]);
        }

        if (data.hasOwnProperty('licenses')) {
          obj['licenses'] = _ApiClient["default"].convertToType(data['licenses'], [_EmployeeLicense["default"]]);
        }

        if (data.hasOwnProperty('background_verification_details')) {
          obj['background_verification_details'] = _ApiClient["default"].convertToType(data['background_verification_details'], [_EmployeeBackGroundVerificationDetail["default"]]);
        }

        if (data.hasOwnProperty('government_documents')) {
          obj['government_documents'] = _ApiClient["default"].convertToType(data['government_documents'], [_EmployeeGovernmentDocument["default"]]);
        }

        if (data.hasOwnProperty('dependents')) {
          obj['dependents'] = _ApiClient["default"].convertToType(data['dependents'], [_EmployeeDependent["default"]]);
        }

        if (data.hasOwnProperty('bank_accounts')) {
          obj['bank_accounts'] = _ApiClient["default"].convertToType(data['bank_accounts'], [_EmployeeBankAccount["default"]]);
        }

        if (data.hasOwnProperty('prev_employments')) {
          obj['prev_employments'] = _ApiClient["default"].convertToType(data['prev_employments'], [_EmployeePosition["default"]]);
        }

        if (data.hasOwnProperty('qualifications')) {
          obj['qualifications'] = _ApiClient["default"].convertToType(data['qualifications'], [_EmployeeQualification["default"]]);
        }

        if (data.hasOwnProperty('compensation_details')) {
          obj['compensation_details'] = _ApiClient["default"].convertToType(data['compensation_details'], [_EmployeeCompensationDetail["default"]]);
        }

        if (data.hasOwnProperty('bonuses')) {
          obj['bonuses'] = _ApiClient["default"].convertToType(data['bonuses'], [_EmployeeBonus["default"]]);
        }

        if (data.hasOwnProperty('stocks')) {
          obj['stocks'] = _ApiClient["default"].convertToType(data['stocks'], [_EmployeeStock["default"]]);
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], [_Role["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EmployeeDetail;
}();
/**
 * @member {Number} id
 */


EmployeeDetail.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

EmployeeDetail.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

EmployeeDetail.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeDetail.prototype['deleted'] = undefined;
/**
 * @member {module:model/EmployeeDetail.EeoVeteranEnum} eeo_veteran
 */

EmployeeDetail.prototype['eeo_veteran'] = undefined;
/**
 * @member {module:model/EmployeeDetail.EeoEthnicityEnum} eeo_ethnicity
 */

EmployeeDetail.prototype['eeo_ethnicity'] = undefined;
/**
 * @member {module:model/EmployeeDetail.EeoDisabledEnum} eeo_disabled
 */

EmployeeDetail.prototype['eeo_disabled'] = undefined;
/**
 * @member {module:model/EmployeeDetail.EeoJobCategoryEnum} eeo_job_category
 */

EmployeeDetail.prototype['eeo_job_category'] = undefined;
/**
 * @member {String} eeo_company_code
 */

EmployeeDetail.prototype['eeo_company_code'] = undefined;
/**
 * @member {String} hire_reason
 */

EmployeeDetail.prototype['hire_reason'] = undefined;
/**
 * @member {String} id_card_details
 */

EmployeeDetail.prototype['id_card_details'] = undefined;
/**
 * @member {String} workstation_number
 */

EmployeeDetail.prototype['workstation_number'] = undefined;
/**
 * @member {String} secondary_business_email
 */

EmployeeDetail.prototype['secondary_business_email'] = undefined;
/**
 * @member {Array.<module:model/EmployeeWorkPhoneNumber>} work_numbers
 */

EmployeeDetail.prototype['work_numbers'] = undefined;
/**
 * @member {String} nick_name
 */

EmployeeDetail.prototype['nick_name'] = undefined;
/**
 * @member {Date} date_of_birth
 */

EmployeeDetail.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/EmployeeDetail.MaritalStatusEnum} marital_status
 */

EmployeeDetail.prototype['marital_status'] = undefined;
/**
 * @member {module:model/EmployeeDetail.GenderEnum} gender
 */

EmployeeDetail.prototype['gender'] = undefined;
/**
 * @member {module:model/EmployeeDetail.BloodGroupEnum} blood_group
 */

EmployeeDetail.prototype['blood_group'] = undefined;
/**
 * @member {Array.<module:model/EmployeeEmergencyContact>} emergency_contacts
 */

EmployeeDetail.prototype['emergency_contacts'] = undefined;
/**
 * @member {Array.<module:model/EmployeeSocialProfiles>} social_profiles
 */

EmployeeDetail.prototype['social_profiles'] = undefined;
/**
 * @member {module:model/EmployeeDetailAddress} address
 */

EmployeeDetail.prototype['address'] = undefined;
/**
 * @member {module:model/EmployeeDetailCommunicationAddress} communication_address
 */

EmployeeDetail.prototype['communication_address'] = undefined;
/**
 * @member {Array.<module:model/EmployeePhoneNumber>} phone_numbers
 */

EmployeeDetail.prototype['phone_numbers'] = undefined;
/**
 * @member {String} secondary_last_name
 */

EmployeeDetail.prototype['secondary_last_name'] = undefined;
/**
 * @member {String} heriditary_last_name
 */

EmployeeDetail.prototype['heriditary_last_name'] = undefined;
/**
 * @member {String} legal_name
 */

EmployeeDetail.prototype['legal_name'] = undefined;
/**
 * @member {String} previous_name
 */

EmployeeDetail.prototype['previous_name'] = undefined;
/**
 * @member {Date} previous_name_change_date
 */

EmployeeDetail.prototype['previous_name_change_date'] = undefined;
/**
 * @member {Object} place_of_birth
 */

EmployeeDetail.prototype['place_of_birth'] = undefined;
/**
 * @member {Object} im_address
 */

EmployeeDetail.prototype['im_address'] = undefined;
/**
 * @member {String} country_of_birth
 */

EmployeeDetail.prototype['country_of_birth'] = undefined;
/**
 * @member {Boolean} flsa_required
 */

EmployeeDetail.prototype['flsa_required'] = undefined;
/**
 * @member {String} designation
 */

EmployeeDetail.prototype['designation'] = undefined;
/**
 * @member {Date} joining_date
 */

EmployeeDetail.prototype['joining_date'] = undefined;
/**
 * @member {Date} probation_start_date
 */

EmployeeDetail.prototype['probation_start_date'] = undefined;
/**
 * @member {Date} probation_end_date
 */

EmployeeDetail.prototype['probation_end_date'] = undefined;
/**
 * @member {String} job_code
 */

EmployeeDetail.prototype['job_code'] = undefined;
/**
 * @member {module:model/EmployeeDetail.JobExemptEnum} job_exempt
 */

EmployeeDetail.prototype['job_exempt'] = undefined;
/**
 * @member {Number} scheduled_weekly_hours
 */

EmployeeDetail.prototype['scheduled_weekly_hours'] = undefined;
/**
 * @member {Number} work_hours
 */

EmployeeDetail.prototype['work_hours'] = undefined;
/**
 * @member {String} start_time
 */

EmployeeDetail.prototype['start_time'] = undefined;
/**
 * @member {String} end_time
 */

EmployeeDetail.prototype['end_time'] = undefined;
/**
 * @member {Date} employment_end_date
 */

EmployeeDetail.prototype['employment_end_date'] = undefined;
/**
 * @member {Date} retirement_eligibility_date
 */

EmployeeDetail.prototype['retirement_eligibility_date'] = undefined;
/**
 * @member {Date} expected_retirement_date
 */

EmployeeDetail.prototype['expected_retirement_date'] = undefined;
/**
 * @member {Date} actual_retirement_date
 */

EmployeeDetail.prototype['actual_retirement_date'] = undefined;
/**
 * @member {Date} termination_date
 */

EmployeeDetail.prototype['termination_date'] = undefined;
/**
 * @member {String} termination_reason
 */

EmployeeDetail.prototype['termination_reason'] = undefined;
/**
 * @member {String} notice_period
 */

EmployeeDetail.prototype['notice_period'] = undefined;
/**
 * @member {Date} notice_start_date
 */

EmployeeDetail.prototype['notice_start_date'] = undefined;
/**
 * @member {Date} notice_end_date
 */

EmployeeDetail.prototype['notice_end_date'] = undefined;
/**
 * @member {module:model/CustomField} custom_field_values
 */

EmployeeDetail.prototype['custom_field_values'] = undefined;
/**
 * @member {String} first_name
 */

EmployeeDetail.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

EmployeeDetail.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

EmployeeDetail.prototype['last_name'] = undefined;
/**
 * @member {String} employee_id
 */

EmployeeDetail.prototype['employee_id'] = undefined;
/**
 * @member {String} employee_type
 */

EmployeeDetail.prototype['employee_type'] = undefined;
/**
 * @member {module:model/EmployeeDetail.StatusEnum} status
 */

EmployeeDetail.prototype['status'] = undefined;
/**
 * @member {String} official_email
 */

EmployeeDetail.prototype['official_email'] = undefined;
/**
 * @member {String} personal_email
 */

EmployeeDetail.prototype['personal_email'] = undefined;
/**
 * @member {module:model/EmployeeTimeoff} time_off
 */

EmployeeDetail.prototype['time_off'] = undefined;
/**
 * @member {Number} branch_id
 */

EmployeeDetail.prototype['branch_id'] = undefined;
/**
 * @member {Number} department_id
 */

EmployeeDetail.prototype['department_id'] = undefined;
/**
 * @member {Number} sub_department_id
 */

EmployeeDetail.prototype['sub_department_id'] = undefined;
/**
 * @member {Number} team_id
 */

EmployeeDetail.prototype['team_id'] = undefined;
/**
 * @member {Number} business_unit_id
 */

EmployeeDetail.prototype['business_unit_id'] = undefined;
/**
 * @member {Number} hr_incharge_id
 */

EmployeeDetail.prototype['hr_incharge_id'] = undefined;
/**
 * @member {Number} level_id
 */

EmployeeDetail.prototype['level_id'] = undefined;
/**
 * @member {Number} shift_id
 */

EmployeeDetail.prototype['shift_id'] = undefined;
/**
 * @member {Number} reporting_to_id
 */

EmployeeDetail.prototype['reporting_to_id'] = undefined;
/**
 * @member {Number} cost_center_id
 */

EmployeeDetail.prototype['cost_center_id'] = undefined;
/**
 * @member {Number} user_title_id
 */

EmployeeDetail.prototype['user_title_id'] = undefined;
/**
 * @member {Number} user_suffix_name_id
 */

EmployeeDetail.prototype['user_suffix_name_id'] = undefined;
/**
 * @member {Number} user_honorary_suffix_id
 */

EmployeeDetail.prototype['user_honorary_suffix_id'] = undefined;
/**
 * @member {Number} user_professional_suffix_id
 */

EmployeeDetail.prototype['user_professional_suffix_id'] = undefined;
/**
 * @member {Number} user_academic_suffix_id
 */

EmployeeDetail.prototype['user_academic_suffix_id'] = undefined;
/**
 * @member {Number} citizenship_status_id
 */

EmployeeDetail.prototype['citizenship_status_id'] = undefined;
/**
 * @member {Number} retirement_status_id
 */

EmployeeDetail.prototype['retirement_status_id'] = undefined;
/**
 * @member {Number} termination_category_id
 */

EmployeeDetail.prototype['termination_category_id'] = undefined;
/**
 * @member {module:model/FieldOption} cost_center
 */

EmployeeDetail.prototype['cost_center'] = undefined;
/**
 * @member {module:model/FieldOption} user_title
 */

EmployeeDetail.prototype['user_title'] = undefined;
/**
 * @member {module:model/FieldOption} user_suffix_name
 */

EmployeeDetail.prototype['user_suffix_name'] = undefined;
/**
 * @member {module:model/FieldOption} user_honorary_suffix
 */

EmployeeDetail.prototype['user_honorary_suffix'] = undefined;
/**
 * @member {module:model/FieldOption} user_professional_suffix
 */

EmployeeDetail.prototype['user_professional_suffix'] = undefined;
/**
 * @member {module:model/FieldOption} user_academic_suffix
 */

EmployeeDetail.prototype['user_academic_suffix'] = undefined;
/**
 * @member {module:model/FieldOption} citizenship_status
 */

EmployeeDetail.prototype['citizenship_status'] = undefined;
/**
 * @member {module:model/Branch} branch
 */

EmployeeDetail.prototype['branch'] = undefined;
/**
 * @member {module:model/Team} team
 */

EmployeeDetail.prototype['team'] = undefined;
/**
 * @member {module:model/BusinessUnit} business_unit
 */

EmployeeDetail.prototype['business_unit'] = undefined;
/**
 * @member {module:model/SubDepartment} sub_department
 */

EmployeeDetail.prototype['sub_department'] = undefined;
/**
 * @member {module:model/Department} department
 */

EmployeeDetail.prototype['department'] = undefined;
/**
 * @member {module:model/EmployeeLiteModel} reporting_to
 */

EmployeeDetail.prototype['reporting_to'] = undefined;
/**
 * @member {module:model/EmployeeLiteModel} hr_incharge
 */

EmployeeDetail.prototype['hr_incharge'] = undefined;
/**
 * @member {module:model/Level} level
 */

EmployeeDetail.prototype['level'] = undefined;
/**
 * @member {module:model/FieldOption} shift
 */

EmployeeDetail.prototype['shift'] = undefined;
/**
 * @member {module:model/FieldOption} user_function
 */

EmployeeDetail.prototype['user_function'] = undefined;
/**
 * @member {module:model/FieldOption} retirement_status
 */

EmployeeDetail.prototype['retirement_status'] = undefined;
/**
 * @member {module:model/FieldOption} termination_category
 */

EmployeeDetail.prototype['termination_category'] = undefined;
/**
 * @member {Array.<module:model/EmployeeAward>} awards
 */

EmployeeDetail.prototype['awards'] = undefined;
/**
 * @member {Array.<module:model/EmployeeHonor>} honors
 */

EmployeeDetail.prototype['honors'] = undefined;
/**
 * @member {Array.<module:model/EmployeeCertificate>} certificates
 */

EmployeeDetail.prototype['certificates'] = undefined;
/**
 * @member {Array.<module:model/EmployeeLicense>} licenses
 */

EmployeeDetail.prototype['licenses'] = undefined;
/**
 * @member {Array.<module:model/EmployeeBackGroundVerificationDetail>} background_verification_details
 */

EmployeeDetail.prototype['background_verification_details'] = undefined;
/**
 * @member {Array.<module:model/EmployeeGovernmentDocument>} government_documents
 */

EmployeeDetail.prototype['government_documents'] = undefined;
/**
 * @member {Array.<module:model/EmployeeDependent>} dependents
 */

EmployeeDetail.prototype['dependents'] = undefined;
/**
 * @member {Array.<module:model/EmployeeBankAccount>} bank_accounts
 */

EmployeeDetail.prototype['bank_accounts'] = undefined;
/**
 * @member {Array.<module:model/EmployeePosition>} prev_employments
 */

EmployeeDetail.prototype['prev_employments'] = undefined;
/**
 * @member {Array.<module:model/EmployeeQualification>} qualifications
 */

EmployeeDetail.prototype['qualifications'] = undefined;
/**
 * @member {Array.<module:model/EmployeeCompensationDetail>} compensation_details
 */

EmployeeDetail.prototype['compensation_details'] = undefined;
/**
 * @member {Array.<module:model/EmployeeBonus>} bonuses
 */

EmployeeDetail.prototype['bonuses'] = undefined;
/**
 * @member {Array.<module:model/EmployeeStock>} stocks
 */

EmployeeDetail.prototype['stocks'] = undefined;
/**
 * @member {Array.<module:model/Role>} roles
 */

EmployeeDetail.prototype['roles'] = undefined;
/**
 * Allowed values for the <code>eeo_veteran</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['EeoVeteranEnum'] = {
  /**
   * value: "protected_veteran"
   * @const
   */
  "protected_veteran": "protected_veteran",

  /**
   * value: "not_protected_veteran"
   * @const
   */
  "not_protected_veteran": "not_protected_veteran",

  /**
   * value: "dont_wish_to_answer"
   * @const
   */
  "dont_wish_to_answer": "dont_wish_to_answer"
};
/**
 * Allowed values for the <code>eeo_ethnicity</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['EeoEthnicityEnum'] = {
  /**
   * value: "american_indian_or_alaska_native"
   * @const
   */
  "american_indian_or_alaska_native": "american_indian_or_alaska_native",

  /**
   * value: "asian_or_indian_subcontinent"
   * @const
   */
  "asian_or_indian_subcontinent": "asian_or_indian_subcontinent",

  /**
   * value: "black_or_african_american"
   * @const
   */
  "black_or_african_american": "black_or_african_american",

  /**
   * value: "hispanic_or_latino"
   * @const
   */
  "hispanic_or_latino": "hispanic_or_latino",

  /**
   * value: "native_hawaiian_or_other_pacific_islander"
   * @const
   */
  "native_hawaiian_or_other_pacific_islander": "native_hawaiian_or_other_pacific_islander",

  /**
   * value: "two_or_more_races"
   * @const
   */
  "two_or_more_races": "two_or_more_races",

  /**
   * value: "white"
   * @const
   */
  "white": "white",

  /**
   * value: "dont_wish_to_answer"
   * @const
   */
  "dont_wish_to_answer": "dont_wish_to_answer"
};
/**
 * Allowed values for the <code>eeo_disabled</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['EeoDisabledEnum'] = {
  /**
   * value: "yes"
   * @const
   */
  "yes": "yes",

  /**
   * value: "no"
   * @const
   */
  "no": "no",

  /**
   * value: "dont_wish_to_answer"
   * @const
   */
  "dont_wish_to_answer": "dont_wish_to_answer"
};
/**
 * Allowed values for the <code>eeo_job_category</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['EeoJobCategoryEnum'] = {
  /**
   * value: "executive_senior_level_managers"
   * @const
   */
  "executive_senior_level_managers": "executive_senior_level_managers",

  /**
   * value: "first_mid_level_managers"
   * @const
   */
  "first_mid_level_managers": "first_mid_level_managers",

  /**
   * value: "professionals"
   * @const
   */
  "professionals": "professionals",

  /**
   * value: "technicians"
   * @const
   */
  "technicians": "technicians",

  /**
   * value: "sales_workers"
   * @const
   */
  "sales_workers": "sales_workers",

  /**
   * value: "administrative_support_workers"
   * @const
   */
  "administrative_support_workers": "administrative_support_workers",

  /**
   * value: "craft_workers"
   * @const
   */
  "craft_workers": "craft_workers",

  /**
   * value: "operatives"
   * @const
   */
  "operatives": "operatives",

  /**
   * value: "laborers_and_helpers"
   * @const
   */
  "laborers_and_helpers": "laborers_and_helpers",

  /**
   * value: "service_workers"
   * @const
   */
  "service_workers": "service_workers"
};
/**
 * Allowed values for the <code>marital_status</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['MaritalStatusEnum'] = {
  /**
   * value: "single"
   * @const
   */
  "single": "single",

  /**
   * value: "married"
   * @const
   */
  "married": "married"
};
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['GenderEnum'] = {
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
/**
 * Allowed values for the <code>blood_group</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['BloodGroupEnum'] = {
  /**
   * value: "A−"
   * @const
   */
  "A−": "A−",

  /**
   * value: "B−"
   * @const
   */
  "B−": "B−",

  /**
   * value: "O−"
   * @const
   */
  "O−": "O−",

  /**
   * value: "B+"
   * @const
   */
  "B+": "B+",

  /**
   * value: "O+"
   * @const
   */
  "O+": "O+",

  /**
   * value: "A+"
   * @const
   */
  "A+": "A+",

  /**
   * value: "A1+"
   * @const
   */
  "A1+": "A1+",

  /**
   * value: "A1B-"
   * @const
   */
  "A1B-": "A1B-",

  /**
   * value: "AB+"
   * @const
   */
  "AB+": "AB+",

  /**
   * value: "AB-"
   * @const
   */
  "AB-": "AB-",

  /**
   * value: "A1B+"
   * @const
   */
  "A1B+": "A1B+",

  /**
   * value: "A2+"
   * @const
   */
  "A2+": "A2+",

  /**
   * value: "A2B-"
   * @const
   */
  "A2B-": "A2B-",

  /**
   * value: "A2B+"
   * @const
   */
  "A2B+": "A2B+",

  /**
   * value: "A1-"
   * @const
   */
  "A1-": "A1-"
};
/**
 * Allowed values for the <code>job_exempt</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['JobExemptEnum'] = {
  /**
   * value: "exempted"
   * @const
   */
  "exempted": "exempted",

  /**
   * value: "not_exempted"
   * @const
   */
  "not_exempted": "not_exempted"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDetail['StatusEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "inactive"
   * @const
   */
  "inactive": "inactive"
};
var _default = EmployeeDetail;
exports["default"] = _default;