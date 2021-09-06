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
 * The EmployeeDependent model module.
 * @module model/EmployeeDependent
 * @version 1.0.0
 */
var EmployeeDependent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeDependent</code>.
   * @alias module:model/EmployeeDependent
   */
  function EmployeeDependent() {
    _classCallCheck(this, EmployeeDependent);

    EmployeeDependent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeDependent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployeeDependent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeDependent} obj Optional instance to populate.
     * @return {module:model/EmployeeDependent} The populated <code>EmployeeDependent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeDependent();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmployeeDependent;
}();
/**
 * @member {Number} id
 */


EmployeeDependent.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

EmployeeDependent.prototype['user_id'] = undefined;
/**
 * @member {String} name
 */

EmployeeDependent.prototype['name'] = undefined;
/**
 * @member {module:model/EmployeeDependent.RelationshipEnum} relationship
 */

EmployeeDependent.prototype['relationship'] = undefined;
/**
 * @member {String} date_of_birth
 */

EmployeeDependent.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/EmployeeDependent.GenderEnum} gender
 */

EmployeeDependent.prototype['gender'] = undefined;
/**
 * @member {String} deleted
 */

EmployeeDependent.prototype['deleted'] = undefined;
/**
 * Allowed values for the <code>relationship</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDependent['RelationshipEnum'] = {
  /**
   * value: "parent"
   * @const
   */
  "parent": "parent",

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
   * value: "sibling"
   * @const
   */
  "sibling": "sibling",

  /**
   * value: "brother"
   * @const
   */
  "brother": "brother",

  /**
   * value: "sister"
   * @const
   */
  "sister": "sister",

  /**
   * value: "spouse"
   * @const
   */
  "spouse": "spouse",

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
   * value: "child"
   * @const
   */
  "child": "child",

  /**
   * value: "son"
   * @const
   */
  "son": "son",

  /**
   * value: "daughter"
   * @const
   */
  "daughter": "daughter"
};
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

EmployeeDependent['GenderEnum'] = {
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
var _default = EmployeeDependent;
exports["default"] = _default;