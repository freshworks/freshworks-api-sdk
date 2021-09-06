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
 * The JobSalary model module.
 * @module model/JobSalary
 * @version 1.0.0
 */
var JobSalary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobSalary</code>.
   * @alias module:model/JobSalary
   */
  function JobSalary() {
    _classCallCheck(this, JobSalary);

    JobSalary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobSalary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobSalary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobSalary} obj Optional instance to populate.
     * @return {module:model/JobSalary} The populated <code>JobSalary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobSalary();

        if (data.hasOwnProperty('min')) {
          obj['min'] = _ApiClient["default"].convertToType(data['min'], 'Number');
        }

        if (data.hasOwnProperty('max')) {
          obj['max'] = _ApiClient["default"].convertToType(data['max'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JobSalary;
}();
/**
 * @member {Number} min
 */


JobSalary.prototype['min'] = undefined;
/**
 * @member {Number} max
 */

JobSalary.prototype['max'] = undefined;
/**
 * @member {String} currency
 */

JobSalary.prototype['currency'] = undefined;
var _default = JobSalary;
exports["default"] = _default;