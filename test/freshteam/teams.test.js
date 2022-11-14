import { Freshteam } from "../../src";
import nock from "nock";
import getTeams200 from "./responses/teams/get-teams-200";
import { Response } from "../../src/http-client";

const FT_DOMAIN = "example.freshteam.com";
const FT_API_KEY = "f_xkcd_222";

const mock = nock(`https://${FT_DOMAIN}`);

describe("Teams API", function () {
  const ft = new Freshteam(FT_DOMAIN, FT_API_KEY);

  describe("get team by id: /api/teams/:id", function () {
    it("should get team's information successfully", async function () {
      const id = 6000117751;
      mock.get(`/api/teams/${id}`).reply(200, getTeams200[0]);
      const teamDetail = await ft.teams.get(id);
      expect(teamDetail).toBeInstanceOf(Response);
      expect(teamDetail.json()).toBeInstanceOf(Freshteam.models.Team);
      expect(teamDetail.json().id).toEqual(id);
    });
  });

  describe("get teams: /api/teams", function () {
    it("should list all teams information successfully without queries", async function () {
      mock.get(`/api/teams`).reply(200, getTeams200);
      const teamList = await ft.teams.list();
      expect(teamList).toBeInstanceOf(Response);
      expect(teamList.json()).toBeInstanceOf(Array);
      for (const e of teamList.json()) {
        expect(e).toBeInstanceOf(Freshteam.models.Team);
      }
    });
  });
});
