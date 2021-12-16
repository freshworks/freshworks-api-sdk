module.exports = {
  lang: "en-US",
  title: "Freshworks API SDK",
  description: "User manual and documentation for Freshworks API SDK for Node.js",

  base: "/api-sdk/",
  dest: "docs/dist/api-sdk",
  public: "docs/public",

  head: [["link", { rel: "icon", href: "/api-sdk/freshworks-Mark.svg" }]],

  themeConfig: {
    logo: "/freshworks-Mark.svg",
    contributors: false,
    navbar: [
      {
        text: "Get started",
        link: "/get-started"
      },
      {
        text: "Freshteam",
        children: [
          { text: "Overview", link: "/freshteam/" },
          {
            text: "Features",
            children: [
              {
                text: "Applicants",
                link: "/freshteam/applicants"
              },
              {
                text: "Branches",
                link: "/freshteam/branches"
              },
              {
                text: "Business units",
                link: "/freshteam/business-units"
              },
              {
                text: "Candidate sources",
                link: "/freshteam/candidate-sources"
              },
              {
                text: "Departments",
                link: "/freshteam/departments"
              },
              {
                text: "Employees",
                link: "/freshteam/employees"
              },
              {
                text: "Job postings",
                link: "/freshteam/job-postings"
              },
              {
                text: "Levels",
                link: "/freshteam/levels"
              },
              {
                text: "New hires",
                link: "/freshteam/new-hires"
              },
              {
                text: "Roles",
                link: "/freshteam/roles"
              },
              {
                text: "Sub-departments",
                link: "/freshteam/sub-departments"
              },
              {
                text: "Teams",
                link: "/freshteam/teams"
              },
              {
                text: "Time-offs",
                link: "/freshteam/time-offs"
              },
              {
                text: "User functions",
                link: "/freshteam/user-functions"
              }
            ]
          }
        ]
      },
      {
        text: "Reference",
        children: [
          { text: "API reference", link: "/api/" },
          { text: "Classes", children: [{ text: "Freshteam", link: "/api/classes/freshteam.Freshteam.html" }] }
        ]
      }
    ],
    sidebar: {
      "/freshteam": [
        "/freshteam/README.md",
        {
          text: "Features",
          children: [
            "/freshteam/applicants.md",
            "/freshteam/branches.md",
            "/freshteam/business-units.md",
            "/freshteam/candidate-sources.md",
            "/freshteam/departments.md",
            "/freshteam/employees.md",
            "/freshteam/job-postings.md",
            "/freshteam/levels.md",
            "/freshteam/new-hires.md",
            "/freshteam/roles.md",
            "/freshteam/sub-departments.md",
            "/freshteam/teams.md",
            "/freshteam/time-offs.md",
            "/freshteam/user-functions.md"
          ]
        }
      ]
    }
  }
};
