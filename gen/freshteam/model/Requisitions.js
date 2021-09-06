"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserLite = _interopRequireDefault(require("./UserLite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Requisitions model module.
 * @module model/Requisitions
 * @version 1.0.0
 */
var Requisitions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Requisitions</code>.
   * @alias module:model/Requisitions
   */
  function Requisitions() {
    _classCallCheck(this, Requisitions);

    Requisitions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Requisitions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Requisitions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Requisitions} obj Optional instance to populate.
     * @return {module:model/Requisitions} The populated <code>Requisitions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Requisitions();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('recruiters')) {
          obj['recruiters'] = _ApiClient["default"].convertToType(data['recruiters'], [_UserLite["default"]]);
        }

        if (data.hasOwnProperty('hiring_managers')) {
          obj['hiring_managers'] = _ApiClient["default"].convertToType(data['hiring_managers'], [_UserLite["default"]]);
        }

        if (data.hasOwnProperty('panel_members')) {
          obj['panel_members'] = _ApiClient["default"].convertToType(data['panel_members'], [_UserLite["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Requisitions;
}();
/**
 * @member {Number} id
 */


Requisitions.prototype['id'] = undefined;
/**
 * @member {Boolean} deleted
 */

Requisitions.prototype['deleted'] = undefined;
/**
 * @member {String} title
 */

Requisitions.prototype['title'] = undefined;
/**
 * @member {Array.<module:model/UserLite>} recruiters
 */

Requisitions.prototype['recruiters'] = undefined;
/**
 * @member {Array.<module:model/UserLite>} hiring_managers
 */

Requisitions.prototype['hiring_managers'] = undefined;
/**
 * @member {Array.<module:model/UserLite>} panel_members
 */

Requisitions.prototype['panel_members'] = undefined;
var _default = Requisitions;
exports["default"] = _default;