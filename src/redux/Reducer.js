import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  GET_SINGLE_USER,
  UPDATE_USER,
  LOG_USER,
} from "./Actiontypes";

const initialstate = {
  users: [],
  user: {},
  loading: true,
};

export const userReducers = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case DELETE_USER:
    case ADD_USER:
    case LOG_USER:
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };

    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
