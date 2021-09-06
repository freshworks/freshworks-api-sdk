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
 * The CandidatePositions model module.
 * @module model/CandidatePositions
 * @version 1.0.0
 */
var CandidatePositions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandidatePositions</code>.
   * @alias module:model/CandidatePositions
   */
  function CandidatePositions() {
    _classCallCheck(this, CandidatePositions);

    CandidatePositions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandidatePositions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CandidatePositions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidatePositions} obj Optional instance to populate.
     * @return {module:model/CandidatePositions} The populated <code>CandidatePositions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandidatePositions();

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

  return CandidatePositions;
}();
/**
 * @member {String} company
 */


CandidatePositions.prototype['company'] = undefined;
/**
 * @member {String} title
 */

CandidatePositions.prototype['title'] = undefined;
/**
 * @member {String} summary
 */

CandidatePositions.prototype['summary'] = undefined;
/**
 * @member {Object} start_date
 */

CandidatePositions.prototype['start_date'] = undefined;
/**
 * @member {Object} end_date
 */

CandidatePositions.prototype['end_date'] = undefined;
/**
 * @member {Boolean} is_current
 */

CandidatePositions.prototype['is_current'] = undefined;
var _default = CandidatePositions;
exports["default"] = _default;