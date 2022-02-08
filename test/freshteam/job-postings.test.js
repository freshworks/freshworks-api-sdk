import { Freshteam } from "../../src";
import nock from "nock";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("JobPostings API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get jobPostings with pagination: /api/job_postings", function () {
    it("should support `page` query param", async function () {
      const page = 2;
      mock.get(`/api/job_postings?page=${page}`).reply(200, []);
      const jobList = await ft.jobPostings.list({ page });
      expect(jobList).toBeInstanceOf(Array);
    });

    it("should support `sort` query param", async function () {
      const sort = "title";
      mock.get(`/api/job_postings?sort=${sort}`).reply(200, []);
      const jobList = await ft.jobPostings.list({ sort });
      expect(jobList).toBeInstanceOf(Array);
    });

    it("should support `sort_type` query param", async function () {
      const sort_type = "desc";
      mock.get(`/api/job_postings?sort_type=${sort_type}`).reply(200, []);
      const jobList = await ft.jobPostings.list({ sort_type });
      expect(jobList).toBeInstanceOf(Array);
    });

    it("should support all pagination query params when supplied together", async function () {
      const page = 2;
      const sort = "title";
      const sort_type = "desc";
      mock.get(`/api/job_postings?sort=${sort}&sort_type=${sort_type}&page=${page}`).reply(200, []);
      const jobList = await ft.jobPostings.list({ page, sort, sort_type });
      expect(jobList).toBeInstanceOf(Array);
    });
  });
});
