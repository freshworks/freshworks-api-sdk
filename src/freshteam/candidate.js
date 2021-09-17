import FreshteamApiClient from "./../gen/freshteam/ApiClient";
import CandidateApi from "./../gen/freshteam/api/CandidateApi";

const candidateApiInstance = new CandidateApi.CandidateApi();

const freshteam = {
  candidate: {
    getCandidate: function (id, options) {
      return candidateApiInstance.getCandidate(id, options);
    },
    updateCandidate: function (id, candidate) {
      return candidateApiInstance.updateCandidate(id, candidate);
    }
  }
};

export default class Freshteam {
  constructor(options) {
    const defaultClient = FreshteamApiClient.instance;

    defaultClient.setBasePath(`https://${options.domain}/api/`);
    const basicAuth = defaultClient.authentications["basicAuth"];

    if (options.api_key) {
      basicAuth.username = options.api_key;
      basicAuth.password = "X";
    }

    return freshteam;
  }
}
