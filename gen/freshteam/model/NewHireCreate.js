"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

var _NewHireCreateCustomFields = _interopRequireDefault(require("./NewHireCreateCustomFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewHireCreate model module.
 * @module model/NewHireCreate
 * @version 1.0.0
 */
var NewHireCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewHireCreate</code>.
   * @alias module:model/NewHireCreate
   * @param firstName {String} 
   * @param lastName {String} 
   * @param personalEmail {String} 
   * @param joiningDate {Date} 
   */
  function NewHireCreate(firstName, lastName, personalEmail, joiningDate) {
    _classCallCheck(this, NewHireCreate);

    NewHireCreate.initialize(this, firstName, lastName, personalEmail, joiningDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewHireCreate, null, [{
    key: "initialize",
    value: function initialize(obj, firstName, lastName, personalEmail, joiningDate) {
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
      obj['personal_email'] = personalEmail;
      obj['joining_date'] = joiningDate;
    }
    /**
     * Constructs a <code>NewHireCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewHireCreate} obj Optional instance to populate.
     * @return {module:model/NewHireCreate} The populated <code>NewHireCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewHireCreate();

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient["default"].convertToType(data['middle_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('official_email')) {
          obj['official_email'] = _ApiClient["default"].convertToType(data['official_email'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('employee_id')) {
          obj['employee_id'] = _ApiClient["default"].convertToType(data['employee_id'], 'String');
        }

        if (data.hasOwnProperty('employee_type')) {
          obj['employee_type'] = _ApiClient["default"].convertToType(data['employee_type'], 'String');
        }

        if (data.hasOwnProperty('personal_email')) {
          obj['personal_email'] = _ApiClient["default"].convertToType(data['personal_email'], 'String');
        }

        if (data.hasOwnProperty('work_numbers')) {
          obj['work_numbers'] = _ApiClient["default"].convertToType(data['work_numbers'], [Object]);
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('designation')) {
          obj['designation'] = _ApiClient["default"].convertToType(data['designation'], 'String');
        }

        if (data.hasOwnProperty('joining_date')) {
          obj['joining_date'] = _ApiClient["default"].convertToType(data['joining_date'], 'Date');
        }

        if (data.hasOwnProperty('hired_on')) {
          obj['hired_on'] = _ApiClient["default"].convertToType(data['hired_on'], 'Date');
        }

        if (data.hasOwnProperty('branch_id')) {
          obj['branch_id'] = _ApiClient["default"].convertToType(data['branch_id'], 'Number');
        }

        if (data.hasOwnProperty('hr_incharge_id')) {
          obj['hr_incharge_id'] = _ApiClient["default"].convertToType(data['hr_incharge_id'], 'Number');
        }

        if (data.hasOwnProperty('reporting_to_id')) {
          obj['reporting_to_id'] = _ApiClient["default"].convertToType(data['reporting_to_id'], 'Number');
        }

        if (data.hasOwnProperty('department_id')) {
          obj['department_id'] = _ApiClient["default"].convertToType(data['department_id'], 'Number');
        }

        if (data.hasOwnProperty('sub_department_id')) {
          obj['sub_department_id'] = _ApiClient["default"].convertToType(data['sub_department_id'], 'Number');
        }

        if (data.hasOwnProperty('shift_id')) {
          obj['shift_id'] = _ApiClient["default"].convertToType(data['shift_id'], 'Number');
        }

        if (data.hasOwnProperty('job_role_id')) {
          obj['job_role_id'] = _ApiClient["default"].convertToType(data['job_role_id'], 'Number');
        }

        if (data.hasOwnProperty('team_id')) {
          obj['team_id'] = _ApiClient["default"].convertToType(data['team_id'], 'Number');
        }

        if (data.hasOwnProperty('level_id')) {
          obj['level_id'] = _ApiClient["default"].convertToType(data['level_id'], 'Number');
        }

        if (data.hasOwnProperty('blood_group')) {
          obj['blood_group'] = _ApiClient["default"].convertToType(data['blood_group'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _Address["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('communication_address')) {
          obj['communication_address'] = _Address["default"].constructFromObject(data['communication_address']);
        }

        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _NewHireCreateCustomFields["default"].constructFromObject(data['custom_fields']);
        }
      }

      return obj;
    }
  }]);

  return NewHireCreate;
}();
/**
 * @member {String} first_name
 */


NewHireCreate.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

NewHireCreate.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

NewHireCreate.prototype['last_name'] = undefined;
/**
 * @member {String} official_email
 */

NewHireCreate.prototype['official_email'] = undefined;
/**
 * @member {String} status
 */

NewHireCreate.prototype['status'] = undefined;
/**
 * @member {String} employee_id
 */

NewHireCreate.prototype['employee_id'] = undefined;
/**
 * @member {String} employee_type
 */

NewHireCreate.prototype['employee_type'] = undefined;
/**
 * @member {String} personal_email
 */

NewHireCreate.prototype['personal_email'] = undefined;
/**
 * @member {Array.<Object>} work_numbers
 */

NewHireCreate.prototype['work_numbers'] = undefined;
/**
 * @member {Date} date_of_birth
 */

NewHireCreate.prototype['date_of_birth'] = undefined;
/**
 * @member {String} designation
 */

NewHireCreate.prototype['designation'] = undefined;
/**
 * @member {Date} joining_date
 */

NewHireCreate.prototype['joining_date'] = undefined;
/**
 * @member {Date} hired_on
 */

NewHireCreate.prototype['hired_on'] = undefined;
/**
 * @member {Number} branch_id
 */

NewHireCreate.prototype['branch_id'] = undefined;
/**
 * @member {Number} hr_incharge_id
 */

NewHireCreate.prototype['hr_incharge_id'] = undefined;
/**
 * @member {Number} reporting_to_id
 */

NewHireCreate.prototype['reporting_to_id'] = undefined;
/**
 * @member {Number} department_id
 */

NewHireCreate.prototype['department_id'] = undefined;
/**
 * @member {Number} sub_department_id
 */

NewHireCreate.prototype['sub_department_id'] = undefined;
/**
 * @member {Number} shift_id
 */

NewHireCreate.prototype['shift_id'] = undefined;
/**
 * @member {Number} job_role_id
 */

NewHireCreate.prototype['job_role_id'] = undefined;
/**
 * @member {Number} team_id
 */

NewHireCreate.prototype['team_id'] = undefined;
/**
 * @member {Number} level_id
 */

NewHireCreate.prototype['level_id'] = undefined;
/**
 * @member {module:model/NewHireCreate.BloodGroupEnum} blood_group
 */

NewHireCreate.prototype['blood_group'] = undefined;
/**
 * @member {module:model/NewHireCreate.GenderEnum} gender
 */

NewHireCreate.prototype['gender'] = undefined;
/**
 * @member {module:model/Address} address
 */

NewHireCreate.prototype['address'] = undefined;
/**
 * @member {module:model/Address} communication_address
 */

NewHireCreate.prototype['communication_address'] = undefined;
/**
 * @member {module:model/NewHireCreateCustomFields} custom_fields
 */

NewHireCreate.prototype['custom_fields'] = undefined;
/**
 * Allowed values for the <code>blood_group</code> property.
 * @enum {String}
 * @readonly
 */

NewHireCreate['BloodGroupEnum'] = {
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
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

NewHireCreate['GenderEnum'] = {
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
var _default = NewHireCreate;
exports["default"] = _default;