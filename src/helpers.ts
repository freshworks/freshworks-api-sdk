import { URL } from "url";

export function toBaseUrl(hostname: string): URL {
  return new URL(
    `https://${hostname
      .trim()
      .replace(/^https?\:\/\//, "")
      .replace(/\/$/, "")}`
  );
}
