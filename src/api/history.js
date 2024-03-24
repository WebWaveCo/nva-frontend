import config from "./index";

async function fetchHistory() {
  const response = await fetch(`${config.apiUrl}/v1/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
  });
  const data = await response.json();
  return data;
}

export default {
  fetchHistory,
};
