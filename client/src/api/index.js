const API_ROOT_PATH = "/api";
const DATA_API_PATH = "/data";
const USERS_API_PATH = "/users";
const INFO_API_PATH = "/info";

const DELETE_USER = `${API_ROOT_PATH}${USERS_API_PATH}/deleteUser`;
const LIST_USERS_API = `${API_ROOT_PATH}${USERS_API_PATH}/listUsers`;
const SUBMIT_DATA_API = `${API_ROOT_PATH}${DATA_API_PATH}/submit_data`;
const EXPORT_DATA_API = `${API_ROOT_PATH}${DATA_API_PATH}/export_data`;
const UPDATE_USER_STATUS = `${API_ROOT_PATH}${USERS_API_PATH}/changeStatus`;
const DEADLINE_SUBMIT_API = `${API_ROOT_PATH}${INFO_API_PATH}/setDeadline`;

module.exports = {
  SUBMIT_DATA_API,
  EXPORT_DATA_API,
  LIST_USERS_API,
  UPDATE_USER_STATUS,
  DELETE_USER,
  DEADLINE_SUBMIT_API,
};
