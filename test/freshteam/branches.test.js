import { Freshteam } from "../../src";
import nock from "nock";
import getBranches200 from "./responses/branches/get-branches-200";
import { Response } from "../../src/http-client";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Branches API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get branch  by id: /api/branches/:id", function () {
    it("should get branch information successfully", async function () {
      const id = 6000024810;
      mock.get(`/api/branches/${id}`).reply(200, getBranches200[0]);
      const branchDetail = await ft.branches.get(id);
      expect(branchDetail).toBeInstanceOf(Response);
      expect(branchDetail.json()).toBeInstanceOf(Freshteam.models.Branch);
      expect(branchDetail.json().id).toEqual(id);
    });
  });

  describe("get branches: /api/branches", function () {
    it("should list all branches information successfully without queries", async function () {
      mock.get(`/api/branches`).reply(200, getBranches200);
      const branchesList = await ft.branches.list();
      expect(branchesList).toBeInstanceOf(Response);
      expect(branchesList.json()).toBeInstanceOf(Array);
      for (const e of branchesList.json()) {
        expect(e).toBeInstanceOf(Freshteam.models.Branch);
      }
    });
  });
});
