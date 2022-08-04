import axios from "axios";
import { COUNT_USERS, GET_ALL_REGISTER } from "../../constans/registerClient";

const get_all_Register = (token) => {
  return function (dispatch) {
    axios
      .get("http://localhost:3002/v1/api/user/list", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        // console.log("respddddd", resp);
        if (!resp.data.err) {
          //  console.log(resp.data.msg);
          dispatch({
            type: GET_ALL_REGISTER,
            payload: resp.data.msg,
          });
        } else {
          console.log("get_all_Register", resp.data.msg);
        }
      })
      .catch((error) => console.log("get_all_Register_error", error));
  };
};
const count_Users = (token, filter) => {
  // console.log(filter);
  return function (dispatch) {
    axios
      .get(`http://localhost:3002/v1/api/user/count`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: filter,
      })
      .then((resp) => {
        // console.log("count_Users", resp);
        if (!resp.data.err) {
          dispatch({
            type: COUNT_USERS,
            payload: resp.data.msg,
          });
        } else {
          console.log("count_Users", resp.data.msg);
        }
      })
      .catch((error) => console.log("count_Users_error", error));
  };
};
export { get_all_Register, count_Users };
