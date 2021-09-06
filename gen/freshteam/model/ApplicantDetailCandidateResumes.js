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
 * The ApplicantDetailCandidateResumes model module.
 * @module model/ApplicantDetailCandidateResumes
 * @version 1.0.0
 */
var ApplicantDetailCandidateResumes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantDetailCandidateResumes</code>.
   * @alias module:model/ApplicantDetailCandidateResumes
   */
  function ApplicantDetailCandidateResumes() {
    _classCallCheck(this, ApplicantDetailCandidateResumes);

    ApplicantDetailCandidateResumes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantDetailCandidateResumes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantDetailCandidateResumes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantDetailCandidateResumes} obj Optional instance to populate.
     * @return {module:model/ApplicantDetailCandidateResumes} The populated <code>ApplicantDetailCandidateResumes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantDetailCandidateResumes();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('content_file_name')) {
          obj['content_file_name'] = _ApiClient["default"].convertToType(data['content_file_name'], 'String');
        }

        if (data.hasOwnProperty('content_file_size')) {
          obj['content_file_size'] = _ApiClient["default"].convertToType(data['content_file_size'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicantDetailCandidateResumes;
}();
/**
 * @member {Number} id
 */


ApplicantDetailCandidateResumes.prototype['id'] = undefined;
/**
 * @member {String} content_file_name
 */

ApplicantDetailCandidateResumes.prototype['content_file_name'] = undefined;
/**
 * @member {Number} content_file_size
 */

ApplicantDetailCandidateResumes.prototype['content_file_size'] = undefined;
/**
 * @member {String} description
 */

ApplicantDetailCandidateResumes.prototype['description'] = undefined;
/**
 * @member {String} url
 */

ApplicantDetailCandidateResumes.prototype['url'] = undefined;
var _default = ApplicantDetailCandidateResumes;
exports["default"] = _default;