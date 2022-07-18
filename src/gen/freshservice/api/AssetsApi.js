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
import Asset from "../model/Asset";
import BadRequest from "../model/BadRequest";
import ListAssetApplications200Response from "../model/ListAssetApplications200Response";
import ListAssetComponents200Response from "../model/ListAssetComponents200Response";
import ListAssetContracts200Response from "../model/ListAssetContracts200Response";
import ListAssetRequests200Response from "../model/ListAssetRequests200Response";
import ListAssets200Response from "../model/ListAssets200Response";
import ListComponentTypes200Response from "../model/ListComponentTypes200Response";
import ListDepartments401Response from "../model/ListDepartments401Response";

/**
 * Assets service.
 * @module api/AssetsApi
 * @version 1.0.0
 */
export default class AssetsApi {
  /**
   * Constructs a new AssetsApi.
   * @alias module:api/AssetsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create a new Asset
   * Create a new Asset
   * @param {module:model/Asset} Asset
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssets200Response} and HTTP response
   */
  createAssetWithHttpInfo(Asset) {
    let postBody = Asset;
    // verify the required parameter 'Asset' is set
    if (Asset === undefined || Asset === null) {
      throw new Error("Missing the required parameter 'Asset' when calling createAsset");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = ListAssets200Response;
    return this.apiClient.callApi(
      "/api/v2/assets",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create a new Asset
   * Create a new Asset
   * @param {module:model/Asset} Asset
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssets200Response}
   */
  createAsset(Asset) {
    return this.createAssetWithHttpInfo(Asset).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Add a new component for an asset
   * Add a new component for an asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetComponents200Response} and HTTP response
   */
  createAssetComponentWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling createAssetComponent");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssetComponents200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/components",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Add a new component for an asset
   * Add a new component for an asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetComponents200Response}
   */
  createAssetComponent(display_id) {
    return this.createAssetComponentWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete an existing Asset Type
   * Delete an existing Asset Type
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteAssetWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling deleteAsset");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete an existing Asset Type
   * Delete an existing Asset Type
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteAsset(display_id) {
    return this.deleteAssetWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete an existing component
   * Delete an existing component
   * @param {Number} display_id
   * @param {Number} component_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteAssetComponentWithHttpInfo(display_id, component_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling deleteAssetComponent");
    }
    // verify the required parameter 'component_id' is set
    if (component_id === undefined || component_id === null) {
      throw new Error("Missing the required parameter 'component_id' when calling deleteAssetComponent");
    }

    let pathParams = {
      display_id: display_id,
      component_id: component_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/components/{component_id}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete an existing component
   * Delete an existing component
   * @param {Number} display_id
   * @param {Number} component_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteAssetComponent(display_id, component_id) {
    return this.deleteAssetComponentWithHttpInfo(display_id, component_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Retrieve a specific asset
   * Retrieve a specific asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssets200Response} and HTTP response
   */
  getAssetWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling getAsset");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssets200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Retrieve a specific asset
   * Retrieve a specific asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssets200Response}
   */
  getAsset(display_id) {
    return this.getAssetWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all software installed in the device
   * Get a list of all the software installed in the device
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetApplications200Response} and HTTP response
   */
  listAssetApplicationsWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling listAssetApplications");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssetApplications200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/applications",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all software installed in the device
   * Get a list of all the software installed in the device
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetApplications200Response}
   */
  listAssetApplications(display_id) {
    return this.listAssetApplicationsWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all components of the device
   * Get a list of all the components of the device
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetComponents200Response} and HTTP response
   */
  listAssetComponentsWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling listAssetComponents");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssetComponents200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/components",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all components of the device
   * Get a list of all the components of the device
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetComponents200Response}
   */
  listAssetComponents(display_id) {
    return this.listAssetComponentsWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all contracts associated to the asset
   * Get a list of all the contracts associated to the asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetContracts200Response} and HTTP response
   */
  listAssetContractsWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling listAssetContracts");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssetContracts200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/contracts",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all contracts associated to the asset
   * Get a list of all the contracts associated to the asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetContracts200Response}
   */
  listAssetContracts(display_id) {
    return this.listAssetContractsWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all requests associated to the asset
   * Get a list of all requests associated to the asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetRequests200Response} and HTTP response
   */
  listAssetRequestsWithHttpInfo(display_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling listAssetRequests");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssetRequests200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/requests",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all requests associated to the asset
   * Get a list of all requests associated to the asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetRequests200Response}
   */
  listAssetRequests(display_id) {
    return this.listAssetRequestsWithHttpInfo(display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all assets in Freshservice
   * Get a list of all assets in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. This is not applicable when search or filter query is present. (default to 30)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @param {Boolean} opts.trashed List assets in trash.
   * @param {String} opts.include Query param to include asset type fields in response.
   * @param {String} opts.filter The simple or compound query which needs to be applied as a filter to the list of asset. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>asset_type_id, department_id, location_id, asset_state, user_id, agent_id, name, asset_tag, created_at, updated_at.<br/>Sample Query: https://account.freshservice.com/api/v2/assets?filter=\"asset_type_id:12034 AND asset_tag:'HSN2323' AND created_at:>'2018-08-10'\"
   * @param {String} opts.search The simple query which needs to be applied to search an asset from the list of assets.<br/> Supported Query Parameters:<br/>name, asset_tag, serial_number.<br/>Sample Query: https://account.freshservice.com/api/v2/assets?search=\"name:'dell monitor'\"
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssets200Response} and HTTP response
   */
  listAssetsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      per_page: opts["per_page"],
      page: opts["page"],
      trashed: opts["trashed"],
      include: opts["include"],
      filter: opts["filter"],
      search: opts["search"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [
      "application/json",
      "Invalid search query format",
      "Invalid search field in search query",
      "Invalid filter query format",
      "Invalid filter field in filter query"
    ];
    let returnType = ListAssets200Response;
    return this.apiClient.callApi(
      "/api/v2/assets",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all assets in Freshservice
   * Get a list of all assets in Freshservice
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. This is not applicable when search or filter query is present. (default to 30)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @param {Boolean} opts.trashed List assets in trash.
   * @param {String} opts.include Query param to include asset type fields in response.
   * @param {String} opts.filter The simple or compound query which needs to be applied as a filter to the list of asset. This string needs to be URL encoded.<br/> Supported Query Parameters:<br/>asset_type_id, department_id, location_id, asset_state, user_id, agent_id, name, asset_tag, created_at, updated_at.<br/>Sample Query: https://account.freshservice.com/api/v2/assets?filter=\"asset_type_id:12034 AND asset_tag:'HSN2323' AND created_at:>'2018-08-10'\"
   * @param {String} opts.search The simple query which needs to be applied to search an asset from the list of assets.<br/> Supported Query Parameters:<br/>name, asset_tag, serial_number.<br/>Sample Query: https://account.freshservice.com/api/v2/assets?search=\"name:'dell monitor'\"
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssets200Response}
   */
  listAssets(opts) {
    return this.listAssetsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all component types
   * Get a list of all component types in Freshservice along with the fields specific to the component type
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListComponentTypes200Response} and HTTP response
   */
  listComponentTypesWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      per_page: opts["per_page"],
      page: opts["page"]
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListComponentTypes200Response;
    return this.apiClient.callApi(
      "/api/v2/component_types",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all component types
   * Get a list of all component types in Freshservice along with the fields specific to the component type
   * @param {Object} opts Optional parameters
   * @param {Number} opts.per_page The number of entries to retrieve in each page of a paginated list. (default to 10)
   * @param {Number} opts.page The page number to retrieve. (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListComponentTypes200Response}
   */
  listComponentTypes(opts) {
    return this.listComponentTypesWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update an existing asset
   * Update an existing asset
   * @param {module:model/Asset} asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssets200Response} and HTTP response
   */
  updateAssetWithHttpInfo(asset, display_id) {
    let postBody = asset;
    // verify the required parameter 'asset' is set
    if (asset === undefined || asset === null) {
      throw new Error("Missing the required parameter 'asset' when calling updateAsset");
    }
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling updateAsset");
    }

    let pathParams = {
      display_id: display_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = ListAssets200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Update an existing asset
   * Update an existing asset
   * @param {module:model/Asset} asset
   * @param {Number} display_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssets200Response}
   */
  updateAsset(asset, display_id) {
    return this.updateAssetWithHttpInfo(asset, display_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * update a component in an asset
   * update a component in an asset
   * @param {Number} display_id
   * @param {Number} component_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetComponents200Response} and HTTP response
   */
  updateAssetComponentWithHttpInfo(display_id, component_id) {
    let postBody = null;
    // verify the required parameter 'display_id' is set
    if (display_id === undefined || display_id === null) {
      throw new Error("Missing the required parameter 'display_id' when calling updateAssetComponent");
    }
    // verify the required parameter 'component_id' is set
    if (component_id === undefined || component_id === null) {
      throw new Error("Missing the required parameter 'component_id' when calling updateAssetComponent");
    }

    let pathParams = {
      display_id: display_id,
      component_id: component_id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ListAssetComponents200Response;
    return this.apiClient.callApi(
      "/api/v2/assets/{display_id}/components/{component_id}",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * update a component in an asset
   * update a component in an asset
   * @param {Number} display_id
   * @param {Number} component_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetComponents200Response}
   */
  updateAssetComponent(display_id, component_id) {
    return this.updateAssetComponentWithHttpInfo(display_id, component_id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
