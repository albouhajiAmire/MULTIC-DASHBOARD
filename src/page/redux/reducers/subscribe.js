import { DELETE_SUBSCRIBE, GET_ALl_SUBSCRIBE } from "../../constans/subscribe";
const INITIAL_STATE = {
  all_subscribe: [],
  // sub : []
};


const subscribeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALl_SUBSCRIBE:
      // console.error(action.payload);
      return {
        // ...state,
        all_subscribe: action.payload,
      };
    case DELETE_SUBSCRIBE:
      const id = action.payload;
      // console.error(id);
      // console.log(state.all_subscribe);
      const index = state.all_subscribe.findIndex(s => s._id === id);
      // console.log(index);
      if (index >= 0) {
        state.all_subscribe.splice(index, 1);
      }
      // console.log(state.all_subscribe);
      // or :
      //  console.log(state.all_subscribe);
      //          const newSubsArr = state.all_subscribe.map(s => {if (s._id !== id) return s});
      // console.log(newSubsArr);
      return {
        // ...state,
        // all_subscribe: action.payload,
        all_subscribe: state.all_subscribe,
        // or :
        // all_subscribe: newSubsArr
      };
    default:
      return state;
  }
};

export default subscribeReducer;
