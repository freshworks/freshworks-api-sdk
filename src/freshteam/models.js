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
  Department
} from "../gen/freshteam";
