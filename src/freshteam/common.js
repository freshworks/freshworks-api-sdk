import { Response } from "../http-client";

/**
 * Converts an internal response object into a `Response`
 *
 * @param {object} res
 * @returns {Response}
 */
export function intoResponse(res) {
  return new Response(res.data, {
    statusCode: res.response.statusCode,
    headers: res.response.headers
  });
}
