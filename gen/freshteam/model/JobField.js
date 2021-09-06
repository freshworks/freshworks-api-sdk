"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeFieldPicklistValues = _interopRequireDefault(require("./EmployeeFieldPicklistValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobField model module.
 * @module model/JobField
 * @version 1.0.0
 */
var JobField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobField</code>.
   * @alias module:model/JobField
   */
  function JobField() {
    _classCallCheck(this, JobField);

    JobField.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobField, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobField} obj Optional instance to populate.
     * @return {module:model/JobField} The populated <code>JobField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobField();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('job_form_id')) {
          obj['job_form_id'] = _ApiClient["default"].convertToType(data['job_form_id'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('field_type')) {
          obj['field_type'] = _ApiClient["default"].convertToType(data['field_type'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }

        if (data.hasOwnProperty('restricted')) {
          obj['restricted'] = _ApiClient["default"].convertToType(data['restricted'], 'Boolean');
        }

        if (data.hasOwnProperty('picklist_values')) {
          obj['picklist_values'] = _ApiClient["default"].convertToType(data['picklist_values'], [_EmployeeFieldPicklistValues["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JobField;
}();
/**
 * @member {Number} id
 */


JobField.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

JobField.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

JobField.prototype['updated_at'] = undefined;
/**
 * @member {Number} job_form_id
 */

JobField.prototype['job_form_id'] = undefined;
/**
 * @member {Boolean} deleted
 */

JobField.prototype['deleted'] = undefined;
/**
 * @member {String} name
 */

JobField.prototype['name'] = undefined;
/**
 * @member {String} label
 */

JobField.prototype['label'] = undefined;
/**
 * @member {module:model/JobField.FieldTypeEnum} field_type
 */

JobField.prototype['field_type'] = undefined;
/**
 * @member {Number} position
 */

JobField.prototype['position'] = undefined;
/**
 * @member {Boolean} required
 */

JobField.prototype['required'] = undefined;
/**
 * @member {Boolean} default
 */

JobField.prototype['default'] = undefined;
/**
 * @member {Boolean} public
 */

JobField.prototype['public'] = undefined;
/**
 * @member {Boolean} restricted
 */

JobField.prototype['restricted'] = undefined;
/**
 * @member {Array.<module:model/EmployeeFieldPicklistValues>} picklist_values
 */

JobField.prototype['picklist_values'] = undefined;
/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */

JobField['FieldTypeEnum'] = {
  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "dropdown"
   * @const
   */
  "dropdown": "dropdown",

  /**
   * value: "email"
   * @const
   */
  "email": "email",

  /**
   * value: "phone_number"
   * @const
   */
  "phone_number": "phone_number",

  /**
   * value: "checkbox"
   * @const
   */
  "checkbox": "checkbox",

  /**
   * value: "paragraph"
   * @const
   */
  "paragraph": "paragraph",

  /**
   * value: "date_time"
   * @const
   */
  "date_time": "date_time",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "url_set"
   * @const
   */
  "url_set": "url_set",

  /**
   * value: "url"
   * @const
   */
  "url": "url",

  /**
   * value: "attachment"
   * @const
   */
  "attachment": "attachment",

  /**
   * value: "radio"
   * @const
   */
  "radio": "radio",

  /**
   * value: "label"
   * @const
   */
  "label": "label"
};
var _default = JobField;
exports["default"] = _default;