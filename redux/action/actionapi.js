import axios from "axios";
import {BASE_URL} from '../../core/baseurl'
import {EndPoints} from '../../core/endpoint'

import {
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  SEND_OTP_FAILED,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  VERYFY_OTP_REQUEST,
  VERYFY_OTP_SUCCESS,
  VERYFY_OTP_FAILED,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED,
  SERVER_REQUEST,
  SERVER_SUCCESS,
  SERVER_FAILED,
 
} from "./types";
import { Alert } from "react-native";

export  function serverStart(data) {
  return async (dispatch) => {
    dispatch({ type: SERVER_REQUEST });
    const option = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.get(
        BASE_URL + EndPoints.server,
        option
      );
      // configAPIcall()
      return dispatch({
        type: SERVER_SUCCESS,
        payload: res,
      });
    } catch (err) {
      Alert.alert('ERROR!!' ,err.response.data.message)
      return dispatch({
        type: SERVER_FAILED,
        payload: err.response.data.message,
      });
    }
  };
}

export  function createuser(data) {
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
        payload: res,
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

export  function loginuser(data) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST });
    const option = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        BASE_URL + EndPoints.userlogin,
        data,
        option
      );
      console.log( 'res',res.status);
      return dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res,
      });
    } catch (err) {
      Alert.alert('ERROR!!' ,err.response.data.message)
      return dispatch({
        type: LOGIN_USER_FAILED,
        payload: err.response.data.message,
      });
    }
  };
}

export  function sendOTPapi(data) {
  return async (dispatch) => {
    dispatch({ type: SEND_OTP_REQUEST });
    const option = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.put(
        BASE_URL + EndPoints.sendOTP,
        data,
        option
      );
      console.log('res',res.status)
      return dispatch({
        type: SEND_OTP_SUCCESS,
        payload: res,
      });
    } catch (err) {
      Alert.alert('ERROR!!' ,err.response.data.message)
      return dispatch({
        type: SEND_OTP_FAILED,
        payload: err.response.data.message,
      });
    }
  };
}

export  function veryfyOTPapi(data) {
  return async (dispatch) => {
    dispatch({ type: VERYFY_OTP_REQUEST });
    const option = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.put(
        BASE_URL + EndPoints.veryfyOTP,
        data,
        option
      );
      return dispatch({
        type: VERYFY_OTP_SUCCESS,
        payload: res,
      });
    } catch (err) {
      Alert.alert('ERROR!!' ,err.response.data.message)
      return dispatch({
        type: VERYFY_OTP_FAILED,
        payload: err.response.data.message,
      });
    }
  };
}

export  function passwordUpdateapi(data) {
  return async (dispatch) => {
    dispatch({ type: PASSWORD_UPDATE_REQUEST });
    const option = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.put(
        BASE_URL + EndPoints.updatePassword,
        data,
        option
      );
      return dispatch({
        type: PASSWORD_UPDATE_SUCCESS,
        payload: res,
      });
    } catch (err) {
      Alert.alert('ERROR!!' ,err.response.data.message)
      return dispatch({
        type: PASSWORD_UPDATE_FAILED,
        payload: err.response.data.message,
      });
    }
  };
}



