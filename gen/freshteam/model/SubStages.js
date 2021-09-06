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
 * The SubStages model module.
 * @module model/SubStages
 * @version 1.0.0
 */
var SubStages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubStages</code>.
   * @alias module:model/SubStages
   */
  function SubStages() {
    _classCallCheck(this, SubStages);

    SubStages.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubStages, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubStages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubStages} obj Optional instance to populate.
     * @return {module:model/SubStages} The populated <code>SubStages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubStages();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('satge')) {
          obj['satge'] = _ApiClient["default"].convertToType(data['satge'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SubStages;
}();
/**
 * @member {Number} id
 */


SubStages.prototype['id'] = undefined;
/**
 * @member {String} name
 */

SubStages.prototype['name'] = undefined;
/**
 * @member {Number} position
 */

SubStages.prototype['position'] = undefined;
/**
 * @member {Boolean} default
 */

SubStages.prototype['default'] = undefined;
/**
 * @member {String} satge
 */

SubStages.prototype['satge'] = undefined;
/**
 * @member {Boolean} deleted
 */

SubStages.prototype['deleted'] = undefined;
var _default = SubStages;
exports["default"] = _default;