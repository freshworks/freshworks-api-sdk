"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicantCreateCandidate = _interopRequireDefault(require("./ApplicantCreateCandidate"));

var _NewHireCreateCustomFields = _interopRequireDefault(require("./NewHireCreateCustomFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicantCreate model module.
 * @module model/ApplicantCreate
 * @version 1.0.0
 */
var ApplicantCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantCreate</code>.
   * @alias module:model/ApplicantCreate
   */
  function ApplicantCreate() {
    _classCallCheck(this, ApplicantCreate);

    ApplicantCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantCreate} obj Optional instance to populate.
     * @return {module:model/ApplicantCreate} The populated <code>ApplicantCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantCreate();

        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _NewHireCreateCustomFields["default"].constructFromObject(data['custom_fields']);
        }

        if (data.hasOwnProperty('candidate_id')) {
          obj['candidate_id'] = _ApiClient["default"].convertToType(data['candidate_id'], 'Number');
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = _ApplicantCreateCandidate["default"].constructFromObject(data['candidate']);
        }
      }

      return obj;
    }
  }]);

  return ApplicantCreate;
}();
/**
 * @member {module:model/NewHireCreateCustomFields} custom_fields
 */


ApplicantCreate.prototype['custom_fields'] = undefined;
/**
 * @member {Number} candidate_id
 */

ApplicantCreate.prototype['candidate_id'] = undefined;
/**
 * @member {module:model/ApplicantCreateCandidate} candidate
 */

ApplicantCreate.prototype['candidate'] = undefined;
var _default = ApplicantCreate;
exports["default"] = _default;