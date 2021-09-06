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
 * The CandidateQualifications model module.
 * @module model/CandidateQualifications
 * @version 1.0.0
 */
var CandidateQualifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandidateQualifications</code>.
   * @alias module:model/CandidateQualifications
   */
  function CandidateQualifications() {
    _classCallCheck(this, CandidateQualifications);

    CandidateQualifications.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandidateQualifications, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CandidateQualifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidateQualifications} obj Optional instance to populate.
     * @return {module:model/CandidateQualifications} The populated <code>CandidateQualifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandidateQualifications();

        if (data.hasOwnProperty('school_name')) {
          obj['school_name'] = _ApiClient["default"].convertToType(data['school_name'], 'String');
        }

        if (data.hasOwnProperty('field_of_study')) {
          obj['field_of_study'] = _ApiClient["default"].convertToType(data['field_of_study'], 'String');
        }

        if (data.hasOwnProperty('degree')) {
          obj['degree'] = _ApiClient["default"].convertToType(data['degree'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('grade')) {
          obj['grade'] = _ApiClient["default"].convertToType(data['grade'], 'String');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], Object);
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], Object);
        }

        if (data.hasOwnProperty('is_current')) {
          obj['is_current'] = _ApiClient["default"].convertToType(data['is_current'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CandidateQualifications;
}();
/**
 * @member {String} school_name
 */


CandidateQualifications.prototype['school_name'] = undefined;
/**
 * @member {String} field_of_study
 */

CandidateQualifications.prototype['field_of_study'] = undefined;
/**
 * @member {String} degree
 */

CandidateQualifications.prototype['degree'] = undefined;
/**
 * @member {String} summary
 */

CandidateQualifications.prototype['summary'] = undefined;
/**
 * @member {String} grade
 */

CandidateQualifications.prototype['grade'] = undefined;
/**
 * @member {Object} start_date
 */

CandidateQualifications.prototype['start_date'] = undefined;
/**
 * @member {Object} end_date
 */

CandidateQualifications.prototype['end_date'] = undefined;
/**
 * @member {Boolean} is_current
 */

CandidateQualifications.prototype['is_current'] = undefined;
var _default = CandidateQualifications;
exports["default"] = _default;