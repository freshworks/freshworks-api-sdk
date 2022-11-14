import { Freshteam } from "../../src";
import nock from "nock";
import getDepartments200 from "./responses/departments/get-departments-200";
import { Response } from "../../src/http-client";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Departments API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get department by id: /api/department/:id", function () {
    it("should get department information successfully", async function () {
      const id = 6000060442;
      mock.get(`/api/departments/${id}`).reply(200, getDepartments200[0]);
      const deptDetail = await ft.departments.get(id);
      expect(deptDetail).toBeInstanceOf(Response);
      expect(deptDetail.json()).toBeInstanceOf(Freshteam.models.Department);
      expect(deptDetail.json().id).toEqual(id);
    });
  });

  describe("get departments: /api/departments", function () {
    it("should list all departments information successfully without queries", async function () {
      mock.get(`/api/departments`).reply(200, getDepartments200);
      const deptList = await ft.departments.list();
      expect(deptList).toBeInstanceOf(Response);
      expect(deptList.json()).toBeInstanceOf(Array);
      for (const e of deptList.json()) {
        expect(e).toBeInstanceOf(Freshteam.models.Department);
      }
    });
  });
});
