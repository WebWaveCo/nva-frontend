import config from "./index";

async function login(user) {
  const response = await fetch(
    `${config.apiUrl}/v1/authentication?include_auth_token=1`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
  );
  const data = await response.json();
  return data;
}

async function logout() {
  const response = await fetch(`${config.apiUrl}/v1/authentication`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
  });
  const data = await response.json();
  return data;
}

async function createUser(user) {
  const response = await fetch(`${config.apiUrl}/v1/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}

async function fetchUser() {
  const response = await fetch(`${config.apiUrl}/v1/accounts/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
  });
  const data = await response.json();
  return data;
}

async function updateUser(userInformation) {
  const response = await fetch(`${config.apiUrl}/v1/accounts/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
    body: JSON.stringify(userInformation),
  });
  const data = await response.json();
  return data;
}

export default {
  login,
  logout,
  createUser,
  fetchUser,
  updateUser,
};
