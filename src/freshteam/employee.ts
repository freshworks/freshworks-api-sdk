import { Client, Nullable } from "../http-client";

type EmployeeBloodGroup =
  | "A−"
  | "B−"
  | "O−"
  | "B+"
  | "O+"
  | "A+"
  | "A1+"
  | "A1B-"
  | "AB+"
  | "AB-"
  | "A1B+"
  | "A2+"
  | "A2B-"
  | "A2B+"
  | "A1-";

export interface EmployeeWorkPhoneNumber {}

export interface EmployeePhoneNumber {}

export interface EmployeeAddress {
  street: string;
  state: string;
  city: string;
  country_code: string;
  zip_code: string;
}

export interface EmployeeCommunicationAddress {
  communication_street: string;
  communication_state: string;
  communication_city: string;
  communication_country_code: string;
  communication_zip_code: string;
  same_as_residential: true;
}

export interface Employee {
  id?: number;
  created_at: Date;
  updated_at: Date;
  deleted: boolean;
  work_numbers: EmployeeWorkPhoneNumber[];
  nick_name: string;
  date_of_birth: Date;
  gender: "male" | "female"; // :rolls-eyes:
  designation: string;
  phone_numbers: EmployeePhoneNumber[];
  joining_date: Date;
  termination_date: Date;
  first_name: string;
  middle_name: string;
  last_name: string;
  employee_id: string;
  employee_type: string;
  status: "active" | "inactive";
  official_email: string;
  personal_email: string;
  branch_id: number;
  reporting_to_id: number;
  hr_incharge_id: number;
  team_id: number;
  department_id: number;
  sub_department_id: number;
  business_unit_id: number;
  shift_id: number;
  confirmed: boolean;

  // Non-standard fields
  address: EmployeeAddress; // This should be a $ref in OpenAPI Spec. It is an object instead.
  communication_address: EmployeeCommunicationAddress; // This should be a $ref in OpenAPI Spec. It is an object instead.

  // Unconfirmed fields
  blood_group: EmployeeBloodGroup; // This field is present in the example for Create Employee, but not in the List All Employees endpoint.
}

export default function employeeFn(client: Client) {
  return {
    /**
     * Get a list of all employees
     *
     * @todo
     * @method
     * @returns Array of Employee
     */
    async all(): Promise<Nullable<Employee[]>> {
      const res = await client.get<Employee[]>("/employees");

      // Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }
      // Parse res.body
      return res.body;
    },

    /**
     * Create a new employee
     *
     * @todo
     * @param emp {Employee} - An employee data without Employee.id
     * @returns Employee freshly created
     */
    async create(emp: Employee): Promise<Nullable<Employee>> {
      // TODO
      const res = await client.send<Employee>({
        method: "POST",
        endpoint: "/employees",
        body: emp
      });

      // TODO: Check for error

      return res.body;
    }
  };
}
