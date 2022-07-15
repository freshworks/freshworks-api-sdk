/**
 * Freshservice APIs
 * Public REST APIs for Freshservice
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: mithun.mohandas@freshworks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import PurchaseOrder from "./PurchaseOrder";

/**
 * The ListPurchaseOrders200Response model module.
 * @module model/ListPurchaseOrders200Response
 * @version 1.0.0
 */
class ListPurchaseOrders200Response {
  /**
   * Constructs a new <code>ListPurchaseOrders200Response</code>.
   * @alias module:model/ListPurchaseOrders200Response
   */
  constructor() {
    ListPurchaseOrders200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ListPurchaseOrders200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPurchaseOrders200Response} obj Optional instance to populate.
   * @return {module:model/ListPurchaseOrders200Response} The populated <code>ListPurchaseOrders200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListPurchaseOrders200Response();

      if (data.hasOwnProperty("purchase_orders")) {
        obj["purchase_orders"] = PurchaseOrder.constructFromObject(data["purchase_orders"]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/PurchaseOrder} purchase_orders
 */
ListPurchaseOrders200Response.prototype["purchase_orders"] = undefined;

export default ListPurchaseOrders200Response;