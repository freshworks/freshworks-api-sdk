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
 * The ApplicantConversation model module.
 * @module model/ApplicantConversation
 * @version 1.0.0
 */
var ApplicantConversation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicantConversation</code>.
   * @alias module:model/ApplicantConversation
   */
  function ApplicantConversation() {
    _classCallCheck(this, ApplicantConversation);

    ApplicantConversation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicantConversation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicantConversation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicantConversation} obj Optional instance to populate.
     * @return {module:model/ApplicantConversation} The populated <code>ApplicantConversation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicantConversation();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('body_text')) {
          obj['body_text'] = _ApiClient["default"].convertToType(data['body_text'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
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

  return ApplicantConversation;
}();
/**
 * @member {Number} id
 */


ApplicantConversation.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

ApplicantConversation.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ApplicantConversation.prototype['updated_at'] = undefined;
/**
 * @member {String} body
 */

ApplicantConversation.prototype['body'] = undefined;
/**
 * @member {String} body_text
 */

ApplicantConversation.prototype['body_text'] = undefined;
/**
 * @member {Boolean} private
 */

ApplicantConversation.prototype['private'] = undefined;
/**
 * @member {Number} user_id
 */

ApplicantConversation.prototype['user_id'] = undefined;
/**
 * @member {Array.<Number>} notify_ids
 */

ApplicantConversation.prototype['notify_ids'] = undefined;
/**
 * @member {Array.<File>} attachments
 */

ApplicantConversation.prototype['attachments'] = undefined;
var _default = ApplicantConversation;
exports["default"] = _default;