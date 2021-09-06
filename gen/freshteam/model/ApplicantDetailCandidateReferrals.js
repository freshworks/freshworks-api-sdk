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
 * The ApplicantDetailCandidateReferrals model module.
 * @module model/ApplicantDetailCandidateReferrals
 * @version 1.0.0
 */
var ApplicantDetailCandidateReferrals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantDetailCandidateReferrals</code>.
   * @alias module:model/ApplicantDetailCandidateReferrals
   */
  function ApplicantDetailCandidateReferrals() {
    _classCallCheck(this, ApplicantDetailCandidateReferrals);

    ApplicantDetailCandidateReferrals.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantDetailCandidateReferrals, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantDetailCandidateReferrals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantDetailCandidateReferrals} obj Optional instance to populate.
     * @return {module:model/ApplicantDetailCandidateReferrals} The populated <code>ApplicantDetailCandidateReferrals</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantDetailCandidateReferrals();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicantDetailCandidateReferrals;
}();
/**
 * @member {Number} user_id
 */


ApplicantDetailCandidateReferrals.prototype['user_id'] = undefined;
/**
 * @member {module:model/ApplicantDetailCandidateReferrals.RelationshipEnum} relationship
 */

ApplicantDetailCandidateReferrals.prototype['relationship'] = undefined;
/**
 * Allowed values for the <code>relationship</code> property.
 * @enum {String}
 * @readonly
 */

ApplicantDetailCandidateReferrals['RelationshipEnum'] = {
  /**
   * value: "personal"
   * @const
   */
  "personal": "personal",

  /**
   * value: "former_colleague"
   * @const
   */
  "former_colleague": "former_colleague",

  /**
   * value: "mail_forward"
   * @const
   */
  "mail_forward": "mail_forward",

  /**
   * value: "social"
   * @const
   */
  "social": "social",

  /**
   * value: "other"
   * @const
   */
  "other": "other"
};
var _default = ApplicantDetailCandidateReferrals;
exports["default"] = _default;