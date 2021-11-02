import { Freshteam } from "../../src";
import nock from "nock";
import getEmployee200 from "./responses/get-employee-200";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Employees API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get employee by id: /api/employees/:id", function () {
    it("get should get employee information successfully", async function () {
      const id = 6000122460;
      mock.get(`/api/employees/${id}`).reply(200, getEmployee200);
      const empDetail = await ft.employees.get(id);
      expect(empDetail).toBeInstanceOf(Freshteam.models.EmployeeDetail);
      expect(empDetail.id).toEqual(id);
    });
  });
});
