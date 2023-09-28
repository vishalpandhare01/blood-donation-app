import * as types from '../action/types'

const initialState = {
  isLoading: false,
  isLoad: false,
  isError: false,
  createUserdata: [],
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

    default: {
      return state;
    }
  }
}
