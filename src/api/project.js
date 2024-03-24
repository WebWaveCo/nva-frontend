import config from "./index";

async function createProject(project) {
  const response = await fetch(`${config.apiUrl}/v1/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
    body: JSON.stringify(project),
  });
  const data = await response.json();
  return data;
}

async function fetchProject(projectId) {
  const response = await fetch(
    `${config.apiUrl}/v1/project?project_id=${projectId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authentication-Token": config.getToken(),
      },
    },
  );
  const data = await response.json();
  return data;
}

async function createCustomer(customer) {
  const response = await fetch(`${config.apiUrl}/v1/project/customer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authentication-Token": config.getToken(),
    },
    body: JSON.stringify(customer),
  });
  const data = await response.json();
  return data;
}

async function fetchCustomer(customerId) {
  const response = await fetch(
    `${config.apiUrl}/v1/project/customer?project_id=${customerId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authentication-Token": config.getToken(),
      },
    },
  );
  const data = await response.json();
  return data;
}

export default {
  createProject,
  fetchProject,
  createCustomer,
  fetchCustomer,
};
