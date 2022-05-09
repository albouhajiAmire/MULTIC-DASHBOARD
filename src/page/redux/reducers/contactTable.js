import { COUNT_Nav, COUNT_PAG, DELETE_CONTACT, GET_ALL_CONTACT } from "../../constans/contactTable";
import { SIGNLE_POST_CLIENT } from "../../constans/postClient";

const INITIAL_STATE = {
  all_contacts: [],
  count_pag: 0,
  count_nav: 0
};
const contactsReducer = (state = INITIAL_STATE, action) => {
  console.log('gggggggg',action.payload)
  switch (action.type) {
    case GET_ALL_CONTACT:
      // console.error(action.payload);
      return {
        ...state,
        all_contacts: action.payload,
      };
    case DELETE_CONTACT:
      const id = action.payload;
      // console.error(id);
      // console.log(state.all_contacts);
      const index = state.all_contacts.findIndex((s) => s._id === id);
      // console.log(index);
      if (index >= 0) {
        state.all_contacts.splice(index, 1);
        state.count_pag -= 1; 
      }
      // console.log(state.all_contacts);
      return {
        ...state,
        all_contacts: state.all_contacts,
      };
      case COUNT_PAG:
        return {
          ...state,
          count_pag: action.payload,
        };
        case COUNT_Nav:
          return {
            ...state,
            count_nav: action.payload,
          };
      
    default:
      return state;
  }
};

export default contactsReducer;
