import axios from "axios";
import {BASE_URL} from '../../core/baseurl'
import {EndPoints} from '../../core/endpoint'

import {
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
} from "./types";
import { Alert } from "react-native";

export default function createuser(data) {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });
    const option = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        BASE_URL + EndPoints.userRegister,
        data,
        option
      );
      console.log(res.status);
      return dispatch({
        type: CREATE_USER_SUCCESS,
        payload: res.status,
      });
    } catch (err) {
      Alert.alert('ERROR!!' ,err.response.data.message)
      return dispatch({
        type: CREATE_USER_FAILED,
        payload: err.response.data.message,
      });
    }
  };
}
