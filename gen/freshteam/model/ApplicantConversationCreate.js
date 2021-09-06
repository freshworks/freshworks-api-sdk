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
 * The ApplicantConversationCreate model module.
 * @module model/ApplicantConversationCreate
 * @version 1.0.0
 */
var ApplicantConversationCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantConversationCreate</code>.
   * @alias module:model/ApplicantConversationCreate
   * @param body {String} 
   */
  function ApplicantConversationCreate(body) {
    _classCallCheck(this, ApplicantConversationCreate);

    ApplicantConversationCreate.initialize(this, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantConversationCreate, null, [{
    key: "initialize",
    value: function initialize(obj, body) {
      obj['body'] = body;
    }
    /**
     * Constructs a <code>ApplicantConversationCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantConversationCreate} obj Optional instance to populate.
     * @return {module:model/ApplicantConversationCreate} The populated <code>ApplicantConversationCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantConversationCreate();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('notify_ids')) {
          obj['notify_ids'] = _ApiClient["default"].convertToType(data['notify_ids'], ['Number']);
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], [File]);
        }
      }

      return obj;
    }
  }]);

  return ApplicantConversationCreate;
}();
/**
 * @member {String} body
 */


ApplicantConversationCreate.prototype['body'] = undefined;
/**
 * @member {Boolean} private
 */

ApplicantConversationCreate.prototype['private'] = undefined;
/**
 * @member {Array.<Number>} notify_ids
 */

ApplicantConversationCreate.prototype['notify_ids'] = undefined;
/**
 * @member {Array.<File>} attachments
 */

ApplicantConversationCreate.prototype['attachments'] = undefined;
var _default = ApplicantConversationCreate;
exports["default"] = _default;