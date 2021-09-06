"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("./Branch"));

var _CustomField = _interopRequireDefault(require("./CustomField"));

var _Department = _interopRequireDefault(require("./Department"));

var _EmployeeAward = _interopRequireDefault(require("./EmployeeAward"));

var _EmployeeBackGroundVerificationDetail = _interopRequireDefault(require("./EmployeeBackGroundVerificationDetail"));

var _EmployeeBankAccount = _interopRequireDefault(require("./EmployeeBankAccount"));

var _EmployeeBonus = _interopRequireDefault(require("./EmployeeBonus"));

var _EmployeeCertificate = _interopRequireDefault(require("./EmployeeCertificate"));

var _EmployeeCompensationDetail = _interopRequireDefault(require("./EmployeeCompensationDetail"));

var _EmployeeDependent = _interopRequireDefault(require("./EmployeeDependent"));

var _EmployeeGovernmentDocument = _interopRequireDefault(require("./EmployeeGovernmentDocument"));

var _EmployeeHonor = _interopRequireDefault(require("./EmployeeHonor"));

var _EmployeeLicense = _interopRequireDefault(require("./EmployeeLicense"));

var _EmployeeLiteModel = _interopRequireDefault(require("./EmployeeLiteModel"));

var _EmployeePhoneNumber = _interopRequireDefault(require("./EmployeePhoneNumber"));

var _EmployeePosition = _interopRequireDefault(require("./EmployeePosition"));

var _EmployeeQualification = _interopRequireDefault(require("./EmployeeQualification"));

var _EmployeeStock = _interopRequireDefault(require("./EmployeeStock"));

var _EmployeeTimeoff = _interopRequireDefault(require("./EmployeeTimeoff"));

