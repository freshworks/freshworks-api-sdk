import { Freshservice } from "../../src";

const FS_DOMAIN = "devrel.freshservice.com";
const FS_API_KEY = "f_xkcd_222";

describe("Freshservice client", function () {
  it("should have a static models property", function () {
    expect(Freshservice).toHaveProperty("models");
  });

  it("should have properties for all sub-APIs", function () {
    const fs = new Freshservice(FS_DOMAIN, FS_API_KEY);
    expect(fs).toHaveProperty("tickets");
  });
});
