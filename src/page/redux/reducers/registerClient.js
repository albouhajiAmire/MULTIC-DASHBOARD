import { COUNT_USERS, GET_ALL_REGISTER } from "../../constans/registerClient";

const INITIAL_STATE = {
  get_all_register: [],
  count: 0,
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_REGISTER:
      return {
        ...state,
        get_all_register: action.payload,
      };
    case COUNT_USERS:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default registerReducer;