var _EmployeeWorkPhoneNumber = _interopRequireDefault(require("./EmployeeWorkPhoneNumber"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewHire model module.
 * @module model/NewHire
 * @version 1.0.0
 */
var NewHire = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewHire</code>.
   * @alias module:model/NewHire
   */
  function NewHire() {
    _classCallCheck(this, NewHire);

    NewHire.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewHire, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewHire</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewHire} obj Optional instance to populate.
     * @return {module:model/NewHire} The populated <code>NewHire</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewHire();

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

        if (data.hasOwnProperty('work_numbers')) {
          obj['work_numbers'] = _ApiClient["default"].convertToType(data['work_numbers'], [_EmployeeWorkPhoneNumber["default"]]);
        }

        if (data.hasOwnProperty('nick_name')) {
          obj['nick_name'] = _ApiClient["default"].convertToType(data['nick_name'], 'String');
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('designation')) {
          obj['designation'] = _ApiClient["default"].convertToType(data['designation'], 'String');
        }

        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], [_EmployeePhoneNumber["default"]]);
        }

        if (data.hasOwnProperty('joining_date')) {
          obj['joining_date'] = _ApiClient["default"].convertToType(data['joining_date'], 'Date');
        }

        if (data.hasOwnProperty('termination_date')) {
          obj['termination_date'] = _ApiClient["default"].convertToType(data['termination_date'], 'Date');
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

        if (data.hasOwnProperty('hired_on')) {
          obj['hired_on'] = _ApiClient["default"].convertToType(data['hired_on'], 'Date');
        }

        if (data.hasOwnProperty('no_show')) {
          obj['no_show'] = _ApiClient["default"].convertToType(data['no_show'], 'Boolean');
        }

        if (data.hasOwnProperty('no_show_reason')) {
          obj['no_show_reason'] = _ApiClient["default"].convertToType(data['no_show_reason'], 'String');
        }

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _Branch["default"].constructFromObject(data['branch']);
        }

        if (data.hasOwnProperty('reporting_to')) {
          obj['reporting_to'] = _EmployeeLiteModel["default"].constructFromObject(data['reporting_to']);
        }

        if (data.hasOwnProperty('hr_incharge')) {
          obj['hr_incharge'] = _EmployeeLiteModel["default"].constructFromObject(data['hr_incharge']);
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = _Team["default"].constructFromObject(data['team']);
        }

        if (data.hasOwnProperty('department')) {
          obj['department'] = _Department["default"].constructFromObject(data['department']);
        }

        if (data.hasOwnProperty('awards')) {
          obj['awards'] = _EmployeeAward["default"].constructFromObject(data['awards']);
        }

        if (data.hasOwnProperty('honors')) {
          obj['honors'] = _EmployeeHonor["default"].constructFromObject(data['honors']);
        }

        if (data.hasOwnProperty('certificates')) {
          obj['certificates'] = _EmployeeCertificate["default"].constructFromObject(data['certificates']);
        }

        if (data.hasOwnProperty('licenses')) {
          obj['licenses'] = _EmployeeLicense["default"].constructFromObject(data['licenses']);
        }

        if (data.hasOwnProperty('background_verification_details')) {
          obj['background_verification_details'] = _EmployeeBackGroundVerificationDetail["default"].constructFromObject(data['background_verification_details']);
        }

        if (data.hasOwnProperty('government_documents')) {
          obj['government_documents'] = _EmployeeGovernmentDocument["default"].constructFromObject(data['government_documents']);
        }

        if (data.hasOwnProperty('dependents')) {
          obj['dependents'] = _EmployeeDependent["default"].constructFromObject(data['dependents']);
        }

        if (data.hasOwnProperty('bank_accounts')) {
          obj['bank_accounts'] = _EmployeeBankAccount["default"].constructFromObject(data['bank_accounts']);
        }

        if (data.hasOwnProperty('prev_employments')) {
          obj['prev_employments'] = _EmployeePosition["default"].constructFromObject(data['prev_employments']);
        }

        if (data.hasOwnProperty('qualifications')) {
          obj['qualifications'] = _EmployeeQualification["default"].constructFromObject(data['qualifications']);
        }

        if (data.hasOwnProperty('compensation_details')) {
          obj['compensation_details'] = _EmployeeCompensationDetail["default"].constructFromObject(data['compensation_details']);
        }

        if (data.hasOwnProperty('bonuses')) {
          obj['bonuses'] = _EmployeeBonus["default"].constructFromObject(data['bonuses']);
        }

        if (data.hasOwnProperty('stocks')) {
          obj['stocks'] = _EmployeeStock["default"].constructFromObject(data['stocks']);
        }

        if (data.hasOwnProperty('custom_field_values')) {
          obj['custom_field_values'] = _CustomField["default"].constructFromObject(data['custom_field_values']);
        }

        if (data.hasOwnProperty('time_off')) {
          obj['time_off'] = _EmployeeTimeoff["default"].constructFromObject(data['time_off']);
        }
      }

      return obj;
    }
  }]);

  return NewHire;
}();
/**
 * @member {Number} id
 */


NewHire.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

NewHire.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

NewHire.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} deleted
 */

NewHire.prototype['deleted'] = undefined;
/**
 * @member {Array.<module:model/EmployeeWorkPhoneNumber>} work_numbers
 */

NewHire.prototype['work_numbers'] = undefined;
/**
 * @member {String} nick_name
 */

NewHire.prototype['nick_name'] = undefined;
/**
 * @member {Date} date_of_birth
 */

NewHire.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/NewHire.GenderEnum} gender
 */

NewHire.prototype['gender'] = undefined;
/**
 * @member {String} designation
 */

NewHire.prototype['designation'] = undefined;
/**
 * @member {Array.<module:model/EmployeePhoneNumber>} phone_numbers
 */

NewHire.prototype['phone_numbers'] = undefined;
/**
 * @member {Date} joining_date
 */

NewHire.prototype['joining_date'] = undefined;
/**
 * @member {Date} termination_date
 */

