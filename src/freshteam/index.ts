import { Client } from "../http-client";
import employee from "./employee";

export class Freshteam {
  readonly employee: object;

  constructor(hostname: string) {
    const client = new Client(hostname);

    /**
     * Covers `/employees`
     *
     * @property
     */
    this.employee = employee(client);
  }
}
