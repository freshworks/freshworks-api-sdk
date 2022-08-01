/**
 * Abstraction for underlying HTTP client
 *
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
 *
 * @private
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

/**
 * The Response type returned by every API method.
 *
 * ```js
 * // Default success response
 * const success = new Response();
 *
 * // Custom status code
 * const res = new Response({
 *  statusCode: 418,
 *  headers: {
 *    "Content-Type": "application/json"
 *  },
 *  body: {
 *    "message": "You got that right"
 *  }
 * });
 * ```
 */
export class Response {
  constructor(body = null, opts = {}) {
    /**
     * @property {number} [statusCode] - HTTP status code of the Response
     * @default 200
     * @type {number}
     */
    this.statusCode = opts.statusCode || 200;

    /**
     * @property {object} [headers] - An object containing all HTTP response headers
     * @default {}
     * @type {object}
     */
    this.headers = opts.headers || {};

    /**
     * @property {object | null} [body] - JavaScript object representation of the Response body received from the API
     * @default null
     * @type {object|string|null}
     */
    this.body = body || opts.body || null;
  }

  json() {
    // TODO: Also check for content type before attempting to parse body as JSON
    return typeof this.body === "string" ? JSON.parse(this.body) : this.body;
  }
}
