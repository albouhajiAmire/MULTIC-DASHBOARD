import * as types from "../actions/actionType";
const initialstate = {
  usersS: [],
  cvUser:[],
  subscribe:[],
  contacts:[],
  user: {},
  loading: true,
};
const usersReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        usersS: action.payload,
        loading: false,
      };
    case types.DELETE_USERS:
      const newArr = state.usersS.filter(
        (user) => user._id !== action.payload.id
      );
      return {
        ...state,
        usersS: newArr,
        loading: false,
      };
      // ----------------SUBSCRIBE-----------------
      case types.GET_SUBSCRIBE_USERS:
        return {
          ...state,
          subscribe: action.payload,
          loading: false,
        };
      case types.DELETE_SUBSCRIB_USERS:
        const newArrSubscribe = state.usersS.filter(
          (user) => user._id !== action.payload.id
        );
        return {
          ...state,
          subscribe: newArrSubscribe,
          loading: false,
        };
      // ----------------CV USERS--------------------------
      case types.GET_CV_USERS:
        return {
          ...state,
          cvUser: action.payload,
          loading: false,
        };
      case types.DELETE_CV__USERS:
        const newArrCv = state.cvUser.filter(
          (user) => user._id !== action.payload.id
        );
        return {
          ...state,
          cvUser: newArrCv,
          loading: false,
        };
        // ---------------CONTACT USERS--------------------
        case types.GET_CONTACT_USERS:
          return {
            ...state,
            contacts: action.payload,
            loading: false,
          };
        case types.DELETE_CONTACT_USERS:
          const newArrContact = state.contacts.filter(
            (user) => user._id !== action.payload.id
          );
          return {
            ...state,
            usersS: newArrContact,
            loading: false,
          };
    default:
      return state;
  }
};
export default usersReducers;
