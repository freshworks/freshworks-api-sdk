import { Freshteam } from "../../src";
import nock from "nock";
import getBusinessUnits200 from "./responses/business-units/get-business-units-200";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Business Units API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get business-unit by id: /api/business_units/:id", function () {
    it("should get business-unit's information successfully", async function () {
      const id = 6000001054;
      mock.get(`/api/business_units/${id}`).reply(200, getBusinessUnits200[0]);
      const bussUnitDetail = await ft.businessUnits.get(id);
      expect(bussUnitDetail).toBeInstanceOf(Freshteam.models.BusinessUnit);
      expect(bussUnitDetail.id).toEqual(id);
    });
  });

  describe("get business-units: /api/business_units", function () {
    it("should list all business-units information successfully without queries", async function () {
      mock.get(`/api/business_units`).reply(200, getBusinessUnits200);
      const bussUnitsList = await ft.businessUnits.list();
      expect(bussUnitsList).toBeInstanceOf(Array);
      for (const e of bussUnitsList) {
        expect(e).toBeInstanceOf(Freshteam.models.BusinessUnit);
      }
    });
  });
});
