import { Freshteam } from "../../src";
import nock from "nock";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Applicants API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);
  const jobId = 33777872;

  describe("get applicants with pagination: /api/applicants", function () {
    it("should support `page` query param", async function () {
      const page = 2;
      mock.get(`/api/job_postings/${jobId}/applicants?page=${page}`).reply(200, []);
      const applicantsList = await ft.applicants.list(jobId, { page });
      expect(applicantsList).toBeInstanceOf(Array);
    });

    it("should support `sort` query param", async function () {
      const sort = "title";
      mock.get(`/api/job_postings/${jobId}/applicants?sort=${sort}`).reply(200, []);
      const applicantsList = await ft.applicants.list(jobId, { sort });
      expect(applicantsList).toBeInstanceOf(Array);
    });

    it("should support `sort_type` query param", async function () {
      const sort_type = "desc";
      mock.get(`/api/job_postings/${jobId}/applicants?sort_type=${sort_type}`).reply(200, []);
      const applicantsList = await ft.applicants.list(jobId, { sort_type });
      expect(applicantsList).toBeInstanceOf(Array);
    });

    it("should support all pagination query params when supplied together", async function () {
      const page = 2;
      const sort = "title";
      const sort_type = "desc";
      mock.get(`/api/job_postings/${jobId}/applicants?sort=${sort}&sort_type=${sort_type}&page=${page}`).reply(200, []);
      const applicantsList = await ft.applicants.list(jobId, { page, sort, sort_type });
      expect(applicantsList).toBeInstanceOf(Array);
    });
  });
});
