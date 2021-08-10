import { TimeOff } from "../time-offs";
import { Model } from "./model";

export interface WorkNumber {}

export interface Address {

}

export interface CommunicationAddress {

}

type BloodGroup =
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

export interface Employee extends Model {
  // Name
  first_name: string,
  middle_name?: string,
  last_name: string,
  nick_name?: string,

  // Biodata
  date_of_birth?: string,
  gender?: "male" | "female",

  // State
  status?: "active" | "inactive",
  draft?: boolean,
  terminated?: boolean,

  // Contact
  official_email: string,
  personal_email: string,
  work_numbers?: WorkNumber[],
  workstation_number?: string,
  address?: Address,
  communication_address?: CommunicationAddress,

  // Designation and official ID
  employee_id?: string, // Employee ID provided by the organization that uses Freshteam
  employee_type?: string,

  // Department
  branch_id?: string,
  team_id?: string,
  department_id?: string,
  business_unit_id?: string,
  sub_department_id?: string,

  // Managers
  reporting_to_id?: string,
  hr_incharge_id?: string,

  // Shift
  shift_id?: string,


  // Timeoff
  time_off?: TimeOff
}

// Additional properties for Employee
export interface EmployeeDetail extends Employee {
  eeo_veteran?: string,
  eeo_ethnicity: string,
  eeo_disabled: string,

}
