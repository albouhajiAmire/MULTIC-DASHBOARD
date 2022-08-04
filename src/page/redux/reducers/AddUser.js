import { ADD_USER } from "../../constans/addUser";

const INITIAL_STATE = {
  add_users: [], 
};
const userAddReducer = (state = INITIAL_STATE, action) => {
  console.log('userAddReducer',action.payload)
  switch (action.type) {
    case ADD_USER:
      console.error("ADD_USER ERROR",action.payload);
      return {
        ...state,
        add_users: action.payload,
      };      
    default:
      return state;
  }
};

export default userAddReducer;