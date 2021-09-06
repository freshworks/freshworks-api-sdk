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
 * The ApplicantField model module.
 * @module model/ApplicantField
 * @version 1.0.0
 */
var ApplicantField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantField</code>.
   * @alias module:model/ApplicantField
   */
  function ApplicantField() {
    _classCallCheck(this, ApplicantField);

    ApplicantField.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantField, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantField} obj Optional instance to populate.
     * @return {module:model/ApplicantField} The populated <code>ApplicantField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantField();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('applicant_form_id')) {
          obj['applicant_form_id'] = _ApiClient["default"].convertToType(data['applicant_form_id'], 'Number');
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

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('group_label')) {
          obj['group_label'] = _ApiClient["default"].convertToType(data['group_label'], 'String');
        }

        if (data.hasOwnProperty('group_position')) {
          obj['group_position'] = _ApiClient["default"].convertToType(data['group_position'], 'String');
        }

        if (data.hasOwnProperty('group_name')) {
          obj['group_name'] = _ApiClient["default"].convertToType(data['group_name'], 'String');
        }

        if (data.hasOwnProperty('external_field')) {
          obj['external_field'] = _ApiClient["default"].convertToType(data['external_field'], 'Boolean');
        }

        if (data.hasOwnProperty('recruiter_field')) {
          obj['recruiter_field'] = _ApiClient["default"].convertToType(data['recruiter_field'], 'Boolean');
        }

        if (data.hasOwnProperty('vendor_field')) {
          obj['vendor_field'] = _ApiClient["default"].convertToType(data['vendor_field'], 'Boolean');
        }

        if (data.hasOwnProperty('required_in_vendor_form')) {
          obj['required_in_vendor_form'] = _ApiClient["default"].convertToType(data['required_in_vendor_form'], 'Boolean');
        }

        if (data.hasOwnProperty('required_in_external_form')) {
          obj['required_in_external_form'] = _ApiClient["default"].convertToType(data['required_in_external_form'], 'Boolean');
        }

        if (data.hasOwnProperty('required_in_recruiter_form')) {
          obj['required_in_recruiter_form'] = _ApiClient["default"].convertToType(data['required_in_recruiter_form'], 'Boolean');
        }

        if (data.hasOwnProperty('viewable_by')) {
          obj['viewable_by'] = _ApiClient["default"].convertToType(data['viewable_by'], 'String');
        }

        if (data.hasOwnProperty('base_model')) {
          obj['base_model'] = _ApiClient["default"].convertToType(data['base_model'], 'String');
        }

        if (data.hasOwnProperty('picklist_values')) {
          obj['picklist_values'] = _ApiClient["default"].convertToType(data['picklist_values'], [_EmployeeFieldPicklistValues["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ApplicantField;
}();
/**
 * @member {Number} id
 */


ApplicantField.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

ApplicantField.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ApplicantField.prototype['updated_at'] = undefined;
/**
 * @member {Number} applicant_form_id
 */

ApplicantField.prototype['applicant_form_id'] = undefined;
/**
 * @member {String} name
 */

ApplicantField.prototype['name'] = undefined;
/**
 * @member {String} label
 */

ApplicantField.prototype['label'] = undefined;
/**
 * @member {module:model/ApplicantField.FieldTypeEnum} field_type
 */

ApplicantField.prototype['field_type'] = undefined;
/**
 * @member {Number} position
 */

ApplicantField.prototype['position'] = undefined;
/**
 * @member {Boolean} default
 */

ApplicantField.prototype['default'] = undefined;
/**
 * @member {String} group_label
 */

ApplicantField.prototype['group_label'] = undefined;
/**
 * @member {String} group_position
 */

ApplicantField.prototype['group_position'] = undefined;
/**
 * @member {String} group_name
 */

ApplicantField.prototype['group_name'] = undefined;
/**
 * @member {Boolean} external_field
 */

ApplicantField.prototype['external_field'] = undefined;
/**
 * @member {Boolean} recruiter_field
 */

ApplicantField.prototype['recruiter_field'] = undefined;
/**
 * @member {Boolean} vendor_field
 */

ApplicantField.prototype['vendor_field'] = undefined;
/**
 * @member {Boolean} required_in_vendor_form
 */

ApplicantField.prototype['required_in_vendor_form'] = undefined;
/**
 * @member {Boolean} required_in_external_form
 */

ApplicantField.prototype['required_in_external_form'] = undefined;
/**
 * @member {Boolean} required_in_recruiter_form
 */

ApplicantField.prototype['required_in_recruiter_form'] = undefined;
/**
 * @member {String} viewable_by
 */

ApplicantField.prototype['viewable_by'] = undefined;
/**
 * @member {String} base_model
 */

ApplicantField.prototype['base_model'] = undefined;
/**
 * @member {Array.<module:model/EmployeeFieldPicklistValues>} picklist_values
 */

ApplicantField.prototype['picklist_values'] = undefined;
/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */

ApplicantField['FieldTypeEnum'] = {
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
var _default = ApplicantField;
exports["default"] = _default;