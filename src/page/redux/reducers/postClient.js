import { GET_ALL_POST_CLIENT,DELETE_CLIENT_CV__USERS,SIGNLE_POST_CLIENT } from "../../constans/postClient";

const INITIAL_STATE = {
    get_all_post_client : [],
    cvUserPost : {}
}

const postClientReducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload)
    switch (action.type) {
      case GET_ALL_POST_CLIENT:
        // console.error(action.payload);
        return {
            get_all_post_client: action.payload,
        };
        case DELETE_CLIENT_CV__USERS:
          const newArrCv = state.get_all_post_client.filter( 
            (user) => user._id !== action.payload.id
          );
          return {
            ...state,
            get_all_post_client: newArrCv,
          };
          case SIGNLE_POST_CLIENT:
            return {
              ...state,
              cvUserPost: action.payload[0],
            };
      default:
        return state;
    }
  };
  export default postClientReducer;