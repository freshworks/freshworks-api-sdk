import { Freshteam } from "../src";

const FT_DOMAIN = process.env["FT_DOMAIN"] || "example.freshteam.com";
const FT_API_KEY = process.env["FT_API_KEY"] || "f_xkcd/222";

describe("Freshteam Client using swagger-js", function () {
  it("Try employee all", async function () {
    const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);
    await ft.employee.all();
    return;
  });
});
