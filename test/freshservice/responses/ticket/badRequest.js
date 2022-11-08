export default {
  description: "Validation failed",
  errors: [
    {
      field: "include",
      message:
        "It should be one of these values: 'tags, conversations, requester, stats, problem, assets, change, related_tickets, requested_for, department, feedback'",
      code: "invalid_value"
    }
  ]
};
