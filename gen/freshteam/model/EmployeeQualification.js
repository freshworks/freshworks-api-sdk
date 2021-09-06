"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeQualification model module.
 * @module model/EmployeeQualification
 * @version 1.0.0
 */
var EmployeeQualification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeQualification</code>.
   * @alias module:model/EmployeeQualification
   */
  function EmployeeQualification() {
    _classCallCheck(this, EmployeeQualification);

    EmployeeQualification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeQualification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeQualification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeQualification} obj Optional instance to populate.
     * @return {module:model/EmployeeQualification} The populated <code>EmployeeQualification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeQualification();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('degree')) {
          obj['degree'] = _ApiClient["default"].convertToType(data['degree'], 'String');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }

        if (data.hasOwnProperty('institute_name')) {
          obj['institute_name'] = _ApiClient["default"].convertToType(data['institute_name'], 'String');
        }

        if (data.hasOwnProperty('course')) {
          obj['course'] = _ApiClient["default"].convertToType(data['course'], 'String');
        }

        if (data.hasOwnProperty('pass_out_date')) {
          obj['pass_out_date'] = _ApiClient["default"].convertToType(data['pass_out_date'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('grade_average')) {
          obj['grade_average'] = _ApiClient["default"].convertToType(data['grade_average'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmployeeQualification;
}();
/**
 * @member {Number} id
 */


EmployeeQualification.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeQualification.prototype['user_id'] = undefined;
/**
 * @member {String} degree
 */

EmployeeQualification.prototype['degree'] = undefined;
/**
 * @member {Date} start_date
 */

EmployeeQualification.prototype['start_date'] = undefined;
/**
 * @member {Date} end_date
 */

EmployeeQualification.prototype['end_date'] = undefined;
/**
 * @member {String} institute_name
 */

EmployeeQualification.prototype['institute_name'] = undefined;
/**
 * @member {String} course
 */

EmployeeQualification.prototype['course'] = undefined;
/**
 * @member {Date} pass_out_date
 */

EmployeeQualification.prototype['pass_out_date'] = undefined;
/**
 * @member {String} description
 */

EmployeeQualification.prototype['description'] = undefined;
/**
 * @member {String} grade_average
 */

EmployeeQualification.prototype['grade_average'] = undefined;
/**
 * @member {Boolean} deleted
 */

EmployeeQualification.prototype['deleted'] = undefined;
var _default = EmployeeQualification;
exports["default"] = _default;