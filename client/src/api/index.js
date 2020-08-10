const API_ROOT_PATH = "/api";
const DATA_API_PATH = "/data";
const USERS_API_PATH = "/users";

const SUBMIT_DATA_API = `${API_ROOT_PATH}${DATA_API_PATH}/submit_data`;
const EXPORT_DATA_API = `${API_ROOT_PATH}${DATA_API_PATH}/export_data`;
const LIST_USERS_API = `${API_ROOT_PATH}${USERS_API_PATH}/listUsers`;

module.exports = {
  SUBMIT_DATA_API,
  EXPORT_DATA_API,
  LIST_USERS_API,
};
