export interface EmployeeListQuery {
  /**
   * Limits the response to employee objects whose status value matches the parameter value. Valid values: active, inactive
   */
  status?: string;
  /**
   * Limits the response to employee objects whose first_name value matches the parameter value.
   */
  first_name?: string;
  /**
   * Limits the response to employee objects whose last_name value matches the parameter value.
   */
  last_name?: string;
  /**
   * Limits the response to employee objects whose personal_email value matches the parameter value.
   */
  personal_email?: string;
  /**
   * Limits the response to employee objects whose official_email value matches the parameter value.
   */
  official_email?: string;
  /**
   * Limits the response to employee objects whose employee_type value matches the parameter value. e.g. `contract`
   */
  employee_type?: string;
  /**
   * Limits the response to employee objects whose department_id value matches the parameter value. e.g. `3000016570`
   */
  department?: number;
  /**
   *
   * Limits the response to employee objects whose business_unit_id value matches the parameter value. e.g, `3000000015`
   */
  business_unit?: number;
  /**
   * Limits the response to employee objects whose branch_id value matches the parameter value. e.g, `3000011495`
   */
  location?: number;
  /**
   * Limits the response to employee objects whose reporting_to_id value matches the parameter value.
   */
  reporting_manager?: number;
  /**
   * Limits the response to employee objects whose updated_at value is a time after the parameter value. e.g. `new Date("2021-12-15")`
   */
  updated_since?: Date;
  /**
   * Limits the response to employee objects whose draft value matches the parameter value.
   */
  draft?: boolean;
  /**
   * Limits the response to employee objects whose terminated value matches the parameter value.
   */
  terminated?: boolean;
  /**
   * Limits the response to employee objects whose deleted value matches the parameter value.
   */
  deleted?: boolean;
  /**
   * Field to sort results on. Valid values: `first_name`, `last_name`, `employee_id`.
   */
  sort?: string;
  /**
   * If the sort value is specified, sort_type specifies whether the list must be sorted in ascending or descending order. If sort_type is specified with no sort value, the list is sorted based on the first_name attribute. Valid values: `asc`, `desc`
   */
  sort_type?: string;
  /**
   * Page number starting from which the response data is retrieved. Each `page` contains maximum 50 entries. Use this parameter to paginate results.
   */
  page?: number;
}

export interface JobPostingsListQuery {
  /**
   * Limits the response to job posting objects whose status value matches the parameter value. Valid values: draft, published, internal, private, on_hold, closed
   */
  status?: string[];
  /**
   * Limits the response to job posting objects whose title value matches the parameter value.
   */
  title?: string;
  /**
   * Limits the response to job posting objects whose type value matches the parameter value.
   */
  type?: string;
  /**
   * Limits the response to job posting objects whose department.id value matches the parameter value.
   */
  department?: number[];
  /**
   * Limits the response to job postings objects whose branch.id value matches the parameter value.
   */
  location?: number[];
  /**
   * Limits the response to job postings objects whose remote value matches the parameter value.
   */
  remote?: boolean[];
  /**
   * Limits the response to job posting objects whose branch.city value matches the parameter value.
   */
  location_city?: string[];
  /**
   * Limits the response to job posting objects whose branch.country_code value matches the parameter value.
   */
  location_country?: string[];
  /**
   * Field to sort results on
   */
  sort?: string;
  /**
   * If the sort value is specified, sort_type specifies whether the list must be sorted in ascending or descending order. If sort_type is specified with no sort value, the list is sorted based on the first_name attribute. Valid values: `asc`, `desc`
   */
  sort_type?: string;
  /**
   * Page number starting from which the response data is retrieved. Each `page` contains maximum 50 entries. Use this parameter to paginate results.
   */
  page?: number;
}

export {
  // Applicant models
  Applicant,
  ApplicantDetail,
  ApplicantUpdate,
  InlineObject3 as ApplicantArchive,
  InlineObject4 as ApplicantSubStage,
  // Employee models
  Employee,
  EmployeeCreate,
  EmployeeDetail,
  EmployeeField,
  InlineObject2 as EmployeeFieldCreate,
  // Time Off models
  LeaveType,
  LeaveRequest,
  LeaveRequestCreate,
  InlineObject as LeaveRequestApprove,
  InlineObject1 as LeaveRequestReject,
  // User Function models
  UserFunction,
  // Sub-Department models
  SubDepartment,
  // Role models
  Role,
  // New Hire models
  NewHire,
  NewHireCreate,
  NewHireDetail,
  // Branches models
  Branch,
  // Business Units models
  BusinessUnit,
  // Department models
  Department,
  // Teams models
  Team,
  // Levels models
  Level,
  // Job Postings models
  Job,
  JobField,
  ApplicantCreate,
  ApplicantField,
  // Candidate sources models
  Source,
  SourceCreate,
  SourceCategory
} from "../gen/freshteam";
