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
 * The CandidateCreatePositions model module.
 * @module model/CandidateCreatePositions
 * @version 1.0.0
 */
var CandidateCreatePositions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandidateCreatePositions</code>.
   * @alias module:model/CandidateCreatePositions
   */
  function CandidateCreatePositions() {
    _classCallCheck(this, CandidateCreatePositions);

    CandidateCreatePositions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandidateCreatePositions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CandidateCreatePositions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidateCreatePositions} obj Optional instance to populate.
     * @return {module:model/CandidateCreatePositions} The populated <code>CandidateCreatePositions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandidateCreatePositions();

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
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

  return CandidateCreatePositions;
}();
/**
 * @member {String} company
 */


CandidateCreatePositions.prototype['company'] = undefined;
/**
 * @member {String} title
 */

CandidateCreatePositions.prototype['title'] = undefined;
/**
 * @member {String} summary
 */

CandidateCreatePositions.prototype['summary'] = undefined;
/**
 * @member {Object} start_date
 */

CandidateCreatePositions.prototype['start_date'] = undefined;
/**
 * @member {Object} end_date
 */

CandidateCreatePositions.prototype['end_date'] = undefined;
/**
 * @member {Boolean} is_current
 */

CandidateCreatePositions.prototype['is_current'] = undefined;
var _default = CandidateCreatePositions;
exports["default"] = _default;