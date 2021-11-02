import { Freshteam } from "../../src";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

describe("Freshteam client", function () {
  it("should have a static models property", function () {
    expect(Freshteam).toHaveProperty("models");
  });

  it("should have properties for all sub-APIs", function () {
    const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);
    expect(ft).toHaveProperty("employees");
    expect(ft).toHaveProperty("branches");
    expect(ft).toHaveProperty("departments");
    expect(ft).toHaveProperty("subDepartments");
    expect(ft).toHaveProperty("businessUnits");
    expect(ft).toHaveProperty("teams");
    expect(ft).toHaveProperty("levels");
    expect(ft).toHaveProperty("timeOffs");
    expect(ft).toHaveProperty("roles");
    expect(ft).toHaveProperty("jobPostings");
    expect(ft).toHaveProperty("candidateSources");
    expect(ft).toHaveProperty("userFunctions");
    expect(ft).toHaveProperty("newHires");
    expect(ft).toHaveProperty("applicants");
  });
});
