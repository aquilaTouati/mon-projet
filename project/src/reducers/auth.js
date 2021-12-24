import * as constants from "../constants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
//if our action type is equal to auth
    case constants.AUTH:
//storing action.data in the localstorage
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case constants.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;