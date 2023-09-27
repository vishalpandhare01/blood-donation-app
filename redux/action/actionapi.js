import { CREATE_USER } from "./types";

export const create_user = (userData) => {
  return {
    type: CREATE_USER,
    payload: userData,
  };
};
