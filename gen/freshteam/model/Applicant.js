"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantCandidate = _interopRequireDefault(require("./ApplicantCandidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Applicant model module.
 * @module model/Applicant
 * @version 1.0.0
 */
var Applicant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Applicant</code>.
   * @alias module:model/Applicant
   */
  function Applicant() {
    _classCallCheck(this, Applicant);

    Applicant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Applicant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Applicant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Applicant} obj Optional instance to populate.
     * @return {module:model/Applicant} The populated <code>Applicant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Applicant();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'String');
        }

        if (data.hasOwnProperty('sub_stage_id')) {
          obj['sub_stage_id'] = _ApiClient["default"].convertToType(data['sub_stage_id'], 'Number');
        }

        if (data.hasOwnProperty('job_id')) {
          obj['job_id'] = _ApiClient["default"].convertToType(data['job_id'], 'Number');
        }

        if (data.hasOwnProperty('requisition_id')) {
          obj['requisition_id'] = _ApiClient["default"].convertToType(data['requisition_id'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = _ApplicantCandidate["default"].constructFromObject(data['candidate']);
        }
      }

      return obj;
    }
  }]);

  return Applicant;
}();
/**
 * @member {Number} id
 */


Applicant.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Applicant.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Applicant.prototype['updated_at'] = undefined;
/**
 * @member {module:model/Applicant.StatusEnum} status
 */

Applicant.prototype['status'] = undefined;
/**
 * @member {module:model/Applicant.StageEnum} stage
 */

Applicant.prototype['stage'] = undefined;
/**
 * @member {Number} sub_stage_id
 */

Applicant.prototype['sub_stage_id'] = undefined;
/**
 * @member {Number} job_id
 */

Applicant.prototype['job_id'] = undefined;
/**
 * @member {Number} requisition_id
 */

Applicant.prototype['requisition_id'] = undefined;
/**
 * @member {Boolean} deleted
 */

Applicant.prototype['deleted'] = undefined;
/**
 * @member {module:model/ApplicantCandidate} candidate
 */

Applicant.prototype['candidate'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Applicant['StatusEnum'] = {
  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "on_hold"
   * @const
   */
  "on_hold": "on_hold",

  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",

  /**
   * value: "archived"
   * @const
   */
  "archived": "archived",

  /**
   * value: "moved"
   * @const
   */
  "moved": "moved",

  /**
   * value: "dropped"
   * @const
   */
  "dropped": "dropped"
};
/**
 * Allowed values for the <code>stage</code> property.
 * @enum {String}
 * @readonly
 */

Applicant['StageEnum'] = {
  /**
   * value: "candidature"
   * @const
   */
  "candidature": "candidature",

  /**
   * value: "screening"
   * @const
   */
  "screening": "screening",

  /**
   * value: "on_site"
   * @const
   */
  "on_site": "on_site",

  /**
   * value: "offer"
   * @const
   */
  "offer": "offer",

  /**
   * value: "hire"
   * @const
   */
  "hire": "hire"
};
var _default = Applicant;
exports["default"] = _default;