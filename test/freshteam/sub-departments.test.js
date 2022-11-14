import { Freshteam } from "../../src";
import nock from "nock";
import getSubDepartments200 from "./responses/sub-departments/get-sub-departments-200";
import { Response } from "../../src/http-client";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Sub Departments API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get sub-department by id: /api/sub_departments/:id", function () {
    it("should get sub-departments information successfully", async function () {
      const id = 6000001846;
      mock.get(`/api/sub_departments/${id}`).reply(200, getSubDepartments200[0]);
      const subDeptDetail = await ft.subDepartments.get(id);
      expect(subDeptDetail).toBeInstanceOf(Response);
      expect(subDeptDetail.json()).toBeInstanceOf(Freshteam.models.SubDepartment);
      expect(subDeptDetail.json().id).toEqual(id);
    });
  });

  describe("get sub-departments: /api/sub_departments", function () {
    it("should list all sub-departments information successfully without queries", async function () {
      mock.get(`/api/sub_departments`).reply(200, getSubDepartments200);
      const subDeptList = await ft.subDepartments.list();
      expect(subDeptList).toBeInstanceOf(Response);
      expect(subDeptList.json()).toBeInstanceOf(Array);
      for (const e of subDeptList.json()) {
        expect(e).toBeInstanceOf(Freshteam.models.SubDepartment);
      }
    });
  });
});
