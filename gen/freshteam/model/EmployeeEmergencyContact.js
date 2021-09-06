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
 * The EmployeeEmergencyContact model module.
 * @module model/EmployeeEmergencyContact
 * @version 1.0.0
 */
var EmployeeEmergencyContact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeEmergencyContact</code>.
   * @alias module:model/EmployeeEmergencyContact
   */
  function EmployeeEmergencyContact() {
    _classCallCheck(this, EmployeeEmergencyContact);

    EmployeeEmergencyContact.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeEmergencyContact, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeEmergencyContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeEmergencyContact} obj Optional instance to populate.
     * @return {module:model/EmployeeEmergencyContact} The populated <code>EmployeeEmergencyContact</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeEmergencyContact();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }

        if (data.hasOwnProperty('contact_number')) {
          obj['contact_number'] = _ApiClient["default"].convertToType(data['contact_number'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmployeeEmergencyContact;
}();
/**
 * @member {String} name
 */


EmployeeEmergencyContact.prototype['name'] = undefined;
/**
 * @member {module:model/EmployeeEmergencyContact.RelationshipEnum} relationship
 */

EmployeeEmergencyContact.prototype['relationship'] = undefined;
/**
 * @member {String} contact_number
 */

EmployeeEmergencyContact.prototype['contact_number'] = undefined;
/**
 * @member {String} address
 */

EmployeeEmergencyContact.prototype['address'] = undefined;
/**
 * Allowed values for the <code>relationship</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeEmergencyContact['RelationshipEnum'] = {
  /**
   * value: "parent"
   * @const
   */
  "parent": "parent",

  /**
   * value: "spouse"
   * @const
   */
  "spouse": "spouse",

  /**
   * value: "child"
   * @const
   */
  "child": "child",

  /**
   * value: "sibling"
   * @const
   */
  "sibling": "sibling",

  /**
   * value: "father"
   * @const
   */
  "father": "father",

  /**
   * value: "mother"
   * @const
   */
  "mother": "mother",

  /**
   * value: "husband"
   * @const
   */
  "husband": "husband",

  /**
   * value: "wife"
   * @const
   */
  "wife": "wife",

  /**
   * value: "son"
   * @const
   */
  "son": "son",

  /**
   * value: "daughter"
   * @const
   */
  "daughter": "daughter",

  /**
   * value: "brother"
   * @const
   */
  "brother": "brother",

  /**
   * value: "sister"
   * @const
   */
  "sister": "sister"
};
var _default = EmployeeEmergencyContact;
exports["default"] = _default;