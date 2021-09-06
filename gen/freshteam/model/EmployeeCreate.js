"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

var _EmployeeCreateCustomFields = _interopRequireDefault(require("./EmployeeCreateCustomFields"));

var _EmployeePhoneNumber = _interopRequireDefault(require("./EmployeePhoneNumber"));

var _EmployeeWorkPhoneNumber = _interopRequireDefault(require("./EmployeeWorkPhoneNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeCreate model module.
 * @module model/EmployeeCreate
 * @version 1.0.0
 */
var EmployeeCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeCreate</code>.
   * @alias module:model/EmployeeCreate
   * @param firstName {String} 
   * @param lastName {String} 
   * @param officialEmail {String} 
   * @param roleIds {Array.<Number>} 
   */
  function EmployeeCreate(firstName, lastName, officialEmail, roleIds) {
    _classCallCheck(this, EmployeeCreate);

    EmployeeCreate.initialize(this, firstName, lastName, officialEmail, roleIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeCreate, null, [{
    key: "initialize",
    value: function initialize(obj, firstName, lastName, officialEmail, roleIds) {
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
      obj['official_email'] = officialEmail;
      obj['role_ids'] = roleIds;
    }
    /**
     * Constructs a <code>EmployeeCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeCreate} obj Optional instance to populate.
     * @return {module:model/EmployeeCreate} The populated <code>EmployeeCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeCreate();

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

        if (data.hasOwnProperty('role_ids')) {
          obj['role_ids'] = _ApiClient["default"].convertToType(data['role_ids'], ['Number']);
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
          obj['work_numbers'] = _ApiClient["default"].convertToType(data['work_numbers'], [_EmployeeWorkPhoneNumber["default"]]);
        }

        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], [_EmployeePhoneNumber["default"]]);
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
          obj['custom_fields'] = _EmployeeCreateCustomFields["default"].constructFromObject(data['custom_fields']);
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('send_invite_email')) {
          obj['send_invite_email'] = _ApiClient["default"].convertToType(data['send_invite_email'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeCreate;
}();
/**
 * @member {String} first_name
 */


EmployeeCreate.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

EmployeeCreate.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

EmployeeCreate.prototype['last_name'] = undefined;
/**
 * @member {String} official_email
 */

EmployeeCreate.prototype['official_email'] = undefined;
/**
 * @member {Array.<Number>} role_ids
 */

EmployeeCreate.prototype['role_ids'] = undefined;
/**
 * @member {String} employee_id
 */

EmployeeCreate.prototype['employee_id'] = undefined;
/**
 * @member {String} employee_type
 */

EmployeeCreate.prototype['employee_type'] = undefined;
/**
 * @member {String} personal_email
 */

EmployeeCreate.prototype['personal_email'] = undefined;
/**
 * @member {Array.<module:model/EmployeeWorkPhoneNumber>} work_numbers
 */

EmployeeCreate.prototype['work_numbers'] = undefined;
/**
 * @member {Array.<module:model/EmployeePhoneNumber>} phone_numbers
 */

EmployeeCreate.prototype['phone_numbers'] = undefined;
/**
 * @member {Date} date_of_birth
 */

EmployeeCreate.prototype['date_of_birth'] = undefined;
/**
 * @member {String} designation
 */

EmployeeCreate.prototype['designation'] = undefined;
/**
 * @member {Date} joining_date
 */

EmployeeCreate.prototype['joining_date'] = undefined;
/**
 * @member {Number} branch_id
 */

EmployeeCreate.prototype['branch_id'] = undefined;
/**
 * @member {Number} hr_incharge_id
 */

EmployeeCreate.prototype['hr_incharge_id'] = undefined;
/**
 * @member {Number} reporting_to_id
 */

EmployeeCreate.prototype['reporting_to_id'] = undefined;
/**
 * @member {Number} department_id
 */

EmployeeCreate.prototype['department_id'] = undefined;
/**
 * @member {Number} sub_department_id
 */

EmployeeCreate.prototype['sub_department_id'] = undefined;
/**
 * @member {Number} shift_id
 */

EmployeeCreate.prototype['shift_id'] = undefined;
/**
 * @member {Number} job_role_id
 */

EmployeeCreate.prototype['job_role_id'] = undefined;
/**
 * @member {Number} team_id
 */

EmployeeCreate.prototype['team_id'] = undefined;
/**
 * @member {Number} level_id
 */

EmployeeCreate.prototype['level_id'] = undefined;
/**
 * @member {module:model/EmployeeCreate.BloodGroupEnum} blood_group
 */

EmployeeCreate.prototype['blood_group'] = undefined;
/**
 * @member {module:model/EmployeeCreate.GenderEnum} gender
 */

EmployeeCreate.prototype['gender'] = undefined;
/**
 * @member {module:model/Address} address
 */

EmployeeCreate.prototype['address'] = undefined;
/**
 * @member {module:model/Address} communication_address
 */

EmployeeCreate.prototype['communication_address'] = undefined;
/**
 * @member {module:model/EmployeeCreateCustomFields} custom_fields
 */

EmployeeCreate.prototype['custom_fields'] = undefined;
/**
 * @member {Boolean} draft
 */

EmployeeCreate.prototype['draft'] = undefined;
/**
 * @member {Boolean} send_invite_email
 */

EmployeeCreate.prototype['send_invite_email'] = undefined;
/**
 * Allowed values for the <code>blood_group</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeCreate['BloodGroupEnum'] = {
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

EmployeeCreate['GenderEnum'] = {
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
var _default = EmployeeCreate;
exports["default"] = _default;