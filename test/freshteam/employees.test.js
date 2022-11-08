import { Freshteam } from "../../src";
import nock from "nock";
import getEmployees200 from "./responses/employees/get-employees-200";
import createEmployee201 from "./responses/employees/create-employee-201";
import getEmployeeFields200 from "./responses/employees/get-employee-fields-200";
import createEmployeeField201 from "./responses/employees/create-employee-field-201";
import updateEmployee200 from "./responses/employees/update-employee-200";
import { Response } from "../../src/http-client";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Employees API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get employee by id: /api/employees/:id", function () {
    it("should get employee information successfully", async function () {
      const id = 6000122460;
      mock.get(`/api/employees/${id}`).reply(200, getEmployees200[1]);
      const empDetail = await ft.employees.get(id);
      expect(empDetail).toBeInstanceOf(Response);
      expect(empDetail.json()).toBeInstanceOf(Freshteam.models.EmployeeDetail);
      expect(empDetail.json().id).toEqual(id);
    });
  });

  describe("get employees: /api/employees", function () {
    it("should list all employees information successfully without queries", async function () {
      const id = 6000122460;
      mock.get(`/api/employees`).reply(200, getEmployees200);
      const empList = await ft.employees.list();
      expect(empList).toBeInstanceOf(Response);
      expect(empList.json()).toBeInstanceOf(Array);

      for (const e of empList.json()) {
        expect(e).toBeInstanceOf(Freshteam.models.Employee);
      }
    });
  });

  describe("get employees with pagination: /api/employees", function () {
    it("should support `page` query param", async function () {
      const page = 2;
      mock.get(`/api/employees?page=${page}`).reply(200, []);
      const empList = await ft.employees.list({ page });
      expect(empList).toBeInstanceOf(Response);
      expect(empList.json()).toBeInstanceOf(Array);
    });

    it("should support `sort` query param", async function () {
      const sort = "first_name";
      mock.get(`/api/employees?sort=${sort}`).reply(200, []);
      const empList = await ft.employees.list({ sort });
      expect(empList).toBeInstanceOf(Response);
      expect(empList.json()).toBeInstanceOf(Array);
    });

    it("should support `sort_type` query param", async function () {
      const sort_type = "desc";
      mock.get(`/api/employees?sort_type=${sort_type}`).reply(200, []);
      const empList = await ft.employees.list({ sort_type });
      expect(empList).toBeInstanceOf(Response);
      expect(empList.json()).toBeInstanceOf(Array);
    });

    it("should support all pagination query params when supplied together", async function () {
      const page = 2;
      const sort = "title";
      const sort_type = "desc";
      mock.get(`/api/employees?sort=${sort}&sort_type=${sort_type}&page=${page}`).reply(200, []);
      const empList = await ft.employees.list({ page, sort, sort_type });
      expect(empList).toBeInstanceOf(Response);
      expect(empList.json()).toBeInstanceOf(Array);
    });
  });

  describe("create employee: /api/employees", function () {
    it("should create an employee with EmployeeCreate object as parameter", async function () {
      const employee = new Freshteam.models.EmployeeCreate("John", "Smith", "john@freshteam.com", 6000243350);
      mock.post(`/api/employees`).reply(201, createEmployee201);
      const createEmpResp = await ft.employees.create(employee);
      expect(createEmpResp).toBeInstanceOf(Response);
      expect(createEmpResp.json()).toBeInstanceOf(Freshteam.models.Employee);
      expect(createEmpResp.json().id).toEqual(employee.role_ids);
    });
  });

  describe("get employee fields: /api/employee_fields", function () {
    it("should list all employee fields information successfully without queries", async function () {
      mock.get(`/api/employee_fields`).reply(200, getEmployeeFields200);
      const empFieldsList = await ft.employees.fields();
      expect(empFieldsList).toBeInstanceOf(Response);
      expect(empFieldsList.json()).toBeInstanceOf(Array);
      for (const e of empFieldsList.json()) {
        expect(e).toBeInstanceOf(Freshteam.models.EmployeeField);
      }
    });
  });

  describe("create employee field: /api/employee_fields", function () {
    it("should create an employee field with any object as parameter", async function () {
      const id = 6003487313;
      const employeeField = {
        label: "Hobbies",
        required: false,
        section_name: "additional_info",
        field_type: "text"
      };
      mock.post(`/api/employee_fields`).reply(201, createEmployeeField201);
      const createEmpFieldResp = await ft.employees.createField(employeeField);
      expect(createEmpFieldResp).toBeInstanceOf(Response);
      expect(createEmpFieldResp.json()).toBeInstanceOf(Freshteam.models.EmployeeField);
      expect(createEmpFieldResp.json().id).toEqual(id);
    });
  });

  describe("update employee information: /api/employee/{id}", function () {
    it("should update an employee information with employee id and Employee object as parameters", async function () {
      const id = 6000122460;
      const employeeUpdateFields = {
        first_name: "Johnny",
        middle_name: "L",
        last_name: "Snow",
        official_email: "johnny@freshteam.com"
      };
      mock.put(`/api/employees/${id}`).reply(200, updateEmployee200);
      const updateEmpResp = await ft.employees.update(id, employeeUpdateFields);
      expect(updateEmpResp).toBeInstanceOf(Response);
      expect(updateEmpResp.json()).toBeInstanceOf(Freshteam.models.Employee);
      expect(updateEmpResp.json().id).toEqual(id);
    });
  });
});
