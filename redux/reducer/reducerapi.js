import * as types from '../action/types'

const initialState = {
  isLoading: false,
  isLoad: false,
  isError: false,
  createUserdata: [],
  loginuserData:[],
  sendOTPdata:[],
  veryfyOTPdata:[],
  passwordUpdateData:[]
};

export default function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case types.CREATE_USER_REQUEST: {
      return { ...state, isLoading: true, isError: false ,createUserdata:payload };
    }

    case types.CREATE_USER_SUCCESS: {
      return { ...state, isLoading: true, isError: false ,createUserdata:payload };
    }

    case types.CREATE_USER_FAILED: {
      return { ...state, isLoading: true, isError: false ,createUserdata:payload };
    }



    case types.LOGIN_USER_REQUEST: {
      return { ...state, isLoading: true, isError: false ,loginuserData:payload };
    }

    case types.LOGIN_USER_SUCCESS: {
      return { ...state, isLoading: true, isError: false ,loginuserData:payload };
    }

    case types.LOGIN_USER_FAILED: {
      return { ...state, isLoading: true, isError: false ,loginuserData:payload };
    }



    case types.SEND_OTP_REQUEST: {
      return { ...state, isLoading: true, isError: false ,sendOTPdata:payload };
    }

    case types.SEND_OTP_SUCCESS: {
      return { ...state, isLoading: true, isError: false ,sendOTPdata:payload };
    }

    case types.SEND_OTP_FAILED: {
      return { ...state, isLoading: true, isError: false ,sendOTPdata:payload };
    }


    case types.VERYFY_OTP_REQUEST: {
      return { ...state, isLoading: true, isError: false ,veryfyOTPdata:payload };
    }

    case types.VERYFY_OTP_SUCCESS: {
      return { ...state, isLoading: true, isError: false ,veryfyOTPdata:payload };
    }

    case types.VERYFY_OTP_FAILED: {
      return { ...state, isLoading: true, isError: false ,veryfyOTPdata:payload };
    }


    case types.PASSWORD_UPDATE_REQUEST: {
      return { ...state, isLoading: true, isError: false ,passwordUpdateData:payload };
    }

    case types.PASSWORD_UPDATE_SUCCESS: {
      return { ...state, isLoading: true, isError: false ,passwordUpdateData:payload };
    }

    case types.PASSWORD_UPDATE_FAILED: {
      return { ...state, isLoading: true, isError: false ,passwordUpdateData:payload };
    }


    default: {
      return state;
    }
  }
}
