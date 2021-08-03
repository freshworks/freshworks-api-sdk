import { Client } from "../http-client";

export type JobPostingQuery = {
  status: "draft" | "internal" | "private" | "on_hold" | "closed";
  title: string;
  type: string;
  department: Array<number>;
  location: Array<number>;
  remote: Array<boolean>;
  location_city: Array<string>;
  location_country: Array<string>;
  location_state: Array<string>;
}

export type JobPostingSalery = {
  min: number;
  max: number;
  currency: string;
}

export type Branch = {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted: boolean;
  name: string;
  street: string;
  state: string;
  city: string;
  country_code: string;
  zip: string;
  time_zone: string;
  currency: string;
  language: string;
  main_office: boolean;
  contact_info: string;
  date_format: string;
}

export type Department = {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted: boolean;
  name: string;
}

export type UserLite = {
  id: number;
  first_name: string;
  last_name: string;
  official_email: string;
}

export type Requisitions = {
  id: number;
  deleted: boolean;
  title: string;
  recruiters: UserLite;
  hiring_managers: UserLite;
  panel_members: UserLite;
}

export type SubStages = {
  id: number;
  name: string;
  position: number;
  default: boolean;
  stage: string;
  deleted: boolean;
}

export type InterviewProcess = {
  id: number;
  name: string;
  sub_stages: SubStages;
}

export type JobPosting = {
  id: number;
  created_at: string;
  updated_at: Date;
  title: string;
  description: string;
  status: string;
  applicant_access_type: string;
  applicant_apply_link: string;
  show_pursue_as_career: boolean;
  closing_date: string;
  experience: string;
  remote: boolean;
  type: string;
  salary: JobPostingSalery;
  branch: Branch;
  department: Department;
  requisitions: Requisitions;
  interview_process: InterviewProcess;
}

export type CustomRadioField = {
  id: number;
  value: string;
}

export type CustomField = {
  text_fields: string;
  radio_or_dropdown_fields: CustomRadioField;
}

export type JobDetail = {
  id: number;
  created_at: string;
  updated_at: Date;
  title: string;
  description: string;
  status: string;
  applicant_access_type: string;
  applicant_apply_link: string;
  show_pursue_as_career: boolean;
  closing_date: string;
  experience: string;
  remote: boolean;
  type: string;
  salary: JobPostingSalery;
  branch: Branch;
  department: Department;
  requisitions: Requisitions;
  interview_process: InterviewProcess;
  custom_field_values?: CustomField;
  skills?: Array<string>;
}

export type ProfileLink = {
  name: string;
  url: string;
}

export type Location = {
  city: string;
  state: string;
  street: string;
  country_code: string;
  zip_code: string;
}

export type Candidate = {
  date_of_birth: Date;
  gender: "male" | "female";
  first_name: string;
  middle_name: string;
  last_name: string;
  mobile: string;
  phone: string;
  email: string;
  source_id: number;
  source_category_id: number;
  profile_links: ProfileLink[];
  location: Location;
  skype_id: string;
  eeo_ethnicity: string;
  eeo_gender: string;
  eeo_veteran: string;
  eeo_disabled: string;
  resumes: Array<string>;
  cover_letters: Array<string>;
  portfolios: Array<string>;
}

export type ApplicantCreate = {
  custom_fields: object;
  column_name: string;
  candidate_id: number;
  candidate: Candidate;
}

export type ApplicantCustomField = {
  column_name: string;
}

export type Follower = {
  id: number;
  user_id: number;
  name: string;
  email: string;
}

export type ApplicantDetail = {
  id: number;
  created_at: Date;
  updated_at: Date;
  status: "open" | "on_hold" | "rejected" | "archived" | "moved" | "dropped";
  deleted: boolean;
  stage: "candidature" | "screening" | "on_site" | "offer" | "hire";
  sub_stage_id: number;
  on_hold_at: Date;
  on_hold_till: Date;
  rejected_at: Date;
  archived_at: Date;
  moved_at: Date;
  job_id: number;
  job_title: string;
  requisition_id: number;
  custom_fields: ApplicantCustomField;
  candidate: Candidate;
  followers: Array<Follower>;
}

export type EmployeeFieldPicklist = {
  id: number;
  value: string;
  position: number;
  pickable_type: string;
  pickable_id: number;
}

export type ApplicantField = {
  id: number;
  created_at: Date;
  updated_at: Date;
  applicant_form_id: number;
  name: string;
  label: string;
  field_type:
    | "text"
    | "dropdown"
    | "email"
    | "phone_number"
    | "checkbox"
    | "paragraph"
    | "date_time"
    | "number"
    | "url_set"
    | "url"
    | "attachment"
    | "radio"
    | "label";
  position: number;
  default: boolean;
  group_label: string;
  group_position: string;
  group_name: string;
  external_field: boolean;
  recruiter_field: boolean;
  vendor_field: boolean;
  required_in_vendor_form: boolean;
  required_in_external_form: boolean;
  required_in_recruiter_form: boolean;
  viewable_by: string;
  base_model: string;
  picklist_values: Array<EmployeeFieldPicklist>;
}

export default function jobPostings(client: Client) {
  return {
    /**
     * Get a list of all job postings
     *
     * @todo Implement
     * @method
     * @returns Array of job postings
     */
    async all(query: JobPostingQuery): Promise<JobPosting[]> {
      const res = await client.get("/job_postings");

      // Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }
      // Parse res.body
      return res.body;
    },

    /**
     * Get a job posting with given identifier
     *
     * @todo Implement
     * @method
     * @returns Job posting detail
     */
    async job(jobId: number): Promise<JobDetail> {
      const res = await client.get("/job_postings/" + jobId);

      // Check for error

      // Parse res.body
      return res.body;
    },

    /**
     * Add an applicant for a job posting
     *
     * @todo Implement
     * @param id {number} - Job posting identifier
     * @param applicant {ApplicantCreate} - Applicant profile to be created
     * @returns Detail of applicant freshly created
     */
    async createApplicant(jobId: number, applicant: ApplicantCreate): Promise<ApplicantDetail> {
      // TODO
      const res = await client.send({
        method: "POST",
        endpoint: "/job_postings/" + jobId + "/applicants",
        body: { employee: applicant }
      });

      // TODO: Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }

      return res.body;
    },

    /**
     * Get applicant fields for the job posting
     *
     * @todo Implement
     * @method
     * @returns List of applicant fields
     */
    async applicantFields(id: number): Promise<ApplicantField> {
      const res = await client.get("/job_postings/" + id);

      // TODO: Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }
      // Parse res.body
      return res.body;
    }
  };
}
