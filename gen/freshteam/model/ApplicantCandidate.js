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
 * The ApplicantCandidate model module.
 * @module model/ApplicantCandidate
 * @version 1.0.0
 */
var ApplicantCandidate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantCandidate</code>.
   * @alias module:model/ApplicantCandidate
   */
  function ApplicantCandidate() {
    _classCallCheck(this, ApplicantCandidate);

    ApplicantCandidate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantCandidate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantCandidate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantCandidate} obj Optional instance to populate.
     * @return {module:model/ApplicantCandidate} The populated <code>ApplicantCandidate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantCandidate();

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
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

        if (data.hasOwnProperty('mobile')) {
          obj['mobile'] = _ApiClient["default"].convertToType(data['mobile'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ApplicantCandidate;
}();
/**
 * @member {Date} date_of_birth
 */


ApplicantCandidate.prototype['date_of_birth'] = undefined;
/**
 * @member {module:model/ApplicantCandidate.GenderEnum} gender
 */

ApplicantCandidate.prototype['gender'] = undefined;
/**
 * @member {String} first_name
 */

ApplicantCandidate.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

ApplicantCandidate.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

ApplicantCandidate.prototype['last_name'] = undefined;
/**
 * @member {String} mobile
 */

ApplicantCandidate.prototype['mobile'] = undefined;
/**
 * @member {String} phone
 */

ApplicantCandidate.prototype['phone'] = undefined;
/**
 * @member {String} email
 */

ApplicantCandidate.prototype['email'] = undefined;
/**
 * @member {Number} owner_id
 */

ApplicantCandidate.prototype['owner_id'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

ApplicantCandidate['GenderEnum'] = {
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
var _default = ApplicantCandidate;
exports["default"] = _default;