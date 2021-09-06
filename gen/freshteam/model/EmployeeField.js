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
import EmployeeFieldPicklistValues from "./EmployeeFieldPicklistValues";
import EmployeeFieldScopes from "./EmployeeFieldScopes";

/**
 * The EmployeeField model module.
 * @module model/EmployeeField
 * @version 1.0.0
 */
class EmployeeField {
  /**
   * Constructs a new <code>EmployeeField</code>.
   * @alias module:model/EmployeeField
   */
  constructor() {
    EmployeeField.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EmployeeField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmployeeField} obj Optional instance to populate.
   * @return {module:model/EmployeeField} The populated <code>EmployeeField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmployeeField();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("deleted")) {
        obj["deleted"] = ApiClient.convertToType(data["deleted"], "Boolean");
      }
      if (data.hasOwnProperty("employee_form_id")) {
        obj["employee_form_id"] = ApiClient.convertToType(data["employee_form_id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("field_type")) {
        obj["field_type"] = ApiClient.convertToType(data["field_type"], "String");
      }
      if (data.hasOwnProperty("position")) {
        obj["position"] = ApiClient.convertToType(data["position"], "Number");
      }
      if (data.hasOwnProperty("required")) {
        obj["required"] = ApiClient.convertToType(data["required"], "Boolean");
      }
      if (data.hasOwnProperty("default")) {
        obj["default"] = ApiClient.convertToType(data["default"], "Boolean");
      }
      if (data.hasOwnProperty("viewable_by")) {
        obj["viewable_by"] = ApiClient.convertToType(data["viewable_by"], "String");
      }
      if (data.hasOwnProperty("editable_by")) {
        obj["editable_by"] = ApiClient.convertToType(data["editable_by"], "String");
      }
      if (data.hasOwnProperty("tab")) {
        obj["tab"] = ApiClient.convertToType(data["tab"], "String");
      }
      if (data.hasOwnProperty("field_scopes")) {
        obj["field_scopes"] = ApiClient.convertToType(data["field_scopes"], [EmployeeFieldScopes]);
      }
      if (data.hasOwnProperty("section_label")) {
        obj["section_label"] = ApiClient.convertToType(data["section_label"], "String");
      }
      if (data.hasOwnProperty("picklist_values")) {
        obj["picklist_values"] = ApiClient.convertToType(data["picklist_values"], [EmployeeFieldPicklistValues]);
      }
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
EmployeeField.prototype["id"] = undefined;

/**
 * @member {Date} created_at
 */
EmployeeField.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
EmployeeField.prototype["updated_at"] = undefined;

/**
 * @member {Boolean} deleted
 */
EmployeeField.prototype["deleted"] = undefined;

/**
 * @member {Number} employee_form_id
 */
EmployeeField.prototype["employee_form_id"] = undefined;

/**
 * @member {String} name
 */
EmployeeField.prototype["name"] = undefined;

/**
 * @member {String} label
 */
EmployeeField.prototype["label"] = undefined;

/**
 * @member {module:model/EmployeeField.FieldTypeEnum} field_type
 */
EmployeeField.prototype["field_type"] = undefined;

/**
 * @member {Number} position
 */
EmployeeField.prototype["position"] = undefined;

/**
 * @member {Boolean} required
 */
EmployeeField.prototype["required"] = undefined;

/**
 * @member {Boolean} default
 */
EmployeeField.prototype["default"] = undefined;

/**
 * @member {module:model/EmployeeField.ViewableByEnum} viewable_by
 */
EmployeeField.prototype["viewable_by"] = undefined;

/**
 * @member {module:model/EmployeeField.EditableByEnum} editable_by
 */
EmployeeField.prototype["editable_by"] = undefined;

/**
 * @member {module:model/EmployeeField.TabEnum} tab
 */
EmployeeField.prototype["tab"] = undefined;

/**
 * @member {Array.<module:model/EmployeeFieldScopes>} field_scopes
 */
EmployeeField.prototype["field_scopes"] = undefined;

/**
 * @member {String} section_label
 */
EmployeeField.prototype["section_label"] = undefined;

/**
 * @member {Array.<module:model/EmployeeFieldPicklistValues>} picklist_values
 */
EmployeeField.prototype["picklist_values"] = undefined;

/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
EmployeeField["FieldTypeEnum"] = {
  /**
   * value: "text"
   * @const
   */
  text: "text",

  /**
   * value: "dropdown"
   * @const
   */
  dropdown: "dropdown",

  /**
   * value: "email"
   * @const
   */
  email: "email",

  /**
   * value: "phone_number"
   * @const
   */
  phone_number: "phone_number",

  /**
   * value: "checkbox"
   * @const
   */
  checkbox: "checkbox",

  /**
   * value: "paragraph"
   * @const
   */
  paragraph: "paragraph",

  /**
   * value: "date_time"
   * @const
   */
  date_time: "date_time",

  /**
   * value: "number"
   * @const
   */
  number: "number",

  /**
   * value: "url_set"
   * @const
   */
  url_set: "url_set",

  /**
   * value: "url"
   * @const
   */
  url: "url",

  /**
   * value: "attachment"
   * @const
   */
  attachment: "attachment",

  /**
   * value: "radio"
   * @const
   */
  radio: "radio",

  /**
   * value: "label"
   * @const
   */
  label: "label",

  /**
   * value: "field_group"
   * @const
   */
  field_group: "field_group",

  /**
   * value: "emergency_contact"
   * @const
   */
  emergency_contact: "emergency_contact",

  /**
   * value: "phone_number_set"
   * @const
   */
  phone_number_set: "phone_number_set",

  /**
   * value: "social_profile"
   * @const
   */
  social_profile: "social_profile",

  /**
   * value: "address"
   * @const
   */
  address: "address",

  /**
   * value: "previous_employment"
   * @const
   */
  previous_employment: "previous_employment",

  /**
   * value: "education"
   * @const
   */
  education: "education",

  /**
   * value: "avatar"
   * @const
   */
  avatar: "avatar",

  /**
   * value: "bank_details"
   * @const
   */
  bank_details: "bank_details",

  /**
   * value: "compensation"
   * @const
   */
  compensation: "compensation",

  /**
   * value: "standard_email"
   * @const
   */
  standard_email: "standard_email",

  /**
   * value: "standard_dropdown"
   * @const
   */
  standard_dropdown: "standard_dropdown",

  /**
   * value: "standard_multi_dropdown"
   * @const
   */
  standard_multi_dropdown: "standard_multi_dropdown",

  /**
   * value: "file_input"
   * @const
   */
  file_input: "file_input",

  /**
   * value: "visa"
   * @const
   */
  visa: "visa",

  /**
   * value: "bg_verification"
   * @const
   */
  bg_verification: "bg_verification",

  /**
   * value: "government_id"
   * @const
   */
  government_id: "government_id",

  /**
   * value: "licenses"
   * @const
   */
  licenses: "licenses",

  /**
   * value: "certifications"
   * @const
   */
  certifications: "certifications",

  /**
   * value: "awards"
   * @const
   */
  awards: "awards",

  /**
   * value: "honours"
   * @const
   */
  honours: "honours",

  /**
   * value: "comp_bonuses"
   * @const
   */
  comp_bonuses: "comp_bonuses",

  /**
   * value: "stock_grants"
   * @const
   */
  stock_grants: "stock_grants",

  /**
   * value: "dependents"
   * @const
   */
  dependents: "dependents",

  /**
   * value: "time"
   * @const
   */
  time: "time",

  /**
   * value: "personal_contact_set"
   * @const
   */
  personal_contact_set: "personal_contact_set"
};

/**
 * Allowed values for the <code>viewable_by</code> property.
 * @enum {String}
 * @readonly
 */
EmployeeField["ViewableByEnum"] = {
  /**
   * value: "all"
   * @const
   */
  all: "all",

  /**
   * value: "self"
   * @const
   */
  self: "self",

  /**
   * value: "self_hr"
   * @const
   */
  self_hr: "self_hr",

  /**
   * value: "hr"
   * @const
   */
  hr: "hr"
};

/**
 * Allowed values for the <code>editable_by</code> property.
 * @enum {String}
 * @readonly
 */
EmployeeField["EditableByEnum"] = {
  /**
   * value: "self"
   * @const
   */
  self: "self",

  /**
   * value: "hr"
   * @const
   */
  hr: "hr"
};

/**
 * Allowed values for the <code>tab</code> property.
 * @enum {String}
 * @readonly
 */
EmployeeField["TabEnum"] = {
  /**
   * value: "personal"
   * @const
   */
  personal: "personal",

  /**
   * value: "job"
   * @const
   */
  job: "job",

  /**
   * value: "employment_education"
   * @const
   */
  employment_education: "employment_education",

  /**
   * value: "compensation"
   * @const
   */
  compensation: "compensation",

  /**
   * value: "files"
   * @const
   */
  files: "files"
};

export default EmployeeField;
