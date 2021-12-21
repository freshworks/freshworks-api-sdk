import { Freshteam } from "../../src";
import nock from "nock";
import getLevels200 from "./responses/levels/get-levels-200";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Levels API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get level by id: /api/levels/:id", function () {
    it("should get level's information successfully", async function () {
      const id = 6000116873;
      mock.get(`/api/levels/${id}`).reply(200, getLevels200[0]);
      const levelDetail = await ft.levels.get(id);
      expect(levelDetail).toBeInstanceOf(Freshteam.models.Level);
      expect(levelDetail.id).toEqual(id);
    });
  });

  describe("get levels: /api/levels", function () {
    it("should list all levels information successfully without queries", async function () {
      mock.get(`/api/levels`).reply(200, getLevels200);
      const levelsList = await ft.levels.list();
      expect(levelsList).toBeInstanceOf(Array);
      for (const e of levelsList) {
        expect(e).toBeInstanceOf(Freshteam.models.Level);
      }
    });
  });
});
