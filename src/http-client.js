/**
 * Abstraction for underlying HTTP client
 *
 * @module http-client
 */

import { default as axios } from "axios";

function toBaseUrl(hostname) {
  return `https://${hostname
    .trim()
    .replace(/^https?\:\/\//, "")
    .replace(/\/$/, "")}`;
}

/**
 * HTTP request configuration
 *
 * @param {object} opts - Request constructor options
 * @param {string} [opts.method = "GET"] - HTTP request method, e.g., "GET", "POST", "PUT", "PATCH", "DELETE"
 * @param {string} [opts.endpoint = "/"] - HTTP API endpoint to call, beginning with a "/". Don't include basePath in this.
 * @param {object | null} [opts.body = null] - Request body
 * @param {object} [opts.headers = {}] - Request headers
 * @param {object} [opts.query = {}] - Query parameters to add to the URL
 *
 * @constructor
 * @example
 * // GET request to "/employees"
 * const req = new Request({
 *  endpoint: "/employees",
 * });
 *
 * // POST request to "/time-offs"
 * const req = new Request({
 *  method: "POST",
 *  endpoint: "/time-offs",
 *  body: payload
 * });
 */
export function Request(opts = {}) {
  /**
   * @property {string} [method] - HTTP request method
   * @default "GET"
   * @type {string}
   */
  this.method = opts.method || "GET";

  /**
   * @property {string} [endpoint] - URL pathname beginning with a "/"
   * @default "/"
   * @type {string}
   */
  this.endpoint = opts.endpoint || "/";

  /**
   * @property {object|null} [body] - Body of the HTTP request. Given object will be serialized to a string
   * @default null
   * @type {object|null}
   */
  this.body = opts.body || null;

  /**
   * @property {object} [headers] - Key-value pairs for headers in the request
   * @property {string} [headers.Content-Type = "application/json"] - Content-Type header
   * @member
   * @default {}
   * @type {object}
   */
  this.headers = opts.headers || {};

  /**
   * @property {object} [query] - Key-value pairs for query string
   * @default {}
   * @type {object}
   */
  this.query = opts.query || {};
}

/**
 * The Response type returned by {@link module:http-client~Client|Client} for every {@link module:http-client~Request|Request}.
 *
 * @param {object} [opts = {}] - Response constructor options
 * @param {Error | null} [opts.error = null] - Error object if an error has occurred
 * @param {number} [opts.statusCode = 200] - HTTP response status code
 * @param {string} [opts.statusMessage = "OK"] - HTTP response status message
 * @param {object} [opts.headers = {}] - HTTP response headers
 * @param {object | null} [opts.body = null] - Response body
 *
 * @constructor
 * @example
 * // Default success response
 * const success = new Response();
 *
 * // Custom status code
 * const res = new Response({
 *  statusCode: 418,
 *  statusMessage: "I'm a teapot",
 *  headers: {
 *    "Content-Type": "application/json"
 *  },
 *  body: {
 *    "message": "You got that right"
 *  }
 * });
 */
export function Response(opts = {}) {
  /**
   * Error in the API response.
   *
   * Check this field to ensure there were no errors returned.
   *
   * @default null
   * @type {Error}
   * @inner
   */
  this.error = opts.error || null;

  /**
   * HTTP status code of the Response
   *
   * @default 200
   * @type {number}
   * @inner
   */
  this.statusCode = opts.statusCode || 200;

  /**
   * HTTP status message
   *
   * @default "OK"
   * @type {string}
   * @inner
   */
  this.statusMessage = opts.statusMessage || "OK";

  /**
   * An object containing all HTTP response headers
   *
   * @default {}
   * @type {object}
   * @inner
   */
  this.headers = opts.headers || {};

  /**
   * JavaScript object representation of the Response body received from the API
   *
   * @default null
   * @type {object|null}
   * @inner
   */
  this.body = opts.body || null;

  /**
   * Response object from underlying HTTP client
   * @private
   */
  this._res = null;
}

/**
 * Abstraction for HTTP request client for use by the rest of the lib
 *
 * @example
 * async function sendAPIRequest(body) {
 * const domain = "example.freshteam.com";
 * const basePath = "/api/v2";
 * const apiKey = "xxxx";
 *
 *  const client = new Client({ domain, basePath, apiKey });
 *  // Send a POST request to "/employees"
 *  const res = await client.send(new Request({
 *    method: "POST",
 *    endpoint: "/employees",
 *    body
 *  }));
 * }
 */
export class Client {
  /**
   * Create a new Client
   *
   * @param {object} opts - Client options
   * @param {string} opts.domain - Domain of the Freshworks application, e.g. "xxxx.freshteam.com"
   * @param {string} opts.apiKey - API Key for the same domain
   * @param {string} [opts.basePath = ""] - API base path, e.g., "/api/v2". Should be empty string or begin with a forward slash. Should not contain only a slash.
   * @param {number} [opts.timeout = 5000] - Request timeout in ms
   */
  constructor(opts = {}) {
    if (!opts.domain || !opts.apiKey) {
      throw new Error("'domain' and 'apiKey' are required in options");
    }
    this._httpClient = axios.create({
      baseURL: `${toBaseUrl(opts.domain)}${opts.basePath}`,
      timeout: opts.timeout || 5000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${opts.apiKey}`
      }
    });
  }

  /**
   * Send a request and receive response returned
   *
   * @todo Handle paginated response
   * @param {Request} req - Request parameters
   * @returns {Response} - A Response object
   */
  async send(req) {
    return this._httpClient
      .request({
        method: req.method,
        url: req.endpoint,
        params: req.query,
        data: req.body,
        responseType: "json",
        responseEncoding: "utf-8",
        maxContentLength: 64000, // 64 KB
        maxBodyLength: 64000, // 64 KB
        validateStatus: status => status === 200 || status === 201 // These are the only two success status codes sent by Freshteam REST API
      })
      .then(
        res =>
          new Response({
            body: res.data,
            headers: res.headers,
            _res: res
          })
      )
      .catch(e => new Response({ error: e }));
  }

  /**
   * Shorthand for HTTP GET requests. Calls {@link Client#send} internally
   *
   * @todo Handle paginated response
   * @param {string} endpoint - URL pathname of the endpoint, beginning with a "/"
   * @param {object} [query = {}] - Query string as object
   * @returns {module:http-client~Response} - A Response object
   */
  async get(endpoint, query = {}) {
    return this.send(
      new Request({
        method: "GET",
        query,
        endpoint
      })
    );
  }

  /**
   * Shorthand for HTTP POST requests. Calls {@link Client#send} internally
   *
   * @param {string} endpoint - URL pathname of the endpoint, beginning with a "/"
   * @param {object} [body = {}] - Request body as a JSON serializable object
   * @returns {module:http-client~Response} - A Response object
   */
  async post(endpoint, body = {}) {
    return this.send(
      new Request({
        method: "POST",
        data: body,
        endpoint
      })
    );
  }
}
