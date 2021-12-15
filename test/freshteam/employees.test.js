import { Freshteam } from "../../src";
import nock from "nock";
import getEmployee200 from "./responses/get-employee-200";
import getEmployees200 from "./responses/get-employees-200";
import createEmployee201 from "./responses/create-employee-201";
import getEmployeeFields200 from "./responses/get-employee-fields-200";
import createEmployeeField201 from "./responses/create-employee-field-201";
import updateEmployee200 from "./responses/update-employee-200";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Employees API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get employee by id: /api/employees/:id", function () {
    it("should get employee information successfully", async function () {
      const id = 6000122460;
      mock.get(`/api/employees/${id}`).reply(200, getEmployee200);
      const empDetail = await ft.employees.get(id);
      expect(empDetail).toBeInstanceOf(Freshteam.models.EmployeeDetail);
      expect(empDetail.id).toEqual(id);
    });
  });

  describe("get employees: /api/employees", function () {
    it("should list all employees information successfully without queries", async function () {
      const id = 6000122460;
      mock.get(`/api/employees`).reply(200, getEmployees200);
      const empList = await ft.employees.list();
      expect(empList).toBeInstanceOf(Array);
      for (const e of empList) {
        expect(e).toBeInstanceOf(Freshteam.models.Employee);
      }
    });
  });

  describe("create employee: /api/employees", function () {
    it("should create an employee with EmployeeCreate object as parameter", async function () {
      const employee = new Freshteam.models.EmployeeCreate("John", "Smith", "john@freshteam.com", 6000243350);
      mock.post(`/api/employees`).reply(201, createEmployee201);
      const createEmpResp = await ft.employees.create(employee);
      expect(createEmpResp).toBeInstanceOf(Freshteam.models.Employee);
      expect(createEmpResp.id).toEqual(employee.role_ids);
    });
  });

  describe("get employee fields: /api/employee_fields", function () {
    it("should list all employee fields information successfully without queries", async function () {
      mock.get(`/api/employee_fields`).reply(200, getEmployeeFields200);
      const empFieldsList = await ft.employees.fields();
      expect(empFieldsList).toBeInstanceOf(Array);
      for (const e of empFieldsList) {
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
      expect(createEmpFieldResp).toBeInstanceOf(Freshteam.models.EmployeeField);
      expect(createEmpFieldResp.id).toEqual(id);
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
      expect(updateEmpResp).toBeInstanceOf(Freshteam.models.Employee);
      expect(updateEmpResp.id).toEqual(id);
    });
  });
});
