// Nav constants

const NAV_LINKS = {
  HOME: "/",
  CREATE_SECRET: "/create-secret",
  VIEW_SECRET: "/view-secret",
};

const API_URL = process.env.REACT_APP_API_URI;

const API_ENDPOINTS = {
  CREATE_SECRET: API_URL + "secret/",
  GET_SECRET: API_URL + "secret/",
};

export { API_ENDPOINTS, NAV_LINKS };
