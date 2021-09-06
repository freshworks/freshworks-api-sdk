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
 * The ApplicantDetailCandidateLocation model module.
 * @module model/ApplicantDetailCandidateLocation
 * @version 1.0.0
 */
var ApplicantDetailCandidateLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantDetailCandidateLocation</code>.
   * @alias module:model/ApplicantDetailCandidateLocation
   */
  function ApplicantDetailCandidateLocation() {
    _classCallCheck(this, ApplicantDetailCandidateLocation);

    ApplicantDetailCandidateLocation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantDetailCandidateLocation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantDetailCandidateLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantDetailCandidateLocation} obj Optional instance to populate.
     * @return {module:model/ApplicantDetailCandidateLocation} The populated <code>ApplicantDetailCandidateLocation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantDetailCandidateLocation();

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('street')) {
          obj['street'] = _ApiClient["default"].convertToType(data['street'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('zip_code')) {
          obj['zip_code'] = _ApiClient["default"].convertToType(data['zip_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicantDetailCandidateLocation;
}();
/**
 * @member {String} city
 */


ApplicantDetailCandidateLocation.prototype['city'] = undefined;
/**
 * @member {String} state
 */

ApplicantDetailCandidateLocation.prototype['state'] = undefined;
/**
 * @member {String} street
 */

ApplicantDetailCandidateLocation.prototype['street'] = undefined;
/**
 * @member {String} country_code
 */

ApplicantDetailCandidateLocation.prototype['country_code'] = undefined;
/**
 * @member {String} zip_code
 */

ApplicantDetailCandidateLocation.prototype['zip_code'] = undefined;
var _default = ApplicantDetailCandidateLocation;
exports["default"] = _default;