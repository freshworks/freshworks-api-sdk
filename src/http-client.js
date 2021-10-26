/**
 * Abstraction for underlying HTTP client
 *
 * @module http-client
 * @private
 */

function toBaseUrl(hostname) {
  return `https://${hostname
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")}`;
}

/**
 * Abstraction for HTTP request client for use by the rest of the lib
 */
export class Client {
  /**
   * Create a new Client
   *
   * @param {object} opts - Client options
   * @param {string} opts.domain - Domain of the Freshworks application, e.g. "xxxx.freshteam.com"
   * @param {string} opts.apiKey - API Key for the same domain
   * @param {object} opts.instance - ApiClient instance from generated code
   * @param {string} [opts.authType = "ApiKeyAuth"] - OpenAPI auth type to configure the instance with. Valid options: "ApiKeyAuth"
   * @param {string} [opts.authPrefix = "Bearer"] - Prefix used for the Authorization HTTP header. Valid options: "Bearer", "Token" — depending on the API
   * @param {string} [opts.basePath = ""] - API base path, e.g., "/api/v2". Should be empty string or begin with a forward slash. Should not contain only a slash.
   * @param {number} [opts.timeout = 5000] - Request timeout in ms
   */
  constructor(opts = {}) {
    if (!opts.domain || !opts.apiKey) {
      throw new Error("'domain' and 'apiKey' are required in options");
    }
    this.instance = opts.instance || null;
    if (this.instance === null) {
      // TODO: validate using `instanceOf` or something similar
      throw new Error("Pass an `instance` property containing `ApiClient.instance` in options");
    }
    // Update basePath of the client instance
    this.instance.setBasePath(`${toBaseUrl(opts.domain)}${opts.basePath}`);
    // Set authorizations
    opts.authType = opts.authType || "ApiKeyAuth";
    let auth = this.instance.authentications[opts.authType];
    auth.apiKey = opts.apiKey;
    auth.apiKeyPrefix = opts.authPrefix || "Bearer";
  }
}
