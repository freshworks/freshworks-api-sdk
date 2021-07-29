import { Client, Nullable } from "../http-client";

export interface TimeOff {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  user_id?: number;
  start_date: Date;
  end_date: Date;
  status?: "pending" | "approved" | "declined" | "cancelled";
  leave_units?: number;
  optional_leave_units?: number;
  leave_type_id: number;
  status_comments?: string;
  approved_by_id?: number;
  applied_by_id?: number;
  cancelled_by_id?: number;
  rejected_by_id?: number;
  comments: string;
  rejected_at?: string;
  cancelled_at?: string;
  optional_leave_days?: Date[];
  notify_to?: string[];
  add_to_calendar?: boolean;
  auto_decline_events?: boolean;
}

export interface TimeOffUpdate {
  comments: string;
}

export interface TimeOffType {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted: boolean;
  name: string;
  description: string;
  applicable_for: "male" | "female" | "all";
  default: boolean;
  auto_approve: boolean;
  auto_approve_after: number;
  auto_approve_limit: number;
  marital_status: "single" | "married" | "all";
}

export default function timeOffs(client: Client) {
  return {
    /**
     * Get a list of all timeoff requests of users in the account
     *
     * @todo
     * @method
     * @returns Array of time off requests
     */
    async all(): Promise<Nullable<TimeOff[]>> {
      const res = await client.get<TimeOff[]>("/time_offs");

      // Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }
      // Parse res.body
      return res.body;
    },

    /**
     * Applies time off request for logged in user
     *
     * @todo
     * @param timeOff {TimeOff} - A time off request data
     * @returns Time off freshly created
     */
    async create(timeOff: TimeOff): Promise<Nullable<TimeOff>> {
      // TODO
      const res = await client.request<TimeOff>({
        method: "POST",
        endpoint: "/time_offs",
        body: timeOff
      });

      // TODO: Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }

      return res.body;
    },

    /**
     * Get timeoff request with the given identifier
     *
     * @todo
     * @method
     * @param id {number} - Timeoff request identifier
     * @returns Time off request details
     */
    async get(id: number): Promise<Nullable<TimeOff>> {
      const res = await client.get<TimeOff>("/time_offs/" + id);

      // Check for error

      // Parse res.body
      return res.body;
    },

    /**
     * Cancel a timeoff request
     *
     * @param id {number} - Timeoff request identifier
     */
    async cancel(id: number): Promise<null> {
      const res = await client.request<null>({
        method: "PUT",
        endpoint: "/time_offs/" + id + "/cancel"
      });
      // Check for error

      // Parse res.body
      return res.body;
    },

    /**
     * Approve a timeoff request
     *
     * @param id {number} - Timeoff request identifier
     * @param timeOff {TimeOffUpdate} - Timeoff request notes
     */
    async approve(id: number, timeOff: TimeOffUpdate): Promise<null> {
      const res = await client.request<null>({
        method: "PUT",
        endpoint: "/time_offs/" + id + "/approve",
        body: { leave_request: timeOff } // Non-standard description
      });
      // Check for error

      // Parse res.body
      return res.body;
    },

    /**
     * Reject a timeoff request
     *
     * @param id {number} - Timeoff request identifier
     * @param timeOff {TimeOffUpdate} - Timeoff request notes
     */
    async reject(id: number, timeOff: TimeOffUpdate): Promise<null> {
      const res = await client.request<null>({
        method: "PUT",
        endpoint: "/time_offs/" + id + "/reject",
        body: { leave_request: timeOff } // Non-standard description
      });
      // Check for error

      // Parse res.body
      return res.body;
    },

    /**
     * Get a list of all timeoff types
     *
     * @todo
     * @method
     * @returns Array of time off types
     */
    async types(): Promise<Nullable<TimeOffType[]>> {
      const res = await client.get<TimeOffType[]>("/time_off_types");

      // Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }
      // Parse res.body
      return res.body;
    },

    /**
     * Get a timeoff type with the given identifier
     *
     * @todo
     * @method
     * @param id {number} - Timeoff type identifier
     * @returns The time off type detail
     */
    async type(typeId: number): Promise<Nullable<TimeOffType>> {
      const res = await client.get<TimeOffType>("/time_off_types" + typeId);

      // Check for error
      if (res.error instanceof Error) {
        // Error occurred
        throw res.error;
      }
      // Parse res.body
      return res.body;
    }
  };
}
