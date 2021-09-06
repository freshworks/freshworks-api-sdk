"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewHireCreateCustomFields = _interopRequireDefault(require("./NewHireCreateCustomFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicantUpdate model module.
 * @module model/ApplicantUpdate
 * @version 1.0.0
 */
var ApplicantUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantUpdate</code>.
   * @alias module:model/ApplicantUpdate
   */
  function ApplicantUpdate() {
    _classCallCheck(this, ApplicantUpdate);

    ApplicantUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantUpdate} obj Optional instance to populate.
     * @return {module:model/ApplicantUpdate} The populated <code>ApplicantUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantUpdate();

        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _NewHireCreateCustomFields["default"].constructFromObject(data['custom_fields']);
        }
      }

      return obj;
    }
  }]);

  return ApplicantUpdate;
}();
/**
 * @member {module:model/NewHireCreateCustomFields} custom_fields
 */


ApplicantUpdate.prototype['custom_fields'] = undefined;
var _default = ApplicantUpdate;
exports["default"] = _default;