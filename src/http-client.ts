import { URL } from "url";
import { toBaseUrl } from "./helpers";
import { request } from "https";

/**
 * A type that can be a given type or null
 */
export type Nullable<T> = T | null;

/**
 * Key-value pair used in request body or queries
 */
export type KV<T> = {
  [index: string]: T;
};

export type ClientRequest = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  body?: KV<any>; // This needs to be narrowed. Possibly use a generic type on ClientRequest
  headers?: KV<string>;
  query?: KV<string | number>;
};

export type ClientResponse<T> = {
  error?: Error;
  statusCode?: number;
  statusMessage?: string;
  headers?: KV<string>;
  body: Nullable<T>;
};

export class Client {
  private baseUrl: URL;

  /**
   * Domain of the Freshworks product.
   *
   * @example "myorg.freshteam.com"
   */
  readonly hostname: string;

  constructor(hostname: string) {
    this.baseUrl = toBaseUrl(hostname);
    this.hostname = hostname;
  }

  async request<T>(req: ClientRequest): Promise<ClientResponse<T>> {
    // TODO
    return {
      error: new Error("Not implemented"),
      body: null
    };
  }

  async get<T>(endpoint: string): Promise<ClientResponse<T>> {
    // TODO
    return {
      error: new Error("Not implemented"),
      body: null
    };
  }
}