NewHire.prototype['termination_date'] = undefined;
/**
 * @member {String} first_name
 */

NewHire.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

NewHire.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

NewHire.prototype['last_name'] = undefined;
/**
 * @member {String} employee_id
 */

NewHire.prototype['employee_id'] = undefined;
/**
 * @member {String} employee_type
 */

NewHire.prototype['employee_type'] = undefined;
/**
 * @member {module:model/NewHire.StatusEnum} status
 */

NewHire.prototype['status'] = undefined;
/**
 * @member {String} official_email
 */

NewHire.prototype['official_email'] = undefined;
/**
 * @member {String} personal_email
 */

NewHire.prototype['personal_email'] = undefined;
/**
 * @member {Date} hired_on
 */

NewHire.prototype['hired_on'] = undefined;
/**
 * @member {Boolean} no_show
 */

NewHire.prototype['no_show'] = undefined;
/**
 * @member {String} no_show_reason
 */

NewHire.prototype['no_show_reason'] = undefined;
/**
 * @member {module:model/Branch} branch
 */

NewHire.prototype['branch'] = undefined;
/**
 * @member {module:model/EmployeeLiteModel} reporting_to
 */

NewHire.prototype['reporting_to'] = undefined;
/**
 * @member {module:model/EmployeeLiteModel} hr_incharge
 */

NewHire.prototype['hr_incharge'] = undefined;
/**
 * @member {module:model/Team} team
 */

NewHire.prototype['team'] = undefined;
/**
 * @member {module:model/Department} department
 */

NewHire.prototype['department'] = undefined;
/**
 * @member {module:model/EmployeeAward} awards
 */

NewHire.prototype['awards'] = undefined;
/**
 * @member {module:model/EmployeeHonor} honors
 */

NewHire.prototype['honors'] = undefined;
/**
 * @member {module:model/EmployeeCertificate} certificates
 */

NewHire.prototype['certificates'] = undefined;
/**
 * @member {module:model/EmployeeLicense} licenses
 */

NewHire.prototype['licenses'] = undefined;
/**
 * @member {module:model/EmployeeBackGroundVerificationDetail} background_verification_details
 */

NewHire.prototype['background_verification_details'] = undefined;
/**
 * @member {module:model/EmployeeGovernmentDocument} government_documents
 */

NewHire.prototype['government_documents'] = undefined;
/**
 * @member {module:model/EmployeeDependent} dependents
 */

NewHire.prototype['dependents'] = undefined;
/**
 * @member {module:model/EmployeeBankAccount} bank_accounts
 */

NewHire.prototype['bank_accounts'] = undefined;
/**
 * @member {module:model/EmployeePosition} prev_employments
 */

NewHire.prototype['prev_employments'] = undefined;
/**
 * @member {module:model/EmployeeQualification} qualifications
 */

NewHire.prototype['qualifications'] = undefined;
/**
 * @member {module:model/EmployeeCompensationDetail} compensation_details
 */

NewHire.prototype['compensation_details'] = undefined;
/**
 * @member {module:model/EmployeeBonus} bonuses
 */

NewHire.prototype['bonuses'] = undefined;
/**
 * @member {module:model/EmployeeStock} stocks
 */

NewHire.prototype['stocks'] = undefined;
/**
 * @member {module:model/CustomField} custom_field_values
 */

NewHire.prototype['custom_field_values'] = undefined;
/**
 * @member {module:model/EmployeeTimeoff} time_off
 */

NewHire.prototype['time_off'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

NewHire['GenderEnum'] = {
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
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

NewHire['StatusEnum'] = {
  /**
   * value: "hired"
   * @const
   */
  "hired": "hired",

  /**
   * value: "initiated"
   * @const
   */
  "initiated": "initiated",

  /**
   * value: "submitted"
   * @const
   */
  "submitted": "submitted"
};
var _default = NewHire;
exports["default"] = _default;