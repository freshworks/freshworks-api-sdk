/**
 * Abstraction for underlying HTTP client
 *
 * @module http-client
 */

/**
 * Create a new URL instance from a given domain name
 *
 * @param {string} domain - Domain of the Freshworks application, e.g. "xxxx.freshteam.com"
 * @returns {URL} - The domain string converted to a URL
 * @private
 */
function toBaseUrl(domain) {
  return new URL(
    `https://${domain
      .trim()
      .replace(/^https?\:\/\//, "")
      .replace(/\/$/, "")}`
  );
}

/**
 * HTTP request configuration
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
function Request(opts = {}) {
  /**
   * @property {string} [method] - HTTP request method
   * @default "GET"
   */
  this.method = opts.method || "GET";

  /**
   * @property {string} [endpoint] - URL pathname beginning with a "/"
   * @default "/"
   */
  this.endpoint = opts.endpoint || "/";

  /**
   * @property {object|null} [body] - Body of the HTTP request. Given object will be serialized to a string
   * @default null
   */
  this.body = opts.body || null;

  /**
   * @property {object} [headers] - Key-value pairs for headers in the request
   * @property {string} [headers.Content-Type = "application/json"] - Content-Type header
   * @member
   * @default {
   *  "Content-Type": "application/json"
   * }
   */
  this.headers = opts.headers || {
    "Content-Type": "application/json"
  };

  /**
   * @property {object} [query] - Key-value pairs for query string
   * @default {}
   */
  this.query = opts.query || {};
}

/**
 * The Response type returned by {@link module:http-client~Client|Client} for every {@link module:http-client~Request|Request}.
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
function Response(opts = {}) {
  /**
   * Error in the API response.
   *
   * @property {Error|null} [error] - Check this field to ensure there were no errors returned
   * @default null
   */
  this.error = opts.error || null;

  /**
   * @property {number} [statusCode] - HTTP status code of the Response
   * @default 200
   */
  this.statusCode = opts.statusCode || 200;

  /**
   * @property {string} [statusMessage] - HTTP status message
   * @default "OK"
   */
  this.statusMessage = opts.statusMessage || "OK";

  /**
   * @property {object} [headers] - An object containing all HTTP response headers
   * @default {}
   */
  this.headers = opts.headers || {};

  /**
   * @property {object | null} [body] - JavaScript object representation of the Response body received from the API
   * @default null
   */
  this.body = opts.body || null;
}

/**
 * Abstraction for HTTP request client for use by the rest of the lib
 *
 * @example
 * async function sendAPIRequest(body) {
 *  const client = new Client("example.freshteam.com", apiKey);
 *  // Send a POST request to "/employees"
 *  const res = await client.send(new Request({
 *    method: "POST",
 *    endpoint: "/employees",
 *    body
 *  }));
 * }
 */
class Client {
  /**
   * Create a new Client
   *
   * @param {string} domain - Domain of the Freshworks application, e.g. "xxxx.freshteam.com"
   * @param {string} apiKey - API Key for the same domain
   */
  constructor(domain, apiKey) {
    this.domain = domain;
    this.apiKey = apiKey;
  }

  /**
   * Send a request and receive response returned
   *
   * @param {module:http-client~Request} req - Request parameters
   * @returns {module:http-client~Response} - A Response object
   */
  async send(req) {
    let url = toBaseUrl(this.domain);
    url.pathname = req.endpoint;
    // TODO: send the request
    return new Response({
      error: new Error("Not implemented"),
      body: null
    });
  }

  /**
   * Shorthand for HTTP GET requests. Calls {@link Client#request} internally
   *
   * @param {string} pathname - URL pathname of the endpoint, beginning with a "/"
   * @returns {module:http-client~Response} - A Response object
   */
  async get(endpoint) {
    return this.send({
      method: "GET",
      endpoint
    });
  }
}

module.exports = {
  Request,
  Response,
  Client
};
