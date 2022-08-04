import * as types from "../actions/actionType";
const initialstate = {
  usersS: [],
};
const usersReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        usersS: action.payload,
        loading: false,
      };
    // case types.DELETE_USERS:
    //   const newArr = state.usersS.filter(
    //     (user) => user._id !== action.payload.id
    //   );
    //   return {
    //     ...state,
    //     usersS: newArr,
    //     loading: false,
    //   };
    default:
      return state;
  }
};
export default usersReducers;
