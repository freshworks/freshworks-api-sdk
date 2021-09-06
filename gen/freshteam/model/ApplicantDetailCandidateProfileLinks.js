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
 * The ApplicantDetailCandidateProfileLinks model module.
 * @module model/ApplicantDetailCandidateProfileLinks
 * @version 1.0.0
 */
var ApplicantDetailCandidateProfileLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantDetailCandidateProfileLinks</code>.
   * @alias module:model/ApplicantDetailCandidateProfileLinks
   */
  function ApplicantDetailCandidateProfileLinks() {
    _classCallCheck(this, ApplicantDetailCandidateProfileLinks);

    ApplicantDetailCandidateProfileLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantDetailCandidateProfileLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantDetailCandidateProfileLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantDetailCandidateProfileLinks} obj Optional instance to populate.
     * @return {module:model/ApplicantDetailCandidateProfileLinks} The populated <code>ApplicantDetailCandidateProfileLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantDetailCandidateProfileLinks();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicantDetailCandidateProfileLinks;
}();
/**
 * @member {String} name
 */


ApplicantDetailCandidateProfileLinks.prototype['name'] = undefined;
/**
 * @member {String} url
 */

ApplicantDetailCandidateProfileLinks.prototype['url'] = undefined;
var _default = ApplicantDetailCandidateProfileLinks;
exports["default"] = _default;