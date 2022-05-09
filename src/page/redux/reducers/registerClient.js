import { GET_ALL_REGISTER } from "../../constans/registerClient";

const INITIAL_STATE = {
    get_all_register : []
}

const registerReducer = (state = INITIAL_STATE, action) => {
    console.log('REEEEEEEEEE',action.payload)
    switch (action.type) {
      case GET_ALL_REGISTER:
        console.error("REGISSSSSSSSSSTR",action.payload);
        return {
          get_all_register: action.payload,
        };
      default:
        return state;
    }
  };
  export default registerReducer;