import config from "./index";

async function fetchTeam() {
  const response = await fetch(`${config.apiUrl}/v1/accounts/team`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
  });
  const data = await response.json();
  return data;
}

async function updateTeamMember(userTeamInformation) {
  const response = await fetch(`${config.apiUrl}/v1/accounts/team`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
    body: JSON.stringify(userTeamInformation),
  });
  const data = await response.json();
  return data;
}

export default {
  fetchTeam,
  updateTeamMember,
};
