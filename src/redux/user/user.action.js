import { userActionTypes } from '../actionType';

export const setCurrentUser = (user) => ({ type: userActionTypes.SET_CURRENT_USER, payload: user });
