"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeAddress = _interopRequireDefault(require("./EmployeeAddress"));

var _EmployeeCommunicationAddress = _interopRequireDefault(require("./EmployeeCommunicationAddress"));

var _EmployeePhoneNumber = _interopRequireDefault(require("./EmployeePhoneNumber"));

var _EmployeeWorkPhoneNumber = _interopRequireDefault(require("./EmployeeWorkPhoneNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Employee model module.
 * @module model/Employee
 * @version 1.0.0
 */
var Employee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Employee</code>.
   * @alias module:model/Employee
   */
  function Employee() {
    _classCallCheck(this, Employee);

    Employee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Employee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Employee} obj Optional instance to populate.
     * @return {module:model/Employee} The populated <code>Employee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Employee();

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

        if (data.hasOwnProperty('branch_id')) {
          obj['branch_id'] = _ApiClient["default"].convertToType(data['branch_id'], 'Number');
        }

        if (data.hasOwnProperty('reporting_to_id')) {
          obj['reporting_to_id'] = _ApiClient["default"].convertToType(data['reporting_to_id'], 'Number');
        }

        if (data.hasOwnProperty('hr_incharge_id')) {
          obj['hr_incharge_id'] = _ApiClient["default"].convertToType(data['hr_incharge_id'], 'Number');
        }

        if (data.hasOwnProperty('team_id')) {
          obj['team_id'] = _ApiClient["default"].convertToType(data['team_id'], 'Number');
        }

        if (data.hasOwnProperty('department_id')) {
          obj['department_id'] = _ApiClient["default"].convertToType(data['department_id'], 'Number');
        }

        if (data.hasOwnProperty('sub_department_id')) {
          obj['sub_department_id'] = _ApiClient["default"].convertToType(data['sub_department_id'], 'Number');
        }

        if (data.hasOwnProperty('business_unit_id')) {
          obj['business_unit_id'] = _ApiClient["default"].convertToType(data['business_unit_id'], 'Number');
        }

        if (data.hasOwnProperty('shift_id')) {
          obj['shift_id'] = _ApiClient["default"].convertToType(data['shift_id'], 'Number');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _EmployeeAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('communication_address')) {
          obj['communication_address'] = _EmployeeCommunicationAddress["default"].constructFromObject(data['communication_address']);
        }

        if (data.hasOwnProperty('confirmed')) {
          obj['confirmed'] = _ApiClient["default"].convertToType(data['confirmed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Employee;
}();
/**
 * @member {Number} id
 */


Employee.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Employee.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Employee.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} deleted
 */

Employee.prototype['deleted'] = undefined;
/**
 * @member {Array.<module:model/EmployeeWorkPhoneNumber>} work_numbers
 */

Employee.prototype['work_numbers'] = undefined;
/**
 * @member {String} nick_name
 */

Employee.prototype['nick_name'] = undefined;
/**
 * @member {Date} date_of_birth
 */

Employee.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/Employee.GenderEnum} gender
 */

Employee.prototype['gender'] = undefined;
/**
 * @member {String} designation
 */

Employee.prototype['designation'] = undefined;
/**
 * @member {Array.<module:model/EmployeePhoneNumber>} phone_numbers
 */

Employee.prototype['phone_numbers'] = undefined;
/**
 * @member {Date} joining_date
 */

Employee.prototype['joining_date'] = undefined;
/**
 * @member {Date} termination_date
 */

Employee.prototype['termination_date'] = undefined;
/**
 * @member {String} first_name
 */

Employee.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

Employee.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

Employee.prototype['last_name'] = undefined;
/**
 * @member {String} employee_id
 */

Employee.prototype['employee_id'] = undefined;
/**
 * @member {String} employee_type
 */

Employee.prototype['employee_type'] = undefined;
/**
 * @member {module:model/Employee.StatusEnum} status
 */

Employee.prototype['status'] = undefined;
/**
 * @member {String} official_email
 */

Employee.prototype['official_email'] = undefined;
/**
 * @member {String} personal_email
 */

Employee.prototype['personal_email'] = undefined;
/**
 * @member {Number} branch_id
 */

Employee.prototype['branch_id'] = undefined;
/**
 * @member {Number} reporting_to_id
 */

Employee.prototype['reporting_to_id'] = undefined;
/**
 * @member {Number} hr_incharge_id
 */

Employee.prototype['hr_incharge_id'] = undefined;
/**
 * @member {Number} team_id
 */

Employee.prototype['team_id'] = undefined;
/**
 * @member {Number} department_id
 */

Employee.prototype['department_id'] = undefined;
/**
 * @member {Number} sub_department_id
 */

Employee.prototype['sub_department_id'] = undefined;
/**
 * @member {Number} business_unit_id
 */

Employee.prototype['business_unit_id'] = undefined;
/**
 * @member {Number} shift_id
 */

Employee.prototype['shift_id'] = undefined;
/**
 * @member {module:model/EmployeeAddress} address
 */

Employee.prototype['address'] = undefined;
/**
 * @member {module:model/EmployeeCommunicationAddress} communication_address
 */

Employee.prototype['communication_address'] = undefined;
/**
 * @member {Boolean} confirmed
 */

Employee.prototype['confirmed'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

Employee['GenderEnum'] = {
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

Employee['StatusEnum'] = {
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
var _default = Employee;
exports["default"] = _default;