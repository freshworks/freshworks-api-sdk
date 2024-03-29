/**
 * Freshservice
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Announcement from "./Announcement";

/**
 * The CreateAnnouncement201Response model module.
 * @module model/CreateAnnouncement201Response
 * @version 2.0.1
 */
class CreateAnnouncement201Response {
  /**
   * Constructs a new <code>CreateAnnouncement201Response</code>.
   * @alias module:model/CreateAnnouncement201Response
   */
  constructor() {
    CreateAnnouncement201Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CreateAnnouncement201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAnnouncement201Response} obj Optional instance to populate.
   * @return {module:model/CreateAnnouncement201Response} The populated <code>CreateAnnouncement201Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateAnnouncement201Response();

      if (data.hasOwnProperty("announcement")) {
        obj["announcement"] = Announcement.constructFromObject(data["announcement"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/Announcement} announcement
 */
CreateAnnouncement201Response.prototype["announcement"] = undefined;

export default CreateAnnouncement201Response;
