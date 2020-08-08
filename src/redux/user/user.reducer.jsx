import { userActionTypes } from '../actionType';
const INITIAL_STATE = {
  currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      console.log({ ...state, ...action.payload });
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
